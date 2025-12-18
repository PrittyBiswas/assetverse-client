import axios from "../config/axios";

export const getMyAffiliations = () =>
  axios.get("/affiliations/me");
