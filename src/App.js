import React from "react";
import "./config/reactotronConfig";

import { Provider } from "react-redux";

import store from "./store";

import TodoList from "./TodoList";

console.tron.log("Testando 123");

function App() {
  return (
    <Provider store={store}>
      <TodoList></TodoList>
    </Provider>
  );
}

export default App;
