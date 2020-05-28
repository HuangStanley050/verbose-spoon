import { createStore, applyMiddleware, combineReducers } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxCookiesMiddleware from "redux-cookies-middleware";
import getStateFromCookies from "redux-cookies-middleware/lib/getStateFromCookies";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index";
import { setCookie } from "../util/cookieHelper";

const reducer = (state, action) => {
  if (action.type === HYDRATE) {
    const nextState = {
      ...state, // use previous state
      ...action.payload, // apply delta from hydration
    };
    //if (state.count) nextState.count = state.count; // preserve count value on client side navigation
    return nextState;
  } else {
    return rootReducer(state, action);
  }
};
let initialState = {
  auth: {
    token: null,
  },
};

// state to persist in cookies
const paths = {
  "auth.token": { name: "my_app_token" },
};
initialState = getStateFromCookies(initialState, paths);
const makeStore = ({ foo, auth, session }) => {
  return createStore(
    reducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(thunk, reduxCookiesMiddleware(paths, { setCookie }))
    )
  );
};

export const wrapper = createWrapper(makeStore, { debug: true });
