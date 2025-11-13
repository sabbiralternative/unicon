import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../../../redux/features/auth/authSlice";
import useBonusBalance from "../../../../hooks/useBonusBalance";

const BalanceInfo = ({ balance }) => {
  const { bonusBalance } = useBonusBalance();
  const { token, user, bonusToken } = useSelector((state) => state.auth);
  const [showBalance, setShowBalance] = useState(false);
  const dispatch = useDispatch();

  const handleToggleBalance = (e) => {
    const checked = e.target.checked;
    if (checked) {
      const bonusToken = localStorage.getItem("bonusToken");
      dispatch(setUser({ user, token, bonusToken }));
    } else {
      dispatch(setUser({ user, token }));
    }
  };
  return (
    <div className="flex flex-col w-full gap-1 select-none">
      <div
        onClick={() => setShowBalance((prev) => !prev)}
        className="w-full flex px-3 gap-x-1 py-2 relative cursor-pointer rounded bg-primary"
      >
        <div className="flex flex-col items-start">
          <span className="uppercase text-primary font-normal text-xxs">
            Available Credit
          </span>
          <span className="text-primary font-lato text-sm">
            ₹ {balance?.availBalance}
          </span>
        </div>
        <div className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer mr-2 flex items-center justify-center autoAnimate -rotate-180 text-primary">
          {showBalance ? (
            <MdOutlineKeyboardArrowDown size={20} />
          ) : (
            <MdOutlineKeyboardArrowUp size={20} />
          )}
        </div>
      </div>

      <div
        className="overflow-hidden transition-height duration-300 ease-in-out"
        style={{ height: showBalance ? "226px" : "0px" }}
      >
        <div className="flex flex-col gap-1 border autoAnimate rounded-lg opacity-100">
          <div className="grid grid-cols-2 gap-1 w-full p-1">
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1 col-span-2">
              <span className="uppercase font-normal text-xxs">Balance</span>
              <span className="font-lato text-sm">
                ₹ {balance?.availBalance}
              </span>
            </div>
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
              <span className="uppercase font-normal text-xxs">Free Cash</span>
              <span className="font-lato text-sm">₹ 0.00</span>
            </div>
            <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
              <span className="uppercase font-normal text-xxs">
                Net Exposure
              </span>
              <span className="font-lato text-sm">
                ₹ {balance?.deductedExposure}
              </span>
            </div>
          </div>
          <div title="Bonus Information">
            <div className="grid grid-cols-2 gap-1 p-1">
              <div className="px-1 col-span-2 flex items-center justify-start gap-1 primary-icons">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <g clipPath="url(#clip0_532_33690)">
                    <path
                      d="M9.38052 11.7641C7.73333 11.7641 2.88544 11.7641 2.88544 11.7641C2.37081 11.7641 1.94971 12.1851 1.94971 12.6998V19.7229C1.94971 20.2375 2.37081 20.6586 2.88544 20.6586C2.88544 20.6586 7.83478 20.6586 9.48973 20.6586C9.70986 20.6586 9.70986 20.4221 9.70986 20.4221V12.082C9.70986 12.082 9.70979 11.7641 9.38052 11.7641Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                    <path
                      d="M18.1147 11.7641C18.1147 11.7641 13.2483 11.7641 11.6263 11.7641C11.2311 11.7641 11.2903 12.1756 11.2903 12.1756V20.4297C11.2903 20.4297 11.287 20.6584 11.5248 20.6584C13.1722 20.6584 18.1146 20.6584 18.1146 20.6584C18.6292 20.6584 19.0503 20.2373 19.0503 19.7227V12.6998C19.0505 12.1851 18.6294 11.7641 18.1147 11.7641Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                    <path
                      d="M9.70983 6.23815C9.70983 6.23815 9.70983 5.92108 9.39651 5.92108C7.52033 5.92108 1.8288 5.92108 1.8288 5.92108C1.31417 5.92108 0.893066 6.34218 0.893066 6.85675V9.77761C0.893066 10.2922 1.31417 10.7133 1.8288 10.7133C1.8288 10.7133 7.54583 10.7133 9.42214 10.7133C9.70983 10.7133 9.70983 10.4638 9.70983 10.4638V6.23815Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                    <path
                      d="M19.1712 5.92108C19.1712 5.92108 13.4774 5.92108 11.5794 5.92108C11.2903 5.92108 11.2903 6.19657 11.2903 6.19657V10.4696C11.2903 10.4696 11.2903 10.7133 11.6418 10.7133C13.5241 10.7133 19.1712 10.7133 19.1712 10.7133C19.6859 10.7133 20.107 10.2922 20.107 9.77761V6.85675C20.107 6.34218 19.6859 5.92108 19.1712 5.92108Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                    <path
                      d="M6.52727 5.22878C6.09915 5.22878 5.70811 5.19483 5.3652 5.12782C4.49423 4.95766 3.8956 4.62648 3.53511 4.11546C3.21211 3.65747 3.11326 3.09287 3.24122 2.43725C3.46537 1.29018 4.23572 0.658493 5.41019 0.658493C5.65875 0.658493 5.93172 0.687194 6.22159 0.743845C6.95894 0.887894 7.90204 1.3107 8.74445 1.87483C10.1737 2.83204 10.2444 3.42712 10.1732 3.7915C10.0686 4.32693 9.56811 4.70951 8.64321 4.96121C8.01834 5.13123 7.24711 5.22878 6.52727 5.22878ZM5.41026 2.15822C4.95542 2.15822 4.7991 2.2853 4.71327 2.7248C4.64305 3.08414 4.7316 3.20965 4.76065 3.25089C4.88227 3.42337 5.19906 3.56721 5.65275 3.65577C5.89756 3.70363 6.20004 3.72892 6.5272 3.72892C7.24663 3.72892 7.88043 3.61991 8.30099 3.50068C8.3316 3.49202 8.37911 3.45582 8.32819 3.42548C7.77837 2.97759 6.77249 2.37951 5.93403 2.21569C5.73872 2.17765 5.56242 2.15822 5.41026 2.15822Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                    <path
                      d="M14.4947 5.22878C14.4947 5.22878 14.4947 5.22878 14.4945 5.22878C13.7747 5.22878 13.0035 5.13122 12.3787 4.9612C11.4537 4.70957 10.9533 4.32692 10.8487 3.79156C10.7775 3.42718 10.8481 2.8321 12.2775 1.87489C13.1198 1.31076 14.0629 0.887955 14.8003 0.743906C15.0902 0.687255 15.3632 0.658554 15.6115 0.658554C16.7863 0.658554 17.5566 1.29031 17.7805 2.43738C17.9086 3.09293 17.8098 3.65754 17.4868 4.11552C17.1263 4.62661 16.5277 4.95772 15.6565 5.12788C15.3138 5.19476 14.9227 5.22878 14.4947 5.22878ZM12.7057 3.4162C12.6569 3.4445 12.6805 3.48915 12.7058 3.49644C13.1262 3.61731 13.7666 3.72898 14.4945 3.72898C14.8218 3.72898 15.1242 3.70369 15.369 3.65583C15.8227 3.56721 16.1396 3.42343 16.2611 3.25095C16.2903 3.20971 16.379 3.0842 16.3085 2.72487C16.2228 2.28536 16.0664 2.15828 15.6115 2.15828C15.4594 2.15828 15.2832 2.17764 15.0878 2.21582C14.2492 2.37957 13.2555 2.96824 12.7057 3.4162Z"
                      fill="var(--color-bg-primary)"
                    ></path>
                  </g>
                  <defs>
                    <clipPath id="clip0_532_33690">
                      <rect
                        width="20"
                        height="20"
                        fill="white"
                        transform="translate(0.5 0.658493)"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <span className="font-lato-bold font-semibold text-sm text-text_Ternary">
                  Bonus Information
                </span>
              </div>
              <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                <span className="uppercase font-normal text-xxs">
                  Bonus Balance
                </span>
                <span className="font-lato text-sm">
                  ₹ {bonusBalance?.availBalance}
                </span>
              </div>
              <div className="flex w-full flex-col rounded items-start bg-bg_Ternary8 border px-2 py-1">
                <span className="uppercase font-normal text-xxs">
                  Net Exposure
                </span>
                <span className="font-lato text-sm">
                  ₹ {bonusBalance?.deductedExposure}
                </span>
              </div>
              <div className="flex w-full col-span-2 rounded items-center justify-between bg-bg_Ternary8 border px-2 py-2">
                <span className="font-semibold text-xs">Play With Bonus</span>
                <label className="inline-flex items-center cursor-pointer relative">
                  <input
                    onChange={handleToggleBalance}
                    className="sr-only peer"
                    type="checkbox"
                    checked={bonusToken ? true : false}
                  />
                  <div className="relative bg-bg_Ternary9 border-[0.5px] font-lato border-betSlipCancelBtnColor rounded-full peer-checked:bg-bg_SwitchCheckedBg h-[20px] w-[40px]">
                    <span className="absolute top-1/2 right-[5px] transform -translate-y-1/2 text-[10px] font-bold text-text_Primary text-[8px]">
                      {!bonusToken && "OFF"}
                    </span>
                    <div
                      style={{ left: `${bonusToken ? "20px" : "0"}` }}
                      className={`bg-bg_Quaternary h-full border-[0.5px] border-betSlipCancelBtnColor transition-all ease-in-out aspect-square absolute left-0 rounded-full`}
                    ></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div title="sWalletInfo"></div>
        </div>
      </div>
    </div>
  );
};

export default BalanceInfo;
