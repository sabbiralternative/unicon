/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { settings } from "../../../api";
import WarningCondition from "../../shared/WarningCondition/WarningCondition";
import { setGroupType } from "../../../redux/features/stateSlice";
import useLiveCasino from "../../../hooks/useLiveCasino";
import toast from "react-hot-toast";

const LiveCasino = () => {
  /* get live casino */
  const dispatch = useDispatch();
  const { data } = useLiveCasino();
  const { token, bonusToken } = useSelector((state) => state?.auth);
  const [showWarning, setShowWarning] = useState(false);
  const [gameInfo, setGameInfo] = useState({ gameName: "", gameId: "" });
  const [warnMessage, setWarnMessage] = useState("");
  const navigate = useNavigate();

  const handleCasino = (id, name) => {
    if (token) {
      if (bonusToken) {
        return setWarnMessage("Bonus wallet is available only on sports.");
      }
      if (settings.casinoCurrency !== "AED") {
        navigate(`/casino/${name.replace(/ /g, "")}/${id}`);
      } else {
        setGameInfo({ gameName: "", gameId: "" });
        setGameInfo({ gameName: name, gameId: id });
        setShowWarning(true);
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
    <div
      _ngcontent-ng-c943649379=""
      className="casino-section live-casino game-play mt-2 mb-3 ng-star-inserted"
    >
      {showWarning && (
        <WarningCondition gameInfo={gameInfo} setShowWarning={setShowWarning} />
      )}

      <div _ngcontent-ng-c943649379="" className="game-play-heading">
        <h2 _ngcontent-ng-c943649379="">Live Casino</h2>
        <a
          _ngcontent-ng-c943649379=""
          routerlink="/live-casino-lobby/live_casino"
          routerlinkactive="active-link"
          className="view-all-link ng-star-inserted"
          onClick={() => dispatch(setGroupType("liveCasinoWolf"))}
        >
          View All
        </a>
      </div>
      <div
        _ngcontent-ng-c943649379=""
        className="game-type-list ng-star-inserted"
      >
        <ul _ngcontent-ng-c943649379="">
          {data?.map((item, i) => {
            return (
              <li
                onClick={() => handleCasino(item?.game_id, item?.game_name)}
                key={i}
                _ngcontent-ng-c943649379=""
                className="ng-star-inserted"
              >
                <p _ngcontent-ng-c943649379="" className="total-players">
                  <span
                    _ngcontent-ng-c943649379=""
                    role="img"
                    className="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color"
                    aria-hidden="true"
                    data-mat-icon-type="font"
                  >
                    group
                  </span>
                  {item?.active_players}
                </p>
                <a _ngcontent-ng-c943649379="" className="active">
                  <img
                    _ngcontent-ng-c943649379=""
                    alt=""
                    src={item?.url_thumb}
                  />
                </a>
                <div _ngcontent-ng-c943649379="" className="game-detail">
                  <p _ngcontent-ng-c943649379="" className="company-type">
                    {item?.product}
                  </p>
                  <p _ngcontent-ng-c943649379="" className="game-name">
                    {item?.game_name}
                  </p>
                  <p
                    _ngcontent-ng-c943649379=""
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
  );
};

export default LiveCasino;
