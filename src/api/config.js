import axios from "axios";
import { API, settings } from "./index";

export const getSetApis = (setNoticeLoaded, baseUrl) => {
  const url = baseUrl ? `${baseUrl}/notice.json` : "/notice.json";
  axios
    .get(url)
    .then((res) => {
      const data = res.data;
      if (data?.result?.endpoint) {
        const endPoints = data?.result?.endpoint;
        const setting = data?.result?.settings;
        API.depositBreakdown = endPoints?.depositBreakdown;
        API.index = endPoints?.index;
        API.utr = endPoints?.utr;
        API.language = endPoints?.language;
        API.bonus = endPoints?.bonus;
        API.mac88 = endPoints?.mac88;
        API.auraWolf = endPoints?.auraWolf;
        API.liveCasinoLobby = endPoints?.liveCasinoLobby;
        API.lotusHomeLobby = endPoints?.lotusHomeLobby;
        API.exchangeGames = endPoints?.exchangeGames;
        API.banner = endPoints?.banner;
        API.uploadScreenshot = endPoints?.uploadScreenshot;
        API.withdrawBreakdown = endPoints?.withdrawBreakdown;
        API.pg = endPoints?.pg;
        API.bankAccount = endPoints?.bankAccount;
        API.liveCasinoIFrame = endPoints?.liveCasinoIFrame;
        API.accessToken = endPoints?.accessToken;
        API.notification = endPoints?.notification;
        API.buttonValue = endPoints?.buttonValue;
        API.login = endPoints?.login;
        API.myMarket = endPoints?.myMarket;
        API.searchEvent = endPoints?.searchEvent;
        API.order = endPoints?.order;
        API.whatsapp = endPoints?.whatsapp;
        API.checkUsername = endPoints?.checkUsername;
        API.register = endPoints?.register;
        API.otp = endPoints?.otp;
        API.menu = endPoints?.menu;
        API.balance = endPoints?.balance;
        API.latestEvents = endPoints?.latestEvents;
        API.accountStatement = endPoints?.accountStatement;
        API.settledBets = endPoints?.settledBets;
        API.activityLogs = endPoints?.activityLogs;
        API.ipDetails = endPoints?.ipDetails;
        API.changePassword = endPoints?.changePassword;
        API.groupSportsBook = endPoints?.groupSportsBook;
        API.currentBets = endPoints?.currentBets;
        API.depositIframe = endPoints?.depositIframe;
        API.fantasyGames = endPoints?.fantasyGames;
        API.ladder = endPoints?.ladder;
        API.auraCasino = endPoints?.auraCasino;
        API.diamondCasino = endPoints?.diamondCasino;
        API.testCasino = endPoints?.testCasino;
        API.liveCasinoWolf = endPoints?.liveCasinoWolf;
        API.exposure = endPoints?.exposure;
        API.eventDetails = endPoints?.eventDetails;
        API.forgotPassword = endPoints?.forgotPassword;
        API.virtualCasino = endPoints?.virtualCasino;
        API.slotsWolf = endPoints?.slotsWolf;
        API.withdrawIframe = endPoints?.withdrawIframe;
        API.assets = endPoints?.assets;
        API.otpless = endPoints?.otpless;
        settings.registrationWhatsapp = setting?.registrationWhatsapp;
        settings.casino = setting?.casino;
        settings.otp = setting?.otp;
        settings.aura = setting?.aura;
        settings.mac88 = setting?.mac88;
        settings.build = setting?.build;
        settings.siteTitle = setting?.siteTitle;
        settings.forceLogin = setting?.forceLogin;
        settings.registration = setting?.registration;
        settings.demoLogin = setting?.demoLogin;
        settings.withdraw = setting?.withdraw;
        settings.deposit = setting?.deposit;
        settings.siteUrl = setting?.siteUrl;
        settings.balanceApiLoop = setting?.balanceApiLoop;
        settings.disabledDevtool = setting?.disabledDevtool;
        settings.casinoCurrency = setting?.casinoCurrency;
        settings.interval = setting?.interval;
        settings.logoFormat = setting?.logo?.format;
        settings.logoHeight = setting?.logo?.height;
        settings.logoWidth = setting?.logo?.width;
        settings.apkLink = setting?.apkLink;
        settings.betFairCashOut = setting?.betFairCashOut;
        settings.referral = setting?.referral;
        settings.b2c = setting?.b2c;
        settings.language = setting?.language;
        settings.bookmakerCashOut = setting?.bookmakerCashOut;
        settings.betDelay = setting?.betDelay;
        settings.otpWhatsapp = setting?.otpWhatsapp;
        setNoticeLoaded(true);
      }
    })
    .catch((e) => {
      console.log(e);
    });
};
