import filterInPlay from "../../../../utils/filterInPlay";
import filterUpcoming from "../../../../utils/filterUpcoming";
import SingleGroup from "../../mobile/home/SingleGroup";

const Group = ({ data }) => {
  let inPlay;
  let upComing;
  if (data) {
    inPlay = filterInPlay(data);
    upComing = filterUpcoming(data);
  }

  return (
    <>
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <div className="w-full h-full">
          <div className="w-full mt-[15px] px-[2px]">
            {inPlay?.length > 0 && (
              <SingleGroup data={data} filterData={inPlay} title="In Play" />
            )}
            {upComing?.length > 0 && (
              <SingleGroup
                data={data}
                filterData={upComing}
                title="Upcoming Events"
              />
            )}
            {inPlay &&
              upComing &&
              Array.isArray(inPlay) &&
              Array.isArray(upComing) &&
              inPlay?.length === 0 &&
              upComing?.length === 0 && (
                <div className="flex items-center pl-5 bg-white py-3 rounded-sm font-[500]">
                  No event available right now!
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Group;
