import useDepositBreakdown from "../../../hooks/depositBreakdown";
import toast from "react-hot-toast";

const ChooseAmount = ({ amount, setAmount, setPaymentMethods }) => {
  const { mutate: handleDepositBreakdown } = useDepositBreakdown();

  const handleShowPaymentMethods = () => {
    const floatAmount = parseFloat(amount);

    if (typeof floatAmount !== "number") {
      return toast.error("Please enter a valid number");
    }

    if (floatAmount) {
      handleDepositBreakdown(
        { amount: floatAmount },
        {
          onSuccess: (data) => {
            if (data?.minimumDeposit && floatAmount < data?.minimumDeposit) {
              toast.error(`Minimum deposit amount is ${data?.minimumDeposit}`);
            } else {
              setPaymentMethods(true);
            }
          },
        }
      );
    } else {
      return toast.error("Amount is required");
    }
  };

  return (
    <div
      className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
      style={{ minHeight: "calc(-110px + 100dvh)" }}
    >
      <div className="mx-2">
        <div>
          <div className="w-full mt-2.5 py-[15px] rounded-lg bg-bg_Quaternary px-3">
            <div className="font-lato font-bold text-text_Ternary text-base leading-5">
              <p>
                Amount<span className="text-text_Danger">*</span>
              </p>
            </div>
            <div className="w-full mt-2 py-2 grid grid-cols-12 border rounded-[4px] px-2 items-center justify-center border-[var(--color-bg-primary)]">
              <input
                onChange={(e) => setAmount(e.target.value)}
                value={amount !== null && amount !== undefined ? amount : ""}
                className="block w-full focus:outline-none col-span-11 w-full h-max font-lato placeholder:font-lato placeholder:font-normal font-bold text-base"
                placeholder="₹ Enter Amount"
                required=""
                type="number"
              />
              <span className="font-lato font-bold leading-4 text-teranry text-base col-span-1 text-center">
                INR
              </span>
            </div>
            <div className="w-full grid grid-cols-3 gap-[10px] mt-[18px]">
              <button
                onClick={() => setAmount(300)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+300</span>
              </button>
              <button
                onClick={() => setAmount(500)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+500</span>
              </button>
              <button
                onClick={() => setAmount(1000)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+1,000</span>
              </button>
              <button
                onClick={() => setAmount(5000)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+5,000</span>
              </button>
              <button
                onClick={() => setAmount(10000)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+10,000</span>
              </button>
              <button
                onClick={() => setAmount(50000)}
                className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary transition-all ease-in-out duration-300 active:scale-95 text-primary min-h-9 text-base font-lato rounded-md font-[800] leading-4 cursor-pointer"
                type="button"
              >
                <span>+50,000</span>
              </button>
            </div>
            {/* {error && (
              <div className="my-2">
                <span className="text-text_Primary text-base font-lato font-[480] leading-4">
                  {error}
                </span>
              </div>
            )} */}
          </div>

          <div className="flex items-start justify-center gap-x-2 py-3 px-5">
            <div className="inline-flex items-center">
              <label
                className="relative flex cursor-pointer items-center rounded-full bg-bg_Quinary"
                htmlFor="blue"
              >
                <input
                  className="before:content[''] before:bg-primary3 rounded-md peer relative cursor-pointer appearance-none border border-success transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-max before:w-max before:-translate-x-2/4 before:-translate-y-2/4 before:opacity-0 before:transition-opacity checked:border-success checked:bg-bg_Success hover:before:opacity-10 h-5 w-5"
                  id="blue"
                  type="checkbox"
                  defaultChecked
                />
                <span className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-primary opacity-0 transition-opacity peer-checked:opacity-100">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3.5 w-3.5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth="1"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </label>
            </div>
            <span className="text-sm text-textColor font-lato font-[400] leading-5">
              I have read and agree with{" "}
              <span className="text-text_Primary underline text-sm font-lato font-[400] leading-4 cursor-pointer">
                the terms of payment and withdrawal policy.
              </span>
            </span>
          </div>
          <div className="w-full text-center py-4 px-2">
            <button
              onClick={handleShowPaymentMethods}
              //   disabled={!amount}
              //   style={{
              //     cursor: `${!amount ? "not-allowed" : "pointer"}`,
              //     opacity: `${!amount ? "0.5" : "1"}`,
              //   }}
              className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out bg-bg_Primary flex items-center justify-center gap-x-2 w-full text-primary h-10 text-base rounded-md font-[500] leading-4 disabled:bg-bg_Quinary cursor-pointer"
            >
              <span>Proceed to select payment method</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseAmount;
