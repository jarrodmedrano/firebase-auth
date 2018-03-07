import React from "react";
import Main from "./src/Main";
//** Redux **//
import { Provider } from "react-redux";
import store from "./src/store";
//** ----- **//

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
