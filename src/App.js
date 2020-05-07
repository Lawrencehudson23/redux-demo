import React from "react";
import "./App.css";
import Inner from "./components/Inner";
import { createStore } from "redux";
import { Provider } from "react-redux";

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.user,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
}
const initialState = {
  user: null,
};
const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Inner />
      </div>
    </Provider>
  );
}

export default App;
