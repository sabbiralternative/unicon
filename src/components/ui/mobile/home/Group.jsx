import { useState } from "react";
// import filterInPlay from "../../../../utils/filterInPlay";
// import filterUpcoming from "../../../../utils/filterUpcoming";
import SingleGroup from "../../mobile/home/SingleGroup";
import { useSelector } from "react-redux";
import { filterLiveVirtual } from "../../../../utils/filter-live-virtual";

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

  return (
    <>
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <div className="w-full h-full">
          <div className="w-full mt-[15px] px-[2px]">
            <SingleGroup
              data={data}
              filterData={groupedInPlay}
              title="In Play"
              setLiveVirtual={setLiveVirtualInPlay}
              liveVirtual={liveVirtualInPlay}
            />
            {groupedInPlay?.length === 0 && (
              <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
                No inplay event available right now!
              </div>
            )}
            <SingleGroup
              margin={true}
              data={data}
              filterData={groupedUpcoming}
              title="Upcoming Events"
              setLiveVirtual={setLiveVirtualUpcoming}
              liveVirtual={liveVirtualUpcoming}
            />
            {groupedUpcoming?.length === 0 && (
              <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
                No upcoming event available right now!
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
