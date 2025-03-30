import { useState } from "react";

import { DatePicker } from "rsuite";
import "rsuite/DateRangePicker/styles/index.css";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import { useNavigate } from "react-router-dom";
import useGetReferralStatement from "../../hooks/useGetReferralStatement";

const ReferralStatement = () => {
  const navigate = useNavigate();
  const [fetchData, setFetchData] = useState(false);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(new Date().getDate() - 7))
  );
  const [endDate, setEndDate] = useState(new Date());
  const { data } = useGetReferralStatement(
    startDate,
    endDate,
    fetchData,
    setFetchData
  );
  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="lg:hidden flex flex-col w-fit cursor-pointer"
      >
        <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative">
          <div className="app-bg flex-row w-full h-full flex">
            <div className="w-[34px] h-full flex items-center justify-center">
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-bg_Primary2 active:scale-150 cursor-pointer primary-icon-color"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="var(--color-iconsColor)"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--color-iconsColor)"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary font-lato font-bold text-[16px] leading-5">
              <span>Back</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col transition-all ease-in-out duration-100 pt-[5px]">
        <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
          <LeftDeskSidebar />
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
          >
            <div className="flex flex-col h-full">
              <div className="main-content">
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <div>
                    <p
                      style={{
                        marginBottom: "2px",
                        marginLeft: "4px",
                        fontSize: "12px",
                      }}
                    >
                      From Date
                    </p>
                    <DatePicker
                      onChange={(date) => setStartDate(date)}
                      defaultValue={startDate}
                    />
                  </div>
                  <div>
                    <p
                      style={{
                        marginBottom: "2px",
                        marginLeft: "4px",
                        fontSize: "12px",
                      }}
                    >
                      To Date
                    </p>
                    <DatePicker
                      onChange={(date) => setEndDate(date)}
                      defaultValue={endDate}
                    />
                  </div>

                  <button
                    onClick={() => setFetchData(true)}
                    style={{
                      backgroundColor: "var(--color-bg-primary)",
                      border: "none",
                      padding: "10px 20px",
                      color: "white",
                      borderRadius: "4px",
                      cursor: "pointer",
                      height: "35px",
                      marginTop: "auto",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    Submit
                  </button>
                </div>
                {data && (
                  <div style={{ marginTop: "20px" }}>
                    <div
                      style={{
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "10px",
                        marginBottom: "10px",
                      }}
                    >
                      <div>
                        <ul>
                          <li
                            style={{
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              width: "100%",
                              fontSize: "11px",
                            }}
                          >
                            <p
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                flex: 1,
                              }}
                            >
                              Total Clients <span>{data?.total_clients}</span>
                            </p>
                            <p
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                width: "100%",
                                flex: 1,
                              }}
                            >
                              Total Deposit <span>{data?.total_deposit}</span>
                            </p>
                            <p
                              style={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "end",
                                width: "100%",
                                flex: 1,
                              }}
                            >
                              <span>Total Withdraw</span>
                              <span>{data?.total_withdraw}</span>
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <RightDeskSidebar />
        </div>
      </div>
    </>
  );
};

export default ReferralStatement;
