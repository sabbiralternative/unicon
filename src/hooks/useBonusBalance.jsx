import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import { logout } from "../redux/features/auth/authSlice";
import { useDispatch } from "react-redux";

import { AxiosSecure } from "../lib/AxiosSecure";
import useLanguage from "./use-language";

const useBonusBalance = () => {
  const { language } = useLanguage();
  const dispatch = useDispatch();
  const bonusToken = localStorage.getItem("bonusToken");
  const { data: bonusBalance = {}, refetch: refetchBonusBalance } = useQuery({
    queryKey: ["bonusBalance"],
    enabled: bonusToken ? true : false,
    queryFn: async () => {
      let payload = {};
      if (settings.language) {
        payload.language = language;
      }

      const res = await AxiosSecure.post(API.balance);

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
