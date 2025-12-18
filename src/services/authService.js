import axios from "../config/axios";

export const saveUser = (user) => axios.post("/users", user);
export const getRole = (email) => axios.get(`/users/role/${email}`);
