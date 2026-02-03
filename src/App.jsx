import { useEffect, useState } from "react";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";
import disableDevtool from "disable-devtool";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "./redux/features/auth/authSlice";
import { setWindowWidth } from "./redux/features/stateSlice";
import Banner from "./components/modal/Banner/Banner";
import { useLocation, useNavigate } from "react-router-dom";
import BuildVersion from "./components/modal/BuildVersion/BuildVersion";
import { settings } from "./api";

const App = () => {
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const disabledDevtool = settings?.disabledDevtool;
  const { windowWidth, showBanner, showAPKModal } = useSelector(
    (state) => state.state,
  );

  const location = useLocation();

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
    if (window.location.hostname !== "localhost") {
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
    }
  }, [disabledDevtool, dispatch]);

  useEffect(() => {
    const changePassword = localStorage.getItem("changePassword");
    if (changePassword) {
      navigate("/change-password");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (settings?.pixel) {
      // Create fb pixel main script
      const script = document.createElement("script");
      script.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', ${settings?.pixel});
      fbq('track', 'PageView');
    `;
      document.head.appendChild(script);

      // Create noscript + img
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.src = `https://www.facebook.com/tr?id=${settings?.pixel}&ev=PageView&noscript=1`;
      noscript.appendChild(img);

      document.body.appendChild(noscript);

      return () => {
        // cleanup when component unmounts
        script.remove();
        noscript.remove();
      };
    }
  }, []);

  useEffect(() => {
    const newVersion = settings?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        localStorage.setItem("build_version", newVersion);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [stored_build_version]);

  return (
    <div>
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={settings?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}
      {showBanner && <Banner />}
      {windowWidth > 1024 ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
};

export default App;
