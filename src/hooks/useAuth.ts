import { useState } from "react";
import { UserAuth } from "../interfaces/User";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [auth, setAuth] = useState<UserAuth | boolean | undefined>();
  const navigate = useNavigate();
  const login = (user: UserAuth) => {
    console.log("Login", user);
    setAuth(true);
    setToken("1232546646");
    return navigate("/");
  };
  const setToken = (token: string) => {
    localStorage.setItem("token", token);
  };
  const getToken = (): string => {
    return localStorage.getItem("token") || "";
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return {
    login,
    setToken,
    getToken,
    auth,
    logout,
  };
};
