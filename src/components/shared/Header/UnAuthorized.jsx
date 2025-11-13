import Login from "../../modal/Login/Login";
import Register from "../../modal/Register/Register";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowLoginModal,
  setShowRegisterModal,
} from "../../../redux/features/stateSlice";
import ForgetPassword from "../../modal/ForgetPassword/ForgetPassword";
import { settings } from "../../../api";
import useGetSocialLink from "../../../hooks/useGetSocialLink";
import useLanguage from "../../../hooks/useLanguage";
import { useState } from "react";
import Language from "../../modal/Language/Language";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";

const UnAuthorized = ({ setShowMobileSearch, showMobileSearch }) => {
  const { language, valueByLanguage } = useLanguage();
  const [showLanguage, setShowLanguage] = useState(false);
  const { socialLink } = useGetSocialLink();
  const { showLoginModal, showRegisterModal, showForgetModal } = useSelector(
    (state) => state.state
  );
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  const openWhatsapp = () => {
    if (socialLink?.whatsapplink) {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  return (
    <>
      {showLoginModal && <Login />}
      {showRegisterModal && <Register />}
      {showForgetModal && <ForgetPassword />}
      {showLanguage && <Language setShowLanguage={setShowLanguage} />}
      {!showMobileSearch && (
        <div className="w-full lg:w-max flex items-center justify-end">
          <div
            onClick={() => setShowMobileSearch(true)}
            id="mobileSearchIcon"
            className="md:hidden mr-[2px] flex items-center justify-center cursor-pointer"
          >
            <span className="bg-none border-none shadow-none px-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M23.7068 22.2929L16.8818 15.468C18.2038 13.835 18.9998 11.76 18.9998 9.50008C18.9998 4.26213 14.7378 0.000152588 9.49988 0.000152588C4.26193 0.000152588 0 4.26208 0 9.50003C0 14.738 4.26197 19 9.49992 19C11.7599 19 13.8349 18.204 15.4678 16.882L22.2928 23.7069C22.4878 23.9019 22.7438 23.9999 22.9998 23.9999C23.2558 23.9999 23.5118 23.9019 23.7068 23.7069C24.0978 23.3159 24.0978 22.6839 23.7068 22.2929ZM9.49992 17C5.36395 17 2 13.636 2 9.50003C2 5.36405 5.36395 2.0001 9.49992 2.0001C13.6359 2.0001 16.9998 5.36405 16.9998 9.50003C16.9998 13.636 13.6359 17 9.49992 17Z"
                  fill="var(--color-quaternary)"
                ></path>
              </svg>
            </span>
          </div>
          <div className="w-max hidden items-center justify-center gap-1 rounded-full lg:flex">
            <button
              onClick={() => dispatch(setShowLoginModal(true))}
              className="relative flex rounded-full gap-1 border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center pr-4 pl-3 py-2 bg-primary"
            >
              <span className="w-max text-primary hidden md:block">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="var(--color-text-primary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
                  <path d="M21 12h-13l3 -3"></path>
                  <path d="M11 15l-3 -3"></path>
                </svg>
              </span>
              <span className="text-xxs text-primary  font-normal font-lato md:font-semibold md:text-xs xs:text-xs">
                {languageValue(valueByLanguage, LanguageKey.LOGIN)}
              </span>
            </button>
            {settings.registration && (
              <button
                onClick={() => dispatch(setShowRegisterModal(true))}
                className="flex rounded-full  gap-1 hover:opacity-100 w-max font-extrabold items-center justify-center px-5 py-2.5 bg-bg_Quaternary"
              >
                {/* <span className="w-max hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="var(--color-primary)"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
              <path d="M16 19h6"></path>
              <path d="M19 16v6"></path>
              <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
            </svg>
          </span> */}
                <span className="text-xxs text-text_Primary  font-lato md:font-semibold md:text-xs xs:text-xs">
                  {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                </span>
              </button>
            )}
            {settings.registrationWhatsapp &&
              !token &&
              socialLink?.whatsapplink && (
                <button
                  onClick={openWhatsapp}
                  className="flex rounded-full  gap-1 hover:opacity-100 w-max font-extrabold items-center justify-center px-5 py-2.5 bg-bg_Quaternary"
                >
                  <span className="text-xxs text-text_Primary  font-lato md:font-semibold md:text-xs xs:text-xs">
                    Get ID
                  </span>
                </button>
              )}

            {settings.language && (
              <button
                onClick={() => setShowLanguage((prev) => !prev)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  background: "transparent",
                  border: "none",
                  marginTop: "14px",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                    src="/src/assets/images/globe.gif"
                    alt=""
                  />
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "10px",
                      color: "white",
                      textTransform: "capitalize",
                    }}
                  >
                    {language || "EN"}
                  </p>
                </div>
              </button>
            )}
          </div>
          <div className="w-max flex items-center gap-1 justify-center rounded lg:hidden">
            <button
              onClick={() => dispatch(setShowLoginModal(true))}
              id="loginButton"
              className="flex rounded-full border border-quaternary hover:opacity-100 w-max font-extrabold items-center justify-center px-4 py-2 bg-primary"
            >
              <span className="text-x text-primary font-lato md:font-semibold xs:text-xs md:text-sm font-[800]">
                {languageValue(valueByLanguage, LanguageKey.LOGIN)}
              </span>
            </button>
            {settings.registration && (
              <button
                onClick={() => dispatch(setShowRegisterModal(true))}
                className="flex rounded-full hover:opacity-100 w-max font-extrabold items-center justify-center px-4 py-2 bg-bg_Quaternary"
              >
                <span className="text-x text-text_Primary font-lato md:font-semibold xs:text-xs md:text-sm font-[800]">
                  {languageValue(valueByLanguage, LanguageKey.REGISTER)}
                </span>
              </button>
            )}
            {settings.registrationWhatsapp &&
              !token &&
              socialLink?.whatsapplink && (
                <button
                  onClick={openWhatsapp}
                  className="flex rounded-full hover:opacity-100 w-max font-extrabold items-center justify-center px-4 py-2 bg-bg_Quaternary"
                >
                  <span className="text-x text-text_Primary font-lato md:font-semibold xs:text-xs md:text-sm font-[800]">
                    Get ID
                  </span>
                </button>
              )}

            {settings.language && (
              <button
                onClick={() => setShowLanguage((prev) => !prev)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "end",
                  background: "transparent",
                  border: "none",
                  marginTop: "14px",
                }}
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                    src="/src/assets/images/globe.gif"
                    alt=""
                  />
                  <p
                    style={{
                      margin: "0px",
                      fontSize: "10px",
                      color: "white",
                      textTransform: "capitalize",
                    }}
                  >
                    {language || "EN"}
                  </p>
                </div>
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default UnAuthorized;
