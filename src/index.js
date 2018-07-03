import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import Counter from "./components/Counter";
import counter from "./reducers";
import Total from "./components/Total";
import "./styles.css";
const rootEl = document.getElementById("root");
const store = createStore(counter);

const render = () =>
  ReactDOM.render(
    <div className="App">
      <h1>Hello Paulo Marcelo KIM FOFO FOFURA DA MINHA VIDA</h1>
      <Counter
        value={store.getState()}
        onIncrement={() => store.dispatch({ type: "INCREMENT" })}
        onDecrement={() => store.dispatch({ type: "DECREMENT" })}
      />
      <Total value={store.getState()} />
    </div>,
    rootEl
  );

render();
store.subscribe(render);
