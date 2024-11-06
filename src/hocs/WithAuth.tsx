import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    /** Đây là nơi viết điều kiện */
    const isAuthenticated = localStorage.getItem("authToken");

    if (!isAuthenticated) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default WithAuth;
