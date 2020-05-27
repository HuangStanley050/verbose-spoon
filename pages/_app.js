import React, { useEffect } from "react";

import { Provider } from "react-redux";
import App from "next/app";

import { wrapper } from "../store/setupStore";
import { checkServerSideCookie } from "../store/actions/authActions";

import Head from "next/head";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../util/theme";

const MyApp = ({ Component, pageProps, store }) => {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <>
      <Head>
        <title>My page</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

MyApp.getInitialProps = async ({ Component, ctx }) => {
  // we can dispatch from here too
  //ctx.store.dispatch({ type: "FOO", payload: "foo" });
  checkServerSideCookie(ctx);
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};
//const makeStore = () => store;
export default wrapper.withRedux(MyApp);
