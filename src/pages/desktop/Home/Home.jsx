/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";

import RightDeskSidebar from "../../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import Banner from "../../../components/ui/desktop/Home/Banner";
import InPlay from "../../../components/ui/desktop/Home/InPlay";

// import UpcomingEvents from "../../../components/ui/desktop/Home/UpcomingEvents";
import FAQ from "../../../components/ui/desktop/Home/FAQ";
import WhatsApp from "../../../components/ui/desktop/Home/WhatsApp";
// import WithdrawAndDepositButton from "../../../components/ui/desktop/Home/WithdrawAndDepositButton";
import LeftDeskSidebar from "../../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import Group from "../../../components/ui/desktop/Home/Group";
// import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
// import IndianCardGames from "../../../components/ui/IndianCardGames/IndianCardGames";
import LiveCasino from "../../../components/ui/LiveCasino/LiveCasino";
import useBalance from "../../../hooks/useBalance";
import { useEffect } from "react";
import AuraWolf from "../../../components/ui/AuraWolf/AuraWolf";
import Originals from "../../../components/ui/desktop/Home/Originals";
import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
import PopularGames from "../../../components/ui/PopularGames/PopularGames";
import useLotusHomeLobby from "../../../hooks/useLotusHomeLobby";
import CryptoReferTab from "../../../components/ui/CryptoReferTab/CryptoReferTab";
import Promotion from "../../../components/ui/Promotion";
import { settings } from "../../../api";

// import CardGames from "../../../components/ui/CardGames/CardGames";
// import IndianLiveCasino from "../../../components/ui/IndianLiveCasino/IndianLiveCasino";
// import Casino from "../../../components/ui/Casino/Casino";
// import PopularGames from "../../../components/ui/PopularGames/PopularGames";

const Home = () => {
  const { lotusLobby } = useLotusHomeLobby();
  const { refetchBalance } = useBalance();
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: 1000,
  });

  useEffect(() => {
    refetchBalance();
  }, [refetchBalance]);

  return (
    <>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        <LeftDeskSidebar />
        {group === 0 && (
          <>
            <div
              className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
              style={{ minHeight: "calc(-54px + 100dvh)" }}
            >
              <WhatsApp />

              <Banner />

              <div
                id="home"
                className="py-1 flex flex-col items-start justify-start"
              >
                <Promotion />
                {settings?.referral && <CryptoReferTab />}
                <Originals trendingGames={lotusLobby?.trendingGames} />
                {/* <WithdrawAndDepositButton /> */}
                {data && <InPlay data={data} />}
                <CasinoProvider casinoProviders={lotusLobby?.casinoProviders} />
                <AuraWolf />
                <PopularGames popularGames={lotusLobby?.popularGames} />
                {/* <UpcomingEvents /> */}
                {/* <CardGames /> */}
                {/* <IndianLiveCasino />
                  <Casino /> */}
              </div>
              <FAQ />
            </div>
          </>
        )}

        {group === 2 || group === 4 || group === 1 || group === 5 ? (
          <Group data={data} />
        ) : null}

        {group === "liveCasinoWolf" ||
        group === "slotWolf" ||
        group === "auraWolf" ? (
          <div
            className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%] page-body"
            style={{ minHeight: "calc(-110px + 100dvh)" }}
            _ngcontent-ng-c1965075897=""
          >
            <LiveCasino />
          </div>
        ) : null}

        <RightDeskSidebar />
      </div>
    </>
  );
};

export default Home;
