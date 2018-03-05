import React from "react";
import Main from "./src/Main";
//** Redux **//
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./src/reducers";
//** ----- **//

const store = createStore(reducers, applyMiddleware(reduxThunk));

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}
