import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useLotusHomeLobby = () => {
  const { data: lotusLobby, isLoading } = useQuery({
    queryKey: [`lotusHomeLobby`],
    queryFn: async () => {
      const res = await AxiosSecure.post(`${API.lotusHomeLobby}`);

      return res?.data;
    },
    refetchOnWindowFocus: false,
  });
  return { lotusLobby, isLoading };
};

export default useLotusHomeLobby;
