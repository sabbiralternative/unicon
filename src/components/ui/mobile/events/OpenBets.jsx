import { useState } from "react";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";
import { useNavigate } from "react-router-dom";

const OpenBets = ({ myBets }) => {
  const [activeTab, setActiveTab] = useState(true);

  const navigate = useNavigate();

  return (
    <div title="Open Bets" className="">
      <div className="flex items-start justify-start flex-col w-full px-2 py-1">
        <div
          onClick={() => setActiveTab((prev) => !prev)}
          id="matched_1"
          className="w-full flex items-center justify-between bg-primary transition-all ease-in-out my-1 py-1 rounded-[6px] origin-center active:opacity-95 cursor-pointer"
        >
          <div className="head pl-2">
            <span className="text-primary site-font text-sm">Open Bets</span>
          </div>
          <div className="cursor-pointer mr-2 transform transition-transform ease-in-out flex items-center justify-center w-max origin-center active:scale-90 active:opacity-85 text-primary">
            {activeTab ? (
              <MdOutlineKeyboardArrowUp size={20} />
            ) : (
              <MdOutlineKeyboardArrowDown size={20} />
            )}
          </div>
        </div>
        <div
          className={`BetSections w-full origin-top scaleVerticalOpen ${
            activeTab ? "" : "hidden"
          }`}
        >
          {myBets?.length > 0 ? (
            myBets?.map((item, i) => {
              return (
                <div
                  key={i}
                  className="bg-bg_Quaternary rounded-md mb-1 px-4 w-full py-3 box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);"
                >
                  <div
                    onClick={() => {
                      setActiveTab((prev) => !prev);
                      navigate(
                        `/game-details/${item?.eventTypeId}/${item?.eventId}`
                      );
                    }}
                    id="eventHeader"
                    className="font-lato-bold font-semibold cursor-pointer"
                  >
                    <div className="font-medium underline capitalize text-sm text-text_ChangeAnimationBack">
                      {item?.title}
                    </div>
                  </div>
                  <div className="font-normal text-text_Ternary capitalize text-xs font-lato">
                    {item?.marketName}: {item?.nation}
                  </div>
                  <div
                    id="tiem_Date_of_order_0_1724640350689"
                    className="text-xs font-lato font-normal"
                  >
                    <strong>Placed : </strong>
                    <span>{item?.placeDate}</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="flex items-center bg-white py-2 mb-3 mt-1 rounded-sm pl-2">
              You have no Matched Bets.
            </div>
          )}

          {/* <div className="bg-bg_Quaternary rounded-md mb-1 px-4 w-full py-3 box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);">
            <div id="eventHeader" className="font-lato-bold font-semibold">
              <div className="font-medium underline capitalize text-sm text-text_ChangeAnimationLay">
                22 runs - No for 100 @ 120 liability 120.00.
              </div>
            </div>
            <div className="font-normal text-text_Ternary capitalize text-xs font-lato">
              1st Wicket SL
            </div>
            <div
              id="tiem_Date_of_order_0_1724925600000"
              className="text-xs font-lato font-normal"
            >
              <strong>Placed : </strong>
              <span>8/28/2024, 1:44:54 PM</span>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default OpenBets;
