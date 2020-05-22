import * as actionTypes from "./actionTypes";
import axios from "axios";

export const authenticate = (user) => {
  return async (dispatch) => {
    let result = await axios.post("http://localhost:8000/login", user);
    console.log(result.data.token);
    dispatch({ type: actionTypes.AUTHENTICATE, payload: result.data.token });
  };
};
