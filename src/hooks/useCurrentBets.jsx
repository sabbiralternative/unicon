import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useSelector } from "react-redux";

const useCurrentBets = (eventId) => {
  const { token } = useSelector((state) => state.auth);
  const { data: myBets = [], refetch: refetchCurrentBets } = useQuery({
    queryKey: ["currentBets"],
    enabled: !!token,
    queryFn: async () => {
      const { data } = await AxiosSecure.post(
        `${API.currentBets}/${eventId || "sports"}`
      );

      if (data.success) {
        return data.result;
      }
    },
    gcTime: 0,
  });
  return { myBets, refetchCurrentBets };
};

export default useCurrentBets;
