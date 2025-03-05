import { useNavigate } from "react-router-dom";
import isOddSuspended from "../../../../utils/isOddSuspended";
import SuspendedOdd from "../../../shared/SuspendedOdd/SuspendedOdd";
import { useEffect, useState } from "react";
import assets from "../../../../assets";
import useCurrentBets from "../../../../hooks/useCurrentBets";
import ScoreHome from "../../desktop/Home/ScoreHome";

const InPlay = ({ data }) => {
  const { myBets } = useCurrentBets();
  const [categories, setCategories] = useState([]);
  const eventName = { 4: "Cricket", 2: "Tennis", 1: "Football" };
  const navigate = useNavigate();
  const navigateGameList = (keys) => {
    navigate(`/game-details/${data[keys]?.eventTypeId}/${keys}`);
  };

  useEffect(() => {
    if (data) {
      const categories = Array.from(
        new Set(
          Object.values(data)
            .filter((item) => item.visible)
            .map((item) => item.eventTypeId)
        )
      );
      const sortedCategories = categories.sort((a, b) => {
        const order = { 4: 0, 1: 1, 2: 2 };
        return order[a] - order[b];
      });
      setCategories(sortedCategories);
    }
  }, [data]);

  return (
    <>
      <div title="In Play" className="py-1 px-[6px] w-full">
        <div className="w-full font-helvetica-neue">
          <div className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-inPlayBlockBg">
            <div className="flex items-center text-text_Quaternary font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="29"
                viewBox="0 0 29 29"
                fill="none"
              >
                <g clipPath="url(#clip0_1696_2272)">
                  <path
                    d="M14.5 2.83337C8.06004 2.83337 2.83337 8.06004 2.83337 14.5C2.83337 20.94 8.06004 26.1667 14.5 26.1667C20.94 26.1667 26.1667 20.94 26.1667 14.5C26.1667 8.06004 20.94 2.83337 14.5 2.83337ZM12.1667 19.75V9.25004L19.1667 14.5L12.1667 19.75Z"
                    fill="var(--color-quaternary)"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_1696_2272">
                    <rect
                      width="28"
                      height="28"
                      fill="white"
                      transform="translate(0.5 0.5)"
                    ></rect>
                  </clipPath>
                </defs>
              </svg>
              <span>In Play</span>
            </div>
            <div
              onClick={() => navigate("/open-bets")}
              className="w-max text-nowrap cursor-pointer"
            >
              <span className="text-xs tracking-wide text-text_Quaternary text-nowrap whitespace-nowrap font-normal">
                Open Bets
              </span>
              <sup className="font-features sups">
                <span className="text-x font-normal tracking-wide text-text_Ternary bg-bg_Warning min-w-4 min-h-4 text-center px-1 py-0.5 font-lato rounded-full">
                  {myBets?.length}
                </span>
              </sup>
            </div>
          </div>
          {categories?.map((category) => {
            const filteredData = Object.entries(data)
              .filter(
                ([, value]) => value.eventTypeId === category && value.visible
              )
              .reduce((obj, [key, value]) => {
                obj[key] = value;
                return obj;
              }, {});
            return (
              <div
                key={category}
                className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg"
              >
                <div className="eventHeadName grid grid-cols-12">
                  <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
                    <span>
                      {eventName[category] === "Cricket" && (
                        <img src={assets.cricket} alt="" />
                      )}
                      {eventName[category] === "Tennis" && (
                        <img src={assets.tennis} alt="" />
                      )}
                      {eventName[category] === "Football" && (
                        <img src={assets.football} alt="" />
                      )}
                    </span>
                    <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                      {eventName[category]}
                    </div>
                  </div>

                  <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      1
                    </span>
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      X
                    </span>
                    <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                      2
                    </span>
                  </div>

                  {data &&
                    Object.values(data).length > 0 &&
                    Object.keys(filteredData)

                      .sort((keyA, keyB) => data[keyA].sort - data[keyB].sort)
                      .map((keys) => {
                        if (!data?.[keys]?.visible) {
                          return null;
                        }

                        return (
                          <>
                            <div
                              onClick={() => navigateGameList(keys)}
                              className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket"
                            >
                              <ScoreHome data={data} keys={keys} />

                              <span
                                id="inPlayTeamName"
                                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
                              >
                                <span className="flex flex-col items-center justify-start w-[87%]">
                                  <span className="text-selection-none w-full flex items-center justify-start">
                                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                                      {data[keys]?.player1}
                                    </span>
                                  </span>
                                  <span className="text-selection-none w-full flex items-center justify-start">
                                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                                      {data[keys]?.player2}
                                    </span>
                                  </span>
                                </span>
                                {data?.[keys]?.isTv === 1 && (
                                  <span className="absolute top-0.5 right-0.5">
                                    <svg
                                      width="13"
                                      height="11"
                                      viewBox="0 0 13 11"
                                      fill="none"
                                      xmlns="http://www.w3.org/2000/svg"
                                    >
                                      <path
                                        d="M11.8182 0H1.18182C0.525909 0 0 0.543889 0 1.22222V8.55556C0 9.22778 0.525909 9.77778 1.18182 9.77778H4.13636V11H8.86364V9.77778H11.8182C12.4682 9.77778 12.9941 9.22778 12.9941 8.55556L13 1.22222C13 0.543889 12.4682 0 11.8182 0ZM11.8182 8.55556H1.18182V1.22222H11.8182V8.55556ZM8.86364 4.88889L4.72727 7.33333V2.44444L8.86364 4.88889Z"
                                        fill="#257B24"
                                      ></path>
                                    </svg>
                                  </span>
                                )}
                              </span>
                            </div>
                            {isOddSuspended(data[keys]) ? (
                              <SuspendedOdd colSpan={6} />
                            ) : (
                              <span
                                onClick={() => navigateGameList(keys)}
                                className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket"
                              >
                                <div
                                  className="w-full overflow-x-auto flex h-full sm:px-[2px]"
                                  id="hideScrollBar"
                                >
                                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {
                                              data[keys]?.[0]?.ex
                                                ?.availableToBack[0]?.price
                                            }
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {
                                                data[keys]?.[0]?.ex
                                                  ?.availableToBack[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div
                                          className={`
                                    ${
                                      data[keys]?.[2]?.ex?.availableToBack[0]
                                        ?.price
                                        ? "opacity-100 cursor-pointer active:scale-95"
                                        : "opacity-50 cursor-not-allowed"
                                    }
                                    overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined   `}
                                        >
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {data[keys]?.[2]?.ex
                                              ?.availableToBack[0]?.price ||
                                              "-"}
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {" "}
                                              {
                                                data[keys]?.[2]?.ex
                                                  ?.availableToBack[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {
                                              data[keys]?.[1]?.ex
                                                ?.availableToBack[0]?.price
                                            }
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {
                                                data[keys]?.[1]?.ex
                                                  ?.availableToBack[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                  </span>
                                  <span className="grid grid-cols-12 grid-flow-col overflow-auto h-full min-w-[100%]">
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {
                                              data[keys]?.[0]?.ex
                                                ?.availableToLay[0]?.price
                                            }
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {
                                                data[keys]?.[0]?.ex
                                                  ?.availableToLay[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {
                                              data[keys]?.[2]?.ex
                                                ?.availableToLay[0]?.price
                                            }
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {
                                                data[keys]?.[2]?.ex
                                                  ?.availableToLay[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                    <span className="col-span-4">
                                      <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                                        <div className="overflow-hidden relative opacity-100 cursor-pointer active:scale-95 w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                                          <span
                                            id="oddBtnPrice"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                          >
                                            {
                                              data[keys]?.[1]?.ex
                                                ?.availableToLay[0]?.price
                                            }
                                          </span>
                                          <span
                                            id="oddBtnSize"
                                            className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                          >
                                            <span className="w-max break-all truncate">
                                              {
                                                data[keys]?.[1]?.ex
                                                  ?.availableToLay[0]?.size
                                              }
                                            </span>
                                          </span>
                                        </div>
                                      </span>
                                    </span>
                                  </span>
                                </div>
                              </span>
                            )}
                          </>
                        );
                      })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default InPlay;
