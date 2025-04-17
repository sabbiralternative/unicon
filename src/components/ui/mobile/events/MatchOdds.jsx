import { useParams } from "react-router-dom";
import useExposer from "../../../../hooks/useExposure";
import isOddSuspended from "../../../../utils/isOddSuspended";
import { isPriceAvailable } from "../../../../utils/isPriceAvailable";
import SuspendedOdd from "../../../shared/SuspendedOdd/SuspendedOdd";
import { useDispatch, useSelector } from "react-redux";
import { handleBetSlip } from "../../../../utils/handleBetSlip";
import { useEffect, useState } from "react";
import BetSlip from "../../../shared/mobile/BetSlip/BetSlip";
import { settings } from "../../../../api";
import { handleCashoutBetMobile } from "../../../../utils/handleCashoutBetMobile";

const MatchOdds = ({ match_odds }) => {
  const [teamProfit, setTeamProfit] = useState([]);
  const [runnerId, setRunnerId] = useState("");
  const { predictOdd, stake } = useSelector((state) => state?.event);
  const { token } = useSelector((state) => state?.auth);

  const { eventId } = useParams();
  const { exposer } = useExposer(eventId);
  const dispatch = useDispatch();
  let pnlBySelection;
  if (exposer?.pnlBySelection) {
    const obj = exposer?.pnlBySelection;
    pnlBySelection = Object?.values(obj);
  }
  const handleOpenBetSlip = (betType, games, runner) => {
    handleBetSlip(
      setRunnerId,
      betType,
      games,
      runner,
      exposer,
      dispatch,
      token
    );
  };

  const computeExposureAndStake = (
    exposureA,
    exposureB,
    runner1,
    runner2,
    gameId
  ) => {
    let runner, largerExposure, layValue, oppositeLayValue, lowerExposure;

    const pnlArr = [exposureA, exposureB];
    const isOnePositiveExposure = onlyOnePositive(pnlArr);

    if (exposureA > exposureB) {
      // Team A has a larger exposure.
      runner = runner1;
      largerExposure = exposureA;
      layValue = runner1?.lay?.[0]?.price;
      oppositeLayValue = runner2?.lay?.[0]?.price;
      lowerExposure = exposureB;
    } else {
      // Team B has a larger exposure.
      runner = runner2;
      largerExposure = exposureB;
      layValue = runner2?.lay?.[0]?.price;
      oppositeLayValue = runner1?.lay?.[0]?.price;
      lowerExposure = exposureA;
    }

    // Compute the absolute value of the lower exposure.
    let absLowerExposure = Math.abs(lowerExposure);

    // Compute the liability for the team with the initially larger exposure.
    let liability = absLowerExposure * (layValue - 1);

    // Compute the new exposure of the team with the initially larger exposure.
    let newExposure = largerExposure - liability;

    // Compute the profit using the new exposure and the lay odds of the opposite team.
    let profit = newExposure / layValue;

    // Calculate the new stake value for the opposite team by adding profit to the absolute value of its exposure.
    let newStakeValue = absLowerExposure + profit;

    // Return the results.
    return {
      runner,
      newExposure,
      profit,
      newStakeValue,
      oppositeLayValue,
      gameId,
      isOnePositiveExposure,
    };
  };
  function onlyOnePositive(arr) {
    let positiveCount = arr?.filter((num) => num > 0).length;
    return positiveCount === 1;
  }
  useEffect(() => {
    let results = [];
    if (
      match_odds?.length > 0 &&
      exposer?.pnlBySelection &&
      Object.keys(exposer?.pnlBySelection)?.length > 0
    ) {
      match_odds.forEach((game) => {
        const runners = game?.runners || [];
        if (runners?.length === 2) {
          const runner1 = runners[0];
          const runner2 = runners[1];
          const pnl1 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner1?.id
          )?.pnl;
          const pnl2 = pnlBySelection?.find(
            (pnl) => pnl?.RunnerId === runner2?.id
          )?.pnl;

          if (pnl1 && pnl2 && runner1 && runner2) {
            const result = computeExposureAndStake(
              pnl1,
              pnl2,
              runner1,
              runner2,
              game?.id
            );
            results.push(result);
          }
        }
      });
      setTeamProfit(results);
    } else {
      setTeamProfit([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match_odds, eventId]);

  return (
    <>
      {match_odds?.map((games, i) => {
        const teamProfitForGame = teamProfit?.find(
          (profit) =>
            profit?.gameId === games?.id && profit?.isOnePositiveExposure
        );

        return (
          <div key={i} className="py-1.5">
            <div className="grid grid-flow-col grid-cols-12 text-xs font-[500] mb-1.5">
              <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5">
                <span className="capitalize font-bold text-xs sm:text-sm md:text-[15px]">
                  {games?.name}
                </span>
                {/* <button
                  type="button"
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-cashout-btn-gradient rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max max-w-[74%] mr-1 cursor-pointer"
                >
                  <div className="text-[10px] md:text-sm text-text_Quaternary whitespace-nowrap font-semibold">
                    Cashout
                  </div>
                </button> */}
                {settings.betFairCashOut &&
                  games?.runners?.length !== 3 &&
                  games?.status === "OPEN" && (
                    <button
                      onClick={() =>
                        handleCashoutBetMobile(
                          games,
                          "lay",
                          dispatch,
                          setRunnerId,
                          pnlBySelection,
                          token,
                          teamProfitForGame
                        )
                      }
                      style={{
                        cursor: `${
                          !teamProfitForGame ? "not-allowed" : "pointer"
                        }`,
                        opacity: `${!teamProfitForGame ? "0.6" : "1"}`,
                      }}
                      disabled={!teamProfitForGame}
                      type="button"
                      className={`inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out  rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max max-w-[74%] mr-1 cursor-pointer ${
                        teamProfitForGame?.profit > 0
                          ? "bg-bg_Secondary"
                          : "bg-bg_Secondary"
                      }`}
                    >
                      <div className="text-[10px] md:text-sm text-text_Quaternary whitespace-nowrap font-semibold">
                        Cashout
                      </div>
                      {teamProfitForGame?.profit && (
                        <div className="capitalize text-[10px] md:text-sm ml-1 text-text_Quaternary whitespace-nowrap font-semibold">
                          <span> : </span>
                          <span className="font-roboto">₹ </span>
                          <span> {teamProfitForGame?.profit?.toFixed(2)}</span>
                        </div>
                      )}
                    </button>
                  )}
                {/* <span className="text-xs font-light">
                  Min: {games?.minLiabilityPerBet}
                </span> */}
                <span className="text-xs font-light">
                  Max: {games?.maxLiabilityPerBet}
                </span>
              </div>
              <div className="col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
                <span className="hidden md:flex col-span-1 text-center font-semibold h-full items-end justify-center"></span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
                <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 text-text_Ternary font-bold h-full flex items-end justify-center">
                  BACK
                </span>
                <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 font-bold h-full flex items-end justify-center">
                  LAY
                </span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
                <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
              </div>
            </div>
            <div className="bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
              {games?.runners?.map((runner, idx) => {
                const pnl =
                  pnlBySelection?.filter(
                    (pnl) => pnl?.RunnerId === runner?.id
                  ) || [];
                const predictOddValues = predictOdd?.filter(
                  (val) => val?.id === runner?.id
                );

                return (
                  <>
                    <div
                      key={runner?.id}
                      title="891555"
                      id="891555"
                      className={`grid grid-cols-12   ${
                        games?.runners?.length - 1 === idx
                          ? ""
                          : "border-b border-borderColorOfMarket"
                      }`}
                    >
                      <div className="w-full md:col-span-5 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
                        <div className="truncate col-span-12 flex items-start justify-center h-full flex-col">
                          <div className="w-full flex flex-nowrap gap-x-2">
                            <span className="truncate w-full capitalize text-text_Ternary text-[11px] md:text-[13px] md:text-sm font-semibold">
                              {runner?.name}
                            </span>
                          </div>

                          <span key={i} className="w-full whitespace-nowrap">
                            {pnl &&
                              pnl?.map(({ pnl }, i) => {
                                return (
                                  <span
                                    key={i}
                                    className={`text-[12px] font-bold  whitespace-nowrap ${
                                      pnl > 0
                                        ? "text-text_Success"
                                        : "text-text_Danger"
                                    }`}
                                  >
                                    {pnl || ""}
                                  </span>
                                );
                              })}

                            {stake &&
                              runnerId &&
                              predictOddValues?.map(({ exposure, id }) => {
                                return (
                                  <span
                                    key={id}
                                    className={`text-[12px] font-bold ${
                                      exposure > 0
                                        ? "text-text_Success"
                                        : "text-text_Danger"
                                    }`}
                                  >
                                    {" "}
                                    &gt;&gt; {stake && exposure}
                                  </span>
                                );
                              })}
                          </span>
                        </div>
                      </div>
                      {isOddSuspended(runner) ? (
                        <SuspendedOdd colSpan={5} />
                      ) : (
                        <div className="col-span-5 md:col-span-7 h-12 grid grid-cols-2 md:grid-cols-6 relative">
                          <span className="hidden md:block text-center min-h-12">
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.back?.[2]?.price
                                )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.back?.[2]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.back?.[2]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span className="hidden md:block text-center min-h-12">
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.back?.[1]?.price
                                )} overflow-hidden relative w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.back?.[1]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.back?.[1]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span
                            onClick={() => {
                              handleOpenBetSlip("back", games, runner);
                            }}
                            className="text-center min-h-12"
                          >
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.back?.[0]?.price
                                )} overflow-hidden relative w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.back?.[0]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.back?.[0]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span
                            onClick={() =>
                              handleOpenBetSlip("lay", games, runner)
                            }
                            className="text-center min-h-12"
                          >
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.lay?.[0]?.price
                                )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.lay?.[0]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.lay?.[0]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span className="hidden md:block text-center min-h-12">
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.lay?.[1]?.price
                                )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.lay?.[1]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.lay?.[1]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                          <span className="hidden md:block text-center min-h-12">
                            <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                              <div
                                className={`${isPriceAvailable(
                                  runner?.lay?.[2]?.price
                                )} overflow-hidden relative  w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined`}
                              >
                                <span
                                  id="oddBtnPrice"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                                >
                                  {runner?.lay?.[2]?.price || "-"}
                                </span>
                                <span
                                  id="oddBtnSize"
                                  className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                                >
                                  <span className="w-max break-all truncate">
                                    {runner?.lay?.[2]?.size}
                                  </span>
                                </span>
                              </div>
                            </span>
                          </span>
                        </div>
                      )}

                      <div className="col-span-12 h-max"></div>
                      {runner?.id === runnerId && (
                        <BetSlip setRunnerId={setRunnerId} />
                      )}
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
};

export default MatchOdds;
