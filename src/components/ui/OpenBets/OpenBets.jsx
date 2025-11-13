import { useState } from "react";
import useCurrentBets from "../../../hooks/useCurrentBets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OpenBets = () => {
  const navigate = useNavigate();
  const { myBets } = useCurrentBets();
  const [openBets, setOpenBets] = useState(true);
  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];

  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div id="openBetsRightSide" title="Open Bets" className="py-2 px-3">
        <div className="flex flex-col w-full gap-1">
          <div
            onClick={() => setOpenBets((prev) => !prev)}
            id="matched_1"
            className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-primary rounded"
          >
            <span className="text-primary text-xs">Open Bets</span>
            <div className="flex items-center justify-center autoAnimate">
              {openBets ? (
                <MdOutlineKeyboardArrowUp size={20} color="#fff" />
              ) : (
                <MdOutlineKeyboardArrowDown size={20} color="#fff" />
              )}
            </div>
          </div>

          {openBets && myBets?.length > 0 && orderedBets?.length > 0 && (
            <div className="w-full origin-top scaleVerticalOpen">
              <div className="flex flex-col gap-1 w-full">
                {orderedBets?.map((bet, i) => {
                  return (
                    <div
                      key={i}
                      className="bg-bg_Quaternary rounded-md divide-y w-full shadow"
                    >
                      <div
                        onClick={() => {
                          navigate(
                            `/game-details/${bet?.eventTypeId}/${bet?.eventId}`
                          );
                        }}
                        id="eventHeader"
                        className="font-semibold px-3 py-2 cursor-pointer"
                      >
                        <div
                          className={`font-medium underline capitalize text-sm 
                    ${
                      bet?.betType === "Back"
                        ? "text-text_ChangeAnimationBack "
                        : "text-text_ChangeAnimationLay"
                    }
                    `}
                        >
                          {bet?.title}
                        </div>
                      </div>
                      <div className="px-3 py-2 text-text_Ternary uppercase font-lato flex flex-col">
                        <span className="font-semibold text-xs">
                          {bet?.nation}
                        </span>
                        <span className="font-normal text-xs">
                          {bet?.sports}
                        </span>
                      </div>
                      <div
                        id="tiem_Date_of_order_0_1724640350689"
                        className="text-xs px-3 py-2 text-center bg-bg_Ternary8 font-lato font-normal rounded-b-md"
                      >
                        PLACED - {bet?.placeDate}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {openBets && myBets?.length === 0 && orderedBets?.length === 0 && (
            <div className="w-full origin-top scaleVerticalOpen">
              <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4 py-3 shadow text-text_Ternary">
                You have no Open Bets.
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="px-[6px]"></div>
      <div className="py-1 px-[6px]"></div>
    </div>
  );
};

export default OpenBets;
