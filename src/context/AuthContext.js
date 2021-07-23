import axios from "axios";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../constants";
import { signupService } from "../services";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

const setupAuthHeadersForServiceCalls = (token) => {
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = `Bearer ${token}`);
  }
  delete axios.defaults.headers.common["Authorization"];
};

export const AuthContextProvider = ({ children }) => {
  const { token: savedToken } = JSON.parse(localStorage?.getItem("login")) || {
    token: null,
  };
  const [token, setToken] = useState(savedToken);
  token && setupAuthHeadersForServiceCalls(token);
  const navigate = useNavigate();
  const { state } = useLocation();

  const loginService = (email, password) => {
    console.log("entered service");
    return axios.post(`${API_URL}/user/login`, { email, password });
  };

  const loginUser = ({ token }) => {
    setToken(token);
    setupAuthHeadersForServiceCalls(token);
    localStorage.setItem("login", JSON.stringify({ login: true, token }));
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
    setupAuthHeadersForServiceCalls(null);
    localStorage.removeItem("login");
    navigate("/");
  };

  const signupUser = async (name, email, password) => {
    try {
      const signupResponse = await signupService(name, email, password);
      console.log(signupResponse);
      if (signupResponse.status === 201) {
        loginUser(signupResponse.data);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        loginUserWithCredentials,
        logoutUser,
        signupUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
