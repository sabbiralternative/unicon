import { useLocation, useNavigate } from "react-router-dom";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import { useSelector } from "react-redux";
import moment from "moment";
import { useGetIndex } from "../../hooks";

const AffiliateUserProfitLoss = () => {
  const fromDate = new Date(new Date().setDate(new Date().getDate() - 7))
    .toISOString()
    .split("T")[0];
  const toDate = new Date().toISOString().split("T")[0];
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const punter_id = params.get("punter_id");
  const { data } = useGetIndex({
    type: "get_affiliate_pl",
    punter_id,
    from_date: fromDate,
    to_date: toDate,
  });

  const getUniqueDate = Array.from(
    new Set(data?.result?.map((item) => item?.settledTime))
  );
  return (
    <>
      <div
        onClick={() => navigate(-1)}
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
              {/* <div className="z-10">
              <div className="undefined">
                <div className="w-full grid grid-cols-12 gap-3 p-3 bg-bg_Quaternary z-50 font-lato">
                  <div className="col-span-10 px-2 flex items-center justify-between">
                    <div className="relative w-[48%] rounded-md bg-bg_Lightgray border focus-within:border-primary">
                      <input
                        placeholder="Start Date"
                        className="py-2 rounded-md px-1 sm:px-4 bg-bg_Lightgray text-[10px] sm:text-sm w-full h-full border cursor-pointer"
                        value="24/8/2024"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.17236 4.79175C6.8307 4.79175 6.54736 4.50841 6.54736 4.16675V1.66675C6.54736 1.32508 6.8307 1.04175 7.17236 1.04175C7.51403 1.04175 7.79736 1.32508 7.79736 1.66675V4.16675C7.79736 4.50841 7.51403 4.79175 7.17236 4.79175Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.8394 4.79175C13.4977 4.79175 13.2144 4.50841 13.2144 4.16675V1.66675C13.2144 1.32508 13.4977 1.04175 13.8394 1.04175C14.181 1.04175 14.4644 1.32508 14.4644 1.66675V4.16675C14.4644 4.50841 14.181 4.79175 13.8394 4.79175Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M7.58919 12.0834C7.48086 12.0834 7.37253 12.0584 7.27253 12.0168C7.16419 11.9751 7.08086 11.9168 6.99753 11.8418C6.84753 11.6834 6.75586 11.4751 6.75586 11.2501C6.75586 11.1418 6.78086 11.0334 6.82253 10.9334C6.86419 10.8334 6.92253 10.7418 6.99753 10.6584C7.08086 10.5834 7.16419 10.5251 7.27253 10.4834C7.57253 10.3584 7.94753 10.4251 8.18086 10.6584C8.33086 10.8168 8.42253 11.0334 8.42253 11.2501C8.42253 11.3001 8.41419 11.3584 8.40586 11.4168C8.39753 11.4668 8.38086 11.5168 8.35586 11.5668C8.33919 11.6168 8.31419 11.6668 8.28086 11.7168C8.25586 11.7584 8.21419 11.8001 8.18086 11.8418C8.02253 11.9918 7.80586 12.0834 7.58919 12.0834Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M10.5057 12.0832C10.3974 12.0832 10.289 12.0582 10.189 12.0166C10.0807 11.9749 9.99736 11.9166 9.91403 11.8416C9.76403 11.6832 9.67236 11.4749 9.67236 11.2499C9.67236 11.1416 9.69736 11.0332 9.73903 10.9332C9.7807 10.8332 9.83903 10.7416 9.91403 10.6582C9.99736 10.5832 10.0807 10.5249 10.189 10.4832C10.489 10.3499 10.864 10.4249 11.0974 10.6582C11.2474 10.8166 11.339 11.0332 11.339 11.2499C11.339 11.2999 11.3307 11.3582 11.3224 11.4166C11.314 11.4666 11.2974 11.5166 11.2724 11.5666C11.2557 11.6166 11.2307 11.6666 11.1974 11.7166C11.1724 11.7582 11.1307 11.7999 11.0974 11.8416C10.939 11.9916 10.7224 12.0832 10.5057 12.0832Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.4227 12.0832C13.3144 12.0832 13.206 12.0582 13.106 12.0166C12.9977 11.9749 12.9144 11.9166 12.831 11.8416C12.7977 11.7999 12.7644 11.7582 12.731 11.7166C12.6977 11.6666 12.6727 11.6166 12.656 11.5666C12.631 11.5166 12.6144 11.4666 12.606 11.4166C12.5977 11.3582 12.5894 11.2999 12.5894 11.2499C12.5894 11.0332 12.681 10.8166 12.831 10.6582C12.9144 10.5832 12.9977 10.5249 13.106 10.4832C13.4144 10.3499 13.781 10.4249 14.0144 10.6582C14.1644 10.8166 14.256 11.0332 14.256 11.2499C14.256 11.2999 14.2477 11.3582 14.2394 11.4166C14.231 11.4666 14.2144 11.5166 14.1894 11.5666C14.1727 11.6166 14.1477 11.6666 14.1144 11.7166C14.0894 11.7582 14.0477 11.7999 14.0144 11.8416C13.856 11.9916 13.6394 12.0832 13.4227 12.0832Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M7.58919 14.9999C7.48086 14.9999 7.37253 14.975 7.27253 14.9333C7.17253 14.8917 7.08086 14.8332 6.99753 14.7582C6.84753 14.5999 6.75586 14.3833 6.75586 14.1666C6.75586 14.0583 6.78086 13.9499 6.82253 13.8499C6.86419 13.7416 6.92253 13.65 6.99753 13.575C7.30586 13.2667 7.87253 13.2667 8.18086 13.575C8.33086 13.7333 8.42253 13.9499 8.42253 14.1666C8.42253 14.3833 8.33086 14.5999 8.18086 14.7582C8.02253 14.9082 7.80586 14.9999 7.58919 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M10.5057 14.9999C10.289 14.9999 10.0724 14.9082 9.91403 14.7582C9.76403 14.5999 9.67236 14.3833 9.67236 14.1666C9.67236 14.0583 9.69736 13.9499 9.73903 13.8499C9.7807 13.7416 9.83903 13.65 9.91403 13.575C10.2224 13.2667 10.789 13.2667 11.0974 13.575C11.1724 13.65 11.2307 13.7416 11.2724 13.8499C11.314 13.9499 11.339 14.0583 11.339 14.1666C11.339 14.3833 11.2474 14.5999 11.0974 14.7582C10.939 14.9082 10.7224 14.9999 10.5057 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.4227 14.9999C13.206 14.9999 12.9894 14.9083 12.831 14.7583C12.756 14.6833 12.6977 14.5916 12.656 14.4833C12.6144 14.3833 12.5894 14.2749 12.5894 14.1666C12.5894 14.0583 12.6144 13.9499 12.656 13.8499C12.6977 13.7416 12.756 13.6499 12.831 13.5749C13.0227 13.3833 13.3144 13.2916 13.581 13.3499C13.6394 13.3583 13.6894 13.3749 13.7394 13.3999C13.7894 13.4166 13.8394 13.4416 13.8894 13.4749C13.931 13.4999 13.9727 13.5416 14.0144 13.5749C14.1644 13.7333 14.256 13.9499 14.256 14.1666C14.256 14.3833 14.1644 14.5999 14.0144 14.7583C13.856 14.9083 13.6394 14.9999 13.4227 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M17.589 8.19995H3.42236C3.0807 8.19995 2.79736 7.91662 2.79736 7.57495C2.79736 7.23328 3.0807 6.94995 3.42236 6.94995H17.589C17.9307 6.94995 18.214 7.23328 18.214 7.57495C18.214 7.91662 17.9307 8.19995 17.589 8.19995Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.8392 18.9584H7.17253C4.13086 18.9584 2.38086 17.2084 2.38086 14.1667V7.08342C2.38086 4.04175 4.13086 2.29175 7.17253 2.29175H13.8392C16.8809 2.29175 18.6309 4.04175 18.6309 7.08342V14.1667C18.6309 17.2084 16.8809 18.9584 13.8392 18.9584ZM7.17253 3.54175C4.78919 3.54175 3.63086 4.70008 3.63086 7.08342V14.1667C3.63086 16.5501 4.78919 17.7084 7.17253 17.7084H13.8392C16.2225 17.7084 17.3809 16.5501 17.3809 14.1667V7.08342C17.3809 4.70008 16.2225 3.54175 13.8392 3.54175H7.17253Z"
                            fill="#C10B32"
                          ></path>
                        </svg>
                      </div>
                    </div>
                    <div className="relative w-[48%] rounded-md bg-bg_Lightgray border focus-within:border-primary">
                      <input
                        placeholder="End Date"
                        className="py-2 rounded-md px-1 sm:px-4 bg-bg_Lightgray text-[10px] sm:text-sm w-full h-full border cursor-pointer"
                        value="21/9/2024"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center px-2">
                        <svg
                          width="21"
                          height="20"
                          viewBox="0 0 21 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.17236 4.79175C6.8307 4.79175 6.54736 4.50841 6.54736 4.16675V1.66675C6.54736 1.32508 6.8307 1.04175 7.17236 1.04175C7.51403 1.04175 7.79736 1.32508 7.79736 1.66675V4.16675C7.79736 4.50841 7.51403 4.79175 7.17236 4.79175Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.8394 4.79175C13.4977 4.79175 13.2144 4.50841 13.2144 4.16675V1.66675C13.2144 1.32508 13.4977 1.04175 13.8394 1.04175C14.181 1.04175 14.4644 1.32508 14.4644 1.66675V4.16675C14.4644 4.50841 14.181 4.79175 13.8394 4.79175Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M7.58919 12.0834C7.48086 12.0834 7.37253 12.0584 7.27253 12.0168C7.16419 11.9751 7.08086 11.9168 6.99753 11.8418C6.84753 11.6834 6.75586 11.4751 6.75586 11.2501C6.75586 11.1418 6.78086 11.0334 6.82253 10.9334C6.86419 10.8334 6.92253 10.7418 6.99753 10.6584C7.08086 10.5834 7.16419 10.5251 7.27253 10.4834C7.57253 10.3584 7.94753 10.4251 8.18086 10.6584C8.33086 10.8168 8.42253 11.0334 8.42253 11.2501C8.42253 11.3001 8.41419 11.3584 8.40586 11.4168C8.39753 11.4668 8.38086 11.5168 8.35586 11.5668C8.33919 11.6168 8.31419 11.6668 8.28086 11.7168C8.25586 11.7584 8.21419 11.8001 8.18086 11.8418C8.02253 11.9918 7.80586 12.0834 7.58919 12.0834Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M10.5057 12.0832C10.3974 12.0832 10.289 12.0582 10.189 12.0166C10.0807 11.9749 9.99736 11.9166 9.91403 11.8416C9.76403 11.6832 9.67236 11.4749 9.67236 11.2499C9.67236 11.1416 9.69736 11.0332 9.73903 10.9332C9.7807 10.8332 9.83903 10.7416 9.91403 10.6582C9.99736 10.5832 10.0807 10.5249 10.189 10.4832C10.489 10.3499 10.864 10.4249 11.0974 10.6582C11.2474 10.8166 11.339 11.0332 11.339 11.2499C11.339 11.2999 11.3307 11.3582 11.3224 11.4166C11.314 11.4666 11.2974 11.5166 11.2724 11.5666C11.2557 11.6166 11.2307 11.6666 11.1974 11.7166C11.1724 11.7582 11.1307 11.7999 11.0974 11.8416C10.939 11.9916 10.7224 12.0832 10.5057 12.0832Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.4227 12.0832C13.3144 12.0832 13.206 12.0582 13.106 12.0166C12.9977 11.9749 12.9144 11.9166 12.831 11.8416C12.7977 11.7999 12.7644 11.7582 12.731 11.7166C12.6977 11.6666 12.6727 11.6166 12.656 11.5666C12.631 11.5166 12.6144 11.4666 12.606 11.4166C12.5977 11.3582 12.5894 11.2999 12.5894 11.2499C12.5894 11.0332 12.681 10.8166 12.831 10.6582C12.9144 10.5832 12.9977 10.5249 13.106 10.4832C13.4144 10.3499 13.781 10.4249 14.0144 10.6582C14.1644 10.8166 14.256 11.0332 14.256 11.2499C14.256 11.2999 14.2477 11.3582 14.2394 11.4166C14.231 11.4666 14.2144 11.5166 14.1894 11.5666C14.1727 11.6166 14.1477 11.6666 14.1144 11.7166C14.0894 11.7582 14.0477 11.7999 14.0144 11.8416C13.856 11.9916 13.6394 12.0832 13.4227 12.0832Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M7.58919 14.9999C7.48086 14.9999 7.37253 14.975 7.27253 14.9333C7.17253 14.8917 7.08086 14.8332 6.99753 14.7582C6.84753 14.5999 6.75586 14.3833 6.75586 14.1666C6.75586 14.0583 6.78086 13.9499 6.82253 13.8499C6.86419 13.7416 6.92253 13.65 6.99753 13.575C7.30586 13.2667 7.87253 13.2667 8.18086 13.575C8.33086 13.7333 8.42253 13.9499 8.42253 14.1666C8.42253 14.3833 8.33086 14.5999 8.18086 14.7582C8.02253 14.9082 7.80586 14.9999 7.58919 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M10.5057 14.9999C10.289 14.9999 10.0724 14.9082 9.91403 14.7582C9.76403 14.5999 9.67236 14.3833 9.67236 14.1666C9.67236 14.0583 9.69736 13.9499 9.73903 13.8499C9.7807 13.7416 9.83903 13.65 9.91403 13.575C10.2224 13.2667 10.789 13.2667 11.0974 13.575C11.1724 13.65 11.2307 13.7416 11.2724 13.8499C11.314 13.9499 11.339 14.0583 11.339 14.1666C11.339 14.3833 11.2474 14.5999 11.0974 14.7582C10.939 14.9082 10.7224 14.9999 10.5057 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.4227 14.9999C13.206 14.9999 12.9894 14.9083 12.831 14.7583C12.756 14.6833 12.6977 14.5916 12.656 14.4833C12.6144 14.3833 12.5894 14.2749 12.5894 14.1666C12.5894 14.0583 12.6144 13.9499 12.656 13.8499C12.6977 13.7416 12.756 13.6499 12.831 13.5749C13.0227 13.3833 13.3144 13.2916 13.581 13.3499C13.6394 13.3583 13.6894 13.3749 13.7394 13.3999C13.7894 13.4166 13.8394 13.4416 13.8894 13.4749C13.931 13.4999 13.9727 13.5416 14.0144 13.5749C14.1644 13.7333 14.256 13.9499 14.256 14.1666C14.256 14.3833 14.1644 14.5999 14.0144 14.7583C13.856 14.9083 13.6394 14.9999 13.4227 14.9999Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M17.589 8.19995H3.42236C3.0807 8.19995 2.79736 7.91662 2.79736 7.57495C2.79736 7.23328 3.0807 6.94995 3.42236 6.94995H17.589C17.9307 6.94995 18.214 7.23328 18.214 7.57495C18.214 7.91662 17.9307 8.19995 17.589 8.19995Z"
                            fill="#C10B32"
                          ></path>
                          <path
                            d="M13.8392 18.9584H7.17253C4.13086 18.9584 2.38086 17.2084 2.38086 14.1667V7.08342C2.38086 4.04175 4.13086 2.29175 7.17253 2.29175H13.8392C16.8809 2.29175 18.6309 4.04175 18.6309 7.08342V14.1667C18.6309 17.2084 16.8809 18.9584 13.8392 18.9584ZM7.17253 3.54175C4.78919 3.54175 3.63086 4.70008 3.63086 7.08342V14.1667C3.63086 16.5501 4.78919 17.7084 7.17253 17.7084H13.8392C16.2225 17.7084 17.3809 16.5501 17.3809 14.1667V7.08342C17.3809 4.70008 16.2225 3.54175 13.8392 3.54175H7.17253Z"
                            fill="#C10B32"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="active:scale-95 col-span-2 bg-titleGrd p-2 rounded relative right-2 flex sm:items-center justify-center">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.36813 13.7394C3.75286 15.1261 5.59689 15.9586 7.55282 16.08C9.50876 16.2013 11.4416 15.6033 12.9871 14.3984L18.3051 19.7164C18.4937 19.8986 18.7463 19.9994 19.0085 19.9971C19.2707 19.9948 19.5215 19.8897 19.7069 19.7043C19.8924 19.5188 19.9975 19.268 19.9998 19.0058C20.0021 18.7436 19.9013 18.491 19.7191 18.3024L14.4011 12.9844C15.6594 11.3696 16.2543 9.33558 16.0645 7.2972C15.8747 5.25883 14.9144 3.36963 13.3796 2.0149C11.8448 0.660168 9.85096 -0.0580518 7.80479 0.00671385C5.75862 0.0714795 3.81421 0.914353 2.36813 2.36344C1.62092 3.11026 1.02819 3.99698 0.623783 4.97295C0.219379 5.94892 0.0112305 6.995 0.0112305 8.05144C0.0112305 9.10787 0.219379 10.154 0.623783 11.1299C1.02819 12.1059 1.62092 12.9926 2.36813 13.7394ZM3.78213 3.77944C4.7707 2.79088 6.07145 2.17568 7.46275 2.03863C8.85406 1.90159 10.2498 2.25118 11.4123 3.02786C12.5747 3.80453 13.4319 4.96023 13.8378 6.29805C14.2437 7.63587 14.1732 9.07304 13.6383 10.3647C13.1034 11.6564 12.1372 12.7226 10.9043 13.3817C9.67135 14.0409 8.24805 14.2521 6.87685 13.9795C5.50564 13.707 4.27137 12.9674 3.38432 11.8868C2.49728 10.8062 2.01234 9.45147 2.01213 8.05344C2.00938 7.25901 2.16443 6.47195 2.46827 5.73792C2.77212 5.00389 3.2187 4.33751 3.78213 3.77744V3.77944Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                  <div className="col-span-12 text-xs sm:text-sm flex items-center gap-2 justify-center">
                    <div className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-bg_Quaternary text-text_Ternary font-bold">
                      Last 7 Days
                    </div>
                    <div className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-bg_Quaternary text-text_Ternary font-bold">
                      Last 14 Days
                    </div>
                    <div className="cursor-pointer active:scale-95 rounded-md px-3 border py-1 text-xs sm:text-sm whitespace-nowrap shadow bg-titleGrd font-medium text-primary">
                      Last 28 Days
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

              {token && getUniqueDate?.length > 0 ? (
                getUniqueDate?.map((date) => {
                  const filterByDate = data?.result?.filter(
                    (item) => item?.settledTime === date
                  );
                  const totalPnl = filterByDate?.reduce((acc, curr) => {
                    return acc + curr.memberWin;
                  }, 0);
                  return (
                    <div
                      key={date}
                      title="Profit &amp; Loss Statement"
                      className="w-full px-1 my-1.5 cursor-pointer"
                    >
                      <div className="w-full text-white rounded-[4px] flex items-center justify-between px-2.5 py-[9px] bg-headerBg">
                        <div className="text-xs   font-[600] leading-[140%]">
                          {moment(date).format("Do-MMM-YYYY")}
                        </div>
                        <div className="text-xs   font-[600] flex items-center justify-center leading-[140%]">
                          <span>Total PL</span>
                          <span className="-mt-0.5 ml-1">:</span>
                          <span
                            style={{ textShadow: "1px 1px #000000" }}
                            className={`ml-1 ${
                              totalPnl > 0
                                ? "text-text_Success"
                                : totalPnl < 0
                                ? "text-red-400"
                                : "text-white"
                            }`}
                          >
                            {totalPnl}
                          </span>
                        </div>
                      </div>
                      {filterByDate?.map((item, i) => {
                        return (
                          <div key={i}>
                            <div
                              title="Cricket - 1.232257782-3066645.FY"
                              className="w-full flex active:scale-95 transition-all ease-in-out duration-200 flex-col rounded-[4px] items-center justify-start gap-y-1 bg-bg_Quaternary my-1 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                            >
                              <div className="w-full text-start   text-text_Primary px-2.5 py-2 text-xs font-[550] capitalize flex items-center justify-between">
                                <span> {item?.narration}</span>
                                <span className="text-gray-400">
                                  {" "}
                                  {item?.time}
                                </span>
                              </div>

                              <div className="w-full bg-bg_Quaternary1 px-2.5 py-2 flex items-center justify-between  text-xs sm:text-sm">
                                <span className="text-text_Ternary w-1/2 border-r border-r-oddInputColor flex items-center justify-start gap-x-1">
                                  <span>PL:</span>
                                  <span
                                    className={`font-semibold ${
                                      item?.memberWin > 0
                                        ? "text-text_Success"
                                        : item?.memberWin < 0
                                        ? "text-text_Danger"
                                        : "text-black"
                                    } `}
                                  >
                                    ₹ {item?.memberWin}
                                  </span>
                                </span>
                                <span className="text-text_Ternary w-1/2 flex items-center justify-end gap-x-1">
                                  <span>Balance:</span>
                                  <span className={`font-semibold `}>
                                    ₹ {item?.balance}
                                  </span>
                                </span>
                              </div>
                              {/* <div className="flex items-center justify-start flex-col w-full px-2.5 py-2 text-xs sm:text-sm  text-text_Ternary">
                                <div className="flex items-center justify-between w-full font-[500]">
                                  <span>Settled Time</span>
                                  <span className="uppercase">
                                    {item?.settledTime}
                                  </span>
                                </div>
                              </div> */}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  );
                })
              ) : (
                <div className="flex items-center justify-center w-full pt-20">
                  <h2 className="text-base ">
                    No betting profit and loss yet!
                  </h2>
                </div>
              )}
            </div>
          </div>
          <RightDeskSidebar />
        </div>
      </div>
    </>
  );
};

export default AffiliateUserProfitLoss;
