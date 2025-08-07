import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DepositReport from "./DepositReport";
import WithdrawReport from "./WithdrawReport";
import useBalance from "../../../hooks/useBalance";

const Transaction = () => {
  const { refetchBalance } = useBalance();
  const navigate = useNavigate();
  const [tabs, setTabs] = useState("deposit");
  useEffect(() => {
    refetchBalance();
  }, [refetchBalance]);
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
              <span>transactions</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
        style={{ minHeight: "calc(-110px + 100dvh)", paddingTop: "10px" }}
      >
        <div className="no-scrollbar h-full overflow-y-auto">
          <div className="px-2 w-full">
            <div className="flex flex-row items-center justify-start gap-6 relative">
              <div
                onClick={() => setTabs("deposit")}
                className="cursor-pointer flex flex-row items-center justify-center"
              >
                <span
                  className={` px-[25px] py-2 text-[13px] md:text-sm lg:text-base rounded-full font-bold leading-4 active:scale-95 block z-10 ${
                    tabs === "deposit"
                      ? "text-text_Quaternary"
                      : "bg-bg_Quaternary"
                  }`}
                >
                  Deposit
                </span>
              </div>
              <div
                onClick={() => setTabs("withdraw")}
                className="cursor-pointer flex flex-row items-center justify-center"
              >
                <span
                  className={` text-sm  rounded-full  px-[25px] py-2 text-[13px] md:text-sm lg:text-base font-bold leading-4 active:scale-95 block z-10 ${
                    tabs === "withdraw"
                      ? "text-text_Quaternary"
                      : "bg-bg_Quaternary"
                  }`}
                >
                  Withdrawal
                </span>
              </div>
              <div
                className={`absolute z-1 w-full h-full transition-all ease-in-out duration-150 bg-bg_Primary text-sm bg-bg_Primary rounded-full  ${
                  tabs === "deposit" ? "left-0" : "left-[125px] "
                }`}
                style={{
                  width: "110.234px",
                }}
              ></div>
            </div>
          </div>
          {/* <div className="px-2 w-full mt-2.5 flex flex-1 gap-2 items-center justify-center">
          <div className="w-full rounded-md bg-bg_Quaternary font-lato">
            <div className="font-lato font-bold text-base leading-5"></div>
            <div className="relative shadow-md">
              <div className="w-full rounded-[5px] bg-bg_Quaternary pl-2 pr-1.5 py-1 grid grid-cols-12 items-center justify-center border border-ternary6">
                <span className="col-span-11 text-xs sm:text-sm font-lato font-semibold text-offersTextColor">
                  All
                </span>
                <button
                  className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out col-span-1 bg-bg_DropdownAvailableOffers flex items-center justify-center rounded-md min-h-[29px] min-w-[29px] cursor-pointer"
                  type="button"
                >
                  <span className="transform transition-transform duration-300 rotate-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="9"
                      viewBox="0 0 15 9"
                      fill="none"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.932735 0.901445C1.28055 0.553685 1.84446 0.553685 2.19227 0.901445L7.5 6.20921L12.8077 0.901445C13.1555 0.553685 13.7195 0.553685 14.0673 0.901445C14.4151 1.24926 14.4151 1.81321 14.0673 2.16103L8.12979 8.09853C7.78197 8.44628 7.21803 8.44628 6.87021 8.09853L0.932735 2.16103C0.584922 1.81321 0.584922 1.24926 0.932735 0.901445Z"
                        fill="var(--color-quaternary)"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
          <button
            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-max px-2 py-2 h-max rounded-md bg-bg_Success active:opacity-70 cursor-pointer"
            type="button"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 21C20.7348 21 20.4804 20.8946 20.2929 20.7071C20.1054 20.5196 20 20.2652 20 20V16H16C15.7348 16 15.4804 15.8946 15.2929 15.7071C15.1054 15.5196 15 15.2652 15 15C15 14.7348 15.1054 14.4804 15.2929 14.2929C15.4804 14.1054 15.7348 14 16 14H21C21.2652 14 21.5196 14.1054 21.7071 14.2929C21.8946 14.4804 22 14.7348 22 15V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21ZM8 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3C3.26522 3 3.51957 3.10536 3.70711 3.29289C3.89464 3.48043 4 3.73478 4 4V8H8C8.26522 8 8.51957 8.10536 8.70711 8.29289C8.89464 8.48043 9 8.73478 9 9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10Z"
                fill="white"
              ></path>
              <path
                d="M12 22C9.53971 22.0004 7.16561 21.0939 5.33178 19.4538C3.49794 17.8137 2.33308 15.5551 2.05999 13.11C2.04554 12.9787 2.0571 12.8458 2.09401 12.7189C2.13092 12.5921 2.19245 12.4738 2.2751 12.3707C2.44201 12.1625 2.68477 12.0292 2.94999 12C3.2152 11.9708 3.48115 12.0482 3.68931 12.2151C3.89748 12.382 4.03081 12.6248 4.05999 12.89C4.25765 14.6927 5.06194 16.3748 6.34099 17.6604C7.62004 18.946 9.29795 19.7589 11.0996 19.9658C12.9013 20.1727 14.7198 19.7613 16.257 18.7991C17.7942 17.8369 18.9588 16.381 19.56 14.67C19.5975 14.5385 19.6616 14.416 19.7482 14.3103C19.8349 14.2045 19.9424 14.1176 20.064 14.055C20.1856 13.9924 20.3188 13.9554 20.4552 13.9463C20.5917 13.9373 20.7286 13.9563 20.8574 14.0022C20.9862 14.0481 21.1042 14.1199 21.2042 14.2133C21.3042 14.3066 21.3839 14.4195 21.4385 14.5449C21.4931 14.6703 21.5214 14.8055 21.5217 14.9423C21.5219 15.079 21.4941 15.2144 21.44 15.34C20.7489 17.2904 19.4698 18.9783 17.779 20.1711C16.0883 21.364 14.0692 22.003 12 22ZM20.94 12C20.6928 12.0015 20.4538 11.9114 20.2691 11.747C20.0844 11.5827 19.9672 11.3557 19.94 11.11C19.7335 9.31593 18.926 7.64451 17.649 6.36761C16.3719 5.0907 14.7004 4.28345 12.9063 4.07715C11.1122 3.87086 9.30113 4.27765 7.76759 5.23137C6.23404 6.18509 5.06831 7.62963 4.45999 9.33C4.42249 9.46153 4.35842 9.58397 4.27173 9.68974C4.18504 9.79552 4.07757 9.88239 3.95597 9.94499C3.83437 10.0076 3.70122 10.0446 3.56476 10.0537C3.4283 10.0627 3.29142 10.0437 3.16259 9.99784C3.03377 9.95192 2.91573 9.88007 2.81577 9.78673C2.71581 9.69338 2.63607 9.58053 2.58146 9.45514C2.52686 9.32975 2.49855 9.19449 2.4983 9.05772C2.49804 8.92096 2.52585 8.7856 2.57999 8.66C3.33292 6.52408 4.78858 4.70698 6.70873 3.50611C8.62889 2.30524 10.8998 1.79172 13.1498 2.0496C15.3998 2.30747 17.4957 3.32147 19.0944 4.92563C20.693 6.5298 21.6998 8.62911 21.95 10.88C21.9781 11.1424 21.9014 11.4052 21.7365 11.6113C21.5717 11.8173 21.3321 11.9498 21.07 11.98L20.94 12Z"
                fill="white"
              ></path>
            </svg>
          </button>
        </div> */}

          {tabs === "deposit" && <DepositReport />}
          {tabs === "withdraw" && <WithdrawReport />}
        </div>
        <div className="px-[6px]"></div>
        <div className="py-1 px-[6px]"></div>
      </div>
    </>
  );
};

export default Transaction;
