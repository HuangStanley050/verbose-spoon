import * as actionTypes from "../actionTypes";
import axios from "axios";

// export const authenticate = user => dispatch =>
//     fetch(`http://localhost:8000/api/signin`, {
//         method: 'POST',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(user)
//     })
//         .then(response => dispatch({ type: AUTHENTICATE, payload: response.data.token }))
//         .catch(err => console.log(err));
export const authenticate = (user) => {
  return async (dispatch) => {};
};
