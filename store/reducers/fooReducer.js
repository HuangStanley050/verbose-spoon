import * as actionTypes from "../actions/actionTypes";
import { HYDRATE } from "next-redux-wrapper";
const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case HYDRATE:
      // Attention! This will overwrite client state! Real apps should use proper reconciliation.
      return { ...state, ...action.payload };
    case actionTypes.FOO:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default reducer;
