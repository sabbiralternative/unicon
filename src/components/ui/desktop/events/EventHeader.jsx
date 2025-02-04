const EventHeader = ({ data, eventTypeId }) => {
  const score = data?.score;
  return (
    <div className="flex flex-col w-full">
      <div
        style={{
          backgroundColor: "#eceaea",
        }}
        className="flex flex-row w-full justify-between items-center px-2 mt-2 bg-bg_Quaternary rounded-sm py-2"
      >
        <div
          id="playIcon"
          className="flex items-center justify-start gap-x-3 w-[92%]"
        >
          <span className="min-w-[4%]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
            >
              <g clipPath="url(#clip0_1875_77994)">
                <path
                  d="M13.2984 9.60764L9.14541 6.58877C8.993 6.4783 8.79068 6.46166 8.62363 6.54751C8.45525 6.6327 8.3501 6.80574 8.3501 6.99275V13.0285C8.3501 13.2175 8.45525 13.3899 8.62363 13.4751C8.69485 13.511 8.77271 13.529 8.85125 13.529C8.95374 13.529 9.05756 13.4964 9.14541 13.4318L13.2984 10.4156C13.4295 10.3191 13.506 10.17 13.506 10.0116C13.5067 9.85056 13.4281 9.70215 13.2984 9.60764Z"
                  fill="var(--color-bg-primary)"
                ></path>
                <path
                  d="M10.0003 0C4.47639 0 0 4.47639 0 10.0003C0 15.5223 4.47639 19.9973 10.0003 19.9973C15.5229 19.9973 20 15.5216 20 10.0003C20.0007 4.47639 15.5229 0 10.0003 0ZM10.0003 18.3288C5.40015 18.3288 1.67049 14.6012 1.67049 10.0003C1.67049 5.40148 5.40015 1.66916 10.0003 1.66916C14.5998 1.66916 18.3288 5.40082 18.3288 10.0003C18.3295 14.6012 14.5998 18.3288 10.0003 18.3288Z"
                  fill="var(--color-bg-primary)"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_1875_77994">
                  <rect width="20" height="20" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </span>
          {eventTypeId != 2 && (
            <span className="text-primary text-transparent bg-clip-text font-lato text-xl font-bold">
              <span className="text-primary capitalize w-max break-words ">
                {data?.result?.length > 0 && data?.result?.[0]?.eventName}
              </span>
            </span>
          )}

          {eventTypeId == 2 && (
            <div className="text-primary w-full  bg-bg_color_quaternary1 px-3">
              <div className="flex flex-col items-center justify-center my-[4px] w-full gap-y-[5px]">
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
                  <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center bg-[var(--color-bg-primary)] text-white ">
                    {score?.team1Score}
                  </div>
                )}

                {score?.team1Score && <div>:</div>}

                {score?.team2Score && (
                  <div className="min-w-5 min-h-5 aspect-square bg-bg_brand_primary  text-center text-xs rounded-[4px] text-text_color_primary2 font-lato font-medium leading-4 flex items-center justify-center bg-[var(--color-bg-primary)] text-white ">
                    {score?.team2Score}
                  </div>
                )}
              </div>
              <div
                title="FC Utrecht"
                className=" w-1/3 text-text_color_primary1  font-lato text-right text-sm font-semibold leading-5"
              >
                {score?.player2}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventHeader;
