import * as actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
const initialState = {
  token: null,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case actionTypes.AUTHENTICATE:
      return { ...state, token: action.payload };
    default:
      return state;
  }
};

export default reducer;
