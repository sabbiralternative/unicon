import { useNavigate } from "react-router-dom";
import { API } from "../../../api";
import { useDispatch, useSelector } from "react-redux";
import { setShowLoginModal } from "../../../redux/features/stateSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AxiosSecure } from "../../../lib/AxiosSecure";

const AuraWolf = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { token, bonusToken } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const [warnMessage, setWarnMessage] = useState("");

  useEffect(() => {
    const getGames = async () => {
      const res = await AxiosSecure.post(API.auraWolf, {
        gameList: "ALL",
        product: "ALL",
        isHome: false,
      });

      if (res?.status === 200) {
        const result = res?.data;
        setData(result);
      }
    };
    getGames();
  }, []);

  const handleAuraCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      dispatch(setShowLoginModal(true));
    }
  };

  useEffect(() => {
    if (warnMessage) {
      return toast.error(warnMessage);
    }
  }, [warnMessage]);

  return (
    <div title="IndianCardGames" className="py-1 px-[6px] w-full">
      <div className="flex flex-col w-full bg-bg_Quaternary rounded-[4px] shadow-homeCasinoCardGamesShadow divide-y">
        <div className="flex items-center w-full py-2 px-2.5 gap-2.5 rounded-t-[4px] bg-bg_Quaternary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="16"
            height="16"
            x="0"
            y="0"
            viewBox="0 0 511.643 511.643"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M453.209 184.081C373.725 121.725 300.804 41.437 270.565 6.713c-7.795-8.951-21.691-8.951-29.486 0-30.24 34.723-103.16 115.011-182.644 177.368C22.372 212.373 1.267 254.915 1.267 299.99c0 80 66.652 144.853 148.871 144.853 27.807 0 53.101-10.455 71.97-27.539v28.247c0 34.386-24.644 38.65-43.766 54.707-4.599 3.862-1.775 11.384 4.23 11.384h145.994c5.984 0 8.811-7.47 4.262-11.358-18.926-16.176-43.294-19.786-43.294-54.478v-28.503c18.869 17.084 44.163 27.539 71.97 27.539 82.219 0 148.871-64.853 148.871-144.853.001-45.074-21.104-87.616-57.166-115.908z"
                fill="var(--color-iconsColor)"
                opacity="1"
              ></path>
            </g>
          </svg>
          <div className="w-[100%] flex flex-row justify-between">
            <span className="text-text_Ternary font-semibold capitalize">
              Indian Card Games
            </span>
            {/* <div className="flex w-[108.75px] items-center justify-end gap-[5px]">
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out font-lato text-text_DepositTextColor font-semibold text-[12px] leading-[18px] transition-all ease-in-out duration-200 cursor-pointer"
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
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="var(--color-primary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M15 6l-6 6l6 6"></path>
                </svg>
              </button>
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex w-[22px] h-[22px] p-1 justify-center items-center gap-[10px] text-text_Primary border bg-bg_Foundation rounded cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="27"
                  height="27"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="var(--color-primary)"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                  <path d="M9 6l6 6l-6 6"></path>
                </svg>
              </button>
            </div> */}
          </div>
        </div>
        <div
          id="scrollShow"
          className="py-2.5 px-2.5 transition-all ease-in-out duration-200 w-full h-max overflow-x-auto overflow-x-auto"
        >
          <div className="grid grid-rows-3 grid-flow-col gap-y-2 w-max md:w-full gap-x-[6px]">
            {data?.data?.map((item, i) => {
              return (
                <div
                  onClick={() =>
                    handleAuraCasino(item?.game_id, item?.game_name)
                  }
                  key={i}
                  className="flex w-[120px] sm:w-[180px] md:w-[140px] flex-col items-center justify-center cursor-pointer transition-all ease-in-out duration-100"
                >
                  <div className="w-full bg-transparent flex flex-col transition-all ease-in-out duration-200 relative overflow-hidden rounded-[4px]">
                    <div className="aspect-[1.00] w-[120px] sm:w-[180px] md:w-[140px]">
                      <img
                        src={item?.img}
                        height="auto"
                        className="w-full h-full object-cover rounded-[6px] hover:scale-[103%] transition-all ease-in-out duration-200"
                        alt="Live Teenpatti"
                        loading="lazy"
                        title="Live Teenpatti"
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
};

export default AuraWolf;
