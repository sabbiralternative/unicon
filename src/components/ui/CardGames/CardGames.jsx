/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setGroupType } from "../../../redux/features/stateSlice";
import useCardGames from "../../../hooks/useCardGames";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import toast from "react-hot-toast";
import useLanguage from "../../../hooks/use-language";
import { LanguageKey } from "../../../const";

const CardGames = () => {
  const { getLanguage } = useLanguage();
  /* get aura casino (go casino) */
  const dispatch = useDispatch();
  const { data } = useCardGames();
  const { token, bonusToken } = useSelector((state) => state?.auth);
  const [showWarning, setShowWarning] = useState(false);
  const [warnMessage, setWarnMessage] = useState(false);
  const navigate = useNavigate();

  const handleCasino = (code, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      } else {
        navigate(`/casino/${name.replace(/ /g, "")}/${code}`);
      }
    } else {
      setShowWarning(true);
    }
  };

  useEffect(() => {
    if (warnMessage) {
      return toast.error(warnMessage);
    }
  }, [warnMessage]);

  return (
    <>
      {showWarning && <WarningCondition setShowWarning={setShowWarning} />}
      <div className="flex items-center justify-between w-full pt-5 pb-2 px-3">
        <h2>{getLanguage(LanguageKey.CARD_GAMES)}</h2>
        <a
          className="cursor-pointer"
          onClick={() => dispatch(setGroupType("auraWolf"))}
        >
          {getLanguage(LanguageKey.VIEW_ALL)}
        </a>
      </div>
      <div className=" page-body" _ngcontent-ng-c1965075897="">
        <div
          _ngcontent-ng-c1965075897=""
          className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
        >
          {/* <div _ngcontent-ng-c1965075897="" className="game-play-heading">
                <h2 _ngcontent-ng-c1965075897="">{title}</h2>
              </div> */}
          <div
            _ngcontent-ng-c1965075897=""
            className="game-type-list ng-star-inserted"
          >
            <ul _ngcontent-ng-c1965075897="" className="casino-container">
              {data?.map((item, i) => {
                return (
                  <li
                    onClick={() =>
                      handleCasino(item?.game_code, item?.game_name)
                    }
                    key={i}
                    _ngcontent-ng-c1965075897=""
                    className="ng-star-inserted"
                  >
                    <a _ngcontent-ng-c1965075897="" className="active">
                      <img
                        _ngcontent-ng-c1965075897=""
                        alt=""
                        src={item?.img}
                      />
                    </a>
                    {/* <p _ngcontent-ng-c1965075897="" className="total-players">
                      <span
                        _ngcontent-ng-c1965075897=""
                        role="img"
                        className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                        aria-hidden="true"
                        data-mat-icon-type="font"
                      >
                        group
                      </span>{" "}
                      {item?.active_players}
                    </p> */}
                    <div _ngcontent-ng-c1965075897="" className="game-detail">
                      <p _ngcontent-ng-c1965075897="" className="company-type">
                        {item?.provider_name}
                      </p>
                      <p _ngcontent-ng-c1965075897="" className="game-name">
                        {item?.game_name}
                      </p>
                      <p
                        _ngcontent-ng-c1965075897=""
                        className="coins-limit ng-star-inserted"
                      >
                        {item?.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardGames;
