import toast from "react-hot-toast";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useChangePasswordMutation } from "../../redux/features/auth/authApi";
import { Lock } from "../../assets/Icon";

const ChangePassword = () => {
  const [handleChangePassword] = useChangePasswordMutation();
  window.scrollTo(0, 0);
  const [showPassword, setShowPassword] = useState(true);
  const [showNewPassword, setShowNewPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);

  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();

  /* Change password function */
  const onSubmit = async ({ password, newPassword, newPasswordConfirm }) => {
    const payload = {
      oldPassword: password,
      password: newPassword,
      passVerify: newPasswordConfirm,
    };

    const res = await handleChangePassword(payload).unwrap();
    if (res.success) {
      localStorage.removeItem("changePassword");
      toast.success(res?.result?.message);
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      toast.error(res?.error?.errorMessage);
    }
  };

  return (
    <div className={`flex flex-col transition-all ease-in-out duration-100 `}>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24 change-password">
        <LeftDeskSidebar />
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-110px + 100dvh)" }}
        >
          <div
            title="Change Password"
            className="p-2 space-y-2 mx-2 my-2 rounded-lg bg-bg_Quaternary shadow"
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col gap-2 font-lato">
                <div className="flex flex-col w-full">
                  <div className="ml-1 text-sm">Old Password</div>
                  <div className="relative">
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                      <Lock />
                    </span>
                    <input
                      {...register("password", { required: true })}
                      label="Old Password"
                      id="oldPassword"
                      placeholder="Old Password"
                      className="block w-full focus:outline-none py-2 bg-bg_DepositBoxBg border rounded-lg pl-10 pr-8 ml-0 mr-0"
                      type={`${showPassword ? "password" : "text"}`}
                    />
                    <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                      <button
                        onClick={() => setShowPassword((prev) => !prev)}
                        type="button"
                        className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out undefined cursor-pointer"
                      >
                        {showPassword ? (
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
                  <div className="text-xs ml-1 text-text_Primary"></div>
                </div>
                <div className="relative">
                  <div className="w-full h-full">
                    <div className="flex flex-col w-full">
                      <div className="ml-1 text-sm">New Password</div>
                      <div className="relative">
                        <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                          <Lock />
                        </span>
                        <input
                          {...register("newPassword", {
                            required: true,
                            minLength: 5,
                          })}
                          id="newPassword"
                          label="New Password"
                          className="rounded h-10 col-span-8 md:col-span-10 bg-bg_DepositBoxBg w-full placeholder:text-sm font-lato font-[400] pl-10 pr-8 ml-0 mr-0"
                          placeholder="New Password"
                          type={`${showNewPassword ? "password" : "text"}`}
                        />
                        <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                          <button
                            onClick={() => setShowNewPassword((prev) => !prev)}
                            type="button"
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out undefined cursor-pointer"
                          >
                            {showNewPassword ? (
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
                      <div className="text-xs ml-1 text-text_Primary"></div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="w-full h-full">
                    <div className="flex flex-col w-full">
                      <div className="ml-1 text-sm">Confirm Password</div>
                      <div className="relative">
                        <span className="px-2 absolute top-1/2 -translate-y-1/2 w-max">
                          <Lock />
                        </span>
                        <input
                          {...register("newPasswordConfirm", {
                            required: true,
                            minLength: 5,
                          })}
                          label="Confirm Password"
                          placeholder="Confirm Password"
                          className="rounded h-10 col-span-8 md:col-span-10 w-full bg-bg_DepositBoxBg placeholder:text-sm font-lato font-[400] pl-10 pr-8 ml-0 mr-0"
                          type={`${showConfirmPassword ? "password" : "text"}`}
                        />
                        <span className="px-2 absolute top-1/2 -translate-y-1/2 right-0">
                          <button
                            onClick={() =>
                              setShowConfirmPassword((prev) => !prev)
                            }
                            type="button"
                            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out undefined cursor-pointer"
                          >
                            {showConfirmPassword ? (
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
                      <div className="text-xs ml-1 text-text_Primary"></div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center mt-2 w-full gap-x-2">
                  <button
                    onClick={() => {
                      reset();
                      navigate("/");
                    }}
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out max-w-[180px] p-2 bg-bg_Quaternary mt-2 w-full rounded-lg font-semibold text-text_Primary border border-[var(--color-bg-primary)] cursor-pointer"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out max-w-[180px] cursor-pointer disabled:cursor-not-allowed p-2 bg-bg_Primary mt-2 w-full rounded-lg font-semibold text-text_Quaternary disabled:opacity-40 flex items-center justify-center "
                  >
                    <span>Save</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default ChangePassword;
