const UpcomingEvents = () => {
  return (
    <div title="Upcoming Events" className="py-1 px-[6px] w-full">
      <div className="w-full font-helvetica-neue">
        <div className="w-full flex items-center justify-between rounded-t-[3px] py-1.5 px-[7px] bg-UpcomingBg">
          <div className="flex items-center text-white font-semibold text-[18px] tracking-wide justify-start w-full gap-[5px]">
            <svg
              width="20"
              height="20"
              viewBox="0 0 16 16"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              fill="var(--color-quaternary)"
            >
              <rect width="16" height="16" id="icon-bound" fill="none"></rect>
              <path d="M7,9h2V4H7V9z M9,11c0-0.553-0.447-1-1-1s-1,0.447-1,1s0.447,1,1,1S9,11.553,9,11z M16,8c0-4.419-3.581-8-8-8S0,3.581,0,8 s3.581,8,8,8S16,12.419,16,8z M14,8c0,1.603-0.625,3.109-1.756,4.244C11.109,13.375,9.603,14,8,14s-3.109-0.625-4.244-1.756 C2.625,11.109,2,9.603,2,8s0.625-3.109,1.756-4.244C4.891,2.625,6.397,2,8,2s3.109,0.625,4.244,1.756C13.375,4.891,14,6.397,14,8z"></path>
            </svg>
            <span>Upcoming Events</span>
          </div>
        </div>
        <div className="bg-bg_Quaternary rounded-b border border-ternary4 border-t-0 border-b-0 shadow-lg">
          <div className="eventHeadName grid grid-cols-12">
            <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 18"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4.36255 16.7108C4.35063 16.7037 4.34109 16.6966 4.32917 16.6895C3.88333 16.4077 3.4518 16.107 3.05842 15.7566C2.91299 15.6263 2.77709 15.489 2.63404 15.3564C2.59828 15.3256 2.61974 15.3067 2.63642 15.283C2.81524 15.0533 2.99643 14.8213 3.17524 14.5916C3.92148 13.635 4.6701 12.676 5.41634 11.7194C6.27225 10.6231 7.12578 9.52678 7.98169 8.43047C8.8066 7.37204 9.6339 6.31125 10.4588 5.25282C11.329 4.14231 12.1969 3.02942 13.0647 1.9189C13.2292 1.70816 13.3961 1.49506 13.5582 1.28195C13.5797 1.25354 13.5916 1.24644 13.6274 1.26538C13.9468 1.45244 14.2472 1.67028 14.5333 1.90233C14.6692 2.01125 14.8123 2.1107 14.9458 2.22199C15.0817 2.34038 15.2128 2.46351 15.3439 2.58663C15.3773 2.61742 15.3535 2.63162 15.3368 2.65293C15.1008 2.95602 14.8623 3.26147 14.6263 3.56455C13.9254 4.46433 13.222 5.36411 12.5211 6.26389C11.7343 7.27259 10.9476 8.28129 10.1584 9.29C9.42648 10.2277 8.69693 11.1653 7.965 12.103C7.12101 13.1827 6.2794 14.2648 5.43542 15.3446C5.08971 15.7874 4.7464 16.2278 4.40069 16.6706C4.39116 16.6848 4.38401 16.7037 4.36255 16.7108Z"
                    fill="#cc5f36"
                  ></path>
                  <path
                    d="M17.9928 8.49706C17.9761 8.16556 17.9451 7.83643 17.8927 7.50967C17.8283 7.11424 17.7305 6.72591 17.6137 6.33995C17.3777 5.55146 17.0225 4.8198 16.5814 4.12365C16.4336 3.89161 16.2762 3.66903 16.1022 3.45119C16.0879 3.46776 16.0736 3.48197 16.0617 3.49854C15.7231 3.93423 15.3869 4.36991 15.0484 4.80322C14.2426 5.84271 13.4367 6.88219 12.6309 7.92167C11.7988 8.99431 10.9691 10.0669 10.1371 11.1372C9.34792 12.1554 8.55639 13.1759 7.76724 14.1941C6.99001 15.1981 6.2104 16.202 5.43317 17.2036C5.40456 17.2391 5.40695 17.251 5.44986 17.2699C6.43213 17.6867 7.45492 17.9211 8.52063 17.9803C9.05468 18.0087 9.58872 17.9921 10.1204 17.9258C10.571 17.869 11.0144 17.7814 11.4483 17.6511C12.247 17.412 13.0052 17.0852 13.7157 16.6495C14.4619 16.1925 15.1247 15.6385 15.7112 14.9897C16.0998 14.5587 16.4455 14.097 16.7411 13.5998C17.1917 12.8421 17.5136 12.0346 17.7353 11.1846C17.8736 10.6518 17.9594 10.1096 17.988 9.56022C18.0095 9.20741 18.0119 8.85224 17.9928 8.49706ZM9.17865 15.8587C8.93547 16.1618 8.70182 16.472 8.46579 16.7821C8.3299 16.9621 8.15586 17.0473 7.92936 16.9952C7.69572 16.9408 7.54552 16.7443 7.5479 16.5051C7.54552 16.382 7.58843 16.2754 7.66472 16.1783C7.90075 15.8776 8.13678 15.5745 8.37281 15.2738C8.52778 15.0797 8.7805 15.0063 8.98792 15.1128C9.31931 15.2809 9.336 15.6598 9.17865 15.8587ZM11.105 13.2612C11.0955 13.3606 11.055 13.4435 10.9954 13.5216C10.7569 13.8271 10.5233 14.1349 10.2873 14.4403C10.1633 14.6014 10.0012 14.6795 9.79853 14.644C9.58157 14.6061 9.44567 14.4688 9.39322 14.2557C9.38369 14.2201 9.38369 14.1823 9.3813 14.1444C9.3813 14.026 9.42183 13.9194 9.49336 13.8271C9.73654 13.5169 9.97972 13.2043 10.2253 12.8941C10.3588 12.726 10.6115 12.6621 10.807 12.7426C10.9977 12.8231 11.1265 13.0457 11.105 13.2612ZM12.8407 11.1443C12.5927 11.4569 12.3519 11.7742 12.0992 12.082C11.98 12.2264 11.8131 12.3069 11.6176 12.2643C11.4078 12.2169 11.2695 12.082 11.2242 11.8689C11.1932 11.7268 11.2266 11.5918 11.3172 11.4734C11.5485 11.1704 11.7845 10.872 12.0134 10.5666C12.2494 10.2493 12.7501 10.28 12.9098 10.666C12.936 10.7276 12.9432 10.7915 12.9432 10.8554C12.9432 10.9644 12.9098 11.0591 12.8407 11.1443ZM14.6645 8.77646C14.419 9.09139 14.1758 9.41105 13.9326 9.72834C13.7991 9.90119 13.5678 9.97459 13.358 9.90829C13.1602 9.84673 13.0195 9.66204 13.0123 9.44656C13.0076 9.31633 13.0576 9.19794 13.1363 9.09849C13.3747 8.79067 13.6203 8.48996 13.8635 8.18687C14.0018 8.01639 14.2235 7.95009 14.4238 8.02112C14.624 8.09216 14.7575 8.27922 14.7599 8.49943C14.7528 8.59414 14.7313 8.69122 14.6645 8.77646ZM16.5099 6.40152C16.2667 6.71644 16.0235 7.03373 15.7827 7.34866C15.6254 7.55466 15.4084 7.62333 15.1795 7.53808C14.9888 7.46705 14.86 7.27288 14.8648 7.03847C14.8624 6.94375 14.9077 6.8372 14.9816 6.74012C15.2153 6.44177 15.4465 6.14342 15.6826 5.84508C15.8638 5.61303 16.1308 5.56804 16.3835 5.72432C16.5933 5.85691 16.6601 6.20736 16.5099 6.40152Z"
                    fill="#cc5f36"
                  ></path>
                  <path
                    d="M12.5188 0.709924C11.5127 0.274241 10.4589 0.0469281 9.36222 0.00667475C8.58975 -0.0217394 7.82444 0.0398245 7.06866 0.205573C6.33911 0.364219 5.63817 0.605739 4.97299 0.94434C3.79522 1.54104 2.7915 2.35084 1.96896 3.38559C1.49213 3.98702 1.09398 4.63344 0.784041 5.33432C0.469333 6.04467 0.245222 6.78581 0.116478 7.55062C0.0592586 7.88212 0.0306488 8.21598 0.0163439 8.54985C0.00203901 8.85057 0.00203901 9.14891 0.0163439 9.44963C0.0282647 9.72904 0.0521062 10.0108 0.0902526 10.2878C0.142704 10.6738 0.233302 11.0527 0.338204 11.4268C0.457412 11.8577 0.602845 12.2816 0.791193 12.6888C0.979541 13.0937 1.19888 13.4821 1.4373 13.8609C1.57796 14.0835 1.72816 14.2966 1.89029 14.5097C5.44744 9.91609 8.99982 5.32248 12.5522 0.733602C12.5451 0.717027 12.5308 0.71466 12.5188 0.709924ZM3.05375 11.1379C2.81057 11.4505 2.56739 11.7654 2.31943 12.0732C2.17162 12.2579 1.91651 12.3171 1.70909 12.2082C1.45637 12.0732 1.3014 11.7441 1.5279 11.4741C1.61134 11.3747 1.68525 11.2681 1.76393 11.1639C1.92366 10.9532 2.07863 10.7377 2.24076 10.5294C2.37427 10.3565 2.55308 10.2831 2.77004 10.3328C2.987 10.3826 3.11097 10.5246 3.15627 10.7401C3.15865 10.7472 3.15865 10.7567 3.16104 10.7638C3.16104 10.7851 3.16104 10.8064 3.16104 10.8277C3.16342 10.9414 3.12528 11.0456 3.05375 11.1379ZM4.8824 8.78427C4.68213 9.03999 4.48186 9.29809 4.28159 9.55382C4.24583 9.60117 4.21006 9.64853 4.17192 9.69352C4.06463 9.82849 3.91681 9.89952 3.6784 9.89715C3.5282 9.89242 3.38753 9.77166 3.29932 9.5917C3.21349 9.42122 3.24687 9.2602 3.36369 9.10866C3.60449 8.79611 3.83814 8.47882 4.07655 8.16389C4.20291 7.99814 4.37457 7.92711 4.57722 7.96263C4.78226 7.99814 4.91816 8.1189 4.97538 8.32254C5.02544 8.49302 4.98968 8.64693 4.8824 8.78427ZM6.69673 6.43063C6.4607 6.73372 6.22467 7.03443 5.98864 7.33515C5.85275 7.508 5.66917 7.55772 5.46413 7.508C5.27101 7.46064 5.14704 7.32804 5.09697 7.13625C5.05882 6.98471 5.09935 6.84264 5.18995 6.72424C5.4379 6.40222 5.69301 6.08729 5.95049 5.77C6.07209 5.62083 6.23659 5.5711 6.42017 5.61136C6.61806 5.65398 6.74203 5.78421 6.79687 5.98074C6.80879 6.02099 6.81117 6.06125 6.80879 6.11571C6.81594 6.227 6.77303 6.33355 6.69673 6.43063ZM8.59452 3.9515C8.52538 4.09831 8.41332 4.21433 8.31796 4.33983C8.15107 4.55767 7.98179 4.77551 7.81013 4.98862C7.68139 5.14963 7.50496 5.21119 7.30708 5.17094C7.09727 5.12832 6.96138 4.99572 6.91369 4.78498C6.90654 4.75183 6.90654 4.71395 6.90177 4.67843C6.90416 4.5553 6.95422 4.45348 7.02575 4.35877C7.25701 4.05332 7.49066 3.75023 7.72669 3.44715C7.88166 3.24825 8.13199 3.17722 8.34657 3.2814C8.6279 3.42347 8.71134 3.70288 8.59452 3.9515ZM10.3683 1.70679C10.1299 2.02408 9.88673 2.33663 9.64355 2.65155C9.5148 2.8173 9.28115 2.8836 9.08089 2.81967C8.88062 2.75574 8.74234 2.57105 8.73518 2.35557C8.7328 2.22534 8.78287 2.10695 8.85678 2.00513C9.09042 1.69495 9.32884 1.38713 9.56725 1.07931C9.665 0.953812 9.79852 0.885144 9.97494 0.878041C10.1704 0.894616 10.3254 0.998801 10.4232 1.17639C10.5281 1.36108 10.4899 1.54577 10.3683 1.70679Z"
                    fill="#cc5f36"
                  ></path>
                </svg>
              </span>
              <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                Cricket
              </div>
            </div>
            <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                1
              </span>
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                X
              </span>
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                2
              </span>
            </div>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  04:30 AM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Barbados Royals W
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Guyana Amazon Warriors W
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.59
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">13</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.22
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">7</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
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
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
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
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.81
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.7
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">8</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  Today
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  07:30 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Caribbean Giants
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Miami Lions
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
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
                          <span className="w-max break-all truncate">7</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.57
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">10</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
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
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
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
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.74
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">5</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.05
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">3</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  Today
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  10:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      New York Strikers
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Boca Raton Trailblazers
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.69
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">52</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.48
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
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
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
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
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.76
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.44
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">36</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  12:30 AM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Caribbean Giants
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Grand Cayman Stingrays
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.45
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">20</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.25
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
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
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
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
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.45
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">20</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.25
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket border-b">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  Tomorrow
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  02:45 AM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      New York Strikers
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Miami Lions
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket border-b">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.45
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">20</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.25
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
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
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
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
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.45
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">20</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.25
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="text-text_Ternary px-2 h-full py-2.5 col-span-6 lg:col-span-5 pl-2 flex items-center justify-start w-full gap-x-2">
              <span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 19 19"
                  fill="#cc5f36"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.00561523 9.49051C0.0127338 8.41561 0.181207 7.41663 0.515781 6.44613C0.847982 5.48512 1.33442 4.60716 1.96323 3.80751C2.83644 2.69938 3.91372 1.8499 5.19269 1.25905C5.91879 0.924479 6.67336 0.675328 7.46115 0.537702C7.83844 0.471262 8.22047 0.438042 8.60487 0.42855C8.81368 0.421432 9.0225 0.400076 9.22893 0.407194C9.5208 0.419059 9.81266 0.442787 10.1021 0.473635C10.9279 0.561431 11.7157 0.798717 12.4798 1.11668C13.2177 1.42515 13.9106 1.81905 14.5418 2.31498C15.6048 3.14785 16.4472 4.16344 17.0499 5.3736C17.3773 6.03088 17.6146 6.72138 17.7665 7.44036C17.8401 7.79392 17.9041 8.14985 17.9516 8.50578C18.0062 8.92577 18.0156 9.34814 17.9967 9.77289C17.9302 11.2275 17.5221 12.5847 16.8506 13.8684C16.5896 14.3691 16.2597 14.8247 15.8919 15.2542C15.5977 15.5983 15.2869 15.9233 14.9404 16.2128C14.4136 16.6542 13.856 17.0505 13.2533 17.3803C12.5391 17.7718 11.7869 18.066 10.9896 18.2369C10.6028 18.3199 10.2137 18.3793 9.81978 18.4172C9.3808 18.4576 8.93944 18.4599 8.49809 18.4315C7.67471 18.3769 6.87268 18.2155 6.09438 17.9474C5.46083 17.7291 4.86524 17.4372 4.29575 17.0861C3.6005 16.6566 2.95271 16.1654 2.39509 15.565C1.50764 14.6088 0.862219 13.5101 0.454086 12.2715C0.273749 11.7186 0.140868 11.1563 0.0601911 10.582C0.0127338 10.2 0.0079881 9.82034 0.00561523 9.49051ZM6.84895 9.0017C6.86794 9.25797 6.88217 9.49051 6.89878 9.72068C6.92014 9.99831 6.93912 10.2759 6.96285 10.5536C6.99132 10.8691 7.02217 11.1871 7.05302 11.5027C7.08861 11.8396 7.12421 12.179 7.16454 12.5159C7.16692 12.5349 7.18827 12.5586 7.20725 12.5705C7.25946 12.5966 7.31641 12.6179 7.37098 12.6393C7.8764 12.8457 8.38182 13.0498 8.88724 13.2586C9.47571 13.5007 10.0452 13.7878 10.6598 13.9634C10.6811 13.9705 10.712 13.9681 10.7286 13.9586C10.8828 13.859 11.0371 13.7593 11.1865 13.6525C11.6042 13.3464 12.017 13.0356 12.4323 12.7271C12.8025 12.4518 13.1726 12.1742 13.5404 11.8966C13.5547 11.8847 13.5665 11.8563 13.5665 11.8373C13.5452 11.5193 13.5262 11.2013 13.4953 10.8858C13.4645 10.5536 13.4265 10.2214 13.3814 9.89153C13.334 9.54746 13.277 9.20577 13.2225 8.86171C13.194 8.68849 13.156 8.51764 13.1347 8.34442C13.1228 8.25188 13.0848 8.20917 12.9994 8.17358C12.4062 7.92205 11.8154 7.66341 11.2245 7.40714C10.7642 7.20545 10.3038 7.00375 9.84588 6.79969C9.77944 6.77121 9.72486 6.7807 9.67266 6.81867C9.18622 7.16036 8.69267 7.49256 8.21572 7.84612C7.79098 8.16171 7.38285 8.50103 6.9676 8.82849C6.90116 8.88069 6.82048 8.9234 6.84895 9.0017ZM3.55542 5.79359C3.55542 5.92885 3.55779 6.06647 3.55542 6.20173C3.5483 6.71901 3.58389 7.23629 3.64084 7.75121C3.64559 7.78917 3.65982 7.81765 3.70016 7.83188C3.79745 7.8651 3.89236 7.90544 3.98965 7.93866C4.86287 8.22815 5.73608 8.51527 6.60929 8.80476C6.68997 8.83086 6.74929 8.81425 6.81336 8.76205C7.30454 8.33968 7.81945 7.94341 8.34623 7.5685C8.78995 7.2529 9.23843 6.94206 9.68452 6.62884C9.71063 6.60986 9.73198 6.59325 9.72961 6.55291C9.71537 6.36308 9.70351 6.17562 9.69164 5.9858C9.67266 5.66546 9.65368 5.3475 9.63707 5.02716C9.62283 4.78513 9.61097 4.54072 9.59673 4.29869C9.58249 4.05429 9.56825 3.80988 9.55639 3.56547C9.55164 3.47293 9.55639 3.47293 9.46859 3.44209C8.92283 3.24277 8.3842 3.02684 7.82183 2.87023C7.43268 2.76107 7.05302 2.62582 6.66861 2.50006C6.58319 2.47159 6.51912 2.46921 6.43607 2.52616C6.2937 2.62345 6.13472 2.69938 5.98286 2.78243C5.47744 3.0648 5.00998 3.39937 4.55202 3.75056C4.21982 4.00683 3.89237 4.26547 3.59576 4.56445C3.57677 4.58343 3.56016 4.61428 3.56016 4.63801C3.55305 5.02241 3.55542 5.40919 3.55542 5.79359ZM10.8971 16.5616C10.8971 16.5284 10.8994 16.4952 10.8971 16.462C10.8733 16.0847 10.8543 15.7074 10.8282 15.3325C10.8116 15.1071 10.7855 14.8817 10.7618 14.6539C10.7452 14.502 10.7262 14.3478 10.7143 14.1959C10.712 14.1532 10.7001 14.1342 10.6598 14.1223C10.4723 14.0583 10.2801 13.999 10.0974 13.923C9.14826 13.5291 8.19911 13.1305 7.25234 12.7295C7.19539 12.7057 7.15031 12.6963 7.10522 12.7437C7.08624 12.7603 7.06488 12.7769 7.04115 12.7864C6.78963 12.8861 6.54048 12.9929 6.28658 13.0783C5.61506 13.3061 4.94117 13.522 4.26728 13.7427C4.21745 13.7593 4.19135 13.7807 4.19846 13.8376C4.21745 13.9752 4.22694 14.1129 4.24592 14.2481C4.28626 14.5495 4.3266 14.8508 4.37406 15.1498C4.40965 15.3728 4.45473 15.5959 4.49982 15.8166C4.51168 15.8759 4.52592 15.94 4.55914 15.9874C4.61134 16.0586 4.68016 16.1179 4.7466 16.1796C5.07168 16.4905 5.39913 16.8013 5.72659 17.1098C5.74557 17.1288 5.7693 17.1477 5.79303 17.1572C6.47167 17.4301 7.17403 17.6199 7.9025 17.7149C7.96894 17.7243 8.04013 17.741 8.09945 17.7267C8.42216 17.6484 8.74724 17.5677 9.06521 17.4776C9.55639 17.3376 10.0333 17.1572 10.4842 16.9105C10.5815 16.8559 10.6811 16.8037 10.7832 16.7562C10.9042 16.6922 10.9042 16.6969 10.8971 16.5616ZM15.6594 13.1376C15.7235 13.0759 15.7899 13.0237 15.8421 12.9596C16.0272 12.739 16.2123 12.5183 16.3926 12.2929C16.5801 12.0556 16.7651 11.8183 16.9431 11.5739C17.0594 11.4149 17.159 11.2441 17.2634 11.0756C17.2848 11.0424 17.299 11.0068 17.3085 10.9688C17.4272 10.4041 17.4628 9.83221 17.4746 9.2556C17.477 9.16781 17.4675 9.08238 17.4414 8.99459C17.2326 8.31357 17.0024 7.64205 16.7343 6.9824C16.7248 6.95867 16.7106 6.9302 16.6916 6.91359C16.5729 6.82579 16.4543 6.73799 16.3309 6.65494C16.2621 6.60749 16.1885 6.56003 16.1174 6.51732C15.7946 6.32037 15.4696 6.12579 15.1492 5.92647C15.1018 5.898 15.0733 5.90749 15.0472 5.94783C15.014 6.00003 14.9855 6.05461 14.9499 6.10207C14.4326 6.76647 13.9153 7.43324 13.3909 8.09527C13.3269 8.17832 13.3055 8.24951 13.3269 8.35154C13.3672 8.54611 13.3981 8.74306 13.4265 8.94001C13.474 9.25323 13.5214 9.56407 13.5594 9.87729C13.5997 10.1953 13.6353 10.5132 13.6614 10.8312C13.6899 11.1563 13.7042 11.4813 13.7231 11.8064C13.7279 11.8919 13.7469 11.9583 13.8394 11.982C13.8726 11.9915 13.9035 12.0129 13.9343 12.0319C14.4374 12.3498 14.9404 12.6702 15.4435 12.9905C15.5146 13.0356 15.5835 13.0854 15.6594 13.1376ZM3.38457 4.62852C3.36322 4.62377 3.33949 4.61903 3.31339 4.61665C2.91237 4.57157 2.50899 4.52886 2.10797 4.4814C2.07001 4.47665 2.05102 4.48615 2.03204 4.51699C1.77814 4.88953 1.55272 5.27631 1.35815 5.68207C0.923913 6.58138 0.691373 7.53765 0.591712 8.52713C0.57273 8.72408 0.575102 8.92103 0.565611 9.11798C0.541882 9.56882 0.598831 10.0125 0.632051 10.461C0.634424 10.4966 0.651034 10.5108 0.689 10.5132C0.793406 10.5203 0.897812 10.5275 1.00222 10.5393C1.31781 10.5773 1.6334 10.6176 1.94899 10.6556C1.96323 10.658 1.98933 10.6437 1.99645 10.6295C2.03916 10.5346 2.07475 10.4373 2.11746 10.3424C2.26221 10.0292 2.39746 9.70645 2.56356 9.40272C2.84119 8.89018 3.13542 8.38951 3.48898 7.92443C3.49847 7.91019 3.50559 7.88883 3.50322 7.86985C3.48423 7.67053 3.4605 7.47358 3.44627 7.27663C3.42491 6.97765 3.39881 6.67867 3.39406 6.37732C3.38457 5.96681 3.39169 5.55631 3.39406 5.14343C3.38457 4.97496 3.38457 4.80411 3.38457 4.62852ZM12.8642 3.03633C12.8737 2.9604 12.876 2.89633 12.8879 2.83226C12.9448 2.53091 13.0042 2.22955 13.0659 1.9282C13.0753 1.88549 13.0682 1.86176 13.0279 1.83803C12.5794 1.58651 12.112 1.3777 11.6232 1.22109C11.0133 1.02651 10.3916 0.886513 9.74622 0.862784C9.34283 0.846174 8.93707 0.803463 8.53369 0.841428C8.41267 0.853293 8.28691 0.846174 8.16826 0.865157C7.85742 0.910241 7.54895 0.960072 7.24047 1.01227C7.10997 1.03363 6.98421 1.0716 6.85607 1.10007C6.81811 1.10956 6.80387 1.13329 6.8015 1.17126C6.78251 1.37532 6.76116 1.57939 6.73743 1.78346C6.72082 1.92345 6.70658 2.06583 6.67811 2.20582C6.65675 2.31498 6.65912 2.33159 6.76353 2.36243C6.76827 2.36481 6.77539 2.36718 6.78014 2.36955C7.69844 2.64006 8.61436 2.92006 9.50893 3.26175C9.58724 3.29022 9.66317 3.32344 9.76046 3.30446C9.98588 3.26175 10.2184 3.24039 10.4462 3.21666C10.8496 3.17395 11.2506 3.12887 11.654 3.09565C11.9838 3.06717 12.3137 3.05531 12.6411 3.0387C12.7147 3.03395 12.7882 3.03633 12.8642 3.03633ZM4.3527 16.0301C4.34558 15.9898 4.34084 15.9566 4.33372 15.9233C4.26728 15.584 4.19372 15.2471 4.13677 14.9078C4.09169 14.6325 4.06558 14.3525 4.03236 14.0749C4.02287 13.9966 4.01338 13.9183 4.01101 13.84C4.00864 13.802 4.01575 13.7688 3.98728 13.7332C3.81406 13.5339 3.63847 13.3346 3.47237 13.1281C3.14017 12.7129 2.83407 12.2786 2.56119 11.823C2.38322 11.5288 2.21475 11.2275 2.04865 10.9261C2.01068 10.8573 1.96797 10.8264 1.8873 10.8169C1.58832 10.7837 1.28933 10.741 0.987981 10.7054C0.878829 10.6936 0.769677 10.6888 0.65578 10.6793C0.658153 10.7149 0.662898 10.7458 0.665271 10.779C0.665271 10.7885 0.670017 10.798 0.670017 10.8075C0.819507 11.6617 1.10662 12.4661 1.51001 13.2325C1.85408 13.8851 2.26695 14.4901 2.76288 15.0359C3.09271 15.3989 3.45576 15.724 3.8544 16.0088C3.86864 16.0183 3.88525 16.0301 3.90186 16.0301C4.0466 16.0301 4.19609 16.0301 4.3527 16.0301ZM17.0428 6.68104C16.376 4.60479 15.0638 3.06717 13.2225 1.9543C13.1631 2.29362 13.1038 2.62345 13.0492 2.95328C13.0445 2.97463 13.0564 3.00785 13.073 3.02446C13.1299 3.08853 13.1892 3.14785 13.2509 3.20717C13.512 3.44683 13.7397 3.71971 13.9628 3.99259C14.2499 4.3414 14.5038 4.71157 14.7435 5.0936C14.8479 5.2597 14.9499 5.43055 15.0472 5.59902C15.0875 5.66783 15.1184 5.7319 15.1967 5.77698C15.6997 6.06173 16.1838 6.37969 16.6536 6.71664C16.6631 6.72376 16.675 6.7285 16.6845 6.7285C16.8055 6.71426 16.9194 6.69765 17.0428 6.68104ZM13.1204 16.6969C12.8998 16.7206 12.6957 16.7467 12.4892 16.7633C12.233 16.7823 11.9767 16.7966 11.7204 16.8061C11.5354 16.8132 11.3479 16.8203 11.1628 16.8061C11.0608 16.7989 10.9825 16.825 10.9018 16.8725C10.8804 16.8844 10.8615 16.8962 10.8401 16.9057C10.6052 17.0172 10.3679 17.124 10.1354 17.2403C9.77944 17.4159 9.40927 17.5488 9.03199 17.6603C8.91097 17.6959 8.79233 17.7291 8.67131 17.7647C10.2516 17.8288 11.7299 17.4705 13.1204 16.6969ZM17.1685 11.5407C17.1638 11.5383 17.159 11.5335 17.1543 11.5312C17.114 11.5858 17.0712 11.6403 17.0333 11.6973C16.7296 12.1552 16.3879 12.5847 16.0224 12.9976C15.8635 13.1756 15.7116 13.3535 15.6641 13.5979C15.6641 13.6003 15.6618 13.6003 15.6618 13.6027C15.4411 14.1745 15.1919 14.7345 14.9309 15.2898C14.9214 15.3088 14.9143 15.3278 14.9048 15.3467C14.9096 15.3491 14.9143 15.3515 14.9191 15.3539C16.0153 14.2861 16.758 13.0142 17.1685 11.5407Z"
                    fill="black"
                  ></path>
                  <path
                    d="M6.84929 9.00209C6.81844 8.92142 6.89912 8.87871 6.96318 8.82888C7.37843 8.49905 7.78419 8.1621 8.21131 7.84651C8.68825 7.49295 9.18181 7.16075 9.66825 6.81906C9.72282 6.78109 9.77503 6.76923 9.84147 6.80008C10.2994 7.00414 10.7598 7.20584 11.2201 7.40753C11.8109 7.6638 12.4018 7.92244 12.995 8.17396C13.0804 8.20956 13.1184 8.25227 13.1303 8.34481C13.1516 8.51803 13.1919 8.68888 13.218 8.86209C13.2726 9.20379 13.3296 9.54785 13.377 9.89192C13.4221 10.2217 13.4601 10.5539 13.4909 10.8861C13.5218 11.2017 13.5408 11.5197 13.5621 11.8377C13.5645 11.8566 13.5526 11.8851 13.536 11.897C13.1682 12.1746 12.7981 12.4499 12.4279 12.7275C12.0126 13.036 11.5998 13.3468 11.1821 13.6529C11.035 13.7621 10.8784 13.8593 10.7242 13.959C10.7076 13.9709 10.6767 13.9709 10.6554 13.9638C10.0408 13.7882 9.4713 13.501 8.88283 13.259C8.37741 13.0502 7.87199 12.8461 7.36657 12.6397C7.31199 12.6183 7.25504 12.597 7.20284 12.5709C7.18386 12.5614 7.1625 12.5377 7.16013 12.5163C7.12216 12.1794 7.0842 11.8424 7.04861 11.5031C7.01539 11.1875 6.98454 10.8695 6.95844 10.5539C6.93471 10.2763 6.91573 9.9987 6.89437 9.72107C6.88488 9.4909 6.86827 9.26074 6.84929 9.00209Z"
                    fill="white"
                  ></path>
                  <path
                    d="M3.55577 5.79399C3.55577 5.40958 3.55577 5.02281 3.55814 4.6384C3.55814 4.6123 3.57475 4.58145 3.59374 4.56484C3.89034 4.26586 4.2178 4.00722 4.55 3.75095C5.00796 3.39977 5.47542 3.06282 5.98084 2.78282C6.1327 2.6974 6.28931 2.62384 6.43405 2.52656C6.5171 2.46961 6.58117 2.47435 6.66659 2.50045C7.04862 2.62859 7.43065 2.76147 7.8198 2.87062C8.3798 3.02723 8.92081 3.24316 9.46657 3.44248C9.55437 3.47333 9.54962 3.47333 9.55437 3.56587C9.56623 3.81027 9.58284 4.05468 9.59471 4.29908C9.60894 4.54112 9.62081 4.78552 9.63504 5.02755C9.65403 5.34789 9.67064 5.66585 9.68962 5.98619C9.70148 6.17602 9.71335 6.36585 9.72759 6.5533C9.72996 6.59127 9.71098 6.60788 9.6825 6.62923C9.2364 6.94245 8.78793 7.25093 8.34421 7.56889C7.81743 7.94617 7.30252 8.34007 6.81134 8.76244C6.74727 8.81702 6.69032 8.83363 6.60727 8.80515C5.73406 8.51566 4.86084 8.22855 3.98763 7.93906C3.89034 7.90584 3.79543 7.86787 3.69814 7.83228C3.6578 7.81804 3.64357 7.78957 3.63882 7.7516C3.58187 7.23669 3.54865 6.72178 3.5534 6.20212C3.55577 6.06687 3.55577 5.92924 3.55577 5.79399Z"
                    fill="white"
                  ></path>
                  <path
                    d="M10.8968 16.5617C10.9039 16.6969 10.9039 16.6946 10.7806 16.7539C10.6785 16.8013 10.5812 16.8559 10.4816 16.9081C10.0307 17.1549 9.55616 17.3352 9.0626 17.4752C8.74226 17.5654 8.41955 17.6461 8.09685 17.7244C8.03515 17.7386 7.96397 17.7196 7.8999 17.7125C7.1738 17.6176 6.47143 17.4278 5.79042 17.1549C5.76669 17.1454 5.74296 17.1264 5.72398 17.1074C5.39653 16.7966 5.06907 16.4881 4.74399 16.1773C4.67992 16.1156 4.60874 16.0563 4.55653 15.9851C4.52331 15.9376 4.50908 15.8736 4.49721 15.8142C4.45213 15.5912 4.40704 15.3705 4.37145 15.1475C4.32399 14.8485 4.28365 14.5471 4.24332 14.2458C4.22433 14.1081 4.21247 13.9705 4.19586 13.8353C4.18874 13.7783 4.21484 13.757 4.26467 13.7403C4.93856 13.5197 5.61246 13.3014 6.28398 13.0759C6.54025 12.9905 6.78702 12.8837 7.03855 12.7841C7.06228 12.7746 7.08363 12.7604 7.10262 12.7414C7.15007 12.6939 7.19516 12.7034 7.24973 12.7271C8.19651 13.1258 9.14565 13.5244 10.0948 13.9207C10.2775 13.9966 10.4697 14.0559 10.6572 14.12C10.6975 14.1342 10.7094 14.1532 10.7117 14.1936C10.7236 14.3478 10.7426 14.4997 10.7592 14.6515C10.7829 14.8769 10.809 15.1024 10.8256 15.3302C10.8517 15.7074 10.8731 16.0824 10.8945 16.4596C10.8992 16.4929 10.8968 16.5261 10.8968 16.5617Z"
                    fill="white"
                  ></path>
                  <path
                    d="M15.659 13.1374C15.5831 13.0852 15.5143 13.0354 15.4431 12.9903C14.94 12.67 14.437 12.352 13.9339 12.0317C13.9031 12.0127 13.8722 11.9913 13.839 11.9819C13.7465 11.9558 13.7275 11.8893 13.7228 11.8063C13.7038 11.4812 13.6895 11.1561 13.6611 10.831C13.635 10.5131 13.5994 10.1951 13.559 9.87712C13.5187 9.56391 13.4736 9.25306 13.4261 8.93984C13.3953 8.7429 13.3645 8.54595 13.3265 8.35137C13.3051 8.25171 13.3265 8.17815 13.3906 8.0951C13.9126 7.43308 14.4322 6.76867 14.9495 6.1019C14.9875 6.05444 15.016 5.99987 15.0468 5.94766C15.0729 5.90732 15.1014 5.89783 15.1488 5.92631C15.4716 6.12563 15.7943 6.3202 16.117 6.51715C16.1905 6.56223 16.2617 6.60732 16.3305 6.65478C16.4516 6.7402 16.5726 6.82562 16.6912 6.91342C16.7102 6.92765 16.7244 6.95613 16.7339 6.98223C16.9997 7.64189 17.2322 8.31341 17.441 8.99442C17.4671 9.08221 17.4743 9.16526 17.4743 9.25543C17.4648 9.83204 17.4268 10.4039 17.3082 10.9686C17.301 11.0066 17.2844 11.0422 17.2631 11.0754C17.1587 11.2439 17.059 11.4147 16.9427 11.5737C16.7648 11.8181 16.5797 12.0578 16.3922 12.2927C16.2119 12.5181 16.0268 12.7388 15.8417 12.9595C15.7895 13.0235 15.7231 13.0757 15.659 13.1374Z"
                    fill="white"
                  ></path>
                  <path
                    d="M3.38445 4.62849C3.38445 4.80409 3.38445 4.97256 3.38445 5.14341C3.38445 5.55391 3.37733 5.96679 3.38445 6.37729C3.39157 6.67628 3.4153 6.97763 3.43665 7.27661C3.45089 7.47593 3.47462 7.67288 3.4936 7.86983C3.49598 7.88644 3.48886 7.91016 3.47937 7.9244C3.12581 8.38948 2.83157 8.89253 2.55395 9.4027C2.39022 9.70642 2.25497 10.0268 2.10785 10.3423C2.06514 10.4373 2.02955 10.5346 1.98683 10.6295C1.97972 10.6437 1.95599 10.6579 1.93938 10.6556C1.62379 10.6176 1.3082 10.5773 0.992605 10.5393C0.888199 10.5274 0.783793 10.5179 0.679387 10.5132C0.641421 10.5108 0.627184 10.499 0.622438 10.461C0.589218 10.0149 0.534642 9.5688 0.555998 9.11795C0.56549 8.921 0.563117 8.72168 0.5821 8.52711C0.68176 7.53762 0.914301 6.58373 1.34853 5.68205C1.54548 5.27629 1.76853 4.88714 2.02243 4.51697C2.04378 4.48612 2.06277 4.479 2.09836 4.48138C2.49937 4.52883 2.90276 4.57155 3.30377 4.61663C3.33937 4.619 3.3631 4.62612 3.38445 4.62849Z"
                    fill="white"
                  ></path>
                  <path
                    d="M12.8639 3.0365C12.7879 3.0365 12.712 3.03412 12.6384 3.0365C12.3086 3.05311 11.9788 3.06497 11.6513 3.09344C11.2479 3.12666 10.8469 3.17175 10.4435 3.21446C10.2134 3.23819 9.9832 3.25954 9.75778 3.30226C9.6605 3.32124 9.58456 3.28802 9.50626 3.25954C8.61169 2.91785 7.69576 2.63548 6.77747 2.36735C6.77272 2.36497 6.7656 2.3626 6.76086 2.36023C6.65645 2.32701 6.65408 2.3104 6.67543 2.20362C6.70153 2.06362 6.71814 1.92362 6.73475 1.78125C6.75848 1.57718 6.77747 1.37312 6.79882 1.16905C6.80357 1.13109 6.81543 1.10498 6.8534 1.09787C6.98153 1.06702 7.10967 1.03143 7.2378 1.01007C7.54627 0.957867 7.85712 0.908037 8.16559 0.862953C8.28661 0.846343 8.41 0.851088 8.53101 0.839224C8.93677 0.801258 9.34016 0.846343 9.74355 0.86058C10.3866 0.884308 11.0083 1.02431 11.6205 1.21888C12.1093 1.37549 12.5767 1.5843 13.0252 1.83583C13.0656 1.85956 13.0727 1.88091 13.0632 1.926C13.0015 2.22735 12.9445 2.5287 12.8852 2.83006C12.8781 2.8965 12.8734 2.96294 12.8639 3.0365Z"
                    fill="white"
                  ></path>
                  <path
                    d="M4.35283 16.03C4.19622 16.03 4.0491 16.03 3.89961 16.03C3.883 16.03 3.86639 16.0205 3.85215 16.0086C3.45351 15.7239 3.09046 15.3988 2.76064 15.0357C2.26471 14.49 1.85183 13.8849 1.50776 13.2324C1.10438 12.4659 0.817262 11.6615 0.667771 10.8073C0.665398 10.7978 0.663025 10.7883 0.663025 10.7788C0.660653 10.748 0.65828 10.7171 0.653534 10.6792C0.765058 10.6887 0.876583 10.691 0.985735 10.7053C1.28472 10.7409 1.5837 10.7836 1.88505 10.8168C1.96573 10.8263 2.00844 10.8571 2.0464 10.9259C2.2125 11.2273 2.38098 11.5287 2.55894 11.8229C2.8342 12.2785 3.13792 12.7127 3.47012 13.128C3.63622 13.3344 3.81181 13.5337 3.98503 13.733C4.01588 13.7686 4.00876 13.8019 4.00876 13.8398C4.01114 13.9181 4.02063 13.9964 4.03012 14.0747C4.06334 14.3524 4.08944 14.6324 4.13452 14.9076C4.19147 15.2469 4.26503 15.5839 4.33147 15.9232C4.34096 15.9564 4.34571 15.9896 4.35283 16.03Z"
                    fill="white"
                  ></path>
                  <path
                    d="M17.0429 6.68071C16.9195 6.69732 16.8033 6.71393 16.6894 6.72817C16.6799 6.73054 16.6656 6.72342 16.6585 6.7163C16.1863 6.37936 15.7046 6.06377 15.2016 5.77665C15.1233 5.73157 15.09 5.6675 15.0521 5.59869C14.9524 5.42784 14.8528 5.25937 14.7484 5.09327C14.5087 4.71124 14.2548 4.34107 13.9677 3.99226C13.7423 3.71938 13.5168 3.4465 13.2558 3.20684C13.1941 3.14989 13.1348 3.0882 13.0779 3.02413C13.0613 3.00752 13.0518 2.9743 13.0541 2.95294C13.1087 2.62312 13.168 2.29329 13.2274 1.95397C15.0639 3.06684 16.3761 4.60446 17.0429 6.68071Z"
                    fill="white"
                  ></path>
                  <path
                    d="M13.1207 16.6965C11.7278 17.4701 10.2519 17.8284 8.67157 17.7643C8.79259 17.7287 8.91123 17.6955 9.03224 17.6599C9.40953 17.5484 9.78207 17.4155 10.1356 17.2399C10.3682 17.126 10.6055 17.0169 10.8404 16.9054C10.8617 16.8959 10.8831 16.884 10.9021 16.8721C10.9827 16.8247 11.061 16.7986 11.1631 16.8057C11.3482 16.8199 11.5356 16.8128 11.7207 16.8057C11.977 16.7962 12.2332 16.782 12.4895 16.763C12.6959 16.7464 12.9024 16.7203 13.1207 16.6965Z"
                    fill="white"
                  ></path>
                  <path
                    d="M17.1688 11.5405C16.7583 13.014 16.0156 14.2859 14.9217 15.3537C14.917 15.3513 14.9122 15.3489 14.9075 15.3465C14.917 15.3276 14.9241 15.3086 14.9336 15.2896C15.1946 14.7343 15.4414 14.1744 15.6644 13.6025C15.6644 13.6001 15.6668 13.6001 15.6668 13.5977C15.7142 13.3533 15.8661 13.1754 16.0251 12.9974C16.3905 12.5869 16.7322 12.1574 17.0359 11.6971C17.0739 11.6401 17.1166 11.5856 17.1569 11.531C17.1593 11.5357 17.1641 11.5381 17.1688 11.5405Z"
                    fill="white"
                  ></path>
                </svg>
              </span>
              <div className="text-text_Ternary md:text-[18px] text-base font-semibold leading-3 tracking-wide text-center">
                Football
              </div>
            </div>
            <div className="col-span-6 py-2.5 lg:col-span-7 grid grid-cols-12 h-full">
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                1
              </span>
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                X
              </span>
              <span className="text-text_Ternary text-xs font-semibold col-span-4 text-center flex items-center justify-center tracking-0.3">
                2
              </span>
            </div>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  24/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  07:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Dortmund
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Eintracht Frankfurt
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.75
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.76
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">22</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.5
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">9</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.6
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">5</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.7
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">20</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.9
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">60</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  27/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  12:15 AM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Verona
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Juventus
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          5.8
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          6
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">4</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.8
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">30</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">6</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.73
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">34</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.75
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">99</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  26/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  10:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Cagliari
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Como
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.24
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.28
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">35</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.5
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">23</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.65
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">39</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.65
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">333</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.75
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">83</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  01/09/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  06:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Chelsea
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Crystal Palace
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.76
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.81
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.2
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.4
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.7
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.9
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">7</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  31/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  10:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      West Ham
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Man City
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          8.8
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">3</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          11.5
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">52</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          5.9
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">8</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          6.8
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">11</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.35
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">31</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.36
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  01/09/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  06:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Newcastle
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Tottenham
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.3
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">200</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.36
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.2
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">12</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.5
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">22</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.86
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.05
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">10</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  01/09/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  08:30 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Man Utd
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Liverpool
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.85
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.95
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">5</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.5
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.8
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">61</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.86
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">10</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.94
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">14</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  30/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  10:00 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Venezia
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Torino
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">24</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          4.4
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.65
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          3.75
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.99
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">26</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          2.06
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">1</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
            <div className="col-span-6 h-12 lg:col-span-5 grid grid-cols-7 border-t border-borderColorOfMarket border-b">
              <span
                id="inPlayTime"
                className="flex items-center justify-center flex-col col-span-2 pl-[1px] pr-[1px] active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center">
                  28/08/2024
                </span>
                <span className="text-text_UpcomingEvents text-[6px] xs:text-[8px] md:text-[10px] font-semibold w-full text-center uppercase">
                  09:30 PM
                </span>
              </span>
              <span
                id="inPlayTeamName"
                className="text-selection-none flex items-center justify-start col-span-5 px-1 relative border-l border-r border-borderColorOfMarket active:scale-[94%] transition-all ease-in-out duration-100"
              >
                <span className="flex flex-col items-center justify-start w-[92%] md:w-[89%] mr-1">
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Betis
                    </span>
                  </span>
                  <span className="text-selection-none w-full flex items-center justify-start">
                    <span className="w-[5px] h-[5px] p-[1px] mr-[2px]"></span>
                    <span className="text-[11px] font-bold text-text_Ternary truncate sm:text-xs md:text-sm">
                      Getafe
                    </span>
                  </span>
                </span>
              </span>
            </div>
            <span className="col-span-6 h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket border-b">
              <div className="w-full grid grid-cols-12 grid-flow-col overflow-auto h-full">
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.03
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">56</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          900
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.04
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">56</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          950
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">3</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
                <div className="col-span-4 grid grid-cols-2 h-full">
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_BackBtnBg border border-backBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          1.03
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">56</span>
                        </span>
                      </div>
                    </span>
                  </div>
                  <div className="w-full h-full">
                    <span className="flex items-center justify-center w-full h-full p-[1px] md:p-[2px] overflow-hidden">
                      <div className="overflow-hidden relative opacity-50 cursor-not-allowed w-full h-full px-1 py-[1px] rounded-sm flex flex-col items-center justify-center bg-bg_LayBtnBg border border-layBtn undefined">
                        <span
                          id="oddBtnPrice"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-text_OddValue leading-5 text-sm md:text-[15px] font-semibold"
                        >
                          900
                        </span>
                        <span
                          id="oddBtnSize"
                          className="relative z-10 transition-all ease-in-out duration-300 origin-center flex items-center justify-center w-full text-[10px] text-text_OddValue leading-3 text-center whitespace-normal font-normal"
                        >
                          <span className="w-max break-all truncate">2</span>
                        </span>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingEvents;
