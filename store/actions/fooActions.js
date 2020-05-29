import axios from "axios";
import * as actionTypes from "./actionTypes";
import { setCookie, getCookie } from "../../util/cookieHelper";
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

export const add = (counter) => {
  setCookie("count", counter);
  console.log(getCookie("count"));
  return { type: actionTypes.ADD };
};

export const minus = (counter) => {
  setCookie("count", counter);
  console.log(getCookie("count"));
  return { type: actionTypes.MINUS };
};
