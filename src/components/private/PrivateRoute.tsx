// components/PrivateRoute.tsx

import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../context/authContext";

export const PrivateRoute = () => {
    
  const { getToken } = useAuthContext();
  const token = getToken()
  console.log(token);

  return token ? <Outlet /> : <Navigate to="/login" />;
};
