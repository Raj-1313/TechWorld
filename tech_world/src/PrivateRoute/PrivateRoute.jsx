import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const data= useSelector((store) => store.login.data);
   if (!data.token) {
    return <Navigate to="/login" />;
  }
  return children;
 
};

export default PrivateRoute;
