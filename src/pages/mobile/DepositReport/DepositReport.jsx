import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import useBalance from "../../../hooks/useBalance";
import { settings } from "../../../api";
import DepositReportComponent from "../../../components/ui/Reports/DepositReport";

const DepositReport = () => {
  const { refetchBalance } = useBalance();
  const navigate = useNavigate();
  useEffect(() => {
    refetchBalance();
  }, [refetchBalance]);

  const depositTab = [
    'If you face any issue with your deposit, click the "Report Issue" button next to your deposit details to let us know.',
    "यदि आपकी जमा राशि में कोई समस्या आती है, तो हमें बताने के लिए अपनी डिपॉज़िट विवरण के पास दिए गए Report Issue बटन पर क्लिक करें",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setFade(false);

      setTimeout(() => {
        setCurrentIndex((prev) => {
          const arrLength = depositTab.length;
          return (prev + 1) % arrLength;
        });
        setFade(true);
      }, 500); // fade out duration
    }, 10000); // 10s display time

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div
        onClick={() => navigate(-1)}
        className="lg:hidden flex flex-col w-fit cursor-pointer font-lato"
      >
        <div className="w-full h-[34px] pr-[4px] flex items-center justify-between gap-1 relative">
          <div className="app-bg flex-row w-full h-full flex">
            <div className="w-[34px] h-full flex items-center justify-center">
              <button
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out w-8 rounded-sm h-6 flex ml-[4px] items-center justify-center bg-bg_Primary2 active:scale-150 cursor-pointer primary-icon-color"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="var(--color-iconsColor)"
                >
                  <path
                    d="M5.3673 11.2346L0 5.8673L5.3673 0.5L6.32 1.4527L1.90539 5.8673L6.32 10.2819L5.3673 11.2346Z"
                    fill="var(--color-iconsColor)"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="w-full h-full capitalize ml-[4px] flex items-center text-text_Ternary font-lato font-bold text-[16px] leading-5">
              <span>Back</span>
            </span>
          </div>
        </div>
      </div>
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <div className="no-scrollbar h-full overflow-y-auto">
          {settings.complaint && (
            <div
              className="text-start bg-bg_Quaternary mt-5 px-2.5 py-1  rounded text-[12px] shadow-sm mx-2 flex items-start gap-2 transition-opacity duration-500"
              style={{
                opacity: fade ? 1 : 0,
              }}
            >
              <img
                style={{ height: "15px" }}
                src="/icon/info-icon-svgrepo-com.svg"
                alt=""
              />
              <span className="font-medium">{depositTab[currentIndex]}</span>
            </div>
          )}

          <DepositReportComponent />
        </div>
      </div>
    </>
  );
};

export default DepositReport;
