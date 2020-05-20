import * as actionTypes from "../actions/actionTypes";
const reducer = (state = { foo: "" }, action) => {
  switch (action.type) {
    case actionTypes.FOO:
      return { ...state, foo: action.payload };
    default:
      return state;
  }
};

export default reducer;
