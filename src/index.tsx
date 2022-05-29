import React from "react";
import ReactDOM from "react-dom/client";
import store from "core/store";
import App from "container/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
