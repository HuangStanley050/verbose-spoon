import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";

const makeStore = (context) => {
  return createStore(
    rootReducer,
    initiatlState,
    composeWithDevTools(applyMiddleware(thunk))
  );
};

export const wrapper = createWrapper(makeStore, { debug: true });
