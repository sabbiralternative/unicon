/* eslint-disable react/no-unknown-property */
// import { useState } from "react";

const ScoreCard = ({ match_odds, score }) => {
  // const [show, setShow] = useState(true);

  return (
    <>
      {/* <div className="my-3">
        <article className="">
          <div
            onClick={() => setShow((prev) => !prev)}
            className="w-full bg-bg_Quaternary rounded-md flex items-center justify-center"
          >
            <h1 className="text-md p-[12px] font-normal w-full bg-bg_Quaternary flex items-center justify-between rounded-sm cursor-pointer">
              <span className="font-lato text-[14px]">Score</span>
              <span
                className={`flex items-center ml-[8px] autoAnimate ${
                  show ? "" : "-rotate-180"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  transform="rotate(180)"
                  viewBox="0 0 512 512"
                  height="12"
                  width="12"
                  fill="var(--color-ternary)"
                >
                  <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path>
                </svg>
              </span>
            </h1>
          </div>
          <div
            className={`transition-all duration-300 w-full bg-bg_Quaternary rounded-sm flex flex-col overflow-hidden ${
              show ? "" : "max-h-0 opacity-0"
            }`}
            style={{ visibility: show ? "visible" : "hidden" }}
          >
            <div>
              <div className="scorecard">
                {match_odds?.[0]?.score?.map((scoreInfo, i) => {
                  return (
                    <div
                      key={i}
                      className="row"
                      style={{
                        display: show ? "block" : "none",
                      }}
                    >
                      <div className="col-12 col-md-6">
                        <p className="team-1 row">
                          <span className="team-name col-3">
                            {scoreInfo?.team1Name}
                          </span>
                          <span className="score col-4 text-end">
                            {scoreInfo?.team1Score}
                          </span>
                          <span className="team-name col-5">
                            <span>{scoreInfo?.runRate} </span>
                            <span></span>
                          </span>
                        </p>

                        <p className="team-1 row mt-2">
                          <span className="team-name col-3">
                            {scoreInfo?.team2Name}
                          </span>
                          <span className="score col-4 text-end">
                            {scoreInfo?.team2Score}
                          </span>
                          <span className="team-name col-5"></span>
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <div className="row">
                          <div className="col-12">
                            {scoreInfo.target !== null && (
                              <div className="text-xl-end">
                                <span>{scoreInfo?.target}</span>
                              </div>
                            )}

                            <div className="row">
                              <div className="col-12">
                                <p className="text-xl-end ball-by-ball mt-2">
                                  {Array.isArray(scoreInfo?.recent) &&
                                    scoreInfo?.recent?.map((score, i) => {
                                      return (
                                        <span
                                          key={i}
                                          className={`ball-runs ${
                                            score === "4" ? "four" : ""
                                          } ${score === "6" ? "six" : ""} ${
                                            score === "ww" ? "wicket" : ""
                                          }`}
                                        >
                                          {score}
                                        </span>
                                      );
                                    })}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div> */}

      {/* <div>
        <div className="scorecard">
          {match_odds?.[0]?.score?.map((scoreInfo, i) => {
            return (
              <div
                key={i}
                className="row"
                // style={{
                //   display: show ? "block" : "none",
                // }}
              >
                <div className="col-12 col-md-12">
                  <p className="team-1 row">
                    <span className="team-name col-3">
                      {scoreInfo?.team1Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team1Score}
                    </span>
                    <span className="team-name col-5">
                      <span>{scoreInfo?.runRate} </span>
                      <span></span>
                    </span>
                  </p>

                  <p className="team-1 row mt-2">
                    <span className="team-name col-3">
                      {scoreInfo?.team2Name}
                    </span>
                    <span className="score col-4 text-end">
                      {scoreInfo?.team2Score}
                    </span>
                    <span className="team-name col-5">{score?.timeStatus}</span>
                  </p>
                </div>
                <div className="col-12 col-md-12">
                  <div className="row">
                    <div className="col-12">
                      {scoreInfo.target !== null && (
                        <div className="text-xl-end">
                          <span>{scoreInfo?.target}</span>
                        </div>
                      )}

                      <div className="row">
                        <div className="col-12">
                          <p className="text-xl-end ball-by-ball mt-2">
                            {Array.isArray(scoreInfo?.recent) &&
                              scoreInfo?.recent?.map((score, i) => {
                                return (
                                  <span
                                    key={i}
                                    className={`ball-runs ${
                                      score === "4" ? "four" : ""
                                    } ${score === "6" ? "six" : ""} ${
                                      score === "ww" ? "wicket" : ""
                                    }`}
                                  >
                                    {score}
                                  </span>
                                );
                              })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div> */}
      <div
        style={{ marginTop: "10px" }}
        _ngcontent-ng-c942213636=""
        className="live-match-screen ng-star-inserted"
      >
        {match_odds?.[0]?.score?.map((team, i) => {
          return (
            <div
              key={i}
              _ngcontent-ng-c3799324686=""
              class="live-score-section ng-star-inserted"
            >
              <div _ngcontent-ng-c3799324686="" class="score-wrap">
                <span _ngcontent-ng-c3799324686="" class="bowling-team">
                  <span class="small" _ngcontent-ng-c3799324686="">
                    {team?.team1Name}: {team?.team1Score}
                  </span>

                  <span class="small" _ngcontent-ng-c3799324686=""></span>
                </span>

                <span _ngcontent-ng-c3799324686="" class="batting-team">
                  <span class="small" _ngcontent-ng-c3799324686="">
                    {team?.team2Name}: {team?.team2Score}
                  </span>
                </span>
              </div>

              <div
                _ngcontent-ng-c3799324686=""
                class="score-overlay ng-star-inserted"
                style={{
                  height: `${team?.commentary ? "20px" : "1px"}`,
                  fontSize: `${team?.commentary ? "12px" : "0px"}`,
                  fontWeight: "600",
                  padding: "2px",
                }}
              >
                {team?.commentary}
              </div>
              <div
                _ngcontent-ng-c3799324686=""
                class="last-balls-record multiple-overs"
              >
                <div _ngcontent-ng-c3799324686="" class="previous-over">
                  <span _ngcontent-ng-c3799324686="" class="mat-label">
                    Recent Over
                  </span>
                  <ul _ngcontent-ng-c3799324686="">
                    {team?.recent?.map((run, i) => (
                      <li
                        key={i}
                        _ngcontent-ng-c3799324686=""
                        class="ng-star-inserted"
                      >
                        <p
                          className={`_${run > 0 ? "4" : ""}`}
                          _ngcontent-ng-c3799324686=""
                        >
                          {run}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                <span _ngcontent-ng-c3799324686="" class="batting-team">
                  <span
                    style={{ color: "black", fontSize: "12px" }}
                    class="small"
                    _ngcontent-ng-c3799324686=""
                  >
                    {team?.target}
                  </span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ScoreCard;
