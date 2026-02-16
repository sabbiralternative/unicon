import { useQuery } from "@tanstack/react-query";
import { API, settings } from "../api";
import { AxiosSecure } from "../lib/AxiosSecure";

const useIFrame = (eventTypeId, eventId) => {
  const { data: iFrameUrl, refetch: refetchIFrameUrl } = useQuery({
    queryKey: ["iframeVideo"],
    queryFn: async () => {
      const payload = {
        eventTypeId: eventTypeId,
        eventId: eventId,
        type: "video",
        site: settings.siteUrl,
        casinoCurrency: settings.casino_currency,
      };
      const res = await AxiosSecure.post(API.accessToken, payload);
      const data = res?.data;

      if (data?.success) {
        return data?.result;
      }
    },
    gcTime: 0,
  });
  return { iFrameUrl, refetchIFrameUrl };
};

export default useIFrame;
