import DepositReport from "../pages/desktop/DepositReport/DepositReport";
import Events from "../pages/desktop/Events/Events";
import Home from "../pages/desktop/Home/Home";
import IFrame from "../pages/desktop/IFrame/IFrame";
import OpenBets from "../pages/desktop/OpenBets/OpenBets";
import WithdrawReport from "../pages/desktop/WithdrawReport/WithdrawReport";

export const desktopRoutes = [
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
