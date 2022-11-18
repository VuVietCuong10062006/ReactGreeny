import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  const auth = useSelector((state) => state.auth.auth);
    
  return auth.id ? <Outlet /> : <Navigate to={"/login"} />;
};

export default PrivateRoutes;
