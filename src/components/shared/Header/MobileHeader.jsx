import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setGroupType } from "../../../redux/features/stateSlice";
import { settings } from "../../../api";
import useLanguage from "../../../hooks/useLanguage";
import { languageValue } from "../../../utils/language";
import { LanguageKey } from "../../../const";
import { useEffect } from "react";
const MobileHeader = () => {
  const location = useLocation();
  const { valueByLanguage } = useLanguage();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { group } = useSelector((state) => state.state);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [group, location]);

  return (
    <div className="lg:hidden">
      <div className="flex w-full overflow-x-auto no-scrollbar     bg-bg_Quaternary p-1 items-start lg:items-center lg:justify-center mobile-menu-list">
        <a
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(0));
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
    w-max px-3  py-1     
 lg:hidden ${
   group === 0 && pathname === "/" ? "text-secondary border border-primary" : ""
 }`}
          >
            <span className="font font-lato text-[12px]">
              {" "}
              {languageValue(valueByLanguage, LanguageKey.HOME)}
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(4));
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
          w-max px-3  py-1     
       lg:hidden ${
         group === 4 && pathname === "/"
           ? "text-secondary border border-primary"
           : ""
       }`}
          >
            <span className="font font-lato text-[12px]">
              {languageValue(valueByLanguage, LanguageKey.CRICKET)}
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(1));
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
                w-max px-3  py-1     
             lg:hidden ${
               group === 1 && pathname === "/"
                 ? "text-secondary border border-primary"
                 : ""
             }`}
          >
            <span className="font font-lato text-[12px]">
              {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(2));
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       group === 2 && pathname === "/"
         ? "text-secondary border border-primary"
         : ""
     }`}
          >
            <span className="font font-lato text-[12px]">Tennis</span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/");
            dispatch(setGroupType(5));
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       group === 5 && pathname === "/"
         ? "text-secondary border border-primary"
         : ""
     }`}
          >
            <span className="font font-lato text-[12px]">
              {languageValue(valueByLanguage, LanguageKey.KABADDI)}
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/horse-racing");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       pathname === "/horse-racing"
         ? "text-secondary border border-primary"
         : ""
     }`}
          >
            <span className="font font-lato text-[12px]">
              {languageValue(valueByLanguage, LanguageKey.HORSE)}
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/greyhound-racing");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       pathname === "/greyhound-racing"
         ? "text-secondary border border-primary"
         : ""
     }`}
          >
            <span className="font font-lato text-[12px]">
              {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
            </span>
          </button>
        </a>

        {settings.casinoCurrency === "INR" && settings.mac88 && (
          <a
            onClick={() => {
              navigate("/mac88");
            }}
          >
            <button
              className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
     
          w-max px-3  py-1     
       lg:hidden ${
         pathname === "/mac88" ? "text-secondary border border-primary" : ""
       }`}
            >
              <span className="flex w-full items-center h-full gap-3">
                <span className=" flex flex-row items-center justify-center">
                  <span className="lg:hidden">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="var(--color-secondary)"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7793 5.44C8.75526 3.192 7.71226 1.393 7.00526 0C6.29726 1.393 5.25526 3.192 2.23126 5.44C-2.92574 9.273 1.92826 14.622 6.19626 11.678C5.91826 13.505 4.96926 14.837 4.00526 15.411V16.001H10.0053V15.411C9.04126 14.837 8.09226 13.505 7.81426 11.678C12.0823 14.622 16.9363 9.273 11.7793 5.44Z"
                        fill="var(--color-secondary)"
                      ></path>
                    </svg>
                  </span>
                  <span className="font font-lato text-[12px] ml-[4px]">
                    {languageValue(valueByLanguage, LanguageKey.MAC88)}
                  </span>
                </span>
              </span>
            </button>
          </a>
        )}

        {settings.aura && (
          <a
            onClick={() => {
              navigate("/");
              dispatch(setGroupType("auraWolf"));
            }}
          >
            <button
              className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       group === "auraWolf" && pathname === "/"
         ? "text-secondary border border-primary"
         : ""
     }`}
            >
              <span className="flex w-full items-center h-full gap-3">
                <span className=" flex flex-row items-center justify-center">
                  <span className="lg:hidden">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="var(--color-secondary)"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.7793 5.44C8.75526 3.192 7.71226 1.393 7.00526 0C6.29726 1.393 5.25526 3.192 2.23126 5.44C-2.92574 9.273 1.92826 14.622 6.19626 11.678C5.91826 13.505 4.96926 14.837 4.00526 15.411V16.001H10.0053V15.411C9.04126 14.837 8.09226 13.505 7.81426 11.678C12.0823 14.622 16.9363 9.273 11.7793 5.44Z"
                        fill="var(--color-secondary)"
                      ></path>
                    </svg>
                  </span>
                  <span className="font font-lato text-[12px] ml-[4px]">
                    Aura
                  </span>
                </span>
              </span>
            </button>
          </a>
        )}
        <a
          onClick={() => {
            navigate("/live-casino");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
        w-max px-3  py-1     
     lg:hidden ${
       pathname === "/live-casino" ? "text-secondary border border-primary" : ""
     }`}
          >
            <span className="flex w-full items-center h-full gap-3">
              <span className=" flex flex-row items-center justify-center">
                <span className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#333"
                      d="M43.8 31.1 25.4 1.4c-.2-.3-.5-.6-.9-.7-.4-.1-.8 0-1.1.2L.8 14.8c-.3.2-.6.5-.7.9-.1.4 0 .8.2 1.1l18.3 29.8c.3.5.8.7 1.3.7.3 0 .5-.1.8-.2l22.6-13.9c.3-.2.6-.5.7-.9.1-.4 0-.8-.2-1.2z"
                    ></path>
                    <path
                      fill="#d2d2d2"
                      d="M8.7 6.5h26.6v35H8.7z"
                      transform="rotate(-31.647 22.023 23.998)"
                    ></path>
                    <path
                      fill="#333"
                      d="M46.9 38.2 37.4 4.6c-.2-.8-1.1-1.3-1.9-1L9.9 10.8c-.4.1-.7.4-.9.7s-.2.8-.1 1.1l9.5 33.6c.2.7.8 1.1 1.4 1.1.1 0 .3 0 .4-.1L45.9 40c.4-.1.7-.4.9-.7s.2-.7.1-1.1z"
                    ></path>
                    <path
                      fill="#333"
                      d="M8.9 12.6c-.1-.4-.1-.8.1-1.1l-2.2 1.3c0 .1 0 .3.1.4l6.2 21.7 3.8 6.2-8-28.5zM26.6 6.1l-1.1-1.8-8.9 2.5-6.2 3.9z"
                      opacity=".15"
                    ></path>
                    <path
                      fill="#e9e9e9"
                      d="M14.6 7.9h26.6v35H14.6z"
                      transform="rotate(-15.825 27.896 25.408)"
                    ></path>
                    <path
                      fill="#333"
                      d="M46.5 9.4H19.9c-.8 0-1.5.7-1.5 1.5v35c0 .8.7 1.5 1.5 1.5h26.6c.8 0 1.5-.7 1.5-1.5v-35c0-.8-.7-1.5-1.5-1.5z"
                    ></path>
                    <path fill="#fff" d="M19.9 10.9h26.6v35H19.9z"></path>
                    <path
                      fill="#333"
                      d="m37.2 9.4-.6-2h-9.2l-7.1 2zM18.4 10.9c0-.4.2-.8.5-1.1l-2.4.7v23l2 7.1V10.9z"
                      opacity=".15"
                    ></path>
                    <path
                      fill="#333"
                      d="M36.1 21.6c-1.1 0-2.1.4-2.9 1-.8-.6-1.8-1-2.9-1-2.6 0-4.8 2.1-4.8 4.8 0 4.4 6.2 8.2 6.9 8.6l.8.4.8-.4c.7-.4 6.9-4.2 6.9-8.6-.1-2.7-2.2-4.8-4.8-4.8z"
                    ></path>
                    <path
                      fill="#e44b4b"
                      d="M39.3 26.4c0 3.7-6.2 7.3-6.2 7.3S27 30.1 27 26.4c0-1.8 1.5-3.3 3.3-3.3 1.3 0 2.3.7 2.9 1.8.5-1 1.6-1.8 2.9-1.8 1.8 0 3.2 1.4 3.2 3.3z"
                    ></path>
                    <path
                      fill="#333"
                      d="M24.5 12.9h-.9l-1.7 5h.9l.5-1.5h1.5l.5 1.5h1l-1.8-5zm.1 2.8h-1l.4-1.2c0-.1.1-.2.1-.4 0 .1.1.2.1.4l.4 1.2zM42.7 38.8h-.9l-1.7 5h.9l.5-1.5H43l.5 1.5h1l-1.8-5zm.1 2.8h-1l.4-1.2c0-.1.1-.2.1-.4 0 .1.1.2.1.4l.4 1.2z"
                    ></path>
                  </svg>
                </span>
                <span className="font font-lato text-[12px] ml-[4px]">
                  {languageValue(valueByLanguage, LanguageKey.LIVE_CASINO)}
                </span>
              </span>
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/slots");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
  w-max px-3  py-1     
lg:hidden ${
              pathname === "/slots"
                ? "text-secondary border border-primary"
                : ""
            }`}
          >
            <span className="flex w-full items-center h-full gap-3">
              <span className=" flex flex-row items-center justify-center">
                <span className="lg:hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 17 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_1245_1520)">
                      <path
                        d="M13.5056 3H5.50562C4.13062 3 3.00562 4.125 3.00562 5.5V13.5C3.00562 14.875 4.13062 16 5.50562 16H13.5056C14.8806 16 16.0056 14.875 16.0056 13.5V5.5C16.0056 4.125 14.8806 3 13.5056 3ZM6.50562 14C5.67762 14 5.00562 13.328 5.00562 12.5C5.00562 11.672 5.67762 11 6.50562 11C7.33362 11 8.00562 11.672 8.00562 12.5C8.00562 13.328 7.33362 14 6.50562 14ZM6.50562 8C5.67762 8 5.00562 7.328 5.00562 6.5C5.00562 5.672 5.67762 5 6.50562 5C7.33362 5 8.00562 5.672 8.00562 6.5C8.00562 7.328 7.33362 8 6.50562 8ZM9.50562 11C8.67762 11 8.00562 10.328 8.00562 9.5C8.00562 8.672 8.67762 8 9.50562 8C10.3336 8 11.0056 8.672 11.0056 9.5C11.0056 10.328 10.3336 11 9.50562 11ZM12.5056 14C11.6776 14 11.0056 13.328 11.0056 12.5C11.0056 11.672 11.6776 11 12.5056 11C13.3336 11 14.0056 11.672 14.0056 12.5C14.0056 13.328 13.3336 14 12.5056 14ZM12.5056 8C11.6776 8 11.0056 7.328 11.0056 6.5C11.0056 5.672 11.6776 5 12.5056 5C13.3336 5 14.0056 5.672 14.0056 6.5C14.0056 7.328 13.3336 8 12.5056 8ZM12.9546 2C12.7216 0.862 11.7096 0 10.5056 0H2.50562C1.13062 0 0.00561523 1.125 0.00561523 2.5V10.5C0.00561523 11.704 0.867615 12.716 2.00562 12.949V3C2.00562 2.45 2.45562 2 3.00562 2H12.9546Z"
                        fill="#E84C4D"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_1245_1520">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="translate(0.00561523)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span className="font font-lato text-[12px] ml-[4px]">
                  Slots
                </span>
              </span>
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/crash-games");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
  w-max px-3  py-1     
lg:hidden ${
              pathname === "/crash-games"
                ? "text-secondary border border-primary"
                : ""
            }`}
          >
            <span className="flex w-full items-center h-full gap-3">
              <span className=" flex flex-row items-center justify-center">
                <span className="lg:hidden">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 64 64"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.2208 25.2081C8.58995 23.849 8.72593 21.3034 10.4923 20.1258L22.5839 12.7529L30.5466 12.458L39.7792 6.91839C46.1332 3.10599 53.757 2.0196 60.923 3.90539C62.9758 10.2502 62.0646 17.1819 58.4418 22.7807L51.1908 33.9869L50.6009 42.2446L42.3433 54.3361C41.4141 55.0795 40.1911 55.3464 39.0367 55.0578L38.8483 55.0107C38.6265 54.9553 38.424 54.8406 38.2623 54.6789L37.9195 54.3361L32.611 45.7836L26.1229 46.6683L21.1093 41.6547L16.6855 36.9361L17.8652 30.153L10.4923 25.4343L10.2208 25.2081ZM52.9603 19.2411C52.9603 23.4759 49.5273 26.9089 45.2925 26.9089C41.0576 26.9089 37.6246 23.4759 37.6246 19.2411C37.6246 15.0062 41.0576 11.5732 45.2925 11.5732C49.5273 11.5732 52.9603 15.0062 52.9603 19.2411ZM17.376 44.2883L2 58.9329L4.01489 61.0484L19.3909 46.4039L17.376 44.2883ZM10.2577 58.9316L21.2972 48.4172L23.3121 50.5327L12.2725 61.0471L10.2577 58.9316ZM13.0396 40.1595L2 50.6739L4.01489 52.7894L15.0545 42.275L13.0396 40.1595Z"
                      fill="#c10931"
                    ></path>
                  </svg>
                </span>
                <span className="font font-lato text-[12px] ml-[4px]">
                  crash-games
                </span>
              </span>
            </span>
          </button>
        </a>
        <a
          onClick={() => {
            navigate("/fishing-games");
          }}
        >
          <button
            className={`text-xs cursor-pointer uppercase mr-1 active:border-primary rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9
   
  w-max px-3  py-1     
lg:hidden ${
              pathname === "/fishing-games"
                ? "text-secondary border border-primary"
                : ""
            }`}
          >
            <span className="flex w-full items-center h-full gap-3">
              <span className=" flex flex-row items-center justify-center">
                <span className="lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="#C10B32"
                  >
                    <path
                      d="M14.0677 6.78931C13.764 6.78931 13.5361 7.03169 13.5361 7.31645C13.5361 7.60076 13.7636 7.8436 14.0677 7.8436C14.3589 7.8436 14.5949 7.60758 14.5949 7.31645C14.5949 7.02533 14.3589 6.78931 14.0677 6.78931Z"
                      fill="#C10B32"
                    ></path>
                    <path
                      d="M17.9927 10.608C17.3779 6.60243 15.2538 3.55168 11.2754 2.78131C11.0004 2.24463 10.49 1.45676 9.65215 0.856723C8.16433 -0.208889 6.37751 -0.190158 4.62924 0.419718C4.10434 0.602814 4.17347 1.3327 4.69046 1.43694C5.934 1.71661 6.45616 2.33934 6.75814 2.88185C5.69534 3.11886 5.04765 3.40974 4.30441 3.90093C0.575223 6.36261 -0.490635 9.70072 0.196696 12.5027C0.196766 12.503 0.196871 12.5032 0.196942 12.5035C1.0026 15.7845 4.37097 17.8389 4.51397 17.9248C4.59427 17.973 4.68645 18 4.78974 18C4.93744 18 5.86487 17.9688 6.50863 17.2105C7.07759 16.5404 7.23953 15.5428 6.98981 14.2455C6.92655 13.9165 6.57143 13.7262 6.25939 13.8628C6.25067 13.8666 5.37593 14.2436 4.30919 14.2036C3.02762 14.1553 2.02007 13.5383 1.31067 12.3683C1.49369 12.0502 1.87731 11.4606 2.45169 10.9593C3.4991 10.0452 4.69267 9.83606 5.9993 10.3378C6.11035 10.3818 7.85978 11.0678 10.1471 11.5235C12.4952 11.9913 15.2903 12.201 17.5028 11.2536C17.6866 11.1748 17.8174 11.1289 17.9163 10.9739C17.9857 10.8651 18.0128 10.7353 17.9927 10.608ZM6.03718 15.0466C6.08635 15.6984 5.97666 16.2013 5.71235 16.5193C5.45967 16.8233 5.11084 16.9106 4.92409 16.9357C4.5664 16.699 3.55133 15.9814 2.6543 14.9149C3.72662 15.3561 4.92672 15.3477 6.03718 15.0466ZM11.6569 10.7071C11.2047 9.8608 10.4759 8.15252 10.9224 6.57776C11.1772 5.67946 11.7958 4.93351 12.7628 4.35751C15.1666 5.47429 16.3896 7.74209 16.8815 10.3682C15.2907 10.978 13.3386 10.9364 11.6569 10.7071ZM9.94338 2.61662C9.14714 2.57122 8.42337 2.61937 7.84579 2.69232C7.6247 2.23131 7.27194 1.58573 6.51696 1.07155C8.28589 0.925534 9.34609 1.7968 9.94338 2.61662ZM6.38594 9.35699C4.52834 8.61395 2.57909 9.05591 1.06923 10.875C1.08424 9.29942 1.72061 6.8698 4.88547 4.78067C5.26168 4.53203 5.57698 4.36275 5.90768 4.23191C6.69728 3.91956 7.68339 3.74644 8.5268 3.68305C9.53808 3.60882 10.5715 3.67134 11.5376 3.92118C9.44157 5.57547 9.32665 8.0427 10.3851 10.4933C8.16001 10.0519 6.42031 9.37062 6.38594 9.35699Z"
                      fill="#C10B32"
                    ></path>
                  </svg>
                </span>
                <span className="font font-lato text-[12px] ml-[4px]">
                  fishing-games
                </span>
              </span>
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default MobileHeader;
