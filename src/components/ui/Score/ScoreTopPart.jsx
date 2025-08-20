const ScoreTopPart = ({ iscore, isMobile }) => {
  return (
    <div
      className={` w-full bg-bg_Quaternary px-0 ${isMobile ? "lg:hidden" : ""}`}
    >
      <div className=" flex w-full justify-between items-center px-3.5 py-1 font-lato shadow-md">
        <div className=" flex items-start justify-start w-max flex-col max-w-[70%]">
          <div className="text-text_Primary  text-start font-lato font-bold text-sm flex items-start justify-start w-full">
            <span className=" text-start">{iscore?.teamName}</span>
          </div>
          <div className=" flex items-center justify-start gap-x-1">
            <span className="text-[18px] font-bold text-text_color_primary1 ">
              {iscore?.teamRun}
            </span>
            <div className=" flex items-center justify-center rounded-[4px] px-1.5 py-0.5 bg-bg_text_brand_primary bg-bg_Primary">
              <span className=" text-[10px] font-[500] leading-4 text-white">
                Over {iscore?.teamOver}
              </span>
            </div>
            <span className=" text-xs text-text_color_primary1 w-max" />
          </div>
          {iscore?.status2 && (
            <span className=" text-xs text-text_color_primary1 w-full">
              {iscore?.status2}
            </span>
          )}
        </div>
        <div className=" flex flex-col gap-y-[3px] text-end max-w-[60%] text-text_color_primary1 ">
          <span className=" text-text_Primary font-bold leading-6 text-lg">
            {iscore?.status}
          </span>
          <div className=" text-x font-semibold text-end leading-3">
            {iscore?.crr && (
              <span className="text-text_color_primary1 ">
                CRR : {iscore?.crr}
              </span>
            )}
            {iscore?.rrr && (
              <span className=" ml-2 text-text_color_primary1 ">
                RR : {iscore?.rrr}
              </span>
            )}
          </div>
          {/* <span className=" text-xs text-text_color_primary1 w-full text-end">
              Tgt: <span className=" font-[900]">192 runs</span>
            </span> */}
        </div>
      </div>
      {iscore?.currentOver?.length > 0 || iscore?.previousOver?.length > 0 ? (
        <div className=" px-[11px] relative bg-bg_color_primary w-full shadow-md  z-10">
          <div className=" w-full flex items-center py-1 justify-start overflow-scroll no-scrollbar gap-x-2">
            {iscore?.currentOver?.length > 0 && (
              <div
                title="Current Over"
                className=" flex py-1 items-center justify-start gap-x-[7px]"
              >
                <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                  Current Over
                </span>
                <div className=" flex items-center justify-start gap-x-[11px]">
                  <div className="flex items-center justify-start gap-x-[11px]">
                    {iscore?.currentOver?.map((cv, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium min-w-5 min-h-5  flex items-center justify-center shadow-md  p-1 bg-bg_color_cr_default text-text_color_cr_default border-border_color_cr_default ${
                          cv?.length === 1
                            ? "aspect-square rounded-full"
                            : "aspect-auto rounded-2xl"
                        }`}
                        style={{
                          color: "white",
                          backgroundColor:
                            cv == "0"
                              ? "#999"
                              : cv == "1" || cv == "2"
                              ? "#48a23c"
                              : cv.split().includes("W")
                              ? "#c9362b"
                              : cv == "4"
                              ? "#2d90d4"
                              : cv == "6"
                              ? "#601c78"
                              : cv.split().includes("b") ||
                                cv.split().includes("lb") ||
                                cv.split().includes("wd") ||
                                cv.split().includes("nb")
                              ? "#c2ad7b"
                              : "#999",
                        }}
                      >
                        <span>{cv}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-3 text-text_color_primary">
              <span>=</span>
              <span>{iscore?.totalThisOver}</span>
            </div>
            {iscore?.previousOver?.length > 0 && (
              <div
                title="Last Over"
                className=" py-1 flex items-center justify-start gap-x-[7px]"
              >
                <span className=" w-max min-w-11 text-xs font-medium text-text_color_primary">
                  Previous Over
                </span>
                <div className=" flex items-center justify-start gap-x-[11px]">
                  <div className="flex items-center justify-start gap-x-[11px]">
                    {iscore?.previousOver?.map((pv, i) => (
                      <span
                        key={i}
                        className={`text-xs font-medium min-w-5 min-h-5  flex items-center justify-center shadow-md  p-1 bg-bg_color_cr_wd text-text_color_cr_wd border-border_color_cr_wd  ${
                          pv?.length === 1
                            ? "aspect-square rounded-full"
                            : "aspect-auto rounded-2xl"
                        }`}
                        style={{
                          color: "white",
                          backgroundColor:
                            pv == "0"
                              ? "#999"
                              : pv == "1" || pv == "2"
                              ? "#48a23c"
                              : pv.split().includes("W")
                              ? "#c9362b"
                              : pv == "4"
                              ? "#2d90d4"
                              : pv == "6"
                              ? "#601c78"
                              : pv.split().includes("b") ||
                                pv.split().includes("lb") ||
                                pv.split().includes("wd") ||
                                pv.split().includes("nb")
                              ? "#c2ad7b"
                              : "#999",
                        }}
                      >
                        <span>{pv}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            <div className=" flex items-center justify-center text-xs gap-x-0.5 font-medium leading-4 border-r border-border_color_primary pr-5 text-text_color_primary">
              <span>=</span>
              <span>{iscore?.totalLastOver}</span>
            </div>
          </div>
          <div className=" absolute z-1 top-1/2 -translate-y-1/2 right-2">
            <button
              className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out  min-w-5 min-h-5 flex items-center justify-center rounded-[4px] bg-bg_color_quaternary 
      cursor-pointer
      "
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                height={20}
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.4998 10L6.6665 6.16667L7.83317 5L12.8332 10L7.83317 15L6.6665 13.8333L10.4998 10Z"
                  fill="var(--bg-active-primary)"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ScoreTopPart;
