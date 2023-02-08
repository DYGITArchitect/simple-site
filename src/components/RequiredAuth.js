import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { getLoginState } from "../redux/auth/selectors/loginSelector";
import { RoutesNames } from "../routers";

const RequiredAuth = ({ children }) => {
  const { isAuth } = useSelector(getLoginState);
  const location = useLocation();

  if (!isAuth) {
    console.log("RequiredAuth location.pathname:  " + location.pathname);
    return (
      <Navigate
        to={"/" + RoutesNames.LOGIN}
        state={{ path: location.pathname }}
      />
    );
  }

  return children;
};

export default RequiredAuth;
