import { useQuery } from "@tanstack/react-query";
import { API } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";
import { useSelector } from "react-redux";

/* exposure api */
const useExposer = (eventId) => {
  const { token } = useSelector((state) => state.auth);
  const { data: exposer = {}, refetch: refetchExposure } = useQuery({
    queryKey: ["exposure"],
    enabled: !!token,
    queryFn: async () => {
      const res = await AxiosSecure.post(
        `${API.exposure}/${eventId || "sports"}`
      );
      const data = res.data;

      if (data.success) {
        return data.result;
      }
    },
  });
  return { exposer, refetchExposure };
};

export default useExposer;
