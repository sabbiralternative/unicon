import { useState } from "react";
import useCurrentBets from "../../../../hooks/useCurrentBets";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useSBCashOut from "../../../../hooks/sb_cashout";
import { useGetAllOddsEventsQuery } from "../../../../redux/features/events/events";
import toast from "react-hot-toast";

const OpenBets = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { eventId, eventTypeId } = useParams();
  const { myBets, refetchCurrentBets } = useCurrentBets(eventId);
  const { mutate: cashOut } = useSBCashOut();
  const { data: eventData } = useGetAllOddsEventsQuery(
    { eventTypeId, eventId },

    {
      pollingInterval: 1000,
      skip: !pathname.includes("/game-details"),
    }
  );
  const [openBets, setOpenBets] = useState(true);
  const orderedBets = [
    ...myBets.filter((bet) => bet.betType === "Back"),
    ...myBets.filter((bet) => bet.betType === "Lay"),
  ];
  const navigateGameList = (item) => {
    navigate(`/game-details/${item?.eventTypeId}/${item?.eventId}`);
  };

  const sportsBook = eventData?.sportsbook?.Result;

  const sports =
    sportsBook &&
    sportsBook?.MarketGroups?.filter(
      (group) =>
        group?.Name !== "Bet Builder" &&
        group?.Name !== "Fast Markets" &&
        group?.Name !== "Player Specials"
    );

  const handleCashOut = ({ betHistory, sportsBook, price, cashout_value }) => {
    let item;
    sports?.forEach((group) => {
      group?.Items?.forEach((data) => {
        if (betHistory?.marketId == data?.Id) {
          item = data;
        }
      });
    });

    const column = item?.Items?.find(
      (col) => col?.Id === betHistory?.selectionId
    );

    const payload = {
      price,
      cashout_value,
      back: true,
      side: 0,
      selectionId: column?.Id,
      btype: "SPORTSBOOK",
      placeName: column?.Name,
      eventTypeId: sportsBook?.EventTypeId,
      betDelay: sportsBook?.betDelay,
      marketId: item?.Id,
      maxLiabilityPerMarket: item?.maxLiabilityPerMarket,
      maxLiabilityPerBet: item?.maxLiabilityPerBet,
      isBettable: sportsBook?.isBettable,
      isWeak: sportsBook?.isWeak,
      marketName: item?.Name,
      eventId: sportsBook?.eventId,
      betId: betHistory?.betId,
    };

    cashOut(payload, {
      onSuccess: (data) => {
        if (data?.success) {
          refetchCurrentBets();
          toast.success(data?.result?.message);
        } else {
          toast.error(data?.error);
        }
      },
    });
  };
  return (
    <div id="openBetsRightSide" title="Open Bets">
      <div className=" flex flex-col w-full  gap-1">
        <div
          onClick={() => setOpenBets((prev) => !prev)}
          id="matched_1"
          className="px-3 py-2 cursor-pointer w-full flex items-center justify-between bg-primary rounded "
        >
          <span className=" text-primary text-xs">Matched Bets</span>
          <div className=" flex items-center justify-center autoAnimate text-primary">
            {openBets ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
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
                  let column;
                  sports?.forEach((group) => {
                    group?.Items?.forEach((data) => {
                      if (bet?.marketId == data?.Id) {
                        column = data?.Items?.find(
                          (col) => col?.Id === bet?.selectionId
                        );
                      }
                    });
                  });

                  const price = (
                    0.92 * bet?.amount * (bet?.userRate / column?.Price) -
                    bet?.amount
                  )?.toFixed(2);
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
                      <span className="col-span-2 flex items-center justify-between">
                        <span> {bet?.nation}</span>

                        {bet?.cashout && eventId && eventTypeId && column && (
                          <button
                            onClick={() =>
                              handleCashOut({
                                betHistory: bet,
                                sportsBook,
                                price: column?.Price,
                                cashout_value: price,
                              })
                            }
                            type="button"
                            className="btn_box "
                            style={{
                              width: "auto",
                              backgroundColor: "#f3f3f3ff",
                              display: "flex",
                              alignItems: "center",
                              cursor: `pointer`,
                              justifyContent: "center",
                              gap: "0px 2px",
                              borderRadius: "2px",
                              padding: "3px 5px",
                            }}
                          >
                            <span style={{ fontSize: "10px", color: "black" }}>
                              Cashout
                            </span>
                            {price && (
                              <span
                                style={{ color: "black", fontSize: "10px" }}
                              >
                                :
                              </span>
                            )}

                            {price && (
                              <span
                                style={{
                                  color: `${price > 0 ? "green" : "red"}`,
                                  fontSize: "10px",
                                }}
                              >
                                {price}
                              </span>
                            )}
                          </button>
                        )}
                      </span>

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
