import { useForm } from "react-hook-form";
import LeftDeskSidebar from "../../components/shared/desktop/LeftDeskSidebar/LeftDeskSidebar";
import RightDeskSidebar from "../../components/shared/desktop/RightDeskSidebar/RightDeskSidebar";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEditButtonValuesMutation } from "../../redux/features/events/events";

const StakeSettings = () => {
  const [editButtonValue] = useEditButtonValuesMutation();
  const navigate = useNavigate();
  const buttonGameValues = JSON.parse(localStorage.getItem("buttonValue"));
  const { register, handleSubmit } = useForm();

  const onSubmit = async ({
    buttons0value,
    buttons1value,
    buttons2value,
    buttons3value,
    buttons4value,
    buttons5value,
    buttons6value,
    buttons7value,
  }) => {
    const payload = {
      game: [
        {
          label: 100,
          value: buttons0value,
        },
        {
          label: 100,
          value: buttons1value,
        },
        {
          label: 100,
          value: buttons2value,
        },
        {
          label: 100,
          value: buttons3value,
        },
        {
          label: 100,
          value: buttons4value,
        },
        {
          label: 100,
          value: buttons5value,
        },
        {
          label: 100,
          value: buttons6value,
        },
        {
          label: 100,
          value: buttons7value,
        },
      ],
    };

    const res = await editButtonValue(payload).unwrap();
    if (res.success) {
      toast.success(res?.result?.message);
      localStorage.removeItem("buttonValue");
      const gameButtonsValues = payload.game;
      /* set edited button values */
      localStorage.setItem("buttonValue", JSON.stringify(gameButtonsValues));
      navigate("/");
    }
  };

  return (
    <div className="flex items-start justify-start w-full lg:px-12 xl:px-20 xlg:px-24">
      <LeftDeskSidebar />
      <div
        className="w-full md:mt-[0px] lg:overflow-auto lg:w-[54%]"
        style={{ minHeight: "calc(-110px + 100dvh)" }}
      >
        <div>
          <div className="w-full flex flex-col items-center justify-start gap-y-2 px-2">
            <div className="p-2 w-full space-y-2 mt-[14px] md:mt-[0px] rounded-lg bg-bg_Quaternary shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full space-y-2"
              >
                <span className="text-base text-text_Ternary font-lato font-semibold px-2">
                  Stakes
                </span>
                <div className="grid grid-cols-3 gap-2">
                  {buttonGameValues?.map((item, i) => {
                    return (
                      <div key={i} className="bg-bg_StakeInput">
                        <input
                          {...register(`buttons${i}value`, {
                            required: true,
                          })}
                          className="rounded h-10 px-3 bg-bg_StakeInput flex justify-center items-center text-base text-text_Ternary font-lato border border-ternary2 focus:border-success shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full text-center"
                          type="text"
                          defaultValue={item?.value}
                        />
                      </div>
                    );
                  })}
                </div>
                <div className="w-full flex items-center justify-center">
                  <button
                    className="inline-block leading-normal relative overflow-hidden transition duration-150 ease-in-out flex items-center justify-center gap-1 p-2 bg-[var(--color-bg-primary)] mt-2 w-full sm:max-w-[350px] rounded font-semibold text-primary disabled:opacity-80 cursor-pointer"
                    type="submit"
                  >
                    <span className="text-base text-primary font-lato font-[400] space-x-1">
                      EDIT
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <RightDeskSidebar />
    </div>
  );
};

export default StakeSettings;
