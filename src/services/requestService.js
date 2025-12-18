import axios from "../config/axios";

export const requestAsset = (payload) =>
  axios.post("/requests", payload);

export const getHRRequests = () => axios.get("/requests/hr");
