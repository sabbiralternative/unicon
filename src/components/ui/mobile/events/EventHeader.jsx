import { useNavigate, useParams } from "react-router-dom";
import { useVideoMutation } from "../../../../redux/features/video/video.api";
import { settings } from "../../../../api";
import { useEffect } from "react";

const EventHeader = ({
  data,
  setBetsType,
  betType,
  myBets,
  score,
  setIframe,
  score2,
}) => {
  // console.log(score);
  // console.log(score2);
  const navigate = useNavigate();
  const [sportsVideo] = useVideoMutation();
  const { eventId, eventTypeId } = useParams();

  const handleGetVideo = async (betType) => {
    if (betType === "video") {
      setBetsType("video");
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        casinoCurrency: settings.casinoCurrency,
      };
      const res = await sportsVideo(payload).unwrap();
      if (res?.success) {
        setIframe(res?.result?.url);
      }
    }
    if (betType === "tracker") {
      setBetsType("tracker");
      setIframe(score?.tracker);
    }
  };

  useEffect(() => {
    if (betType === "video") {
      if (!score?.hasVideo) {
        setBetsType("live");
      }
    }
    if (betType === "tracker") {
      if (!score?.tracker) {
        setBetsType("live");
      }
    }
  }, [eventId, eventTypeId, score, betType, setBetsType]);

  return (
    <div
      className="w-full sticky top-0 flex items-center justify-start flex-col"
      id="eventDetails4-Netherlands-vs-USA"
      style={{ zIndex: 20 }}
    >
      <div
        style={{
          backgroundColor: "#eceaea",
        }}
        className="w-full pl-[4px] pr-[4px] py-1.5 bg-bg_Quaternary flex flex-col items-center"
        id="eventPageHeader"
      >
        <div className="w-full flex items-center justify-between">
          <div
            id="playIcon"
            className={`flex items-start ${
              eventTypeId != 4 ? "justify-center" : ""
            } gap-x-1 w-full`}
          >
            <div
              onClick={() => navigate(-1)}
              className={`w-8 cursor-pointer rounded-sm h-6 flex items-center justify-center  active:scale-110 active:opacity-90 ${
                eventTypeId == 4 ? "hidden" : ""
              }`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
              >
                <path
                  d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                  fill="var(--color-bg-primary)"
                ></path>
              </svg>
            </div>

            {/* <div className="flex flex-col items-start justify-start w-[95%] break-words gap-y-0"> */}
            {eventTypeId != 2 && eventTypeId != 4 && (
              <span className="w-full text-primary text-transparent text-start bg-clip-text font-lato text-base font-bold truncate ">
                <span className="capitalize break-words">
                  {data?.result?.length > 0 && data?.result?.[0]?.eventName}
                </span>
              </span>
            )}
            {/* Added hidden class */}
            {eventTypeId == 4 && score2?.length > 0 && (
              <div className="sc_cw-header hidden" style={{ width: "100%" }}>
                <div
                  className="sc_cw-team-info-desktop"
                  style={{ width: "100%!important", fontWeight: 200 }}
                >
                  <div
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "start",
                      justifyContent: "space-between",
                    }}
                  >
                    {/* First left team  */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        {score2?.team_name}
                      </span>
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        {score2?.team_runs}
                      </span>
                      <span style={{ fontWeight: 100, fontSize: "12px" }}>
                        {score2?.team_overs}
                      </span>
                    </div>
                    {/* Second Right team */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        {score2?.team_name2}
                      </span>
                      <span style={{ fontWeight: 500, fontSize: "16px" }}>
                        {score2?.team_runs2}
                      </span>
                      <span style={{ fontWeight: 100, fontSize: "12px" }}>
                        {score2?.team_overs2}
                      </span>
                    </div>
                  </div>

                  {/* Crr, rrr, pship, last wicket */}
                  <div
                    className="sc_cw-other-info"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      overflowX: "auto",
                      fontSize: "10px",
                    }}
                  >
                    {score2?.crr && (
                      <div
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        <span style={{ fontWeight: 600 }}>CRR: </span>{" "}
                        {score2?.crr}
                      </div>
                    )}

                    {score2?.rrr !== null && score2?.rrr != 0 && (
                      <div
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        <span style={{ fontWeight: 600 }}>RRR: </span>{" "}
                        {score2?.rrr}
                      </div>
                    )}
                    {score2?.partnership_runs || score2?.partnership_balls ? (
                      <div
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        <span style={{ fontWeight: 600 }}>PSHIP: </span>{" "}
                        {score2?.partnership_runs} ({score2?.partnership_balls})
                      </div>
                    ) : null}

                    {score2?.last_wicket && (
                      <div
                        style={{ paddingLeft: "30px", paddingRight: "30px" }}
                      >
                        <span style={{ fontWeight: 600 }}>LAST WKT:</span>{" "}
                        {score2?.last_wicket}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* {eventTypeId == 1 && (
              <span className="text-primary text-transparent bg-clip-text font-lato text-xl font-bold">
                <span className="text-primary capitalize w-max break-words ">
                  {data?.result?.length > 0 && data?.result?.[0]?.eventName}
                </span>
              </span>
            )} */}

            {eventTypeId == 2 && (
              <div className="text-primary w-full  bg-bg_color_quaternary1 pr-3">
                <div className="flex flex-col items-center justify-between mb-[4px] w-full gap-y-[5px]">
                  <div className="flex justify-between items-center h-full w-full">
                    <span className="text-sm sm:text-base md:text-[18px] w-[60%] truncate font-semibold leading-5 font-lato text-text_color_primary1 text-black">
                      {score?.player1}
                    </span>
                    {eventTypeId == 2 && (
                      <span className="flex h-full items-center">
                        <div className="flex items-center justify-center gap-x-2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                          >
                            <circle
                              cx="4"
                              cy="4"
                              r="4"
                              fill={score?.service == 1 ? "#7ed321" : ""}
                            ></circle>
                          </svg>
                          {score?.set1?.map((set, i) => (
                            <span
                              key={i}
                              className="min-w-6 min-h-6 shadow-lg text-xs bg-bg_color_quaternary text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center text-black"
                            >
                              {set}
                            </span>
                          ))}
                        </div>

                        <span
                          style={{ color: "#21a8f7" }}
                          className="min-w-6 min-h-6 shadow-md text-xs bg-bg_color_quaternary mr-2 text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center ml-2"
                        >
                          {score?.team1Score}
                        </span>
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center h-full w-full">
                    <span className="text-sm sm:text-base md:text-[18px] w-[60%] truncate font-semibold leading-5 font-lato text-text_color_primary1 text-black">
                      {score?.player2}
                    </span>
                    {eventTypeId == 2 && (
                      <span className="flex h-full items-center">
                        <div className="flex items-center justify-center gap-x-2">
                          <svg
                            width="8"
                            height="8"
                            viewBox="0 0 8 8"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mr-2"
                          >
                            <circle
                              cx="4"
                              cy="4"
                              r="4"
                              fill={score?.service == 2 ? "#7ed321" : ""}
                            ></circle>
                          </svg>
                          {score?.set2?.map((set, i) => (
                            <span
                              key={i}
                              className="min-w-6 min-h-6 shadow-lg text-xs bg-bg_color_quaternary text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center text-black"
                            >
                              {set}
                            </span>
                          ))}
                        </div>

                        <span
                          style={{ color: "#21a8f7" }}
                          className="min-w-6 min-h-6 shadow-md text-xs bg-bg_color_quaternary mr-2 text-center rounded-[4px] text-text_color_secondary font-semibold flex items-center justify-center ml-2"
                        >
                          {score?.team2Score}
                        </span>
                      </span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* <span className="">vs</span>
                <span className="capitalize break-words"> USA</span> */}
            {/* </span> */}
            {/* <span className="w-full">
                <span className="w-max break-words  inline-block text-transparent bg-clip-text font-lato text-xs font-bold text-primary">
                  {data?.result?.length > 0 && data?.result?.[0]?.openDate}{" "}
                </span>
              </span> */}
            {/* </div> */}
          </div>

          {/* <div className="flex items-start justify-start w-max h-full">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1717_31141)">
                <path
                  d="M8.5 0.5C4.07841 0.5 0.5 4.078 0.5 8.5C0.5 12.9215 4.078 16.5 8.5 16.5C12.9216 16.5 16.5 12.922 16.5 8.5C16.5 4.07847 12.922 0.5 8.5 0.5ZM8.5 15.3837C4.70431 15.3837 1.61628 12.2957 1.61628 8.5C1.61628 4.70428 4.70431 1.61628 8.5 1.61628C12.2957 1.61628 15.3837 4.70428 15.3837 8.5C15.3837 12.2957 12.2957 15.3837 8.5 15.3837Z"
                  fill="#C10B32"
                ></path>
                <path
                  d="M8.5003 7.1687C8.02642 7.1687 7.68945 7.36883 7.68945 7.66367V11.6757C7.68945 11.9285 8.02642 12.1812 8.5003 12.1812C8.95311 12.1812 9.32164 11.9285 9.32164 11.6757V7.66361C9.32164 7.36879 8.95311 7.1687 8.5003 7.1687Z"
                  fill="#C10B32"
                ></path>
                <path
                  d="M8.50019 4.69409C8.01578 4.69409 7.63672 5.04159 7.63672 5.44175C7.63672 5.84194 8.01581 6.19997 8.50019 6.19997C8.97406 6.19997 9.35319 5.84194 9.35319 5.44175C9.35319 5.04159 8.97403 4.69409 8.50019 4.69409Z"
                  fill="#C10B32"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1717_31141">
                  <rect
                    width="16"
                    height="16"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  ></rect>
                </clipPath>
              </defs>
            </svg>
          </div> */}
        </div>
      </div>
      {eventTypeId == 1 && (
        <div
          className=" w-full  bg-bg_color_quaternary1 px-3"
          style={{ backgroundColor: "white" }}
        >
          <div className=" w-full flex items-center flex-col justify-center gap-y-1">
            <div className=" w-full flex items-center justify-center gap-x-2">
              <span className=" w-full text-center text-sm text-text_color_primary1  font-semibold font-lato leading-5">
                {score?.timeStatus}
              </span>
              {/* <span className=" w-1/2 text-xs text-start text-text_color_primary1  font-semibold font-lato leading-5">
                2nd Half
              </span> */}
            </div>
            <div className="flex items-start w-full justify-between ">
              <div
                title="FC Den Bosch"
                className=" w-1/3 text-text_color_primary1  font-lato text-sm font-semibold leading-5"
              >
                {score?.player1}
              </div>
              <div className=" w-1/3 flex items-center justify-center gap-x-1 text-text_color_primary1">
                {score?.team1Score && (
                  <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center bg-[var(--color-bg-primary)] text-white pt-0.5">
                    {score?.team1Score}
                  </div>
                )}

                {score?.team1Score && <div>:</div>}
                {score?.team2Score && (
                  <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center bg-[var(--color-bg-primary)] text-white pt-0.5">
                    {score?.team2Score}
                  </div>
                )}
              </div>
              <div
                title="FC Utrecht"
                className=" w-1/3 text-text_color_primary1  font-lato text-sm font-semibold leading-5 text-right"
              >
                {score?.player2}
              </div>
            </div>
          </div>
        </div>
      )}

      <hr className="w-full" />
      <div
        title="Live And Open Bets"
        className="lg:hidden w-full bg-bg_Quaternary shadow-sm"
      >
        <div
          id="step-selectMode"
          className="relative flex  rounded-lg border shadow bg-bg_Quaternary  bg-bg_Quaternary w-full border-none overflow-clip "
        >
          <button
            onClick={() => setBetsType("live")}
            className={`flex items-center justify-center w-full gap-1 tracking-wider font-lato py-2.5 uppercase relative     font-bold font-lato text-xs ${
              betType === "live" ? "text-text_Primary" : "text-text_Quinary "
            }`}
            style={{ zIndex: 10 }}
          >
            <span>
              <div className="w-2 h-2 bg-bg_Success rounded-full mr"></div>{" "}
            </span>
            LIVE
            <div
              className={`w-full absolute z-10 transition-all ease-in-out bg-bg_Primary rounded-lg h-[2px] 
            left-0 ${betType === "live" ? "block" : "hidden"}
              
              `}
              style={{
                zIndex: 9,
                width: "100%",

                bottom: "0px",
              }}
            ></div>
          </button>
          {score && score?.hasVideo && (
            <button
              onClick={() => {
                handleGetVideo("video");
                window.scrollTo(0, 0);
              }}
              className={`flex items-center justify-center w-full gap-1 tracking-wider font-lato py-2.5 uppercase relative    font-bold font-lato text-xs ${
                betType === "video" ? "text-text_Primary" : "text-text_Quinary "
              }`}
              style={{ zIndex: 10 }}
            >
              Video{" "}
              <div
                className={`w-full absolute z-10 transition-all ease-in-out bg-bg_Primary rounded-lg h-[2px] 
            left-0 ${betType === "video" ? "block" : "hidden"}
              
              `}
                style={{
                  zIndex: 9,
                  width: "100%",

                  bottom: "0px",
                }}
              ></div>
            </button>
          )}

          {score && score?.tracker && (
            <button
              onClick={() => {
                handleGetVideo("tracker");
                window.scrollTo(0, 0);
              }}
              className={`flex items-center justify-center w-full relative gap-1 tracking-wider font-lato py-2.5 uppercase  font-bold font-lato text-xs ${
                betType === "tracker"
                  ? "text-text_Primary"
                  : "text-text_Quinary "
              }`}
              style={{ zIndex: 10 }}
            >
              Tracker{" "}
              <div
                className={`w-full absolute z-10 transition-all ease-in-out bg-bg_Primary rounded-lg h-[2px] 
            left-0 ${betType === "tracker" ? "block" : "hidden"}
              
              `}
                style={{
                  zIndex: 9,
                  width: "100%",

                  bottom: "0px",
                }}
              ></div>
            </button>
          )}

          <button
            onClick={() => {
              setBetsType("openBet");
              window.scrollTo(0, 0);
            }}
            className={`flex items-center justify-center w-full relative gap-1 tracking-wider font-lato py-2.5 uppercase  font-lato font-bold text-xs ${
              betType === "openBet" ? "text-text_Primary" : "text-text_Quinary "
            }`}
            style={{ zIndex: 10 }}
          >
            OPEN BETS
            <span>
              <div>({myBets?.length})</div>
            </span>
            <div
              className={`w-full absolute z-10 transition-all ease-in-out bg-bg_Primary rounded-lg h-[2px] 
            left-0 ${betType === "openBet" ? "block" : "hidden"}
              
              `}
              style={{
                zIndex: 9,
                width: "100%",

                bottom: "0px",
              }}
            ></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventHeader;
