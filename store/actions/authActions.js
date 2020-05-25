import * as actionTypes from "./actionTypes";
import { setCookie, removeCookie, getCookie } from "../../util/cookieHelper";
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
  return async (dispatch) => {
    console.log("sign out");
    const token = getCookie("token");
    let result = await axios.post("http://localhost:8000/logout", {
      token,
    });
    //console.log(result);
    removeCookie("token");
    Router.push("/");
    dispatch({ type: actionTypes.DEAUTHENTICATE });
  };
};

export const checkServerSideCookie = (ctx) => {
  if (ctx.req) {
    if (ctx.req.headers.cookie) {
      const token = getCookie("token", ctx.req);
      ctx.store.dispatch(reauthenticate(token));
      //console.log(token);
    }
  } else {
    return;
  }
};
