import { useEffect, useState } from "react";
import DesktopLayout from "./components/layout/DesktopLayout";
import MobileLayout from "./components/layout/MobileLayout";
import disableDevtool from "disable-devtool";
import { useDispatch, useSelector } from "react-redux";
import { logout, userToken } from "./redux/features/auth/authSlice";
import { settings } from "./api";
import { setWindowWidth } from "./redux/features/stateSlice";
import useGetSocialLink from "./hooks/useGetSocialLink";
import Banner from "./components/modal/Banner/Banner";
import { useLocation, useNavigate } from "react-router-dom";
import BuildVersion from "./components/modal/BuildVersion/BuildVersion";

const App = () => {
  const [showBuildVersion, setShowBuildVersion] = useState(false);
  const stored_build_version = localStorage.getItem("build_version");
  const navigate = useNavigate();
  const { refetch: refetchSocialLinks, socialLink } = useGetSocialLink();
  const dispatch = useDispatch();
  const disabledDevtool = settings.disabledDevtool;
  const { windowWidth, showBanner, showAPKModal } = useSelector(
    (state) => state.state
  );
  const token = useSelector(userToken);
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

  useEffect(() => {
    const changePassword = localStorage.getItem("changePassword");
    if (changePassword) {
      navigate("/change-password");
    }
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (socialLink?.pixel) {
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
      fbq('init', ${socialLink?.pixel});
      fbq('track', 'PageView');
    `;
      document.head.appendChild(script);

      // Create noscript + img
      const noscript = document.createElement("noscript");
      const img = document.createElement("img");
      img.height = 1;
      img.width = 1;
      img.style.display = "none";
      img.src = `https://www.facebook.com/tr?id=${socialLink?.pixel}&ev=PageView&noscript=1`;
      noscript.appendChild(img);

      document.body.appendChild(noscript);

      return () => {
        // cleanup when component unmounts
        script.remove();
        noscript.remove();
      };
    }
  }, [socialLink?.pixel]);

  useEffect(() => {
    const newVersion = socialLink?.build_version;
    if (!stored_build_version) {
      if (newVersion) {
        setShowBuildVersion(true);
      }
    }
    if (stored_build_version && newVersion) {
      const parseVersion = JSON.parse(stored_build_version);
      if (newVersion > parseVersion) {
        setShowBuildVersion(true);
      }
    }
  }, [socialLink?.build_version, stored_build_version]);

  return (
    <div>
      {showBuildVersion && !showAPKModal && (
        <BuildVersion
          build_version={socialLink?.build_version}
          setShowBuildVersion={setShowBuildVersion}
        />
      )}
      {showBanner && <Banner />}
      {windowWidth > 1024 ? <DesktopLayout /> : <MobileLayout />}
    </div>
  );
};

export default App;
