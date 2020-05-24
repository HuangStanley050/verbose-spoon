import * as actionTypes from "./actionTypes";
import { setCookie, removeCookie } from "../../util/cookieHelper";
import Router from "next/router";

import axios from "axios";

export const authenticate = (user) => {
  return async (dispatch) => {
    let result = await axios.post("http://localhost:8000/login", user);
    console.log(result.data.token);
    setCookie("token", result.data.token);
    Router.push("/");
    dispatch({ type: actionTypes.AUTHENTICATE, payload: result.data.token });
  };
};

export const reauthenticate = (token) => {
  return (dispatch) => {
    dispatch({ type: actionTypes.AUTHENTICATE, payload: token });
  };
};

// removing the token
export const deauthenticate = () => {
  return (dispatch) => {
    console.log("sign out");
    removeCookie("token");
    Router.push("/");
    dispatch({ type: actionTypes.DEAUTHENTICATE });
  };
};
