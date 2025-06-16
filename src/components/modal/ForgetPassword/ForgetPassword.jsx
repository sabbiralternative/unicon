import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  useForgotPasswordMutation,
  useGetOtpMutation,
} from "../../../redux/features/auth/authApi";
import { useForm } from "react-hook-form";
import useContextState from "../../../hooks/useContextState";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { settings } from "../../../api";
import toast from "react-hot-toast";
import {
  setShowForgetModal,
  setShowLoginModal,
} from "../../../redux/features/stateSlice";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const ForgetPassword = () => {
  const [handleForgotPassword] = useForgotPasswordMutation();
  const [passType, setPassType] = useState(true);
  const [confirmPassType, setConfirmPassType] = useState(true);
  const dispatch = useDispatch();
  const [mobile, setMobile] = useState("");
  const [OTP, setOTP] = useState({});
  const [getOTP] = useGetOtpMutation();
  const { register, handleSubmit } = useForm();
  const { logo } = useContextState();
  const forgotPassRef = useRef();
  useCloseModalClickOutside(forgotPassRef, () => {
    dispatch(setShowForgetModal(false));
  });

  const handleMobileInputChange = (e) => {
    if (e.target.value.length <= 10) {
      setMobile(e.target.value);
    }
  };
  const handleOTP = async () => {
    if (mobile.length > 0) {
      const res = await getOTP({ mobile }).unwrap();

      if (res?.success) {
        setOTP({
          orderId: res?.result?.orderId,
          otpMethod: "sms",
        });
        toast.success(res?.result?.message);
      } else {
        toast.error(res?.error?.errorMessage);
      }
    }
  };

  const onSubmit = async (data) => {
    const forgotPasswordData = {
      username: mobile,
      password: data?.password,
      confirmPassword: data?.confirmPassword,
      otp: data?.otp,
      isOtpAvailable: settings.otp,
      orderId: OTP.orderId,
      otpMethod: OTP.otpMethod,
    };

    const result = await handleForgotPassword(forgotPasswordData).unwrap();
    if (result.success) {
      toast.success("Password updated successfully");
      dispatch(setShowForgetModal(false));
      dispatch(setShowLoginModal(true));
    } else {
      toast.error(result?.error?.loginName?.[0]?.description);
    }
  };
  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh] items-center justify-center bg-bg_CasinoPopupBg "
    >
      <div
        ref={forgotPassRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] rounded-[5px] bg-bg_Quaternary p-2 xs:p-5 rounded-md"
      >
        <div
          onClick={() => dispatch(setShowForgetModal(false))}
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
        <div
          title="forgotPasswor"
          className="flex flex-col items-start gap-y-4 w-full"
        >
          <div className="logo auth-gradient w-full hidden lg:flex items-center justify-center mb-4 h-[100px]">
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
          <div className="flex gap-10 items-start h-full lg:h-auto w-full">
            <div className="hidden lg:w-[50%] rounded-lg overflow-hidden">
              <img src={logo} />
            </div>
            <div
              title="fotgotPassword"
              className="flex flex-col items-start gap-y-4 w-full"
            >
              <div
                title="Forgot Password"
                className="flex w-full flex-col items-start justify-center gap-y-4"
              >
                <div className="auth-gradient logo w-full lg:hidden flex items-center justify-center">
                  <img style={{ height: "45px" }} src={logo} alt="logo" />
                </div>
              </div>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full gap-y-2 flex flex-col mt-4 font-lato"
              >
                <div
                  title="loginFormMonileUserIdInput"
                  className="w-full mb-1 z-40"
                >
                  <div className="flex flex-col w-full">
                    <div className="ml-1 text-sm"></div>
                    <div className="relative">
                      <input
                        onChange={(e) => handleMobileInputChange(e)}
                        id="mobile-no-input"
                        placeholder="Username/Phone Number"
                        className="block w-full focus:outline-none py-2 bg-auth border rounded-lg pl-4 pr-8 ml-0 mr-0"
                        type="text"
                      />
                    </div>
                    <div className="h-2.5 text-xs ml-1 -mt-0.5 text-text_Primary text-text_Primary"></div>
                  </div>
                </div>
                <div className="w-full">
                  <div className="flex flex-col w-full">
                    <div className="ml-1 text-sm"></div>
                    <div className="relative">
                      <input
                        {...register("otp", { required: true })}
                        id="otpSignUp"
                        placeholder="OTP"
                        disabled=""
                        className="block w-full focus:outline-none py-2 bg-auth border rounded-lg pl-4 pr-8 ml-0 mr-0"
                        type="text"
                        maxLength={6}
                      />
                      <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                        <button
                          onClick={handleOTP}
                          disabled=""
                          className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out h-fit bg-bg_Primary text-text_Quaternary transition-all ease-in-out text-xs whitespace-nowrap mr-1 py-1 px-1.5 rounded active:scale-[0.98] active:opacity-95 disabled:bg-bg_Slate500 font-medium relative flex items-center justify-center cursor-pointer"
                          type="button"
                        >
                          <span className=" ">Get OTP</span>
                        </button>
                      </span>
                    </div>
                    <div className="text-xs ml-1 text-text_Primary"></div>
                  </div>
                  <div
                    id="otpTimeCount"
                    className="flex w-full h-2.5 mt-0.5 items-center justify-start px-1"
                  ></div>
                </div>
                <div title="passwordInput" className="w-full relative">
                  <div className="flex flex-col w-full">
                    <div className="ml-1 text-sm"></div>
                    <div className="relative">
                      <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
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
                        {...register("password", { required: true })}
                        id="newPassword-input"
                        placeholder="Password"
                        disabled=""
                        className="block w-full focus:outline-none py-2 bg-auth border rounded-lg pl-10 pr-8 ml-0 mr-0"
                        type={passType ? "password" : "text"}
                      />
                      <span
                        onClick={() => setPassType((prev) => !prev)}
                        className="px-2 absolute top-1/2 -translate-y-1/2 right-0"
                      >
                        <span className="min-h-[30px] flex items-center justify-center pr-2">
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
                        </span>
                      </span>
                    </div>
                    <div className="h-2.5 text-xs ml-1 text-text_Primary text-text_Primary"></div>
                  </div>
                </div>
                <div title="cpasswordInput" className="w-full">
                  <div className="flex flex-col w-full">
                    <div className="ml-1 text-sm"></div>
                    <div className="relative">
                      <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
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
                        id="password-input"
                        placeholder="Confirm Password"
                        className="block w-full focus:outline-none py-2 bg-auth border rounded-lg pl-10 pr-8 ml-0 mr-0"
                        type={confirmPassType ? "password" : "text"}
                      />
                      <span
                        onClick={() => setConfirmPassType((prev) => !prev)}
                        className="px-2 absolute top-1/2 -translate-y-1/2 right-0"
                      >
                        <span className="min-h-[30px] flex items-center justify-center pr-2">
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
                        </span>
                      </span>
                    </div>
                    <div className="h-2.5 text-xs ml-1 text-text_Primary text-text_Primary"></div>
                  </div>
                </div>
                <div
                  title="updatePassButtons"
                  className="w-full flex flex-col items-center justify-center gap-y-2 mt-2"
                >
                  <button
                    type="submit"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out py-2.5 w-full mb-2 text-sm text-text_Quaternary font-lato font-bold focus:outline-none bg-bg_Secondary rounded-lg hover:opacity-95 disabled:bg-bg_Slate500 cursor-pointer"
                    disabled=""
                  >
                    <span>Update Password</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
