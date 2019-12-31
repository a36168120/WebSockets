import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
