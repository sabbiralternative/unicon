import { formatDate } from "../../../../utils/formateDate";

const ScoreHome = ({ data, keys }) => {
  return (
    <span
      id="inPlayTime"
      className="flex text-selection-none items-center justify-center flex-col col-span-2 pl-[2px] pr-[2px] min-h-9 active:scale-[94%] transition-all ease-in-out duration-100"
    >
      {data?.[keys]?.eventTypeId == 4 && (
        <>
          {data[keys]?.inPlay == 1 && data[keys]?.score2 ? (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {data?.[keys]?.score2?.line1}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] xs:text-[9px] font-medium w-full text-center">
                {" "}
                {data?.[keys]?.score2?.line2}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {data?.[keys]?.score2?.line3}
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data, keys)}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
      {data?.[keys]?.eventTypeId == 1 && (
        <>
          {data[keys]?.inPlay == 1 && data[keys]?.score ? (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {data?.[keys]?.timeStatus}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] xs:text-[9px] font-medium w-full text-center">
                {" "}
                {data?.[keys]?.score?.total_1}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {data?.[keys]?.score?.total_2}
              </span>
            </span>
          ) : (
            <span
              id="inPlayTime"
              className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
            >
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
                {formatDate(data, keys)}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
                {/* Tgt 145 */}
              </span>
              <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
                {/* 0/0 */}
              </span>
            </span>
          )}
        </>
      )}
      {data?.[keys]?.eventTypeId == 2 && (
        <span
          id="inPlayTime"
          className="flex items-center justify-center flex-col pl-[1px] pr-[1px]"
        >
          <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium text-ellipsis overflow-hidden w-full text-center">
            {formatDate(data, keys)}
          </span>
          <span className="text-text_InPlayEventsScoreAndTime text-[6px] xs:text-[9px] font-medium w-full text-center">
            {/* Tgt 145 */}
          </span>
          <span className="text-text_InPlayEventsScoreAndTime text-[9px] font-medium w-full text-center">
            {/* 0/0 */}
          </span>
        </span>
      )}
    </span>
  );
};

export default ScoreHome;
