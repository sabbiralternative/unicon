import { useEffect, useState } from "react";
import ShowImage from "../../modal/ShowImage/ShowImage";
import useWithdrawStatement from "../../../hooks/useWithdrawStatement";
import { settings } from "../../../api";
import Complaint from "../../modal/Complaint/Complaint";

const WithdrawReport = () => {
  const [complaintId, setComplaintId] = useState(null);
  const [image, setImage] = useState("");
  const { withdrawStatement } = useWithdrawStatement();
  const [category, setCategory] = useState([]);
  //   const [showModal, setShowModal] = useState(false);
  //   const [image, setImage] = useState("");

  useEffect(() => {
    if (withdrawStatement?.length > 0) {
      const categories = Array.from(
        new Set(withdrawStatement?.map((item) => item?.date?.split(" ")?.[0]))
      );
      setCategory(categories);
    }
  }, [withdrawStatement]);

  return (
    <>
      {complaintId && (
        <Complaint setComplaintId={setComplaintId} method="withdraw" />
      )}
      {image && <ShowImage image={image} setShowImage={setImage} />}
      <div className="rounded-lg flex flex-col gap-y-2 px-2 overflow-clip mt-2 ">
        {withdrawStatement?.length > 0 ? (
          <>
            {category?.map((category) => {
              return (
                <>
                  <div className="flex justify-center items-center sticky top-12">
                    <div className="text-center bg-bg_Quaternary px-2.5 py-1 font-bold rounded text-[10px] shadow-sm">
                      {category}
                    </div>
                  </div>
                  {withdrawStatement
                    ?.filter((item) => item?.date?.split(" ")?.[0] === category)
                    ?.map((data, i) => {
                      return (
                        <div
                          key={i}
                          className="flex  flex-col  border bg-bg_Quaternary rounded overflow-hidden shadow-lg"
                        >
                          <div className="flex justify-between items-start text-[10px] font-bold h-full">
                            <div className="text-base px-3 py-1">Withdraw</div>
                            <div
                              className={`px-3 py-1 text-x xs:text-xs sm:text-sm font-semibold text-text_Quaternary rounded-bl h-full   
                            
                            ${
                              data?.status === "APPROVED"
                                ? "bg-bg_transactionSuccessBg"
                                : ""
                            } ${
                                data?.status === "REJECTED"
                                  ? "bg-bg_transactionFailedBg "
                                  : ""
                              } ${
                                data?.status === "PENDING"
                                  ? "bg-bg_transactionPendingBg"
                                  : ""
                              }
                            `}
                            >
                              {data?.status}
                            </div>
                          </div>
                          <div className="flex  justify-between  mt-2">
                            <span className="flex flex-col justify-center flex-1 px-3">
                              <span className="text-xs font-normal">
                                {data?.remark}
                              </span>
                            </span>
                            {data?.image && (
                              <span
                                onClick={() => setImage(data?.image)}
                                className="flex-1 flex justify-end cursor-pointer px-3"
                              >
                                <img
                                  className="size-12"
                                  src={data?.image}
                                  alt=""
                                />
                              </span>
                            )}
                            <span className="text-start text-lg flex flex-col items-end justify-end tracking-tighter  flex-1 ">
                              <span className="font-bold px-3 mb-2">
                                ₹ {data?.amount}{" "}
                              </span>
                              {settings.complaint && (
                                <button
                                  style={{ backgroundColor: "rgb(255 131 46)" }}
                                  onClick={() =>
                                    setComplaintId(data?.referenceNo)
                                  }
                                  className="px-2 py-1 text-xs xs:text-xs sm:text-sm font-semibold text-text_Quaternary rounded-tl h-fit tracking-normal"
                                >
                                  Report Issue
                                </button>
                              )}
                            </span>
                          </div>
                          <div className="text-xs py-1 text-center text-text_Quinary w-full border-t bg-bg_Ternary6">
                            {data?.date}
                          </div>
                        </div>
                      );
                    })}
                </>
              );
            })}
          </>
        ) : (
          <div className="flex items-center justify-center pt-20">
            <p>No transaction yet!</p>
          </div>
        )}
      </div>
    </>
  );
};

export default WithdrawReport;
