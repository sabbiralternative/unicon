/* eslint-disable react/no-unknown-property */
import { useSelector } from "react-redux";
import Banner from "../../../components/ui/mobile/home/Banner";
import InPlay from "../../../components/ui/mobile/home/InPlay";

// import UpcomingEvents from "../../../components/ui/mobile/home/UpcomingEvents";

import { useGetAllGroupEventsQuery } from "../../../redux/features/events/events";
import WithdrawDepositButton from "../../../components/ui/mobile/home/WithdrawDepositButton";
import Group from "../../../components/ui/mobile/home/Group";
import useGetSocialLink from "../../../hooks/useGetSocialLink";
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
import assets from "../../../assets";
import CryptoReferTab from "../../../components/ui/CryptoReferTab/CryptoReferTab";
import Promotion from "../../../components/ui/Promotion";

const Home = () => {
  const { lotusLobby } = useLotusHomeLobby();
  const { refetchBalance } = useBalance();
  const token = useSelector(userToken);
  const { socialLink } = useGetSocialLink();
  const { group } = useSelector((state) => state.state);
  const { data } = useGetAllGroupEventsQuery(group, {
    pollingInterval: 1000,
  });

  const openWhatsapp = () => {
    if (token && socialLink?.branchWhatsapplink) {
      window.open(socialLink?.branchWhatsapplink, "_blank");
    } else {
      window.open(socialLink?.whatsapplink, "_blank");
    }
  };

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
            {socialLink?.instagramLink ? (
              <div
                onClick={() => window.open(socialLink?.instagramLink, "_blank")}
                title="WhatsAppContact"
                className="fixed cursor-pointer top-[calc(100dvh-170px)] left-4 z-50 flex w-max h-max items-center justify-center rounded-full transition-all duration-500"
              >
                <div className="h-full bg-transparent mt-[-3px] ml-[-3px]">
                  <img className="h-11 w-11" src={assets.instagram} alt="" />
                </div>
              </div>
            ) : null}
            {socialLink?.telegramLink ? (
              <div
                onClick={() => window.open(socialLink?.telegramLink, "_blank")}
                title="WhatsAppContact"
                className="fixed cursor-pointer top-[calc(100dvh-110px)] left-4 z-50 flex w-max h-max items-center justify-center rounded-full transition-all duration-500"
              >
                <div className="h-full bg-transparent mt-[-3px] ml-[-3px]">
                  <img className="h-11 w-11" src={assets.telegram} alt="" />
                </div>
              </div>
            ) : null}
            {socialLink?.whatsapplink || socialLink?.branchWhatsapplink ? (
              <div
                onClick={openWhatsapp}
                title="WhatsAppContact"
                className="fixed cursor-pointer top-[calc(100dvh-64px)] left-3 z-50 flex w-max h-max items-center justify-center rounded-full transition-all duration-500"
              >
                <div className="h-full bg-transparent mt-[-3px] ml-[-3px]">
                  <svg
                    width="49"
                    height="49"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 31C23.732 31 30 24.732 30 17C30 9.26801 23.732 3 16 3C8.26801 3 2 9.26801 2 17C2 19.5109 2.661 21.8674 3.81847 23.905L2 31L9.31486 29.3038C11.3014 30.3854 13.5789 31 16 31ZM16 28.8462C22.5425 28.8462 27.8462 23.5425 27.8462 17C27.8462 10.4576 22.5425 5.15385 16 5.15385C9.45755 5.15385 4.15385 10.4576 4.15385 17C4.15385 19.5261 4.9445 21.8675 6.29184 23.7902L5.23077 27.7692L9.27993 26.7569C11.1894 28.0746 13.5046 28.8462 16 28.8462Z"
                      fill="#BFC8D0"
                    ></path>
                    <path
                      d="M28 16C28 22.6274 22.6274 28 16 28C13.4722 28 11.1269 27.2184 9.19266 25.8837L5.09091 26.9091L6.16576 22.8784C4.80092 20.9307 4 18.5589 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z"
                      fill="url(#paint0_linear_87_7264)"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 18.5109 2.661 20.8674 3.81847 22.905L2 30L9.31486 28.3038C11.3014 29.3854 13.5789 30 16 30ZM16 27.8462C22.5425 27.8462 27.8462 22.5425 27.8462 16C27.8462 9.45755 22.5425 4.15385 16 4.15385C9.45755 4.15385 4.15385 9.45755 4.15385 16C4.15385 18.5261 4.9445 20.8675 6.29184 22.7902L5.23077 26.7692L9.27993 25.7569C11.1894 27.0746 13.5046 27.8462 16 27.8462Z"
                      fill="white"
                    ></path>
                    <path
                      d="M12.5 9.49989C12.1672 8.83131 11.6565 8.8905 11.1407 8.8905C10.2188 8.8905 8.78125 9.99478 8.78125 12.05C8.78125 13.7343 9.52345 15.578 12.0244 18.3361C14.438 20.9979 17.6094 22.3748 20.2422 22.3279C22.875 22.2811 23.4167 20.0154 23.4167 19.2503C23.4167 18.9112 23.2062 18.742 23.0613 18.696C22.1641 18.2654 20.5093 17.4631 20.1328 17.3124C19.7563 17.1617 19.5597 17.3656 19.4375 17.4765C19.0961 17.8018 18.4193 18.7608 18.1875 18.9765C17.9558 19.1922 17.6103 19.083 17.4665 19.0015C16.9374 18.7892 15.5029 18.1511 14.3595 17.0426C12.9453 15.6718 12.8623 15.2001 12.5959 14.7803C12.3828 14.4444 12.5392 14.2384 12.6172 14.1483C12.9219 13.7968 13.3426 13.254 13.5313 12.9843C13.7199 12.7145 13.5702 12.305 13.4803 12.05C13.0938 10.953 12.7663 10.0347 12.5 9.49989Z"
                      fill="white"
                    ></path>
                    <defs>
                      <linearGradient
                        id="paint0_linear_87_7264"
                        x1="26.5"
                        y1="7"
                        x2="4"
                        y2="28"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#5BD066"></stop>
                        <stop offset="1" stopColor="#27B43E"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            ) : null}

            <Banner />

            <div
              id="home"
              className="py-1 flex flex-col items-start justify-start"
            >
              {token && <WithdrawDepositButton />}
              <Promotion />
              {socialLink?.referral && <CryptoReferTab />}
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
      </div>
    </>
  );
};

export default Home;
