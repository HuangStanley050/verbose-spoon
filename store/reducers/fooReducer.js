import * as actionTypes from "../actions/actionTypes";
//import { HYDRATE } from "next-redux-wrapper";
const reducer = (state = { foo: "", count: 0 }, action) => {
  switch (action.type) {
    case actionTypes.REAPPLY:
      //console.log(Number(action.payload));
      return {
        ...state,
        count: parseInt(action.payload),
      };
    case actionTypes.MINUS:
      return {
        ...state,
        count: (state.count -= 1),
      };
    case actionTypes.ADD:
      return {
        ...state,
        count: (state.count += 1),
      };
    case actionTypes.FOO:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default reducer;
