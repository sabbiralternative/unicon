import { useState } from "react";
import SingleGroup from "./SingleGroup";
import { filterLiveVirtual } from "../../../../utils/filter-live-virtual";
import useLanguage from "../../../../hooks/use-language";
import { LanguageKey } from "../../../../const";
import { useGetAllGroupEventsQuery } from "../../../../redux/features/events/events";

const FootballUpcoming = () => {
  const { data } = useGetAllGroupEventsQuery(1, {
    pollingInterval: 1000,
  });
  const { getLanguage } = useLanguage();

  const [liveVirtualInPlay, setLiveVirtualInPlay] = useState([]);
  const [liveVirtualUpcoming, setLiveVirtualUpcoming] = useState([]);
  const groupedUpcoming = filterLiveVirtual(liveVirtualUpcoming, 1, data, 0);
  const groupedInPlay = filterLiveVirtual(liveVirtualInPlay, 1, data, 1);

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
              group={1}
            />

            {groupedInPlay?.length === 0 && (
              <div className="flex items-center pl-5 bg-white py-3 rounded-md mt-1 mx-2.5 font-[500]">
                {getLanguage(LanguageKey.NO_INPLAY_EVENT_AVAILABLE)}
              </div>
            )}

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
              <div className="flex items-center pl-5 bg-white py-3 rounded-md mt-1 mx-2.5s font-[500]">
                {getLanguage(LanguageKey.NO_UPCOMING_EVENT_AVAILABLE)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FootballUpcoming;
