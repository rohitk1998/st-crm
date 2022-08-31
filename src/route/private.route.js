import React from "react"
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export function PrivateRoute({ children }) {
  const islogin = useSelector((state) => state.auth.islogin);
  console.log("islogin",islogin);
  return islogin ? children : <Navigate to="/login" />;
}
