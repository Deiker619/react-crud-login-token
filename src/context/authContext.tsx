import { createContext, useContext } from "react";
import { useAuth } from "../hooks/useAuth";
import { UserAuth } from "../interfaces/User";

interface AuthProps {
  login: (user: UserAuth) => void;
  setToken: (token:string) =>void
  auth: UserAuth | boolean | undefined
  getToken: ()=>string,
  logout:()=>void
}
const AuthContext = createContext<AuthProps | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { login, auth, setToken, getToken, logout } = useAuth();

  return (
    <AuthContext.Provider value={{ login, auth, setToken, getToken, logout }}>{children}</AuthContext.Provider>
  );
};

export  const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext debe usarse dentro de <AuthProvider>");
  }
  return context;
};
