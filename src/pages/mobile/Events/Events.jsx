import { useParams } from "react-router-dom";
import Bookmaker from "../../../components/ui/mobile/events/Bookmaker";
import Fancy from "../../../components/ui/mobile/events/Fancy";
import MatchOdds from "../../../components/ui/mobile/events/MatchOdds";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import { useGetAllOddsEventsQuery } from "../../../redux/features/events/events";
import EventHeader from "../../../components/ui/mobile/events/EventHeader";
import useBalance from "../../../hooks/useBalance";
import { useDispatch, useSelector } from "react-redux";
import { setPredictOdd } from "../../../redux/features/events/eventSlice";
import OpenBets from "../../../components/ui/mobile/events/OpenBets";
import IFrameScore from "../../../components/ui/IFrame/IFrame";
import useCurrentBets from "../../../hooks/useCurrentBets";
import ScoreCard from "../../../components/ui/desktop/events/ScoreCard";
import HorseGreyhound from "../../../components/ui/mobile/events/HorseGreyhound";
import Score from "../../../components/ui/desktop/events/Score";

const Events = () => {
  const [iFrame, setIframe] = useState("");
  const [betsType, setBetsType] = useState("live");
  const dispatch = useDispatch();
  const { placeBetValues, price, stake } = useSelector((state) => state.event);

  const { refetchBalance } = useBalance();
  const { eventTypeId, eventId } = useParams();
  const payload = {
    eventTypeId,
    eventId,
  };

  const { myBets } = useCurrentBets(eventId);
  const [match_odds, setMatch_odds] = useState([]);
  const [bookmaker, setBookmaker] = useState([]);
  // const [bookmaker2, setBookmaker2] = useState([]);
  const [fancy, setFancy] = useState([]);
  // const [fancy1, setFancy1] = useState([]);
  // const [overByOver, setOverByOver] = useState([]);
  const { data } = useGetAllOddsEventsQuery(payload, {
    pollingInterval: settings.interval,
  });

  useEffect(() => {
    refetchBalance();
  }, []);
  /* Filtered all the game  */
  useEffect(() => {
    if (data?.result) {
      const events = data?.result;
      const filterMatch_odds = events?.filter(
        (match_odd) =>
          match_odd.btype === "MATCH_ODDS" && match_odd?.visible == true
      );
      setMatch_odds(filterMatch_odds);

      const bookmarkerFilter = events?.filter(
        (bookmaker) =>
          bookmaker.btype === "BOOKMAKER" && bookmaker?.visible == true
      );
      setBookmaker(bookmarkerFilter);

      // const filterBookmarker2 = events?.filter(
      //   (bookmarker2) => bookmarker2.btype === "BOOKMAKER2"
      // );
      // setBookmaker2(filterBookmarker2);

      const normalFilter = events?.filter(
        (normal) =>
          normal.btype === "FANCY" &&
          normal.tabGroupName === "Normal" &&
          normal?.visible == true
      );
      setFancy(normalFilter);

      // const fancy1Filter = events?.filter(
      //   (fancy1) => fancy1.btype === "ODDS" && fancy1.tabGroupName === "Fancy1"
      // );
      // setFancy1(fancy1Filter);

      // const overByOverFilter = events?.filter(
      //   (overByOver) =>
      //     overByOver.btype === "FANCY" &&
      //     overByOver.tabGroupName === "Over By Over"
      // );
      // setOverByOver(overByOverFilter);
    }
  }, [data]);

  useEffect(() => {
    let total;
    if (
      placeBetValues?.btype === "MATCH_ODDS" ||
      placeBetValues?.btype === "BOOKMAKER"
    ) {
      if (placeBetValues?.back) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = price * stake - stake;
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = bookmaker * stake - stake;
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(exp?.exposure + -1 * stake),

              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });

          dispatch(setPredictOdd(currentExposure));
        }
      } else if (placeBetValues?.lay) {
        if (placeBetValues?.btype === "MATCH_ODDS") {
          total = -1 * (price * stake - stake);
        }
        if (placeBetValues?.btype === "BOOKMAKER") {
          const bookmaker = 1 + price / 100;
          total = -1 * (bookmaker * stake - stake);
        }

        if (stake) {
          const currentExposure = placeBetValues?.exposure?.map((exp) => {
            return {
              exposure: exp?.isBettingOnThisRunner
                ? formatNumber(exp?.exposure + total)
                : formatNumber(1 * exp?.exposure + 1 * stake),
              id: exp?.id,
              isBettingOnThisRunner: exp?.isBettingOnThisRunner,
            };
          });
          dispatch(setPredictOdd(currentExposure));
        }
      }
    }
  }, [price, stake, placeBetValues, dispatch]);

  /* Format number */
  const formatNumber = (value) => {
    if (!value) {
      return;
    } else {
      const hasDecimal = value % 1 !== 0;
      return hasDecimal ? parseFloat(value?.toFixed(2)) : value;
    }
  };

  return (
    <div className={`flex flex-col transition-all ease-in-out duration-100 `}>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
          style={{ minHeight: "calc(-54px + 100dvh)" }}
        >
          <div className="no-scrollbar min-h-[calc(100dvh-56px)] md:mb-3">
            <EventHeader
              eventTypeId={eventTypeId}
              betType={betsType}
              setBetsType={setBetsType}
              data={data}
              myBets={myBets}
              score={data?.score}
              iFrame={iFrame}
              setIframe={setIframe}
            />

            {betsType === "openBet" && <OpenBets myBets={myBets} />}

            {
              <IFrameScore
                betType={betsType}
                setBetType={setBetsType}
                score={data?.score}
                iFrame={iFrame}
              />
            }
            {match_odds?.[0]?.score?.length > 0 && eventTypeId == 4 && (
              <ScoreCard score={data?.score} match_odds={match_odds} />
            )}
            <Score />
            <div className="w-full text-selection-none pb-3 lg:pb-0">
              <div className="px-2 font-helvetica-neue">
                {match_odds?.length > 0 && (
                  <MatchOdds match_odds={match_odds} />
                )}
                {bookmaker?.length > 0 && <Bookmaker bookmaker={bookmaker} />}
                {fancy?.length > 0 && <Fancy fancy={fancy} />}
                {eventTypeId == 7 || eventTypeId == 4339 ? (
                  <HorseGreyhound data={data} />
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
