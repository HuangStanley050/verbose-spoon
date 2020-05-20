import React from "react";
//import { createStore } from 'redux';
import { Provider } from "react-redux";
import App, { Container } from "next/app";
import withRedux from "next-redux-wrapper";
import store from "../store/setupStore";

const MyApp = ({ Component, pageProps, store }) => {
  return (
    <Container>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Container>
  );
};
const makeStore = () => store;
MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  ctx.store.dispatch({ type: "FOO", payload: "foo" });
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
