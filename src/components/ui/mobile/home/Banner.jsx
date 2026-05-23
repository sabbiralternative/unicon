import { useDispatch, useSelector } from "react-redux";
import {
  setGroupType,
  setSelectedCategory,
  setShowLoginModal,
  // setShowLoginModal,
} from "../../../../redux/features/stateSlice";
// import { userToken } from "../../../../redux/features/auth/authSlice";
// import { settings } from "../../../../api";
// import { useNavigate } from "react-router-dom";

import BannerSlider from "../../BannerSlider/BannerSlider";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { settings } from "../../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../../shared/WarningCondition/WarningCondition";
const Banner = () => {
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const handleNavigateToAviator = () => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (settings.casino_currency !== "AED") {
        navigate(`/casino/EvolutionGaming/200296`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: "EvolutionGaming", gameId: "200296" });
        setShowWarning(true);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  useEffect(() => {
    if (error) {
      return toast.error(error);
    }
  }, [error]);
  return (
    <>
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}
      <BannerSlider />

      <div className="py-1 px-[2px] w-full">
        <div className="flex flex-col items-center justify-start w-full scrollSmooth no-scrollbar">
          <div className="flex overflow-auto w-full scrollSmooth no-scrollbar">
            <div title="QuickButtons-0" className=" grid grid-row-2">
              <span
                onClick={handleNavigateToAviator}
                title="Evolution"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/evolution.avif")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/evolution1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Evolution-image"
                      loading="lazy"
                      title="Evolution"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Evolution
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>

              <span
                onClick={() => handleNavigate("/crash-games")}
                title="e-Cricket"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/crashgames.png")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/crashgames1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="e-Cricket-image"
                      loading="lazy"
                      title="e-Cricket"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Crash Games
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
            </div>
            <div title="QuickButtons-2" className=" grid grid-row-2">
              <span
                onClick={() => handleNavigate("/live-casino")}
                title="Live Casinos"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/casino.png")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/casino1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Live Casinos-image"
                      loading="lazy"
                      title="Live Casinos"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Live Casinos
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>

              <span
                onClick={() => {
                  dispatch(setGroupType("auraWolf"));
                }}
                title="Card Games"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/aura.avif")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/aura1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Card Games-image"
                      loading="lazy"
                      title="Card Games"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Card Games
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
            </div>
            <div title="QuickButtons-4" className=" grid grid-row-2">
              <span
                onClick={() => handleNavigate("/fishing-games")}
                title="Fishing games"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/fishing.avif")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/fishing1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Fishing games-image"
                      loading="lazy"
                      title="Fishing games"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Fishing games
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>

              <span
                onClick={() => handleNavigate("/slots")}
                title="Slot Games"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/slot.png")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/slot1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Slot Games-image"
                      loading="lazy"
                      title="Slot Games"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Slot Games
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
            </div>
            <div title="QuickButtons-6" className=" grid grid-row-2">
              <span
                onClick={() => {
                  dispatch(setSelectedCategory("GAME SHOW"));
                  navigate("/live-casino");
                }}
                title="Multiplayer Games"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/towerlegend.png")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/towerlegend1.png"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Multiplayer Games-image"
                      loading="lazy"
                      title="Multiplayer Games"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Game Shows
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
              <span
                onClick={() => dispatch(setGroupType("auraWolf"))}
                title="Aura"
                className=" col-span-1 px-[3px] py-[3px]"
              >
                <div
                  className="relative w-full active:scale-95 cursor-pointer  bg-bg_SkeletonBgLoaderColor transition-all ease-in-out duration-150 shadow-quickAccessBtnBoxShadows min-h-9 bg-cover bg-center bg-no-repeat rounded-[4px] overflow-hidden undefined"
                  style={{
                    backgroundImage: 'url("/aura.avif")',
                  }}
                >
                  <div className="flex justify-center w-full h-full min-h-9 relative z-10 items-center min-w-[175px] sm:min-w-[240px] md:min-w-[280px] pl-[5px] pt-[2px] pb-[2px] pr-1  opacity-100">
                    <img
                      src="/aura1.svg"
                      width="16"
                      height="16"
                      className="  w-4 h-4 sm:w-5 sm:h-5  ml-1 autoAnimate  "
                      alt="Aura-image"
                      loading="lazy"
                      title="Aura"
                    />
                    <span className=" ml-1 autoAnimate text-white text-xs capitalize pr-[2px] md:text-sm text-nowrap w-full truncate font-lato-bold  font-semibold md:font-semibold">
                      Mac88
                    </span>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-full  min-h-9 rounded-[4px] "></div>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
