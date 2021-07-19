import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const { token: savedToken } = JSON.parse(localStorage?.getItem("login")) || {
    token: null,
  };
  const [token, setToken] = useState(savedToken);
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginService = (email, password) => {
    return axios.post(`${API_URL}/user/login`, { email, password });
  };

  const loginUser = (data) => {
    setToken(data.token);
    localStorage.setItem("login", JSON.stringify({ login: true, token }));
    navigate(state?.from ? state.from : "/");
  };

  const loginWithCredentials = async (email, password) => {
    try {
      const loginResponse = await loginService(email, password);
      if (loginResponse.status === 200) {
        loginUser(loginResponse.data);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logoutUser = () => {
    setToken(null);
    localStorage.removeItem("login");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ token, loginWithCredentials, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
