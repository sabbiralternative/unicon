import { useEffect } from "react";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";
import disableDevtool from "disable-devtool";
import { useDispatch, useSelector } from "react-redux";
import { logout, userToken } from "./redux/features/auth/authSlice";
import { settings } from "./api";
import { setWindowWidth } from "./redux/features/stateSlice";
import useGetSocialLink from "./hooks/useGetSocialLink";

const App = () => {
  const { refetch: refetchSocialLinks } = useGetSocialLink();
  const dispatch = useDispatch();
  const disabledDevtool = settings.disabledDevtool;
  const { windowWidth } = useSelector((state) => state.state);
  const token = useSelector(userToken);

  useEffect(() => {
    const handleResize = () => {
      dispatch(setWindowWidth(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  /* Disable devtool */
  useEffect(() => {
    /* If disable devtool true in notice.json then logout the user */
    if (disabledDevtool) {
      disableDevtool({
        ondevtoolopen: (type) => {
          const info = "devtool opened!; type =" + type;
          if (info) {
            dispatch(logout());
            window.location.href = "https://www.google.com/";
          }
        },
      });
    }
  }, [disabledDevtool, dispatch]);

  useEffect(() => {
    refetchSocialLinks();
  }, [refetchSocialLinks, token]);
  return <div>{windowWidth > 1024 ? <DesktopLayout /> : <MobileLayout />}</div>;
};

export default App;
