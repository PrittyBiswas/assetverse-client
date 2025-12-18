import axios from "../config/axios";

export const createCheckoutSession = (pkg) =>
  axios.post("/payments/create-session", pkg);
