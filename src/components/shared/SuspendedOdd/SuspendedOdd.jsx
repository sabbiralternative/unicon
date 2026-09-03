import { LanguageKey } from "../../../const";
import useLanguage from "../../../hooks/use-language";

const SuspendedOdd = ({ colSpan }) => {
  const { getLanguage } = useLanguage();
  // bg-bg_ballRunning
  return (
    <span
      className={`col-span-${colSpan} h-12 lg:col-span-7 w-full overflow-auto border-t border-borderColorOfMarket`}
    >
      <span className="text-xs text-center w-full h-full flex items-center bg-bg_ballRunning  text-text_SuspendedFontColor font-bold justify-center rounded-sm">
        {getLanguage(LanguageKey.SUSPENDED)}
      </span>
    </span>
  );
};

export default SuspendedOdd;
