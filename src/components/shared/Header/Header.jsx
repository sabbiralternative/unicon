import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  setGroupType,
  setShowAppPopUp,
  setShowLeftSidebar,
} from "../../../redux/features/stateSlice";
import useContextState from "../../../hooks/useContextState";
import LoggedIn from "./LoggedIn";
import UnAuthorized from "./UnAuthorized";
import { userToken } from "../../../redux/features/auth/authSlice";
import useBalance from "../../../hooks/useBalance";
import LeftDeskSidebar from "../mobile/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../mobile/RightDeskSidebar/RightDeskSidebar";
import useBonusBalance from "../../../hooks/useBonusBalance";
import moment from "moment";
import { useEffect, useState } from "react";
import { settings } from "../../../api";
import SearchBox from "./SearchBox";
import MobileSearch from "./MobileSearch";
// import { MobileView, isMobile } from "react-device-detect";
import AppPopup from "./AppPopUp";
import MobileHeader from "./MobileHeader";
import useLanguage from "../../../hooks/useLanguage";
import { LanguageKey } from "../../../const";
import { languageValue } from "../../../utils/language";
import Notification from "./Notification";

const Header = () => {
  const { valueByLanguage } = useLanguage();
  const location = useLocation();
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [time, setTime] = useState();
  const { balance } = useBalance();
  const { bonusBalance } = useBonusBalance();
  const { logo } = useContextState();
  const token = useSelector(userToken);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showAppPopUp, windowWidth } = useSelector((state) => state?.state);

  useEffect(() => {
    setTimeout(() => {
      setTime(moment().format("h:mm:ss a"));
    }, 1000);
  }, [time]);

  useEffect(() => {
    const closePopupForForever = localStorage.getItem("closePopupForForever");
    if (location?.state?.pathname === "/apk" || location.pathname === "/apk") {
      localStorage.setItem("closePopupForForever", true);
      localStorage.removeItem("installPromptExpiryTime");
    } else {
      if (!closePopupForForever) {
        const expiryTime = localStorage.getItem("installPromptExpiryTime");
        const currentTime = new Date().getTime();

        if ((!expiryTime || currentTime > expiryTime) && settings?.apkLink) {
          localStorage.removeItem("installPromptExpiryTime");

          dispatch(setShowAppPopUp(true));
        }
      }
    }
  }, [
    dispatch,
    windowWidth,
    showAppPopUp,
    location?.state?.pathname,
    location.pathname,
  ]);

  return (
    <>
      <div
        id="header"
        title="header"
        className=" fixed top-0 w-full  z-[100]"
        style={{ zIndex: 1000, backgroundColor: "white" }}
      >
        <Notification />
        {settings?.apkLink && showAppPopUp && windowWidth < 1040 && (
          <AppPopup />
        )}
        <header>
          <div className="flex flex-col">
            <div className=" flex flex-col shadow-lg autoAnimate">
              <div
                id="header_body"
                className="w-full bg-headerBg h-[54px] lg:h-[72px] pr-[4px] md:px-4 flex items-center justify-between gap-1  relative "
              >
                <div
                  id="logoContainer"
                  className="logo flex   w-full h-full md:w-fit "
                >
                  <div
                    onClick={() => dispatch(setShowLeftSidebar(true))}
                    className=" flex items-center w-[40px] md:w-fit justify-center  lg:hidden "
                  >
                    <button
                      className="inline-block  leading-normal relative overflow-hidden  transition duration-150 ease-in-out bg-none border-none h-full flex items-center justify-center active:scale-150  w-[100%] shadow-none px-1  
cursor-pointer
"
                      type="button"
                    >
                      <span>
                        <svg
                          height="19"
                          width="16"
                          fill="var(--color-quaternary)"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  {/* Mobile search */}
                  {showMobileSearch && (
                    <MobileSearch setShowMobileSearch={setShowMobileSearch} />
                  )}

                  <div
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(0));
                    }}
                    className={`ml-[2px] md:ml-[0px]  flex items-center ${
                      showMobileSearch ? "hidden" : ""
                    }`}
                  >
                    <div className="   cursor-pointer">
                      <img
                        height={settings.logoHeight}
                        width={settings.logoWidth}
                        src={logo}
                        alt=""
                      />
                      {/* <svg
                      width="3778"
                      height="652"
                      className="h-24 w-36 hidden sm:block"
                      viewBox="0 0 3778 652"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1204.15 460.106C1204.15 481.252 1207.72 496.697 1214.88 506.441C1222.03 516.178 1234.27 520.905 1251.59 520.905V535.379C1236.31 534.003 1220.98 533.307 1205.65 533.293C1162.69 533.293 1126.57 536.498 1097.48 543.029V480.839C1074.81 523.676 1034.96 545.116 978.289 545.116C941.297 545.116 914.292 536.064 897.588 518.112C889.684 509.339 883.867 497.929 880.135 483.882C876.397 469.842 874.615 451.336 874.615 428.234V253.509C874.615 232.362 871.036 216.917 863.878 207.173C856.727 197.437 844.491 192.699 827.168 192.699V178.235C842.545 179.615 857.76 180.322 873.115 180.322C916.074 180.322 952.186 177.116 981.278 170.585V456.639C981.307 475.946 984.39 490.456 990.526 500.171C996.644 509.908 1008.41 514.646 1025.74 514.646C1045.42 514.646 1062.42 506.974 1076.44 491.554C1090.48 476.101 1097.63 457.172 1097.63 434.504V253.476C1097.63 232.344 1094.06 216.906 1086.9 207.162C1079.75 197.426 1067.51 192.688 1050.19 192.688V178.224C1065.46 179.6 1080.8 180.296 1096.13 180.311C1139.09 180.311 1175.21 177.105 1204.3 170.574V460.106H1204.15Z"
                        fill="white"
                      ></path>
                      <path
                        d="M1588.57 195.48C1596.96 204.239 1602.88 215.508 1606.32 229.287C1609.77 243.066 1611.51 261.706 1611.54 285.207V471.081C1611.54 490.011 1615.13 502.953 1622.28 510.179C1629.45 517.286 1641.69 520.854 1658.99 520.883V535.357C1609.61 533.553 1576.95 532.575 1561.28 532.575C1546.51 532.575 1514.29 533.532 1465.06 535.357V520.883C1479.85 520.854 1490.24 517.286 1496.23 510.179C1502.21 503.058 1505.2 490.025 1505.18 471.081V256.279C1505.18 237.35 1501.92 223.158 1495.19 213.421C1488.48 203.696 1476.24 198.958 1458.95 198.958C1438.66 198.929 1421.35 206.626 1407.04 222.049C1392.72 237.502 1385.56 256.41 1385.56 279.099V471.092C1385.56 490.021 1388.54 502.964 1394.5 510.19C1400.49 517.286 1410.76 520.894 1425.68 520.894V535.368C1380.21 533.542 1349.59 532.615 1333.79 532.586C1319.02 532.586 1284.85 533.542 1231.6 535.368V520.894C1249.35 520.894 1261.74 517.286 1268.61 510.19C1275.48 503.094 1279.04 490.021 1279.04 471.092V253.508C1279.06 232.362 1275.57 216.917 1268.59 207.173C1261.72 197.436 1249.35 192.699 1231.6 192.699V178.235C1247.45 179.619 1262.76 180.314 1277.54 180.321C1321.56 180.321 1357.52 177.116 1385.71 170.585V232.775C1407.93 189.917 1448.35 168.499 1507.12 168.499C1544.56 168.528 1571.72 177.529 1588.57 195.502"
                        fill="white"
                      ></path>
                      <path
                        d="M1787.72 471.092C1787.72 490.021 1791.29 502.964 1798.46 510.19C1805.6 517.297 1817.83 520.865 1835.15 520.894V535.368C1785.77 533.542 1752.95 532.615 1736.69 532.586C1721.32 532.601 1687.01 533.528 1633.76 535.368V520.894C1651.54 520.865 1663.87 517.297 1670.76 510.19C1677.62 503.094 1681.19 490.021 1681.19 471.092V253.508C1681.19 232.362 1677.78 216.92 1670.76 207.173C1663.89 197.436 1651.52 192.699 1633.74 192.699V178.235C1649.59 179.619 1664.92 180.314 1679.71 180.321C1723.7 180.321 1759.68 177.116 1787.87 170.585V471.103L1787.72 471.092ZM1779.21 14.1919C1791.3 23.6459 1797.43 36.5881 1797.43 53.2901C1797.43 69.8401 1791.29 82.9127 1779.21 92.3667C1767.13 101.828 1750.72 106.559 1729.98 106.559C1709.25 106.559 1692.84 101.828 1680.75 92.3667C1668.67 82.9127 1662.55 69.9705 1662.55 53.2901C1662.55 36.7185 1668.52 23.6459 1680.77 14.1919C1692.84 4.73062 1709.23 0 1729.96 0C1750.7 0 1767.11 4.73062 1779.19 14.1919"
                        fill="white"
                      ></path>
                      <path
                        d="M2058.78 174.041C2075.03 177.772 2088.6 182.828 2099.48 189.211C2112.31 196.585 2122.31 205.905 2129.48 217.17C2136.63 228.45 2140.22 240.838 2140.22 254.182C2140.22 270.33 2134.85 283.544 2123.96 293.835C2113.07 304.126 2099.05 309.428 2081.75 309.428C2064.41 309.428 2050.58 304.832 2040.27 295.639C2029.84 286.456 2024.75 273.949 2024.75 258.355C2024.72 244.583 2029.39 232.616 2038.77 222.452C2048.15 212.372 2060.21 205.178 2073.53 201.718C2069.5 196.709 2063.55 192.666 2055.33 189.613C2046.9 186.612 2038.02 185.108 2029.07 185.168C1999.39 185.168 1976.41 200.186 1959.84 230.384C1943.31 260.557 1935.05 300.069 1935.08 348.918C1935.08 398.166 1944.48 433.642 1963.27 455.346C1982.08 477.058 2005.5 487.75 2033.69 487.75C2050.4 487.75 2067.4 483.589 2084.42 475.384C2101.42 467.039 2116.93 452.564 2130.66 431.852L2143.18 436.014C2133.34 465.941 2116.03 491.637 2091.27 513.102C2066.51 534.499 2034.74 545.224 1995.65 545.224C1944.79 545.224 1903.31 529.652 1871.24 498.204C1839.17 466.886 1823.04 420.421 1823.04 358.654C1823.04 318.176 1830.96 283.522 1846.76 255.008C1862.6 226.458 1884.34 204.935 1911.97 190.438C1939.56 175.979 1971.18 168.749 2006.84 168.749C2025.2 168.466 2042.5 170.422 2058.75 174.019"
                        fill="white"
                      ></path>
                      <path
                        d="M2453.63 213.834C2485.71 244.033 2501.83 291.748 2501.83 357.144C2501.83 422.539 2485.72 470.266 2453.63 500.16C2421.56 530.076 2377.11 545.105 2320.27 545.105C2264.04 545.105 2219.72 530.065 2187.35 500.16C2154.97 470.255 2138.87 422.529 2138.87 357.144C2138.87 291.759 2154.97 244.044 2187.35 213.834C2219.72 183.661 2264.02 168.589 2320.27 168.618C2377.11 168.488 2421.56 183.657 2453.63 213.834ZM2269.55 225.527C2257.03 254.334 2250.59 298.149 2250.59 357.133C2250.57 416.096 2256.88 459.83 2269.55 488.337C2282.09 516.851 2299.1 531.174 2320.28 531.174C2342.04 531.145 2359.09 517.003 2371.44 488.75C2383.8 460.395 2389.97 416.519 2389.95 357.122C2389.98 297.725 2383.66 253.758 2370.99 225.222C2358.45 196.708 2341.46 182.386 2320.27 182.386C2299.07 182.386 2282.08 196.708 2269.54 225.516"
                        fill="white"
                      ></path>
                      <path
                        d="M2852.08 195.48C2860.47 204.239 2866.39 215.508 2869.84 229.287C2873.29 243.066 2875.02 261.706 2875.05 285.207V471.081C2875.05 490.011 2878.64 502.953 2885.79 510.179C2892.95 517.286 2905.19 520.854 2922.5 520.883V535.357C2873.12 533.553 2840.44 532.575 2824.79 532.575C2810.02 532.575 2777.79 533.532 2728.57 535.357V520.883C2743.37 520.854 2753.76 517.286 2759.74 510.179C2765.71 503.058 2768.7 490.025 2768.7 471.081V256.279C2768.7 237.35 2765.41 223.158 2758.71 213.421C2752 203.685 2739.76 198.958 2722.47 198.958C2702.17 198.929 2684.86 206.626 2670.55 222.049C2656.23 237.502 2649.08 256.41 2649.08 279.099V471.092C2649.08 490.021 2652.06 502.964 2658.01 510.19C2663.98 517.286 2674.27 520.894 2689.19 520.894V535.368C2643.68 533.564 2613.11 532.586 2597.3 532.586C2582.53 532.586 2548.37 533.542 2495.12 535.368V520.894C2512.89 520.865 2525.22 517.297 2532.11 510.19C2538.98 503.094 2542.57 490.021 2542.57 471.092V253.508C2542.57 232.362 2539.13 216.92 2532.11 207.173C2525.25 197.436 2512.88 192.699 2495.12 192.699V178.235C2510.97 179.619 2526.29 180.314 2541.07 180.321C2585.06 180.321 2621.02 177.116 2649.21 170.585V232.775C2671.41 189.924 2711.88 168.499 2770.64 168.499C2808.09 168.499 2835.39 177.55 2852.09 195.502"
                        fill="white"
                      ></path>
                      <path
                        d="M3039.44 353.667V344.082C3061.96 337.943 3077.47 332.39 3086.12 327.087C3094.77 321.784 3102.22 313.851 3108.66 303.017C3114.93 292.303 3118.06 281.306 3118.06 270.319C3118.06 255.041 3112.1 241.918 3100.17 230.95C3088.23 219.942 3073.31 214.519 3055.56 214.519C3027.97 214.519 3004.4 228.168 2985.14 255.443L2974.25 251.803C2988.42 221.057 3006.61 197.969 3028.85 182.539C3050.51 167.21 3076.45 159.079 3102.99 159.295C3130.74 159.295 3153.71 167.238 3171.75 183.071C3189.84 198.951 3198.9 217.464 3198.91 238.611C3198.91 252.404 3194.74 265.712 3186.39 278.535C3178.04 291.325 3164.76 302.604 3146.85 312.341C3169.97 322.773 3187.58 335.711 3199.66 351.157C3211.75 366.457 3217.86 385.81 3217.86 409.032C3217.86 448 3202.64 481.252 3172.35 508.517C3142.06 535.781 3101.51 549.549 3050.63 549.549C3016.76 549.549 2992 544.257 2976.34 533.825C2965.16 526.458 2959.48 516.993 2959.48 505.442C2959.51 496.966 2962.75 489.728 2969.19 483.73C2975.27 477.96 2983.34 474.771 2991.73 474.83C2998.28 474.801 3004.39 476.098 3010.06 478.72C3013.2 480.253 3024.38 488.196 3043.62 502.92C3062.87 517.688 3080.91 524.915 3097.62 524.915C3112.24 524.886 3124.78 519.503 3135.23 508.767C3145.66 498.063 3150.88 484.273 3150.88 467.734C3150.91 442.552 3141.46 419.316 3122.54 398.024C3103.75 376.465 3075.99 361.708 3039.46 353.645"
                        fill="white"
                      ></path>
                      <path
                        d="M3502.36 159.295V167.097C3466.69 175.558 3438.04 186.45 3416.42 199.773C3394.82 213.117 3377.76 229.309 3365.26 248.347C3352.74 267.385 3343.03 290.923 3336.17 319.143C3344.82 313.58 3351.99 310.113 3357.8 308.44C3370.42 304.824 3383.47 302.952 3396.6 302.876C3426.57 302.876 3451.64 313.036 3471.63 333.346C3491.63 353.656 3501.62 381.475 3501.62 416.53C3501.62 441.154 3496.25 463.844 3485.36 484.414C3474.47 505.007 3459.11 521.024 3439.26 532.163C3419.82 543.268 3397.81 549.069 3375.42 548.984C3351.32 549.157 3327.66 542.601 3307.09 530.054C3286.2 517.395 3269.8 499.03 3258.16 474.689C3246.37 450.337 3240.56 424.039 3240.56 395.525C3240.56 353.515 3251.29 314.547 3272.93 278.361C3294.57 242.196 3325.15 213.411 3364.96 191.971C3404.51 170.571 3450.31 159.671 3502.37 159.273M3332.31 341.529C3330.66 366.859 3329.91 385.495 3329.91 397.329C3329.91 422.637 3332.59 447.283 3337.83 471.059C3343.07 494.836 3350.2 511.407 3359.3 521.013C3365.87 527.816 3373.47 531.174 3382.43 531.174C3391.51 531.188 3399.61 526.266 3406.73 516.406C3413.9 506.528 3417.33 486.49 3417.33 456.444C3417.36 405.667 3410.75 370.608 3397.49 351.265C3388.99 338.747 3377.51 332.477 3363.18 332.477C3355.13 332.375 3344.83 335.4 3332.31 341.55"
                        fill="white"
                      ></path>
                      <path
                        d="M3577.98 167.086H3765.94L3736.1 238.328H3578.11L3563.05 275.611C3631.07 278.016 3683.43 293.831 3720.14 323.055C3750.27 347.136 3765.48 377.193 3765.48 413.086C3765.48 436.058 3758.47 458.544 3744.46 480.546C3730.42 502.54 3710.75 519.514 3685.23 531.347C3659.72 543.16 3631.83 549.147 3601.56 549.147C3568.73 549.147 3543.68 543.453 3526.07 532.043C3513.84 523.973 3507.72 514.787 3507.72 504.485C3507.72 496.563 3510.85 489.609 3517.27 483.491C3520.21 480.574 3523.71 478.272 3527.55 476.718C3531.39 475.164 3535.5 474.389 3539.65 474.439C3547.39 474.439 3555.14 475.971 3563.07 478.883C3570.97 481.817 3584.39 489.598 3603.64 502.127C3615.73 509.908 3626.01 515.21 3634.66 518.123C3640.75 520.347 3647.66 521.459 3655.41 521.459C3671.51 521.459 3685.38 515.895 3696.71 504.909C3708.07 493.923 3713.72 480.557 3713.72 465.115C3713.72 432.711 3696.42 406.392 3661.65 386.223C3626.89 366.055 3583.2 355.905 3530.22 355.905C3524.86 355.905 3516.96 356.036 3506.22 356.177L3577.98 167.086Z"
                        fill="white"
                      ></path>
                      <path
                        d="M415.469 265.592L397.115 239.99C423.522 242.903 415.469 265.592 415.469 265.592Z"
                        fill="white"
                      ></path>
                      <path
                        d="M651.16 337.53C651.16 467.756 560.907 578.368 435.455 617.738V613.293C433.955 491.413 323.13 434.091 323.13 434.091C170.824 317.231 199.318 214.693 199.318 214.693C145.47 262.691 156.935 324.457 171.704 360.219C186.332 396.123 259.447 474.298 316.414 510.06C373.391 545.942 396.962 617.596 396.962 617.596L399.201 626.92C387.662 629.171 376.01 630.796 364.295 631.788C361.335 623.23 357.944 614.826 354.134 606.61C321.63 532.858 274.053 504.768 262.566 498.78C260.632 497.824 258.828 496.694 257.045 495.575C169.922 435.612 149.785 362.295 149.785 362.295C145.014 402.762 167.694 443.947 183.647 466.897C199.601 489.717 253.166 529.109 280.454 551.212C326.249 588.224 341.474 628.148 341.474 628.148L342.506 633.016C339.67 633.016 336.844 633.147 334.008 633.147C158.881 633.147 16.9965 500.834 16.9965 337.508C16.9965 174.182 158.891 41.8804 334.019 41.8804C401.581 41.8804 464.231 61.636 515.71 95.1705L390.094 175.997L359.22 182.245C377.282 147.743 365.36 108.797 365.36 108.797C287.039 146.211 286.583 185.179 286.583 185.179L282.399 167.923C241.842 180.311 214.38 201.044 215.586 247.51C217.814 341.55 336.714 423.931 336.714 423.931C453.06 509.343 448.441 571.533 448.006 575.423C449.039 570.283 467.242 466.495 376.988 403.892C284.355 339.616 313.892 277.557 313.892 277.557C303.286 349.624 380.574 357.709 403.396 372.727C426.065 387.745 434.716 404.305 434.716 404.305C457.993 423.637 469.621 409.022 469.621 409.022C456.505 394.83 462.623 388.712 462.623 388.712C477.826 397.21 491.845 406.109 507.081 391.494C522.285 376.878 507.081 358.937 507.081 358.937C476.49 337.095 459.037 284.511 459.037 284.511C459.493 197.697 415.632 205.348 415.632 205.348L516.318 95.5617C597.921 149.145 651.171 237.47 651.171 337.508"
                        fill="white"
                      ></path>
                    </svg>
                    <svg
                      width="635"
                      height="592"
                      className=" h-8 w-8 sm:hidden"
                      viewBox="0 0 635 592"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M398.473 223.712L380.118 198.11C406.526 201.022 398.473 223.712 398.473 223.712Z"
                        fill="white"
                      ></path>
                      <path
                        d="M634.164 295.649C634.164 425.876 543.911 536.487 418.458 575.857V571.413C416.958 449.532 306.133 392.211 306.133 392.211C153.827 275.35 182.321 172.813 182.321 172.813C128.474 220.811 139.939 282.577 154.708 318.339C169.335 354.242 242.45 432.417 299.417 468.179C356.395 504.061 379.966 575.716 379.966 575.716L382.205 585.04C370.666 587.291 359.013 588.916 347.299 589.908C344.338 581.349 340.947 572.946 337.138 564.73C304.633 490.978 257.056 462.887 245.569 456.9C243.635 455.944 241.831 454.813 240.049 453.694C152.925 393.732 132.788 320.415 132.788 320.415C128.017 360.882 150.697 402.067 166.651 425.017C182.604 447.837 236.169 487.229 263.457 509.332C309.252 546.343 324.477 586.268 324.477 586.268L325.51 591.136C322.673 591.136 319.848 591.266 317.011 591.266C141.884 591.266 0 458.954 0 295.628C0 132.302 141.895 0 317.022 0C384.585 0 447.235 19.7556 498.713 53.2901L373.098 134.116L342.224 140.365C360.285 105.863 348.364 66.9169 348.364 66.9169C270.043 104.331 269.586 143.299 269.586 143.299L265.402 126.042C224.845 138.43 197.384 159.164 198.59 205.63C200.818 299.67 319.717 382.05 319.717 382.05C436.063 467.462 431.444 529.652 431.01 533.542C432.042 528.403 450.245 424.615 359.992 362.012C267.358 297.736 296.896 235.676 296.896 235.676C286.289 307.744 363.578 315.829 386.399 330.847C409.069 345.864 417.719 362.425 417.719 362.425C440.997 381.757 452.625 367.141 452.625 367.141C439.508 352.949 445.626 346.831 445.626 346.831C460.83 355.329 474.849 364.229 490.085 349.613C505.288 334.998 490.085 317.057 490.085 317.057C459.493 295.215 442.04 242.631 442.04 242.631C442.497 155.817 398.636 163.467 398.636 163.467L499.322 53.6813C580.925 107.265 634.175 195.589 634.175 295.628"
                        fill="white"
                      ></path>
                    </svg> */}
                    </div>
                  </div>
                </div>
                <SearchBox />
                <div
                  id="currentDateTime"
                  className=" hidden font-lato lg:block "
                >
                  <div className=" w-full text-text_Quaternary1 text-[10px] lg:text-[12px] flex flex-col px-2">
                    <div className="flex gap-1 items-center text-nowrap whitespace-nowrap">
                      {/* Aug 16th, 2024 ( GMT +5.5:30 ) */}
                      {moment().format("MMMM Do YYYY")}
                    </div>
                    <span className="text-text_Quaternary text-xs lg:text-[14px] text-nowrap whitespace-nowrap font-semibold ">
                      {time}
                    </span>
                  </div>
                </div>
                {token ? (
                  <LoggedIn
                    setShowMobileSearch={setShowMobileSearch}
                    showMobileSearch={showMobileSearch}
                    balance={balance}
                    bonusBalance={bonusBalance}
                  />
                ) : (
                  <UnAuthorized
                    setShowMobileSearch={setShowMobileSearch}
                    showMobileSearch={showMobileSearch}
                  />
                )}
              </div>
              <MobileHeader />
              <div className="hidden lg:block">
                <div className="flex w-full overflow-y-auto no-scrollbar gap-0.5 bg-bg_Quaternary items-center p-1 justify-center ">
                  {/* <button className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenuHover ">
                  <span className="font font-lato text-[12px]">SportsBook</span>
                </button> */}
                  <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(4));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {" "}
                      {languageValue(valueByLanguage, LanguageKey.CRICKET)}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(1));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {" "}
                      {languageValue(valueByLanguage, LanguageKey.FOOTBALL)}
                    </span>
                  </button>

                  <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(2));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {languageValue(valueByLanguage, LanguageKey.TENNIS)}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType(5));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {languageValue(valueByLanguage, LanguageKey.KABADDI)}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/horse-racing");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {languageValue(valueByLanguage, LanguageKey.HORSE)}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/greyhound-racing");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      {languageValue(valueByLanguage, LanguageKey.GREYHOUND)}
                    </span>
                  </button>

                  {/* <button className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu ">
                  <span className="font font-lato text-[12px]">
                    Horse Racing
                  </span>
                </button> */}
                  {/* <button className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu ">
                  <span className="font font-lato text-[12px]">
                    GreyHound Racing
                  </span>
                </button> */}
                  {settings.mac88 && settings.casinoCurrency === "INR" && (
                    <button
                      onClick={() => {
                        navigate("/mac88");
                      }}
                      className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                    >
                      <span className="font font-lato text-[12px]">
                        {languageValue(valueByLanguage, LanguageKey.MAC88)}
                      </span>
                    </button>
                  )}
                  {settings.aura && (
                    <button
                      onClick={() => {
                        navigate("/");
                        dispatch(setGroupType("auraWolf"));
                      }}
                      className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                    >
                      <span className="font font-lato text-[12px]">Aura</span>
                    </button>
                  )}
                  {/* <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType("liveCasinoWolf"));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu  "
                  >
                    <span className="font font-lato text-[12px]">
                      Live Casino
                    </span>
                  </button> */}
                  {/* <button
                    onClick={() => {
                      navigate("/");
                      dispatch(setGroupType("slotWolf"));
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu "
                  >
                    <span className="font font-lato text-[12px]">
                      Slot Games
                    </span>
                  </button> */}
                  <button
                    onClick={() => {
                      navigate("/live-casino");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu  "
                  >
                    <span className="font font-lato text-[12px]">
                      {languageValue(valueByLanguage, LanguageKey.LIVE_CASINO)}
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/slots");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu  "
                  >
                    <span className="font font-lato text-[12px]">Slots</span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/crash-games");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu  "
                  >
                    <span className="font font-lato text-[12px]">
                      Crash Games
                    </span>
                  </button>
                  <button
                    onClick={() => {
                      navigate("/fishing-games");
                    }}
                    className="text-xs cursor-pointer uppercase    rounded-full text-nowrap whitespace-nowrap font-semibold bg-bg_Ternary8 hover:bg-bg_Ternary9  border  w-max px-3  py-1 text-text_HeaderDeskNavMenu  "
                  >
                    <span className="font font-lato text-[12px]">
                      Fishing Games
                    </span>
                  </button>
                </div>
              </div>
            </div>

            <LeftDeskSidebar />
            <RightDeskSidebar />
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
