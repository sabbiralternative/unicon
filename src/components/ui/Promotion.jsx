import { useNavigate } from "react-router-dom";
import assets from "../../assets";
import useLanguage from "../../hooks/useLanguage";
import { languageValue } from "../../utils/language";
import { LanguageKey } from "../../const";

const Promotion = () => {
  const { valueByLanguage } = useLanguage();
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/promotions")}
      className="w-full px-[6px] flex flex-col gap-y-2 mb-3"
    >
      <div
        className="w-full min-h-[70px] max-h-full  shadow-sm  md:col-span-1 rounded-[10px] pl-[17px] overflow-hidden  bg-cover bg-center bg-no-repeat cursor-pointer active:scale-[0.97] md:hover:scale-[101%] transition-all duration-300 flex items-center"
        style={{
          backgroundImage: `url(${assets.promotionBanner})`,
        }}
      >
        <h3 className="w-full text-white font-bold text-[13px] tracking-[0.219px] leading-normal">
          {languageValue(valueByLanguage, LanguageKey.PROMOTION_AND_BONUSES)}
        </h3>
      </div>
    </div>
  );
};

export default Promotion;
