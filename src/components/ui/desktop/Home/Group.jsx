import { useSelector } from "react-redux";
// import filterInPlay from "../../../../utils/filterInPlay";
// import filterUpcoming from "../../../../utils/filterUpcoming";
import SingleGroup from "./SingleGroup";
import { Fragment, useState } from "react";
import { filterLiveVirtual } from "../../../../utils/filter-live-virtual";
import filterUpcoming from "../../../../utils/filterUpcoming";
import filterInPlay from "../../../../utils/filterInPlay";

const Group = ({ data }) => {
  // let inPlay = [];
  // let upComing = [];
  // if (data) {
  //   inPlay = filterInPlay(data);
  //   upComing = filterUpcoming(data);
  // }
  const { group } = useSelector((state) => state.state);

  const [liveVirtualInPlay, setLiveVirtualInPlay] = useState([]);
  const [liveVirtualUpcoming, setLiveVirtualUpcoming] = useState([]);
  const groupedUpcoming = filterLiveVirtual(
    liveVirtualUpcoming,
    group,
    data,
    0,
  );
  const groupedInPlay = filterLiveVirtual(liveVirtualInPlay, group, data, 1);
  const isUpcomingAvailable = filterUpcoming(data);
  const isInPlayAvailable = filterInPlay(data);
  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div className="w-full h-full">
        <div className="w-full mt-[15px] px-[2px]">
          {isInPlayAvailable?.length > 0 && (
            <Fragment>
              <SingleGroup
                data={data}
                filterData={groupedInPlay}
                title="In Play"
                setLiveVirtual={setLiveVirtualInPlay}
                liveVirtual={liveVirtualInPlay}
                group={group}
              />
              {groupedInPlay?.length === 0 && (
                <div className="flex items-center pl-5 bg-white py-3 rounded-md mx-0.5 mt-1 font-[500]">
                  No inplay event available right now!
                </div>
              )}{" "}
            </Fragment>
          )}
          {isUpcomingAvailable?.length > 0 && (
            <Fragment>
              <SingleGroup
                margin={true}
                data={data}
                filterData={groupedUpcoming}
                title="Upcoming Events"
                setLiveVirtual={setLiveVirtualUpcoming}
                liveVirtual={liveVirtualUpcoming}
                group={group}
              />
              {groupedUpcoming?.length === 0 && (
                <div className="flex items-center pl-5 bg-white py-3 rounded-md mx-0.5 mt-1 font-[500]">
                  No upcoming event available right now!
                </div>
              )}{" "}
            </Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

export default Group;
