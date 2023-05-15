import React from "react"
import { Outlet, Navigate, useLocation } from "react-router-dom"
import { LOCAL_STORAGE_TOKEN_NAME } from "../config";

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem(LOCAL_STORAGE_TOKEN_NAME);
  const location = useLocation();

  if (!isLoggedIn) {
    return (
      <Navigate
        to="/login"
        state={{
          message: "You must log in first.",
          from: location.pathname
        }}
        replace
      />
    )
  }

  return <Outlet />
}

export default ProtectedRoute