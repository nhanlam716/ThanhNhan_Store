import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => {
  return (props: P) => {
    /** Đây là nơi viết điều kiện */
    const user = localStorage.getItem("user");
    const parsedUser = JSON.parse(user ?? "{}");

    if (!parsedUser?.id) {
      return <Navigate to="/" />;
    }

    return <Component {...props} />;
  };
};

export default WithAuth;
