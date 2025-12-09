/* eslint-disable react/no-unknown-property */

import { useRef } from "react";

import useContextState from "../../../hooks/useContextState";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import { handleCopyToClipBoard } from "../../../utils/handleCopyToClipBoard";
import { useGetIndex } from "../../../hooks";

const Referral = ({ setShowReferral }) => {
  const { logo } = useContextState();
  const referralRef = useRef();
  useCloseModalClickOutside(referralRef, () => {
    setShowReferral(false);
  });
  const { data } = useGetIndex({
    type: "get_referral_code",
  });

  return (
    <div
      id="popup-modal"
      className="z-[1000] absolute top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100dvh] items-center justify-center bg-bg_CasinoPopupBg"
    >
      <div
        ref={referralRef}
        className="z-2 popUpBoxShadow popUpOpenAnimation absolute w-[90%] sm:w-[85%] md:w-[70%] lg:w-[450px] rounded-[5px] bg-bg_Quaternary p-2 xs:p-5 rounded-md"
      >
        <div
          onClick={() => setShowReferral(false)}
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
              <img src={logo} alt="logo" />
            </div>

            <div className="mdc-dialog__container" style={{ width: "100%" }}>
              <div
                style={{ borderRadius: "10px" }}
                className="mat-mdc-dialog-surface mdc-dialog__surface"
              >
                <div _nghost-ng-c526813732="" className="ng-star-inserted">
                  <div _ngcontent-ng-c526813732="" className="referral-modal">
                    <div
                      _ngcontent-ng-c526813732=""
                      className="modal-body"
                      style={{ backgroundColor: "white" }}
                    >
                      <h3
                        style={{ fontSize: "18px", fontWeight: "500" }}
                        _ngcontent-ng-c526813732=""
                      >
                        Refer and earn
                      </h3>
                      <p _ngcontent-ng-c526813732="">
                        Be our brand hero, refer your friend using your refer
                        code.
                      </p>
                      <div
                        _ngcontent-ng-c526813732=""
                        className="referral-code"
                      >
                        <p
                          style={{ textTransform: "lowercase" }}
                          _ngcontent-ng-c526813732=""
                          className="refer-code-text"
                        >
                          {data?.result?.link}
                        </p>
                        <button
                          style={{ color: "white" }}
                          onClick={() =>
                            handleCopyToClipBoard(data?.result?.text)
                          }
                          _ngcontent-ng-c526813732=""
                          className="btn secondary-btn"
                        >
                          Copy
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Referral;
