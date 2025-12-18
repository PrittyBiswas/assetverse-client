import axios from "../config/axios";

export const getHRAssets = () => axios.get("/assets/hr");
export const addAsset = (data) => axios.post("/assets", data);
export const getAvailableAssets = () => axios.get("/assets/available");
