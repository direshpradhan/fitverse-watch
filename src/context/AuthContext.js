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
    console.log("entered service");
    return axios.post(`${API_URL}/user/login`, { email, password });
  };

  const loginUser = (data) => {
    setToken(data.token);
    localStorage.setItem(
      "login",
      JSON.stringify({ login: true, token: data.token })
    );
    navigate(state?.from ? state.from : "/");
  };

  const loginUserWithCredentials = async (email, password) => {
    console.log("entered........");
    try {
      const loginResponse = await loginService(email, password);
      console.log(loginResponse);
      if (loginResponse.status === 201) {
        console.log("entered if ", loginResponse);
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
    <AuthContext.Provider
      value={{ token, loginUserWithCredentials, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
