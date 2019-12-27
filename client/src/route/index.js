import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import App from "../App";
import OutputContainer from "../pages/output";

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route path="/output" component={OutputContainer} />
    </div>
  </Router>
);

export default routing;
