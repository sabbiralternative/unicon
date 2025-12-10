import { useLocation, useNavigate } from "react-router-dom";
import { from_date, to_date } from "../../utils/default-date";
import { useGetIndex } from "../../hooks";
import assets from "../../assets";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";

const AffiliateUserStatement = () => {
  const navigate = useNavigate();
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const punter_id = params.get("punter_id");

  const { data } = useGetIndex({
    type: "get_affiliate_statement",
    from_date,
    to_date,
    punter_id,
  });

  return (
    <>
      <div
        onClick={() => navigate("/affiliate?tab=user-list")}
        className="lg:hidden flex flex-col w-fit cursor-pointer text-[12px]"
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
                  width="8"
                  height="8"
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
            <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary font-lato font-bold  leading-5">
              <span>Back</span>
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col transition-all  ease-in-out duration-100 pt-[5px]">
        <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
          <LeftDeskSidebar />
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
          >
            <div className="flex flex-col h-full">
              <section
                data-v-fd406c30
                className="nw-affi-user-wrapper affi-pd-bot px-2"
              >
                <div data-v-fd406c30 className>
                  <div data-v-fd406c30 className="nw-affi-user-list-wrapper">
                    <h3 data-v-fd406c30 className="nw-affi-heading-text">
                      User Statement
                    </h3>
                    <div
                      data-v-fd406c30
                      className="table-responsive nw-affi-user-table"
                    >
                      <table data-v-fd406c30 className="table">
                        <thead data-v-fd406c30>
                          <tr data-v-fd406c30>
                            <th data-v-fd406c30>
                              <img
                                data-v-fd406c30
                                src={assets.calendar}
                                alt="affi-calendar"
                              />{" "}
                              Date
                            </th>
                            <th data-v-fd406c30>
                              <img
                                data-v-fd406c30
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAZVJREFUWIXtl08rhUEUxn8HO4qVKAtEwsKflSxYyEe4X4PIRkpkK/kcvoIit9ydv0UWtq66K3S3t8finVvX28vMdSdv5NnMvOc9c55nZs6pOZAzLMsoqQeYBzoj8VSBkpm9ej0lDUt6VnyUJQ2l+ToyNKwCfcAV8Njq1h1GgBlgBVj70lPSkVNciESOpIKLeZT+1xaL5LsIEiBpWtJULgIc8QVwWRch6Swg6U6jCEjradLfi6wq+AAzu5E06+a3blz8MQF1EbEI08i9CrwnIKkXKLrPBTOrSFoH5jxLS2Z22LIAYAoYa5gfAxtAv2fdPBBFwAmwR1IBJ862DEx41t0HxA6qghqwnbLdAXchBD78iiRsB3ZJrmDHzGqSJgm4AndSrQkAloAtNy+SJOEx/iR8AgZiCLgGHkhO4NrZ9gkow4DYQUlYAcZTtoOQ4CHIPQn/3HvgRdJoVAFpPU36e/H/Hsi9CrJO4NmNmxF7g3piPnk9lbRm5SZarlCUJQ2m+T5rTrtJHhRdLey6EVXg3MzeIsWLh3fh94EUshpERQAAAABJRU5ErkJggg=="
                                alt="affi-calendar"
                              />{" "}
                              Type
                            </th>
                            <th data-v-fd406c30>
                              <img
                                data-v-fd406c30
                                src={assets.commission}
                                alt="affi-commision-icon"
                              />{" "}
                              Amount
                            </th>
                          </tr>
                        </thead>
                        <tbody data-v-fd406c30>
                          {data?.result?.length > 0 ? (
                            data?.result?.map((item) => {
                              return (
                                <tr key={item?.punter_id} data-v-fd406c30="">
                                  <td data-v-fd406c30="">{item?.date_added}</td>

                                  <td data-v-fd406c30="">{item?.type}</td>
                                  <td data-v-fd406c30="">
                                    <span
                                      data-v-fd406c30=""
                                      className={`${
                                        item?.amount > 0
                                          ? "text-text_Success"
                                          : "text-text_Danger"
                                      }`}
                                    >
                                      {item?.amount}
                                    </span>
                                  </td>
                                </tr>
                              );
                            })
                          ) : (
                            <tr data-v-fd406c30 className="tabetdat">
                              <td data-v-fd406c30 colSpan={5}>
                                <div
                                  data-v-fd406c30
                                  className="text-center affiliate-no-recoard-data"
                                >
                                  No Records Found
                                </div>
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <RightDeskSidebar />
        </div>
      </div>
    </>
  );
};

export default AffiliateUserStatement;
