import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useLiveCasinoLobby = (casinoType) => {
  const {
    data,
    refetch: refetchLiveCasinoLobby,
    isLoading,
  } = useQuery({
    queryKey: [`liveCasinoLobby/${casinoType}`],
    queryFn: async () => {
      const res = await AxiosSecure.post(
        `${API.liveCasinoLobby}/${casinoType}/ALL`
      );
      return res?.data?.gameList;
    },
    refetchOnWindowFocus: false,
  });
  return { data, refetchLiveCasinoLobby, isLoading };
};

export default useLiveCasinoLobby;
