import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API, settings } from "../api";
import handleRandomToken from "../utils/handleRandomToken";
import handleEncryptData from "../utils/handleEncryptData";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";
import useLanguage from "./useLanguage";

const useBonusBalance = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const bonusToken = localStorage.getItem("bonusToken");
  const { data: bonusBalance = {}, refetch: refetchBonusBalance } = useQuery({
    queryKey: ["bonusBalance"],
    enabled: bonusToken ? true : false,
    queryFn: async () => {
      let payload = {
        token: generatedToken,
        site: settings.siteUrl,
      };
      if (settings.language) {
        payload.language = language;
      }
      const generatedToken = handleRandomToken();
      const encryptedData = handleEncryptData(payload);
      const res = await axios.post(API.balance, encryptedData, {
        headers: {
          Authorization: `Bearer ${bonusToken}`,
        },
      });

      if (res?.data?.success === false && bonusToken) {
        dispatch(logout());
      }
      if (res?.data?.success && bonusToken) {
        const data = res.data?.result;
        return data;
      }
    },
  });

  return { bonusBalance, refetchBonusBalance };
};

export default useBonusBalance;
