import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setCookie, getCookie, removeCookie } from "../../util/cookieHelper";
// export const getPosts = () => (dispatch) =>
//   axios({
//     method: "GET",
//     url: `https://jsonplaceholder.typicode.com/posts`,
//     headers: [],
//   }).then((response) => dispatch({ type: "FOO", payload: response.data }));

export const getPosts = () => {
  return async (dispatch) => {
    try {
      let res = await axios({
        method: "GET",
        url: `https://jsonplaceholder.typicode.com/posts`,
        headers: [],
      });
      //console.log(res.data);
      dispatch({ type: actionTypes.FOO, payload: res.data });
    } catch (err) {
      console.log("error happened");
      console.log(err);
    }
  };
};

export const add = () => {
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.ADD });
    setCookie("count", getState().foo.count);
    console.log(getCookie("count"));
  };
};
export const reapplyCount = (count) => {
  //console.log(typeof count);
  return {
    type: actionTypes.REAPPLY,
    payload: count,
  };
};
export const minus = () => {
  //removeCookie("count");
  return (dispatch, getState) => {
    dispatch({ type: actionTypes.MINUS });
    setCookie("count", getState().foo.count);
    console.log(getCookie("count"));
  };
};
