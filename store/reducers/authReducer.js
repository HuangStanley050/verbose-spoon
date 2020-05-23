import * as actionTypes from "../actions/actionTypes";
//import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  token: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATE:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;
