import { Fragment, useEffect, useRef, useState } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { useForm } from "react-hook-form";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "../../../redux/features/auth/authApi";
import { settings } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../redux/features/auth/authSlice";
import toast from "react-hot-toast";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import {
  setShowBanner,
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/stateSlice";
import useContextState from "../../../hooks/useContextState";
import useBalance from "../../../hooks/useBalance";
// import getOtpOnWhatsapp from "../../../utils/getOtpOnWhatsapp";
import useGetSocialLink from "../../../hooks/useGetSocialLink";
import assets from "../../../assets";

const Register = () => {
  const { token } = useSelector((state) => state.auth);
  const { socialLink } = useGetSocialLink();
  const referralCode = localStorage.getItem("referralCode");
  const { refetchBalance } = useBalance();
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const [handleRegister] = useRegisterMutation();
  const { register, handleSubmit } = useForm();
  const { logo } = useContextState();
  const [timer, setTimer] = useState(null);
  const registerRef = useRef();
  useCloseModalClickOutside(registerRef, () => {
    dispatch(setShowRegisterModal(false));
  });

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    const res = await getOTP({ mobile }).unwrap();
    if (res?.success) {
      setTimer(60);
      setOTP({
        orderId: res?.result?.orderId,
        otpMethod: "sms",
      });
      toast.success(res?.result?.message);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  const onSubmit = async (data) => {
    const registerData = {
      username: "",
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      mobile: mobile,
      otp: data?.otp,
      isOtpAvailable: settings.otp,
      referralCode: referralCode || data?.referralCode,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleRegister(registerData).unwrap();
    if (result.success) {
      if (window?.fbq) {
        window.fbq("track", "CompleteRegistration", {
          content_name: "User Signup",
          status: "success",
        });
      }
      localStorage.removeItem("referralCode");
      const token = result?.result?.token;
      const bonusToken = result?.result?.bonusToken;
      const user = result?.result?.loginName;
      const game = result?.result?.buttonValue?.game;
      const banner = result?.result?.banner;
      dispatch(setUser({ user, token }));
      localStorage.setItem("buttonValue", JSON.stringify(game));
      localStorage.setItem("bonusToken", bonusToken);
      if (banner) {
        localStorage.setItem("banner", banner);
        dispatch(setShowBanner(true));
      }
      if (token && user) {
        refetchBalance();
        dispatch(setShowRegisterModal(false));
        toast.success("Register successful");
      }
    } else {
      toast.error(result?.error?.description);
    }
  };

  // const handleGetOtpOnWhatsapp = async () => {
  //   await getOtpOnWhatsapp(mobile, setOTP);
  // };

  const openWhatsapp = () => {
    if (socialLink?.whatsapplink) {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
    } else {
      setTimer(null);
    }
  }, [timer]);
  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh] items-center justify-center bg-bg_CasinoPopupBg"
    >
      <div
        ref={registerRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] rounded-[5px] bg-bg_Quaternary p-2 xs:p-5 rounded-md"
      >
        <div
          onClick={() => dispatch(setShowRegisterModal(false))}
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
        <div className="auth-gradient logo w-full hidden lg:flex items-center justify-center mb-4 h-[100px]">
          <img
            alt="logo"
            width="100"
            height="100"
            className="w-72 h-auto"
            src={logo}
            style={{ color: "transparent" }}
          />
        </div>
        <div className="flex gap-6 items-start h-max w-full">
          <div className="hidden lg:w-[50%] w-full rounded-lg overflow-hidden">
            <img src={logo} alt="" />
          </div>
          <div
            title="register"
            className="flex flex-col items-start gap-y-4 w-full"
          >
            <div className="auth-gradient logo w-full lg:hidden flex items-center justify-center">
              <img style={{ height: "45px" }} src={logo} alt="" />
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="w-full gap-y-4 flex flex-col"
            >
              <div title="signUpForm" className="w-full">
                <div className="flex w-full items-center py-2 bg-auth rounded-lg border">
                  {/* <span
                    id="dropdown-phone-button"
                    className="flex-shrink-0 z-10 inline-flex items-center pl-2 pr-1 text-sm sm:text-md font-normal text-center"
                  >
                    +91
                  </span> */}
                  <input
                    maxLength={10}
                    onChange={(e) => handleMobileInputChange(e)}
                    id="mobile-no-input"
                    className="px-2 block w-full focus:outline-none w-full font-lato bg-auth rounded-none text-text_Ternary pr-2 text-sm xs:text-md"
                    placeholder="Phone Number"
                    type="number"
                    value={mobile}
                  />
                  <div className="w-max flex items-center gap-2">
                    {/* {settings.otpWhatsapp && (
                      <button
                        onClick={handleGetOtpOnWhatsapp}
                        disabled={mobile?.length < 10}
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center cursor-pointer"
                        type="button"
                      >
                        <span className=" ">Get OTP Whatsapp</span>
                        <span className="shimmer"></span>
                      </button>
                    )} */}
                    {timer ? (
                      <button
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center !cursor-text"
                        type="button"
                      >
                        <span className=" ">Retry in {timer}</span>
                        {/* <span className="shimmer"></span> */}
                      </button>
                    ) : (
                      <button
                        disabled={mobile?.length < 10}
                        onClick={handleOTP}
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato-bold h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-3 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 disabled:opacity-50 font-medium relative flex items-center justify-center cursor-pointer"
                        type="button"
                      >
                        <span className=" ">Get OTP Message</span>
                        <span className="shimmer"></span>
                      </button>
                    )}
                  </div>
                </div>
                <div
                  id="phoneNumberValidations"
                  className="flex w-full items-center justify-between mt-1 px-1"
                >
                  <span className="text-xs text-text_Primary"></span>
                  <span className="text-xs text-text_Primary">
                    {mobile.length}/10
                  </span>
                </div>
                <div className="flex w-full items-center border p-1 bg-auth rounded-lg mt-2">
                  <input
                    {...register("otp", { required: true })}
                    id="otpSignUp"
                    className="block w-full focus:outline-none w-full font-lato rounded-none py-1 text-text_Ternary px-2 text-sm xs:text-md bg-auth"
                    placeholder="OTP"
                    type="text"
                    maxLength={6}
                  />
                </div>
                <div
                  id="otpTimeCount"
                  className="flex w-full items-center justify-start mt-1 px-1"
                ></div>
                <div className="flex w-full items-center justify-between bg-auth rounded-lg p-1 border mt-4">
                  <div className="w-full h-full flex items-center justify-start pl-1">
                    <span className="mb-1 py-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16"
                        width="16"
                        fill="var(--color-bg-primary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                      </svg>
                    </span>
                    <span className="w-full relative h-full">
                      <input
                        autoComplete="off"
                        {...register("password", { required: true })}
                        className="block w-full focus:outline-none w-full h-full py-1 rounded-none text-text_Ternary px-2 text-sm xs:text-md font-lato bg-auth"
                        placeholder="Password"
                        type={passType ? "password" : "text"}
                      />
                    </span>
                  </div>
                  <span className="py-1">
                    <button
                      onClick={() => setPassType((prev) => !prev)}
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out pr-2 flex items-center justify-center cursor-pointer"
                      type="button"
                    >
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        width="22"
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
                      {passType ? (
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
                    </button>
                  </span>
                </div>
                <div className="flex w-full items-center justify-between bg-auth rounded-lg border p-1 mt-4">
                  <div className="w-full h-full flex items-center justify-start pl-1">
                    <span className="mb-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        x="0px"
                        y="0px"
                        height="16"
                        width="16"
                        fill="var(--color-bg-primary)"
                        viewBox="0 0 50 50"
                      >
                        <path d="M 25 3 C 18.363281 3 13 8.363281 13 15 L 13 20 L 9 20 C 7.300781 20 6 21.300781 6 23 L 6 47 C 6 48.699219 7.300781 50 9 50 L 41 50 C 42.699219 50 44 48.699219 44 47 L 44 23 C 44 21.300781 42.699219 20 41 20 L 37 20 L 37 15 C 37 8.363281 31.636719 3 25 3 Z M 25 5 C 30.566406 5 35 9.433594 35 15 L 35 20 L 15 20 L 15 15 C 15 9.433594 19.433594 5 25 5 Z M 25 30 C 26.699219 30 28 31.300781 28 33 C 28 33.898438 27.601563 34.6875 27 35.1875 L 27 38 C 27 39.101563 26.101563 40 25 40 C 23.898438 40 23 39.101563 23 38 L 23 35.1875 C 22.398438 34.6875 22 33.898438 22 33 C 22 31.300781 23.300781 30 25 30 Z"></path>
                      </svg>
                    </span>
                    <input
                      {...register("confirmPassword", { required: true })}
                      autoComplete="off"
                      id="confirmpasswordSignUp"
                      className="block w-full focus:outline-none w-full rounded-none text-text_Ternary px-2 py-1 text-sm xs:text-md font-lato bg-auth"
                      placeholder="Confirm Password"
                      type={confirmPassType ? "password" : "text"}
                    />
                  </div>
                  <span>
                    <button
                      onClick={() => setConfirmPassType((prev) => !prev)}
                      className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out pr-2 flex items-center justify-center cursor-pointer"
                      type="button"
                    >
                      {confirmPassType ? (
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
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="22"
                        width="22"
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
                    </button>
                  </span>
                </div>
                <div
                  id="passwordValidation"
                  className="flex w-full items-center justify-start mt-1 px-1"
                >
                  <span className="text-xs text-text_Danger font-lato"></span>
                </div>
                <div className="flex w-full items-center justify-between bg-auth rounded-lg border p-1 mt-4">
                  <div className="w-full h-full flex items-center justify-start pl-1">
                    <span className="mb-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="var(--color-bg-primary)"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <path d="M3 8v4.172a2 2 0 0 0 .586 1.414l5.71 5.71a2.41 2.41 0 0 0 3.408 0l3.592 -3.592a2.41 2.41 0 0 0 0 -3.408l-5.71 -5.71a2 2 0 0 0 -1.414 -.586h-4.172a2 2 0 0 0 -2 2z"></path>
                        <path d="M18 19l1.592 -1.592a4.82 4.82 0 0 0 0 -6.816l-4.592 -4.592"></path>
                        <path d="M7 10h-.01"></path>
                      </svg>
                    </span>
                    <input
                      readOnly={referralCode}
                      {...register("referralCode")}
                      className="block w-full focus:outline-none w-full rounded-none text-text_Ternary px-2 py-1 text-sm xs:text-md font-lato bg-auth"
                      placeholder="Enter referral code(Optional)"
                      type="text"
                      defaultValue={referralCode}
                    />
                  </div>
                </div>
                <div title="registerSubmitBtn" className="w-full mt-4">
                  <button
                    type="submit"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_Primary rounded-lg font-medium border text-[12px] xs:text-[15px] py-2 flex items-center justify-center gap-x-2 disabled:bg-bg_Quinary cursor-pointer"
                  >
                    <span className="font-lato-bold font-semibold text-base">
                      Register
                    </span>
                  </button>
                </div>

                {settings.registrationWhatsapp &&
                  socialLink?.whatsapplink &&
                  !token && (
                    <Fragment>
                      <div className="w-full flex items-center gap-4 py-3 px-1">
                        <div className="h-px flex-1 bg-neutral-200" />
                        <span className="text-neutral-500 text-sm font-medium">
                          OR
                        </span>
                        <div className="h-px flex-1 bg-neutral-200" />
                      </div>
                      <div title="registerSubmitBtn" className="w-full ">
                        <button
                          onClick={openWhatsapp}
                          type="button"
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-full text-text_Quaternary bg-bg_Primary rounded-lg font-medium border text-[12px] xs:text-[15px] py-2 flex items-center justify-center gap-x-2 disabled:bg-bg_Quinary cursor-pointer"
                        >
                          <img
                            className="size-5"
                            src={assets.whatsapp2}
                            alt=""
                          />
                          <span className="font-medium text-base">
                            Get ID on Whatsapp
                          </span>
                        </button>
                      </div>
                    </Fragment>
                  )}

                <div
                  title="registerNowButton"
                  className="w-full flex justify-center items-center text-xs mt-4 md:text-sm lg:text-base"
                >
                  <div>
                    Already have an account?{" "}
                    <span
                      onClick={() => {
                        dispatch(setShowRegisterModal(false));
                        dispatch(setShowLoginModal(true));
                      }}
                      className="text-text_Primary cursor-pointer"
                    >
                      Login
                    </span>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
