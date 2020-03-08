import React from "react";
import { Provider, useSelector } from "react-redux";
import withRedux from "next-redux-wrapper";
import { createSelector } from "reselect";

import makeStore from "store/";

import Alert from "components/App/Alert";

import "../styles/index.scss";

// const alertSelector = createSelector(state => state.alert);

function MyApp({ Component, pageProps, store }) {
  const alert = store.getState().alert;
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      {alert.message && <Alert message={alert.message} type={alert.type} />}
    </Provider>
  );
}

export default withRedux(makeStore)(MyApp);
