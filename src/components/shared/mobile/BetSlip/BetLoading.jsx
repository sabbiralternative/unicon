import { useEffect } from "react";

const BetLoading = ({ setBetDelay, betDelay, absolute }) => {
  useEffect(() => {
    if (betDelay > 0) {
      setTimeout(() => {
        setBetDelay((prev) => prev - 1);
      }, 1000);
    } else {
      setBetDelay(null);
    }
  }, [setBetDelay, betDelay]);

  return (
    <div
      id="popup-modal"
      className={`z-[1000] ${
        absolute ? "absolute" : "fixed w-[100vw]"
      }  top-0 right-[0.5px] md:right-0 overflow-hidden flex w-full h-screen min-h-[100vh] items-center justify-center bg-bg_CasinoPopupBg __web-inspector-hide-shortcut__`}
    >
      <div
        className={`z-2 popUpBoxShadow popUpOpenAnimation absolute w-[86%] max-w-[380px] py-3 px-2 rounded-[10px] bg-bg_Quaternary p-2 xs:p-5`}
      >
        <div className="flex flex-col gap-4 align-top items-center pt-2">
          <span className="relative w-max min-w-6 min-h-6 flex items-center justify-center p-2 pt-6">
            <span className="absolute min-w-8 min-h-8 animate-spin rounded-full border-[2px] border-primary border-dashed"></span>

            {/* <span className="font-semibold text-text_Ternary">
              {betDelay > 0 && betDelay}
            </span> */}
          </span>
          <span className="font-semibold mt-[4px]">
            Your bet is being processed...
          </span>
          <span className="font-semibold">Please Wait...</span>
        </div>
      </div>
    </div>
  );
};

export default BetLoading;
