import { useSelector } from "react-redux";
import "./liveVirtual.css";
const LiveVirtual = ({ setLiveVirtual, category, color, liveVirtual }) => {
  const { group } = useSelector((state) => state.state);
  const onChangeLiveVirtual = (type, eventTypeId, isChecked) => {
    const obj = { type, eventTypeId, isChecked };

    setLiveVirtual((prev) => {
      const index = prev.findIndex(
        (item) => item.eventTypeId === eventTypeId && item.type === type,
      );

      if (index !== -1) {
        const updated = [...prev];
        updated[index] = {
          ...updated[index],
          isChecked,
        };
        return updated;
      }

      return [...prev, obj];
    });
  };
  return (
    <ul className="live_virtual">
      <li>
        <input
          onChange={(e) =>
            onChangeLiveVirtual("live", category, e.target?.checked)
          }
          type="checkbox"
          defaultValue="Order one"
          id={`checkboxOnein_play-inplay-4-${category}`}
          className="ng-untouched ng-pristine ng-valid"
          checked={
            liveVirtual?.find(
              (item) => item.eventTypeId == group && item.type === "live",
            )?.isChecked ?? false
          }
        />
        <label
          htmlFor={`checkboxOnein_play-inplay-4-${category}`}
          style={{ color: color }}
        >
          LIVE
        </label>
      </li>
      <li>
        <input
          checked={
            liveVirtual?.find(
              (item) => item.eventTypeId == group && item.type === "virtual",
            )?.isChecked ?? false
          }
          onChange={(e) =>
            onChangeLiveVirtual("virtual", category, e.target?.checked)
          }
          type="checkbox"
          defaultValue="Order Two"
          id={`checkboxTwoin_play--inplay--4-${category}`}
          className="ng-untouched ng-pristine ng-valid"
        />
        <label
          htmlFor={`checkboxTwoin_play--inplay--4-${category}`}
          style={{ color: color }}
        >
          VIRTUAL
        </label>
      </li>
    </ul>
  );
};

export default LiveVirtual;
