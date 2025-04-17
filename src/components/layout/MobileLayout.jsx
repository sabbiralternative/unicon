import { Outlet, useLocation } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Header from "../shared/Header/Header";
import { useSelector } from "react-redux";

const MobileLayout = () => {
  // overflow-x-hidden overflow-y-auto
  const { pathname } = useLocation();
  const { showAppPopUp, showNotification } = useSelector(
    (state) => state.state
  );

  const calculatePadding = () => {
    if (!location.pathname.includes("/casino")) {
      if (showAppPopUp && showNotification) {
        return "pt-[180px]";
      } else if (showAppPopUp) {
        return "pt-[160px]";
      } else if (showNotification) {
        return "pt-[110px]";
      } else {
        return "pt-[90px]";
      }
    }
  };
  return (
    <>
      <div className="w-full flex flex-col app-bg h-[100%]">
        {!pathname.includes("/casino") && <Header />}
        <div
          className={`flex flex-col transition-all ease-in-out duration-100   ${calculatePadding()}`}
        >
          <Outlet />
        </div>
        {!pathname.includes("/casino") && <Footer />}
      </div>
    </>
  );
};

export default MobileLayout;
