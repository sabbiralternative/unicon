import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setShowLoginModal } from "../../../../redux/features/stateSlice";
import { settings } from "../../../../api";
import toast from "react-hot-toast";
import WarningCondition from "../../../shared/WarningCondition/WarningCondition";

const Originals = ({ trendingGames }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const { token, bonusToken } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const [selectedCategory, setSelectedCategory] = useState();
  const categories = trendingGames && Object.keys(trendingGames);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  const filteredGames =
    selectedCategory && trendingGames
      ? trendingGames[selectedCategory]
      : trendingGames;

  const handleNavigate = (game) => {
    if (token) {
      if (bonusToken) {
        return setError("Bonus wallet is available only on sports.");
      }
      if (settings.casino_currency !== "AED") {
        navigate(
          `/casino/${game?.game_name.replace(/ /g, "")}/${game?.game_id}`,
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
    if (trendingGames) {
      const [firstCategory] = Object.keys(trendingGames);
      setSelectedCategory(firstCategory);
    }
  }, [trendingGames]);

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
      <div title="Trending Games" className="py-1 px-[6px] w-full">
        <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
          <div className="flex items-center justify-between w-full pt-0.5 rounded-t-[4px] px-0.5 bg-bg_Quaternary">
            <div className="flex items-center justify-start overflow-scroll no-scrollbar">
              {categories?.map((category) => {
                return (
                  <div
                    onClick={() => handleSelectCategory(category)}
                    key={category}
                    className={`flex active:scale-[97%] items-center justify-start mx-0.5 py-1.5 px-1 rounded-t-[6px] gap-x-0.5 h-full bg-bg_Quaternary cursor-pointer 
                    border-primary  ${
                      selectedCategory === category
                        ? "border-b-2 text-text_Secondary"
                        : "text-text_Ternary2"
                    }`}
                  >
                    <span className="text-sm capitalize whitespace-nowrap font-medium">
                      {category}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            id="scrollShow"
            className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto"
          >
            <div
              className="grid grid-rows-1 grid-flow-col 
             gap-y-2 w-max md:w-full gap-x-[6px]"
            >
              {trendingGames &&
                filteredGames?.length > 0 &&
                filteredGames?.map((game, idx) => {
                  return (
                    <div
                      onClick={() => handleNavigate(game)}
                      key={idx}
                      className="flex w-[117px] md:w-[135px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100"
                    >
                      <div className=" w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-[4px]">
                        <div className="w-full h-full aspect-[0.75]">
                          <img
                            src={game?.url_thumb}
                            width="200"
                            height="auto"
                            className="w-full h-full object-cover rounded-[4px] hover:scale-[103%] transition-all ease-in-out duration-200"
                            alt="casino-event-image"
                            loading="lazy"
                            title={game?.game_name}
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
    </>
  );
};

export default Originals;
