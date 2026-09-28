import SingleGroup from "./SingleGroup";
import { Fragment, useState } from "react";
import { filterLiveVirtual } from "../../../../utils/filter-live-virtual";
import { useGetAllGroupEventsQuery } from "../../../../redux/features/events/events";
import filterInPlay from "../../../../utils/filterInPlay";
import filterUpcoming from "../../../../utils/filterUpcoming";

const FootballEvent = () => {
  const { data } = useGetAllGroupEventsQuery(1, {
    pollingInterval: 1000,
  });

  const [liveVirtualInPlay, setLiveVirtualInPlay] = useState([]);
  const [liveVirtualUpcoming, setLiveVirtualUpcoming] = useState([]);
  const groupedUpcoming = filterLiveVirtual(liveVirtualUpcoming, 1, data, 0);
  const groupedInPlay = filterLiveVirtual(liveVirtualInPlay, 1, data, 1);
  const isUpcomingAvailable = filterUpcoming(data);
  const isInPlayAvailable = filterInPlay(data);

  return (
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
              group={1}
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
              group={1}
            />
            {groupedUpcoming?.length === 0 && (
              <div className="flex items-center pl-5 bg-white py-3 mx-0.5 mt-1 rounded-md font-[500]">
                No upcoming event available right now!
              </div>
            )}{" "}
          </Fragment>
        )}
      </div>
    </div>
  );
};

export default FootballEvent;
