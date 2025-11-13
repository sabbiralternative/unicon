import { Outlet, useLocation } from "react-router-dom";
import Header from "../shared/Header/Header";
import Footer from "../shared/Footer/Footer";
import { useSelector } from "react-redux";

const MainLayout = () => {
  const { pathname } = useLocation();
  const { showNotification } = useSelector((state) => state.state);

  const calculatePadding = () => {
    if (!location.pathname.includes("/casino")) {
      if (showNotification) {
        return "mt-[130px]";
      } else {
        return "mt-[110px]";
      }
    }
  };
  return (
    <div className="w-full flex flex-col app-bg h-[100%] ">
      {!pathname.includes("/casino") && <Header />}

      <div
        className={calculatePadding()}
        style={{
          minHeight: !pathname.includes("/casino")
            ? "calc(-110px + 100dvh)"
            : "100vh",
        }}
      >
        <Outlet />
      </div>
      {!pathname.includes("/casino") && <Footer />}
    </div>
  );
};

export default MainLayout;
