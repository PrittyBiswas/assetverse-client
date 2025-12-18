import { useQuery } from "@tanstack/react-query";
import axios from "../config/axios";

export default function useRequestCount(role) {
  return useQuery({
    queryKey: ["request-count"],
    enabled: role === "hr",
    queryFn: async () => {
      const res = await axios.get("/requests/count");
      return res.data.count || 0;
    },
  });
}
