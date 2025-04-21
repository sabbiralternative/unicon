const Games = ({ setShowGame }) => {
  return (
    <div className="origin-bottom-right max-w-screen-xsm w-[90%] h-[85%] fixed bottom-0 right-0 z-[9999] font-lato border overflow-hidden border-[var(--color-bg-primary)] bg-white rounded-t-xl shadow-passwordRulesBox overflow-y-auto no-scrollbar flex-col flex popUpOpenAnimation1">
      <div className="flex items-center justify-between px-2 border-b border-gray-200  sticky top-0  z-50 bg-white">
        <div className="flex items-center justify-between  w-[90%] ">
          <div
            id="step-selectMode"
            className="relative flex w-[100%]   overflow-clip flex items-center justify-center font-lato"
          >
            <button
              style={{ zIndex: "100" }}
              className=" flex items-center justify-center w-full gap-1.5 tracking-wider rounded-none px-auto py-2 px-2 text-xs font-semibold whitespace-nowrap  text-[var(--color-bg-primary)]"
            >
              <span>
                <span>🔥</span>
              </span>
              ORIGINALS
            </button>
            <button
              style={{ zIndex: "10" }}
              className=" flex items-center justify-center w-full gap-1.5 tracking-wider rounded-none px-auto py-2 px-2 text-xs font-semibold whitespace-nowrap  text-black"
            >
              <span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 64 64"
                  fill="var(--color-bg-primary)"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.2208 25.2081C8.58995 23.849 8.72593 21.3034 10.4923 20.1258L22.5839 12.7529L30.5466 12.458L39.7792 6.91839C46.1332 3.10599 53.757 2.0196 60.923 3.90539C62.9758 10.2502 62.0646 17.1819 58.4418 22.7807L51.1908 33.9869L50.6009 42.2446L42.3433 54.3361C41.4141 55.0795 40.1911 55.3464 39.0367 55.0578L38.8483 55.0107C38.6265 54.9553 38.424 54.8406 38.2623 54.6789L37.9195 54.3361L32.611 45.7836L26.1229 46.6683L21.1093 41.6547L16.6855 36.9361L17.8652 30.153L10.4923 25.4343L10.2208 25.2081ZM52.9603 19.2411C52.9603 23.4759 49.5273 26.9089 45.2925 26.9089C41.0576 26.9089 37.6246 23.4759 37.6246 19.2411C37.6246 15.0062 41.0576 11.5732 45.2925 11.5732C49.5273 11.5732 52.9603 15.0062 52.9603 19.2411ZM17.376 44.2883L2 58.9329L4.01489 61.0484L19.3909 46.4039L17.376 44.2883ZM10.2577 58.9316L21.2972 48.4172L23.3121 50.5327L12.2725 61.0471L10.2577 58.9316ZM13.0396 40.1595L2 50.6739L4.01489 52.7894L15.0545 42.275L13.0396 40.1595Z"
                    fill="var(--icon-color-brand-secondary)"
                  ></path>
                </svg>
              </span>
              CRASH GAMES
            </button>
            <div
              style={{ zIndex: 9, width: "50%", left: "0%", bottom: "0px" }}
              className="w-[48%] absolute z-10 transition-all ease-in-out bg-[var(--color-bg-primary)] rounded-sm h-[2px]"
            ></div>
          </div>
        </div>
        <svg
          onClick={() => setShowGame(false)}
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--color-bg-primary)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer bg-bg_color_quaternary size-6 rounded-full p-1"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M5 9l4 0l0 -4"></path>
          <path d="M3 3l6 6"></path>
          <path d="M5 15l4 0l0 4"></path>
          <path d="M3 21l6 -6"></path>
          <path d="M19 9l-4 0l0 -4"></path>
          <path d="M15 9l6 -6"></path>
          <path d="M19 15l-4 0l0 4"></path>
          <path d="M15 15l6 6"></path>
        </svg>
      </div>
      <div className="pt-2 pb-3 z-1 flex-1 h-max w-full">
        <div className="grid grid-cols-3 sm:grid-cols-3  gap-2 w-full px-1">
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/5%20game%20posters-02.webp?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Limbo - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Limbo - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/5%20game%20posters-03.webp?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Tower Legends - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Tower Legends - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/RPS-1735052054550?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="RPS - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="RPS - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/Untitled-2-03.png?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Slot Games - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Slot Games - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/Untitled-2-04.png?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Fortune Wheel - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Fortune Wheel - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/Untitled-2-05.png?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Coin Toss - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Coin Toss - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/Untitled-2-01.png?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Blastoff - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Blastoff - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/Aviator-1726845520975?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Aviator - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Aviator - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/MINES.png?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Mines - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Mines - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://auraimgs.imgix.net/cricket.webp?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Cricket - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Cricket - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/T20-1739615944873?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="T20 - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="T20 - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://promotions-material.s3.ap-south-1.amazonaws.com/trendingGames/7UPDOWN-1739615820768?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="7UPDOWN - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="7UPDOWN - Unicon365"
            />
          </div>
          <div className="relative overflow-hidden w-full aspect-[0.85] object-cover cursor-pointer overflow-hidden rounded-md">
            <img
              src="https://mac.imgix.net/gstatic/promotions/aviatorspribe.webp?auto=format&amp;fit=max&amp;w=600&amp;q=65?q=65&amp;w=625&amp;ar=0.75&amp;px=auto&amp;auto=format&amp;fit=fill&amp;blur=0"
              alt="Aviator - Unicon365"
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 625px"
              className="  w-full h-full active:scale-105 transition-all duration-300 ease-in-out hover:scale-105 aspect-[0.85]"
              title="Aviator - Unicon365"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Games;
