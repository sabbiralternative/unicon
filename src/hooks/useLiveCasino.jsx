import { useQuery } from "@tanstack/react-query";

import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";
/* live casino api */
const useLiveCasino = () => {
  const {
    data,
    refetch: refetchLiveCasino,
    isLoading,
  } = useQuery({
    queryKey: ["liveCasinoWolf"],

    queryFn: async () => {
      const res = await AxiosSecure.post(API.liveCasinoWolf, {
        gameList: "All",
        product: "All",
        isHome: true,
      });
      const result = res?.data;
      if (result?.status === "success") {
        return result?.data;
      }
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasino, isLoading };
};

export default useLiveCasino;
