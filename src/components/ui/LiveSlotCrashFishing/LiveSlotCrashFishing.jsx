import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import useLiveCasinoLobby from "../../../hooks/useLiveCasinoLobby";
// import assets from "../../../assets";
import FAQ from "../desktop/Home/FAQ";
import {
  setSelectedCategory,
  setShowLoginModal,
} from "../../../redux/features/stateSlice";
import toast from "react-hot-toast";
import { settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";

const LiveSlotCrashFishing = ({ casinoType }) => {
  const { token, bonusToken } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { selectedCategory } = useSelector((state) => state.state);
  const { data } = useLiveCasinoLobby(casinoType);
  const categories = data && Object.keys(data);
  const [searchQuery, setSearchQuery] = useState("");
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    setSearchQuery("");
    dispatch(setSelectedCategory(category));
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredGames =
    data && selectedCategory && selectedCategory !== "ALL"
      ? { [selectedCategory]: data[selectedCategory] }
      : data;

  const getFilteredGamesByName = (games) =>
    games &&
    games?.filter((game) =>
      game?.game_name?.toLowerCase().includes(searchQuery)
    );

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (settings.casinoCurrency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`
        );
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: game?.game_name, gameId: game?.game_id });
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

      <div
        onClick={() => navigate(-1)}
        className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative"
      >
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
            <span>Casino</span>
          </span>
        </div>
      </div>

      <div
        className={`flex flex-col transition-all  ease-in-out duration-100 pt-[2px]`}
      >
        <div className="flex items-start justify-start w-full">
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-full"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
          >
            <h1 className="hidden">Play Online games</h1>
            <div className="w-full px-2">
              {/* <div className="w-full pb-1">
                <img
                  src={assets.artboard}
                  width={1641}
                  height={100}
                  className="w-full rounded aspect-[3.7409]"
                  alt="CASINO IMAGE"
                  loading="lazy"
                  title="Play Live Casino And Win Big..."
                />
              </div> */}
              <label className="sr-only">Search</label>
              <div className="relative">
                <div className="absolute left-0 pl-2 h-full flex items-center justify-center pointer-events-none">
                  <svg
                    fill="#999"
                    className="h-5 w-5"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
                  </svg>
                </div>
                <div className="px-[0.1rem] p-0.5 h-fit">
                  <input
                    value={searchQuery}
                    onChange={handleSearchChange}
                    id="default-search"
                    className="block w-full focus:outline-none rounded rounded-2 w-full p-2 pl-8 text-sm bg-bg_Quaternary text-text_Ternary"
                    placeholder="Search Games (Atleast 3 chars.....)"
                    autoComplete="off"
                    type="search"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between w-full overflow-x-auto gap-[3px] no-scrollbar mt-2 text-center">
                <div className="flex gap-[6px]">
                  <button
                    onClick={() => handleCategoryClick("ALL")}
                    className={`${
                      selectedCategory === "ALL"
                        ? "bg-primary"
                        : " bg-bg_Quaternary gap-1"
                    }
                            inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out px-4 py-2 flex items-center justify-center border whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer rounded-full text-text_Quaternary
                            
                          `}
                    type="button"
                  >
                    <span
                      className={`${
                        selectedCategory === "ALL"
                          ? "text-text_Quaternary"
                          : "text-text_Quinary"
                      }`}
                    >
                      ALL
                    </span>
                  </button>
                  {categories &&
                    categories?.map((category) => {
                      return (
                        <button
                          onClick={() => handleCategoryClick(category)}
                          key={category}
                          className={`${
                            selectedCategory === category
                              ? "  bg-bg_Primary    "
                              : " bg-bg_Quaternary  gap-1  "
                          }
                            inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out px-4 py-2 flex items-center justify-center border whitespace-nowrap uppercase font-lato font-[700] text-xs cursor-pointer rounded-full text-text_Quaternary
                            
                          `}
                          type="button"
                        >
                          <span
                            className={`${
                              selectedCategory === category
                                ? "text-text_Quaternary"
                                : "text-text_Quinary"
                            }`}
                          >
                            {category}
                          </span>
                        </button>
                      );
                    })}
                </div>
              </div>
            </div>
            <div className="bg-transparent w-full h-full">
              <div className="w-full px-[6px]">
                <div className="w-full pb-4">
                  {data &&
                    Object.entries(filteredGames)?.map(
                      ([category, games], idx) => {
                        const filteredByName = getFilteredGamesByName(games); // Filter games by name

                        // If no games match the search, show a message
                        if (filteredByName.length === 0) return null;
                        return (
                          <div key={idx} className="flex flex-col">
                            <div className="w-full overflow-hidden mt-2">
                              <div className="flex flex-wrap items-center mt-2 mb-2 justify-between gap-[5px] self-stretch text-text_Quaternary">
                                <div className="flex items-center gap-2 px-1">
                                  <span className="font-lato text-text_Ternary font-extrabold tracking-[0.3px] text-sm md:text-base lg:text-lg capitalize leading-[18px]">
                                    {category}
                                  </span>
                                </div>
                                {/* <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
                                  <button
                                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] cursor-pointer"
                                    type="button"
                                  >
                                    See All
                                  </button>
                                  <button
                                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                                    type="button"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={27}
                                      height={27}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="var(--color-primary)"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      />
                                      <path d="M15 6l-6 6l6 6" />
                                    </svg>
                                  </button>
                                  <button
                                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                                    type="button"
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width={27}
                                      height={27}
                                      viewBox="0 0 24 24"
                                      strokeWidth="1.5"
                                      stroke="var(--color-primary)"
                                      fill="none"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                    >
                                      <path
                                        stroke="none"
                                        d="M0 0h24v24H0z"
                                        fill="none"
                                      />
                                      <path d="M9 6l6 6l-6 6" />
                                    </svg>
                                  </button>
                                </div> */}
                              </div>
                              <div
                                id="scrollShow-Live Dragon Tiger"
                                className="pt-0 w-full h-max overflow-x-auto no-scrollbar"
                                style={{ scrollBehavior: "smooth" }}
                              >
                                <div className="w-full flex gap-[8px] py-1">
                                  {filteredByName?.map((game, i) => {
                                    return (
                                      <div
                                        key={i}
                                        onClick={() => handleNavigate(game)}
                                        className="relative"
                                      >
                                        <div className="w-[129px] md:w-[140px] lg:w-[160px] xl:w-[180px] flex flex-col bg-bg_Quaternary1 items-start justify-center shadow-GameShadow rounded-[6px]">
                                          <div className="relative rounded-[8px] w-full aspect-[3/4] overflow-hidden cursor-pointer shadow-sm md:hover:shadow-md">
                                            <img
                                              src={game?.url_thumb}
                                              width="auto"
                                              height="auto"
                                              className="w-full h-full transform transition-transform duration-500 ease-in-out hover:scale-110"
                                              alt="Dragon Tiger"
                                              loading="lazy"
                                              title="Dragon Tiger"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      }
                    )}
                </div>
              </div>
            </div>
            <FAQ />
          </div>
        </div>
      </div>
    </>
  );
};

export default LiveSlotCrashFishing;
