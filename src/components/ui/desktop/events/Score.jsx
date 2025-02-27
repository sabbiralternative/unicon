const Score = () => {
  return (
    <div
      style={{ height: "200px", marginTop: "2px" }}
      id="score-board"
      className="score-board  show mb-md-3"
    >
      <div className="sc_cw-main-container">
        <div className="sc_cw-header">
          <div
            className="sc_cw-team-info-desktop"
            style={{ width: "100%!important", fontWeight: 200 }}
          >
            <div
              style={{
                width: "100%",
                display: "grid",
                gridTemplateColumns: "auto auto auto",
                gridTemplateRows: "auto auto",
              }}
            >
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <span style={{ fontWeight: 500, fontSize: "16px" }}>AFG</span>
                <span style={{ fontWeight: 500, fontSize: "16px" }}>314/5</span>
                <span style={{ fontWeight: 100, fontSize: "12px" }}>
                  (48.3)
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%!important",
                  textAlign: "center",
                  gridColumn: 2,
                  gridRow: "1/span 2",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    fontWeight: 500,
                    fontSize: "12px",
                    paddingLeft: "50px",
                    paddingRight: "50px",
                    textTransform: "capitalize!important",
                  }}
                >
                  BALL CHALU
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%!important",
                  textAlign: "right",
                  gridColumn: 3,
                  gridRow: "1/span 2",
                }}
              >
                <span
                  style={{
                    width: "100%",
                    fontWeight: 500,
                    fontSize: "10px",
                    textTransform: "capitalize!important",
                  }}
                />
              </div>
              <div
                style={{ display: "flex", alignItems: "center", gap: "10px" }}
              >
                <div>
                  <span style={{ fontWeight: 500, fontSize: "10px" }}>
                    CRR:<span style={{ fontWeight: 100 }}>6.47</span>
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: 500, fontSize: "10px" }}>
                    RRR:<span style={{ fontWeight: 100 }}>0</span>
                  </span>
                </div>
                <div>
                  <span style={{ fontWeight: 500, fontSize: "10px" }}>
                    RRR:<span style={{ fontWeight: 100 }}>0</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="sc_cw-overs-info"
          style={{
            width: "100%!important",
            paddingTop: "2px",
            paddingBottom: "2px",
          }}
        >
          <div
            className
            style={{
              marginLeft: "5px!important",
              marginRight: "5px!important",
              display: "flex",
              justifyContent: "space-between",
              gap: "16px",
              overflowX: "auto",
              fontSize: "12px",
            }}
          >
            <div className="sc_cw-over">
              <span
                style={{
                  border: ".25px solid #000000",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                Over 49
              </span>
              <div className="sc_cw-ball">1</div>
              <div className="sc_cw-ball">2</div>
              <div className="sc_cw-ball">1l</div>
              <div className="sc_cw-ball">wd</div>
            </div>
            <div className="sc_cw-over">
              <span
                style={{
                  border: ".25px solid #000000",
                  borderRadius: "2px",
                  paddingLeft: "5px",
                  paddingRight: "5px",
                }}
              >
                Over 48
              </span>
              <div className="sc_cw-ball">1</div>
              <div className="sc_cw-ball">1</div>
              <div className="sc_cw-ball">1</div>
              <div className="sc_cw-ball">6</div>
              <div className="sc_cw-ball">1</div>
              <div className="sc_cw-ball">0</div>
            </div>
          </div>
        </div>
        <div
          className="sc_cw-other-info"
          style={{
            display: "flex",
            justifyContent: "space-between",
            overflowX: "auto",
            fontSize: "12px",
          }}
        >
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <span style={{ fontWeight: 600 }}>PSHIP R:</span> 101
          </div>
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <span style={{ fontWeight: 600 }}>PSHIP B:</span> 51
          </div>
          <div style={{ paddingLeft: "30px", paddingRight: "30px" }}>
            <span style={{ fontWeight: 600 }}>LAST WICKET:</span> A Omarzai 41
            (31){" "}
          </div>
        </div>
        <div style={{ overflowX: "auto", width: "100%" }}>
          <div
            className="sc_cw-table-container"
            style={{
              minWidth: "100%",
              width: "max-content",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className=" sc_cw-table-row sc_cw-desktop-row"
              style={{
                backgroundColor: "#cbcbcb",
                color: "#000000",
                paddingTop: "2px",
                paddingBottom: "2px",
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                }}
              >
                Batsmen{" "}
              </div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>R</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>B</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>4s</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>6s</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>SR</div>
            </div>
            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            >
              <div
                style={{
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                }}
              >
                I Zadran{" "}
              </div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>
                168
              </div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>
                142
              </div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>0</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>0</div>
              <div style={{ minWidth: "40px!important", flex: "auto" }}>
                118.31
              </div>
            </div>
            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{ paddingTop: "2px", paddingBottom: "2px" }}
            >
              <div
                style={{
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                }}
              >
                M Nabi
              </div>
              <div style={{ minWidth: "40px!important" }}>40</div>
              <div style={{ minWidth: "40px!important" }}>23</div>
              <div style={{ minWidth: "40px!important" }}>0</div>
              <div style={{ minWidth: "40px!important" }}>0</div>
              <div style={{ minWidth: "40px!important" }}>173.91 </div>
            </div>
          </div>
          <div
            className="sc_cw-table-container"
            style={{
              minWidth: "100%",
              width: "max-content",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2px",
                paddingBottom: "2px",
                backgroundColor: "#cbcbcb",
                color: " #000000",
                fontWeight: 600,
              }}
            >
              <div
                style={{
                  display: "flex!important",
                  alignItems: "center!important",
                  justifyContent: "left!important",
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                  height: "100%",
                }}
              >
                <span style={{ marginLeft: "5px" }}>Bowler</span>
              </div>
              <div style={{ minWidth: "40px!important" }}>O</div>
              <div style={{ minWidth: "40px!important" }}>M</div>
              <div style={{ minWidth: "40px!important" }}>R</div>
              <div style={{ minWidth: "40px!important" }}>W</div>
              <div style={{ minWidth: "40px!important" }}>Eco</div>
            </div>
            <div
              className="sc_cw-table-row sc_cw-desktop-row"
              style={{
                display: "flex",
                justifyContent: "space-between",
                paddingTop: "2px",
                paddingBottom: "2px",
              }}
            >
              <div
                style={{
                  display: "flex!important",
                  alignItems: "center!important",
                  justifyContent: "left!important",
                  minWidth: "95px!important",
                  whiteSpace: "nowrap",
                  textAlign: "left!important",
                  height: "100%",
                }}
              >
                <span style={{ marginLeft: "5px" }}>Jamie Overton</span>
              </div>
              <div style={{ minWidth: "40px!important" }}>0.3</div>
              <div style={{ minWidth: "40px!important" }}>0</div>
              <div style={{ minWidth: "40px!important" }}>5</div>
              <div style={{ minWidth: "40px!important" }}>0</div>
              <div style={{ minWidth: "40px!important" }}>10</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Score;
