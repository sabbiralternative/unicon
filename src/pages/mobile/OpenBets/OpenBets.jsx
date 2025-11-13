import { useNavigate } from "react-router-dom";
import OpenBetsComponent from "../../../components/ui/OpenBets/OpenBets";

const OpenBets = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="lg:hidden flex flex-col">
        <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative">
          <div className="app-bg flex-row w-full h-full flex ">
            <div className="w-[34px] h-full flex items-center justify-center primary-icons">
              <button
                onClick={() => navigate(-1)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-bg_Primary2 active:scale-150 cursor-pointer"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="var(--color-text-primary)"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--color-text-primary)"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary font-lato font-bold text-[16px] leading-5">
              <span>open bets</span>
            </span>
          </div>
        </div>
      </div>
      <OpenBetsComponent />
    </div>
  );
};

export default OpenBets;
