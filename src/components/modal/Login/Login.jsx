import { useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useLoginMutation } from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import { settings } from "../../../api";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/features/auth/authSlice";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import {
  setShowBanner,
  setShowForgetModal,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/stateSlice";
import useContextState from "../../../hooks/useContextState";
import { useNavigate } from "react-router-dom";
import { HiArrowNarrowDown } from "react-icons/hi";
import { GrAndroid } from "react-icons/gr";

const Login = () => {
  const closePopupForForever = localStorage.getItem("closePopupForForever");
  const navigate = useNavigate();
  const [passwordType, setPasswordType] = useState(true);
  const { logo } = useContextState();
  const dispatch = useDispatch();
  const [handleLogin] = useLoginMutation();
  const loginRef = useRef();
  useCloseModalClickOutside(loginRef, () => {
    dispatch(setShowLoginModal(false));
  });
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({ username, password }) => {
    const loginData = {
      username: username,
      password: password,
      b2c: settings.b2c,
      apk: closePopupForForever ? true : false,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const memberId = result?.result?.memberId;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token }));
      localStorage.setItem("memberId", memberId);
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (result?.result?.changePassword) {
        localStorage.setItem("changePassword", true);
        navigate("/change-password");
      }
      if (!result?.result?.changePassword && token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  /* handle login demo user */
  const loginWithDemo = async () => {
    /* Random token generator */
    /* Encrypted the post data */
    const loginData = {
      username: "demo",
      password: "",
      b2c: settings.b2c,
      apk: closePopupForForever ? true : false,
    };
    const result = await handleLogin(loginData).unwrap();

    if (result.success) {
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("token", token);

      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        dispatch(setShowLoginModal(false));
        toast.success("Login successful");
      }
    } else {
      toast.error(result?.error);
    }
  };

  const handleDownload = (e) => {
    e.preventDefault();
    const fileUrl = settings.apk_link;
    const link = document.createElement("a");
    link.href = fileUrl;
    link.setAttribute("download", "site.apk");
    document.body.appendChild(link);
    link.click();
    link.parentNode.removeChild(link);
  };

  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh] items-center justify-center bg-bg_CasinoPopupBg"
    >
      <div
        ref={loginRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] rounded-[5px] bg-bg_Quaternary p-2 xs:p-5 rounded-md"
      >
        <div
          onClick={() => dispatch(setShowLoginModal(false))}
          className="transition-all mb-2 ease-in-out duration-200 hover:scale-105 absolute -top-3 -right-3"
        >
          <svg
            className="cursor-pointer z-50"
            height="24"
            width="24"
            fill="var(--color-quaternary)"
            aria-hidden="true"
            focusable="false"
            data-prefix="fad"
            data-icon="circle-xmark"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g className="fa-duotone-group">
              <path
                fill="currentColor"
                d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"
              ></path>
              <path
                fill="white"
                d="M209 175c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47z"
              ></path>
            </g>
          </svg>
        </div>
        <div className="auth-gradient logo w-full hidden lg:flex items-center justify-center mb-4 h-[70px]">
          <img
            alt="logo"
            loading="lazy"
            width="100"
            height="100"
            decoding="async"
            data-nimg="1"
            className="w-72 h-auto"
            src={logo}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex gap-10 items-start h-[95%] lg:h-auto w-full">
          <div className="hidden lg:w-[50%] rounded-lg overflow-hidden">
            <img src={logo} alt="Login Banner" />
          </div>
          <div
            title="mobileLogin"
            className="flex flex-col items-start gap-y-4 w-full"
          >
            <div className="auth-gradient logo w-full lg:hidden flex items-center justify-center">
              <img style={{ height: "45px" }} src={logo} alt="logo" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full gap-y-4 flex flex-col"
            >
              <div title="loginFormMonileUserIdInput" className="w-full">
                <div className="font-lato uppercase text-[10px] md:text-xs lg:text-sm ml-1">
                  Username/Mobile no.
                </div>
                <div className="flex w-full items-center py-3.5 bg-auth rounded-lg border">
                  <input
                    {...register("username", { required: true })}
                    id="mobile-no-input"
                    className="px-2 block w-full focus:outline-none w-full font-lato bg-auth text-text_Ternary pr-2 text-sm xs:text-md"
                    placeholder="Username/Mobile no."
                  />
                  <span className="h-fit"> </span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <div
                  title="passwordInput"
                  className="w-full font-lato uppercase"
                >
                  <div className="text-[10px] ml-1 md:text-xs lg:text-sm">
                    Password
                  </div>
                  <div className="flex w-full items-center py-2 px-2 bg-auth rounded-lg border">
                    <input
                      {...register("password", { required: true })}
                      id="password-input"
                      className="block w-full focus:outline-none w-full pr-2 rounded-none text-text_Ternary bg-auth text-sm xs:text-md"
                      placeholder="Password"
                      type={passwordType ? "password" : "text"}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => setPasswordType((prev) => !prev)}
                      className="min-h-[30px] flex items-center justify-center"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        width="24"
                        viewBox="0 0 512 512"
                      >
                        <title>Eye</title>
                        <path
                          d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 00-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 000-17.47C428.89 172.28 347.8 112 255.66 112z"
                          fill="none"
                          stroke="var(--color-primary)"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="32"
                        ></path>
                        <circle
                          cx="256"
                          cy="256"
                          r="80"
                          fill="none"
                          stroke="var(--color-primary)"
                          strokeMiterlimit="10"
                          strokeWidth="32"
                        ></circle>
                      </svg> */}
                      {passwordType ? (
                        <IoEyeOffOutline
                          color="var(--color-bg-primary)"
                          size={23}
                        />
                      ) : (
                        <IoEyeOutline
                          color="var(--color-bg-primary)"
                          size={23}
                        />
                      )}
                    </span>
                  </div>
                </div>
                {settings.registration && (
                  <div
                    onClick={() => {
                      dispatch(setShowLoginModal(false));
                      dispatch(setShowForgetModal(true));
                    }}
                    title="forgotPassword"
                    className="w-full text-start text-xs cursor-pointer underline text-text_Primary font-lato md:text-xs lg:text-sm"
                  >
                    Forgot Password
                  </div>
                )}
              </div>
              <div id="googleRecaptcha" className="hidden"></div>
              <div title="loginButton" className="w-full">
                <button
                  type="submit"
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-primary bg-bg_LoginButtonColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer"
                >
                  <span>Log In</span>
                </button>
                {settings.demoLogin && (
                  <button
                    onClick={loginWithDemo}
                    type="button"
                    className="inline-block mt-3 leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-primary bg-bg_LoginButtonColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer"
                  >
                    <span>Demo Login</span>
                  </button>
                )}
                {settings.apk_link && (
                  <button
                    onClick={handleDownload}
                    type="button"
                    className="inline-block mt-3 leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-primary bg-bg_LoginButtonColor shadow-lg rounded-md xs:text-[15px] px-5 py-2 flex items-center justify-center gap-x-2 font-lato-bold font-semibold text-base cursor-pointer"
                  >
                    <span className="flex items-center gap-2">
                      {" "}
                      <GrAndroid /> Download .apk <HiArrowNarrowDown />
                    </span>
                  </button>
                )}
              </div>
            </form>

            {settings.registration && (
              <div
                title="registerNowButton"
                className="w-full flex justify-center items-center text-xs md:text-sm lg:text-base"
              >
                <div>
                  New User?{" "}
                  <span
                    onClick={() => {
                      dispatch(setShowLoginModal(false));
                      dispatch(setShowRegisterModal(true));
                    }}
                    className="text-text_Primary cursor-pointer"
                  >
                    Create an account
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
