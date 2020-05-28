import * as actionTypes from "./actionTypes";
import { setCookie, removeCookie, getCookie } from "../../util/cookieHelper";
import Router from "next/router";
import getStateFromCookies from "redux-cookies-middleware/lib/getStateFromCookies";
import axios from "axios";

let initialState = {
  auth: {
    token: null,
  },
};

// state to persist in cookies
const paths = {
  "auth.token": { name: "my_app_token" },
};

export const authenticate = (user) => {
  return async (dispatch) => {
    let result = await axios.post("http://localhost:8000/login", user);
    console.log(result.data.token);
    setCookie("my_app_token", result.data.token);
    Router.push("/");
    dispatch({ type: actionTypes.AUTHENTICATE, payload: result.data.token });
  };
};

export const reauthenticate = (token) => {
  return (dispatch) => {
    console.log("you are being reauthenticated");
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
      //console.log("this is from redux cookie middleware");
      //console.log(ctx.req.headers.cookie);
      const token = getCookie("my_app_token", ctx.req);
      console.log(token);
      ctx.store.dispatch(reauthenticate(token));
      if (ctx.pathname === "/signin") {
        console.log("you hit the signin and signup route");
        console.log("you are already authenticated");
        ctx.res.redirect("/");
      }
    }
  } else {
    return;
  }
};
