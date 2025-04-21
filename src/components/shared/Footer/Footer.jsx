import { useSelector } from "react-redux";
import assets from "../../../assets";
import useContextState from "../../../hooks/useContextState";
import useGetSocialLink from "../../../hooks/useGetSocialLink";
import { userToken } from "../../../redux/features/auth/authSlice";
import OriginalCrashThumb from "./OriginaCrash/OriginalCrashThumb";
import { useEffect, useState } from "react";

const Footer = () => {
  const [iFrame, setIFrame] = useState(null);
  const [showGame, setShowGame] = useState(false);
  const [closeAnimation, setCloseAnimation] = useState(false);
  const [openAnimation, setOpenAnimation] = useState(false);

  const { logo } = useContextState();
  const token = useSelector(userToken);
  const { socialLink } = useGetSocialLink();
  const handleOpenSocialLink = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const openWhatsapp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

  useEffect(() => {
    setShowGame(false);
    setIFrame(null);
  }, [token]);

  return (
    <>
      <OriginalCrashThumb
        openAnimation={openAnimation}
        setOpenAnimation={setOpenAnimation}
        iFrame={iFrame}
        setIFrame={setIFrame}
        setCloseAnimation={setCloseAnimation}
        closeAnimation={closeAnimation}
        setShowGame={setShowGame}
        showGame={showGame}
      />
      {!showGame && (
        <div
          onClick={() => {
            setShowGame(true);
            setOpenAnimation(true);
          }}
          className="fixed bottom-[calc(55px+env(safe-area-inset-bottom))] right-[calc(0.75rem+env(safe-area-inset-right))] w-max z-[10000] block"
        >
          <button
            title="Enjoy the Original Crash Games"
            className="relative overflow-hidden p-2  bg-white rounded-full size-10 shadow-lg flex items-center justify-center text-[var(--color-bg-primary)]"
            type="button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hover:scale-110 hover:rotate-180 transition-all duration-300"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M12.707 14.293l3 3a1 1 0 0 1 .293 .707v2a2 2 0 0 1 -2 2h-4a2 2 0 0 1 -2 -2v-2a1 1 0 0 1 .293 -.707l3 -3a1 1 0 0 1 1.414 0m-6.707 -6.293a1 1 0 0 1 .707 .293l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1 -.707 .293h-2a2 2 0 0 1 -2 -2v-4a2 2 0 0 1 2 -2zm14 0a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -.707 -.293l-3 -3a1 1 0 0 1 0 -1.414l3 -3a1 1 0 0 1 .707 -.293zm-6 -6a2 2 0 0 1 2 2v2a1 1 0 0 1 -.293 .707l-3 3a1 1 0 0 1 -1.414 0l-3 -3a1 1 0 0 1 -.293 -.707v-2a2 2 0 0 1 2 -2z"></path>
            </svg>
          </button>
        </div>
      )}
      <div id="footer" className="w-full ">
        <div className=" pb-12 pr-3 pl-3 mt-1 w-full  md:pr-0 mb:pb-0 md:pl-0">
          <div
            id="homeFooter"
            className="pt-5 w-full bg-bg_Quaternary gap-2 rounded-xl md:rounded-none"
          >
            <div className="flex w-full pb-[18px] items-center gap-x-[11px]  justify-center ">
              {socialLink?.whatsapplink || socialLink?.branchWhatsapplink ? (
                <a
                  onClick={openWhatsapp}
                  title="whatsapp"
                  className="flex items-center justify-center rounded  w-[45px] h-[45px] md:w-20 md:h-20 cursor-pointer"
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="var(--color-bg-primary)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45"
                      height="45"
                      rx="6"
                      fill="var(--color-bg-primary)"
                      fillOpacity="0.2"
                    ></rect>
                    <g clipPath="url(#clip0_1217_680)">
                      <path
                        d="M22.503 10H22.497C15.8805 10 10.5 15.382 10.5 22C10.5 24.625 11.346 27.058 12.7845 29.0335L11.289 33.4915L15.9015 32.017C17.799 33.274 20.0625 34 22.503 34C29.1195 34 34.5 28.6165 34.5 22C34.5 15.3835 29.1195 10 22.503 10ZM29.4855 26.9455C29.196 27.763 28.047 28.441 27.1305 28.639C26.5035 28.7725 25.6845 28.879 22.9275 27.736C19.401 26.275 17.13 22.6915 16.953 22.459C16.7835 22.2265 15.528 20.5615 15.528 18.8395C15.528 17.1175 16.4025 16.279 16.755 15.919C17.0445 15.6235 17.523 15.4885 17.982 15.4885C18.1305 15.4885 18.264 15.496 18.384 15.502C18.7365 15.517 18.9135 15.538 19.146 16.0945C19.4355 16.792 20.1405 18.514 20.2245 18.691C20.31 18.868 20.3955 19.108 20.2755 19.3405C20.163 19.5805 20.064 19.687 19.887 19.891C19.71 20.095 19.542 20.251 19.365 20.47C19.203 20.6605 19.02 20.8645 19.224 21.217C19.428 21.562 20.133 22.7125 21.171 23.6365C22.5105 24.829 23.5965 25.21 23.985 25.372C24.2745 25.492 24.6195 25.4635 24.831 25.2385C25.0995 24.949 25.431 24.469 25.7685 23.9965C26.0085 23.6575 26.3115 23.6155 26.6295 23.7355C26.9535 23.848 28.668 24.6955 29.0205 24.871C29.373 25.048 29.6055 25.132 29.691 25.2805C29.775 25.429 29.775 26.1265 29.4855 26.9455Z"
                        fill="var(--color-bg-primary)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1217_680">
                        <rect
                          width="24"
                          height="24"
                          fill="var(--color-bg-primary)"
                          transform="translate(10.5 10)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              ) : null}

              {socialLink?.instagramLink && (
                <a
                  onClick={() =>
                    handleOpenSocialLink(socialLink?.instagramLink)
                  }
                  title="Instagram"
                  className="flex items-center justify-center rounded  w-[45px] h-[45px] md:w-20 md:h-20 cursor-pointer"
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="var(--color-bg-primary)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45"
                      height="45"
                      rx="6"
                      fill="var(--color-bg-primary)"
                      fillOpacity="0.2"
                    ></rect>
                    <g clipPath="url(#clip0_1217_692)">
                      <path
                        d="M28.3503 10H18.6497C14.7074 10 11.5 13.2074 11.5 17.1497V26.8503C11.5 30.7926 14.7074 34 18.6497 34H28.3503C32.2926 34 35.5 30.7926 35.5 26.8503V17.1497C35.5 13.2074 32.2926 10 28.3503 10ZM33.0856 26.8503C33.0856 29.4655 30.9655 31.5856 28.3503 31.5856H18.6497C16.0345 31.5856 13.9144 29.4655 13.9144 26.8503V17.1497C13.9144 14.5345 16.0345 12.4144 18.6497 12.4144H28.3503C30.9655 12.4144 33.0856 14.5345 33.0856 17.1497V26.8503Z"
                        fill="var(--color-bg-primary)"
                      ></path>
                      <path
                        d="M23.5002 15.7927C20.0775 15.7927 17.293 18.5773 17.293 21.9999C17.293 25.4226 20.0775 28.2072 23.5002 28.2072C26.9229 28.2072 29.7075 25.4226 29.7075 21.9999C29.7075 18.5773 26.9229 15.7927 23.5002 15.7927ZM23.5002 25.7928C21.4055 25.7928 19.7074 24.0947 19.7074 22C19.7074 19.9052 21.4055 18.2071 23.5002 18.2071C25.595 18.2071 27.2931 19.9052 27.2931 22C27.2931 24.0947 25.5949 25.7928 23.5002 25.7928Z"
                        fill="var(--color-bg-primary)"
                      ></path>
                      <path
                        d="M29.7193 17.3267C30.5408 17.3267 31.2067 16.6608 31.2067 15.8393C31.2067 15.0179 30.5408 14.352 29.7193 14.352C28.8979 14.352 28.2319 15.0179 28.2319 15.8393C28.2319 16.6608 28.8979 17.3267 29.7193 17.3267Z"
                        fill="var(--color-bg-primary)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1217_692">
                        <rect
                          width="24"
                          height="24"
                          fill="var(--color-bg-primary)"
                          transform="translate(11.5 10)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}

              {socialLink?.telegramLink && (
                <a
                  onClick={() => handleOpenSocialLink(socialLink?.telegramLink)}
                  title="Telegram"
                  className="flex items-center justify-center rounded  w-[45px] h-[45px] md:w-20 md:h-20 cursor-pointer"
                >
                  <svg
                    width="45"
                    height="45"
                    viewBox="0 0 45 45"
                    fill="var(--color-bg-primary)"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="45"
                      height="45"
                      rx="6"
                      fill="var(--color-bg-primary)"
                      fillOpacity="0.2"
                    ></rect>
                    <g clipPath="url(#clip0_1217_675)">
                      <path
                        d="M18.4172 25.181L18.0202 30.765C18.5882 30.765 18.8342 30.521 19.1292 30.228L21.7922 27.683L27.3102 31.724C28.3222 32.288 29.0352 31.991 29.3082 30.793L32.9302 13.821L32.9312 13.82C33.2522 12.324 32.3902 11.739 31.4042 12.106L10.1142 20.257C8.66118 20.821 8.68318 21.631 9.86718 21.998L15.3102 23.691L27.9532 15.78C28.5482 15.386 29.0892 15.604 28.6442 15.998L18.4172 25.181Z"
                        fill="var(--color-bg-primary)"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1217_675">
                        <rect
                          width="24"
                          height="24"
                          fill="var(--color-bg-primary)"
                          transform="translate(9 10)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              )}
            </div>
            <div
              id="mobileIcons"
              className="w-full py-[29px] px-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-x-[12px] sm:gap-x-[18px] gap-y-[18px]"
            >
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="Upi"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.upi}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="Bank Transfer"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.bankTransfer}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="BeGamble Aware"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.begamle}
                />
              </div>
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="MGA"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.mga}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="Ecogra"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.cogra}
                  style={{ color: "transparent" }}
                />
              </div>
              <div className="p-1 flex justify-center items-center">
                <img
                  alt="Gambling Commission"
                  loading="eager"
                  width="100"
                  height="100"
                  decoding="async"
                  data-nimg="1"
                  className="h-[34px] sm:h-10 w-full"
                  src={assets.commision}
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
            {/* <div
            id="footerTopDownlodApp"
            className="  px-2 rounded  gap-2 w-full grid grid-cols-2 sm:flex sm:flex-row justify-center items-center"
          >
            <div
              id="footerScoreApp"
              className=" col-span-1 w-full max-w-[350px] flex shadow-lg border  gap-2  rounded-lg items-center justify-between p-1 pr-3"
              style={{
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, rgb(23, 22, 22) 0%, rgb(104, 100, 108) 100%)",
              }}
            >
              <div className=" flex justify-center items-center gap-x-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="45"
                    height="45"
                    rx="6"
                    fill="white"
                    fillOpacity="0.2"
                  ></rect>
                  <path
                    d="M29.1091 19.4758L31.1164 16.0067C31.2909 15.6685 31.16 15.2539 30.8327 15.0794C30.5164 14.9158 30.1236 15.0139 29.9273 15.3194L27.8764 18.8539C24.7564 17.5339 21.2436 17.5339 18.1236 18.8539L16.0727 15.3194C15.8655 15.003 15.44 14.9048 15.1236 15.1012C14.8182 15.2976 14.72 15.6903 14.8836 16.0067L16.8909 19.4758C13.5091 21.4067 11.3055 24.8867 11 28.7703H35C34.6945 24.8867 32.4909 21.4067 29.1091 19.4758ZM17.5455 25.7703C16.7927 25.7703 16.1818 25.1594 16.1818 24.4067C16.1818 23.6539 16.7927 23.043 17.5455 23.043C18.2982 23.043 18.9091 23.6539 18.9091 24.4067C18.9091 25.1594 18.2982 25.7703 17.5455 25.7703ZM28.4545 25.7703C27.7018 25.7703 27.0909 25.1594 27.0909 24.4067C27.0909 23.6539 27.7018 23.043 28.4545 23.043C29.2073 23.043 29.8182 23.6539 29.8182 24.4067C29.8182 25.1594 29.2073 25.7703 28.4545 25.7703Z"
                    fill="var(--color-andriodIconColor)"
                  ></path>
                </svg>
                <div className="flex rounded flex-col items-start justify-center text-xs">
                  <span className=" w-full  flex flex-row  justify-between text-text_Quaternary font-normal ">
                    <span>Download</span>
                  </span>
                  <span className="text-text_Quaternary font-semibold whitespace-nowrap flex-nowrap  uppercase">
                    Android App
                  </span>
                </div>
              </div>
              <div className="flex  rounded flex-col items-start justify-center text-xs">
                <button
                  className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-5 h-5 flex items-center justify-center -rotate-180   
cursor-pointer
"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="var(--color-quaternary)"
                  >
                    <path
                      d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                      fill="var(--color-quaternary)"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              id="footerScoreApp"
              className=" col-span-1 w-full flex shadow-lg border max-w-[350px]  gap-2  rounded-lg items-center justify-between p-1 pr-3"
              style={{
                borderRadius: "10px",
                background:
                  "linear-gradient(90deg, rgb(23, 22, 22) 0%, rgb(104, 100, 108) 100%)",
              }}
            >
              <div className=" flex justify-center items-center gap-x-2">
                <svg
                  width="45"
                  height="45"
                  viewBox="0 0 45 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    width="45"
                    height="45"
                    rx="6"
                    fill="white"
                    fillOpacity="0.2"
                  ></rect>
                  <g clipPath="url(#clip0_1427_847)">
                    <path
                      d="M26.5 26H29C29.2833 26 29.5207 25.904 29.712 25.712C29.904 25.5207 30 25.2833 30 25V21C30 20.7167 29.904 20.479 29.712 20.287C29.5207 20.0957 29.2833 20 29 20H26.5C26.2167 20 25.9793 20.0957 25.788 20.287C25.596 20.479 25.5 20.7167 25.5 21V25C25.5 25.2833 25.596 25.5207 25.788 25.712C25.9793 25.904 26.2167 26 26.5 26ZM27 24.5V21.5H28.5V24.5H27ZM17 26H19.75C19.9667 26 20.146 25.929 20.288 25.787C20.4293 25.6457 20.5 25.4667 20.5 25.25C20.5 25.0333 20.4293 24.854 20.288 24.712C20.146 24.5707 19.9667 24.5 19.75 24.5H17.5V23.5H19.5C19.7833 23.5 20.021 23.404 20.213 23.212C20.4043 23.0207 20.5 22.7833 20.5 22.5V21C20.5 20.7167 20.4043 20.479 20.213 20.287C20.021 20.0957 19.7833 20 19.5 20H16.75C16.5333 20 16.3543 20.0707 16.213 20.212C16.071 20.354 16 20.5333 16 20.75C16 20.9667 16.071 21.1457 16.213 21.287C16.3543 21.429 16.5333 21.5 16.75 21.5H19V22.5H17C16.7167 22.5 16.479 22.5957 16.287 22.787C16.0957 22.979 16 23.2167 16 23.5V25C16 25.2833 16.0957 25.5207 16.287 25.712C16.479 25.904 16.7167 26 17 26ZM23 22C23.2167 22 23.396 21.929 23.538 21.787C23.6793 21.6457 23.75 21.4667 23.75 21.25C23.75 21.0333 23.6793 20.854 23.538 20.712C23.396 20.5707 23.2167 20.5 23 20.5C22.7833 20.5 22.6043 20.5707 22.463 20.712C22.321 20.854 22.25 21.0333 22.25 21.25C22.25 21.4667 22.321 21.6457 22.463 21.787C22.6043 21.929 22.7833 22 23 22ZM23 25.5C23.2167 25.5 23.396 25.429 23.538 25.287C23.6793 25.1457 23.75 24.9667 23.75 24.75C23.75 24.5333 23.6793 24.354 23.538 24.212C23.396 24.0707 23.2167 24 23 24C22.7833 24 22.6043 24.0707 22.463 24.212C22.321 24.354 22.25 24.5333 22.25 24.75C22.25 24.9667 22.321 25.1457 22.463 25.287C22.6043 25.429 22.7833 25.5 23 25.5ZM15 31C14.45 31 13.9793 30.8043 13.588 30.413C13.196 30.021 13 29.55 13 29V17C13 16.45 13.196 15.9793 13.588 15.588C13.9793 15.196 14.45 15 15 15H18V14C18 13.7167 18.0957 13.479 18.287 13.287C18.479 13.0957 18.7167 13 19 13C19.2833 13 19.521 13.0957 19.713 13.287C19.9043 13.479 20 13.7167 20 14V15H26V14C26 13.7167 26.096 13.479 26.288 13.287C26.4793 13.0957 26.7167 13 27 13C27.2833 13 27.5207 13.0957 27.712 13.287C27.904 13.479 28 13.7167 28 14V15H31C31.55 15 32.021 15.196 32.413 15.588C32.8043 15.9793 33 16.45 33 17V29C33 29.55 32.8043 30.021 32.413 30.413C32.021 30.8043 31.55 31 31 31H15ZM23 17C22.7833 17 22.6043 17.071 22.463 17.213C22.321 17.3543 22.25 17.5333 22.25 17.75C22.25 17.9667 22.321 18.1457 22.463 18.287C22.6043 18.429 22.7833 18.5 23 18.5C23.2167 18.5 23.396 18.429 23.538 18.287C23.6793 18.1457 23.75 17.9667 23.75 17.75C23.75 17.5333 23.6793 17.3543 23.538 17.213C23.396 17.071 23.2167 17 23 17ZM23 29C23.2167 29 23.396 28.9293 23.538 28.788C23.6793 28.646 23.75 28.4667 23.75 28.25C23.75 28.0333 23.6793 27.854 23.538 27.712C23.396 27.5707 23.2167 27.5 23 27.5C22.7833 27.5 22.6043 27.5707 22.463 27.712C22.321 27.854 22.25 28.0333 22.25 28.25C22.25 28.4667 22.321 28.646 22.463 28.788C22.6043 28.9293 22.7833 29 23 29Z"
                      fill="var(--color-quaternary)"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_1427_847">
                      <rect
                        width="24"
                        height="24"
                        fill="white"
                        transform="translate(11 10)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div className="flex rounded flex-col items-start justify-center text-xs">
                  <span className=" w-full  flex flex-row  justify-between text-text_Quaternary font-normal ">
                    <span>Download</span>
                  </span>
                  <span className="text-text_Quaternary font-semibold  whitespace-nowrap flex-nowrap uppercase">
                    Score App
                  </span>
                </div>
              </div>
              <div className="flex rounded float-right flex-col items-start justify-center text-xs">
                <button
                  className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out w-5 h-5 flex items-center justify-center -rotate-180   
cursor-pointer
"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="7"
                    height="12"
                    viewBox="0 0 7 12"
                    fill="var(--color-quaternary)"
                  >
                    <path
                      d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                      fill="var(--color-quaternary)"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div> */}
            <div className="bg-headerBg flex py-3 items-center justify-center">
              <img
                alt="footer-logo"
                loading="eager"
                width="100"
                height="100"
                decoding="async"
                data-nimg="1"
                className="w-fit h-fit sm:w-[150px] sm:h-auto "
                src={logo}
                style={{ color: "transparent" }}
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
