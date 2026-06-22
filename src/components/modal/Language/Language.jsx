/* eslint-disable react/no-unknown-property */

import { useRef } from "react";
import useCloseModalClickOutside from "../../../hooks/useCloseModalClickOutside";
import useLanguage from "../../../hooks/useLanguage";
import { useGetLanguage } from "../../../hooks/language";
import { MdKeyboardArrowRight } from "react-icons/md";

const Language = ({ setShowLanguage }) => {
  const { setLanguage } = useLanguage();
  const { data } = useGetLanguage();

  const languageRef = useRef();
  useCloseModalClickOutside(languageRef, () => {
    setShowLanguage(false);
  });

  const languages = data?.CRICKET;

  const handleSetLanguage = (language) => {
    localStorage.setItem("language", language);
    setShowLanguage(false);
    setLanguage(language);
  };
  return (
    <div
      style={{
        width: "calc(100% - 30px)",
        minHeight: "100px",
        maxWidth: "200px",
        position: "absolute",
        marginBottom: "10px",
        top: "0px",
        right: "0",
        zIndex: "1001",
      }}
    >
      <div
        ref={languageRef}
        className="z-2 absolute right-0 top-14  w-full  p-3 rounded-md h-[130px] flex justify-end"
      >
        <div className="flex gap-10 items-start h-full w-[130px]">
          <div
            title="mobileLogin"
            className="flex flex-col items-start gap-y-4 w-full"
          >
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
                      <h1
                        style={{
                          color: "black",
                          display: "flex",
                          alignItems: "center",
                          fontSize: "11px",
                        }}
                        _ngcontent-ng-c2806737617=""
                        className="form-title"
                      >
                        <MdKeyboardArrowRight /> <span>Select Language</span>
                      </h1>

                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "start",
                          width: "100%",
                          gap: "1px",
                          marginTop: "0px",
                          fontSize: "11px",
                        }}
                      >
                        {languages &&
                          Object.keys(languages)?.map((language, idx) => {
                            return (
                              <button
                                onClick={() => handleSetLanguage(language)}
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "3px",
                                  border: "none",
                                  background: "transparent",
                                  textTransform: "capitalize",
                                  paddingLeft: "0px",
                                  color: "var(--color-bg-primary)",
                                }}
                                key={idx}
                              >
                                <MdKeyboardArrowRight />
                                <span>{language}</span>
                              </button>
                            );
                          })}
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

export default Language;
