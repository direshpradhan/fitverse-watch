import axios from "axios";
import { API_URL } from "../../constants";

export const signupService = async (name, email, password) => {
  return axios.post(`${API_URL}/user/signup`, { name, email, password });
};
