import "./affiliate.css";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import TodayStatusSection from "../../components/modules/Affiliate/TodayStatusSection";
import InviteSection from "../../components/modules/Affiliate/InviteSection";
import TopFiveLossUser from "../../components/modules/Affiliate/TopFiveLossUser";
import BonusInformation from "../../components/modules/Affiliate/BonusInformation";
import TodayProfitLoss from "../../components/modules/Affiliate/TodayProfitLoss";

const Affiliate = () => {
  return (
    <div className="flex flex-col transition-all">
      <div className="flex items-start flex-col lg:flex-row justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />

        <div
          className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%] px-2 md:px-0"
          style={{ minHeight: "calc(-110px + 100dvh)", paddingTop: "10px" }}
        >
          <div className="main-content">
            <div
              data-v-4c49d924
              className="container"
              style={{ maxWidth: "100%" }}
            >
              <TodayStatusSection />
              <InviteSection />
              <TopFiveLossUser />
              <BonusInformation />
              <TodayProfitLoss />
            </div>
          </div>
        </div>

        <RightDeskSidebar />
      </div>
    </div>
  );
};

export default Affiliate;
