import React, { Component } from "react";
import brofist from "./assets/img/brofist.png";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect,
  NavLink
} from "react-router-dom";
import Home from "./Home";
import Input from "./Input";
import Output from "./Output";
import NavLinks from "./NavLinks.js";

// const Button = () => <button onClick={() => this.send()}>Socket Test</button>;

function App() {
  return (
    <div className="App">
      <Router>
        <NavLinks />
        <Switch>
          {/* the prop "exact" will map the exact path you provided */}
          <Route exact path="/" exact component={Home} />
          <Route path="/input" component={Input} />
          <Route path="/output" component={Output} />

          {/* if you pass nothing in the path, it will handle as a 404 page */}
        </Switch>
        {/* Switch stops at the path, if provided */}
      </Router>
    </div>
  );
}

export default App;
