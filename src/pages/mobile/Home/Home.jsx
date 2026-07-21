/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import Banner from "../../../components/ui/mobile/home/Banner";
import InPlay from "../../../components/ui/mobile/home/InPlay";

// import UpcomingEvents from "../../../components/ui/mobile/home/UpcomingEvents";

import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";
import WithdrawDepositButton from "../../../components/ui/mobile/home/WithdrawDepositButton";
import Group from "../../../components/ui/mobile/home/Group";
import FAQ from "../../../components/ui/desktop/Home/FAQ";
import { userToken } from "../../../redux/features/auth/authSlice";
import LiveCasino from "../../../components/ui/LiveCasino/LiveCasino";
import { useEffect } from "react";
import useBalance from "../../../hooks/useBalance";
import AuraWolf from "../../../components/ui/AuraWolf/AuraWolf";
import PopularGames from "../../../components/ui/PopularGames/PopularGames";
import CasinoProvider from "../../../components/ui/CasinoProvider/CasinoProvider";
import Originals from "../../../components/ui/desktop/Home/Originals";
import useLotusHomeLobby from "../../../hooks/useLotusHomeLobby";
import CryptoReferTab from "../../../components/ui/CryptoReferTab/CryptoReferTab";
import Promotion from "../../../components/ui/Promotion";
import { settings } from "../../../api";
import WhatsApp from "../../../components/ui/desktop/Home/WhatsApp";

const Home = () => {
  const { lotusLobby } = useLotusHomeLobby();
  const { refetchBalance } = useBalance();
  const token = useSelector(userToken);
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: 1000,
  });

  useEffect(() => {
    if (token) {
      refetchBalance();
    }
  }, [refetchBalance, token]);

  return (
    <>
      <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
        {group === 0 && (
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
              {token && <WithdrawDepositButton />}
              <Promotion />
              {settings?.referral && <CryptoReferTab />}
              <Originals trendingGames={lotusLobby?.trendingGames} />
              {data && <InPlay data={data} />}
              <CasinoProvider casinoProviders={lotusLobby?.casinoProviders} />
              <AuraWolf />
              <PopularGames popularGames={lotusLobby?.popularGames} />
              {/* <UpcomingEvents /> */}
            </div>
            <div className="px-[6px]"></div>
            <FAQ />
          </div>
        )}
        {group === 2 ||
        group === 4 ||
        group === 1 ||
        group === 5 ||
        group === 6 ? (
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
      </div>
    </>
  );
};

export default Home;
