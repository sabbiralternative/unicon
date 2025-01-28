import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { showNotification } = useSelector((state) => state.state);

  const calculatePadding = () => {
    if (!location.pathname.includes("/casino")) {
      if (showNotification) {
        return "pt-[130px]";
      } else {
        return "pt-[110px]";
      }
    } else {
      return "pt-[20px]";
    }
  };
  return (
    <div className="w-full flex flex-col app-bg h-[100%] ">
      <Header />
      <div
        className={calculatePadding()}
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
