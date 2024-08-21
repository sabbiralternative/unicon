import { Outlet } from "react-router-dom";
import Footer from "../shared/desktop/Footer/Footer";
import Header from "../shared/mobile/Header/Header";

const MobileLayout = () => {
  // overflow-x-hidden overflow-y-auto
  return (
    <>
      <div className="w-full flex flex-col app-bg h-[100dvh] ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default MobileLayout;
