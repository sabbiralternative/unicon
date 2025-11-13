const TiedMatch = () => {
  return (
    <div className="py-1.5">
      <div className="grid grid-flow-col grid-cols-12 text-xs font-[500] mb-1.5">
        <div className="pl-1 flex items-center justify-start gap-x-1 md:gap-x-1 col-span-7 md:col-span-5">
          <span className="cursor-pointer transition-all ease-in-out duration-300 hover:scale-105"></span>
          <span className="capitalize font-bold text-xs sm:text-sm md:text-[15px]">
            tied match
          </span>
          <button
            type="button"
            className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-cashout-btn-gradient rounded-md px-2.5 py-1.5 text-center shadow-[inset_-12px_-8px_40px_#46464620] flex items-center justify-center flex-row h-max max-w-[74%] mr-1 cursor-pointer"
          >
            <div className="text-[10px] md:text-sm text-primary whitespace-nowrap font-semibold">
              Cashout
            </div>
          </button>
        </div>
        <div className="col-span-5 md:col-span-7 grid grid-cols-2 md:grid-cols-6 pb-[2px]">
          <span className="hidden md:flex col-span-1 text-center font-semibold h-full items-end justify-center"></span>
          <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
          <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 text-text_Ternary font-bold h-full flex items-end justify-center">
            BACK
          </span>
          <span className="col-span-1 text-center text-[10px] sm:text-xs md:text-sm leading-3 font-bold h-full flex items-end justify-center">
            LAY
          </span>
          <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
          <span className="col-span-1 text-center font-semibold h-full hidden md:flex items-end justify-center"></span>
        </div>
      </div>
      <div className="bg-bg_Quaternary rounded-[3px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] py-[1px] cursor-pointer">
        <div
          title="37302"
          id="37302"
          className="grid grid-cols-12 border-b border-borderColorOfMarket"
        >
          <div className="w-full md:col-span-5 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
            <div className="truncate col-span-12 flex items-start justify-center h-full flex-col">
              <div className="w-full flex flex-nowrap gap-x-2">
                <span className="truncate w-full capitalize text-text_Ternary text-[13px] md:text-sm font-semibold">
                  Yes
                </span>
              </div>
              <span className="text-[12px] font-bold text-text_Success"></span>
            </div>
          </div>
          <div className="col-span-5 md:col-span-7 h-12 grid grid-cols-2 md:grid-cols-6 relative">
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    6.6
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">4</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    100
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">136</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    160
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">5</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    740
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">1</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    920
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">1</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    960
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">1</span>
                  </span>
                </div>
              </span>
            </span>
          </div>
          <div className="col-span-12 h-max"></div>
        </div>
        <div title="37303" id="37303" className="grid grid-cols-12">
          <div className="w-full md:col-span-5 col-span-7 h-12 grid grid-cols-12 grid-flow-col pl-2.5 md:pl-2 py-0.5 pr-[3px]">
            <div className="truncate col-span-12 flex items-start justify-center h-full flex-col">
              <div className="w-full flex flex-nowrap gap-x-2">
                <span className="truncate w-full capitalize text-text_Ternary text-[13px] md:text-sm font-semibold">
                  No
                </span>
              </div>
              <span className="text-[12px] font-bold text-text_Success"></span>
            </div>
          </div>
          <div className="col-span-5 md:col-span-7 h-12 grid grid-cols-2 md:grid-cols-6 relative">
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    -
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate"></span>
                  </span>
                </div>{" "}
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    -
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate"></span>
                  </span>
                </div>{" "}
              </span>
            </span>
            <span className="text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    -
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate"></span>
                  </span>
                </div>{" "}
              </span>
            </span>
            <span className="text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    1.01
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">13,462</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    1.27
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">13</span>
                  </span>
                </div>
              </span>
            </span>
            <span className="hidden md:block text-center min-h-12">
              <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                  <span
                    id="oddBtnPrice"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                  >
                    1.49
                  </span>
                  <span
                    id="oddBtnSize"
                    className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                  >
                    <span className="w-max break-all truncate">83</span>
                  </span>
                </div>
              </span>
            </span>
          </div>
          <div className="col-span-12 h-max"></div>
        </div>
      </div>
    </div>
  );
};

export default TiedMatch;
