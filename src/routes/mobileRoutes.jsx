import Events from "../pages/mobile/Events/Events";
import Home from "../pages/mobile/Home/Home";
import IFrame from "../pages/mobile/IFrame/IFrame";
import OpenBets from "../pages/mobile/OpenBets/OpenBets";
import DepositReport from "../pages/mobile/DepositReport/DepositReport";
import WithdrawReport from "../pages/mobile/WithdrawReport/WithdrawReport";

export const mobileRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/game-details/:eventTypeId/:eventId",
    element: <Events />,
  },
  {
    path: "/:route/:name/:gameId",
    element: <IFrame />,
  },
  {
    path: "/deposit-report",
    element: <DepositReport />,
  },
  {
    path: "/withdraw-report",
    element: <WithdrawReport />,
  },
  {
    path: "/open-bets",
    element: <OpenBets />,
  },
];
