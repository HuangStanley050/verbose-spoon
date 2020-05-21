import { combineReducers } from "redux";
import fooReducer from "./fooReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  foo: fooReducer,
  auth: authReducer,
});

export default rootReducer;
