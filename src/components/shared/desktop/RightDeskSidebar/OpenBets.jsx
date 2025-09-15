import { useState } from "react";
import useCurrentBets from "../../../../hooks/useCurrentBets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useNavigate, useParams } from "react-router-dom";

const OpenBets = () => {
  const navigate = useNavigate();
  const { eventId } = useParams();
  const { myBets } = useCurrentBets(eventId);
  const [openBets, setOpenBets] = useState(true);
  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];
  const navigateGameList = (item) => {
    navigate(`/game-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  return (
    <div id="openBetsRightSide" title="Open Bets">
      <div className=" flex flex-col w-full  gap-1">
        <div
          onClick={() => setOpenBets((prev) => !prev)}
          id="matched_1"
          className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-bg_Secondary rounded "
        >
          <span className=" text-text_Quaternary text-xs">Matched Bets</span>
          <div className=" flex items-center justify-center autoAnimate ">
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
              <div className="grid border grid-cols-6 px-2 py-1 bg-bg_Ternary8 rounded items-center gap-1 w-full text-xs font-lato capitalize cursor-pointer">
                <span className="col-span-2 text-text_Ternary font-semibold capitalize">
                  Market
                </span>
                <span className="col-span-2 text-center text-text_Ternary">
                  Odds
                </span>
                <span className="col-span-2 text-center text-text_Ternary">
                  Stake
                </span>
                {/* <span className="col-span-2 text-center text-text_Ternary">
                  P/L
                </span> */}
              </div>
              <div className="flex w-full flex-col gap-0.5">
                {orderedBets?.map((bet, i) => {
                  return (
                    <div
                      onClick={() => navigateGameList(bet)}
                      key={i}
                      className={`grid grid-cols-6 font-semibold px-2 py-1 cursor-pointer rounded w-full text-xs capitalize   ${
                        bet?.betType === "Back"
                          ? "bg-bg_BackBtnBg"
                          : "bg-bg_LayBtnBg"
                      }`}
                    >
                      <span className="col-span-2">{bet?.nation}</span>
                      <span className="col-span-2 text-center">
                        {bet?.userRate}
                      </span>
                      <span className="col-span-2 text-center">
                        {bet?.amount}
                      </span>
                      {/* <span className="col-span-2 text-center">
                        {bet?.amount}
                      </span> */}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {openBets && myBets?.length === 0 && orderedBets?.length === 0 && (
          <div className={`w-full origin-top scaleVerticalOpen`}>
            <div className="w-full font-medium text-sm bg-bg_Quaternary rounded px-4  py-3 shadow text-text_Ternary ">
              You have no Matched Bets.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OpenBets;
