import React, { Fragment } from "react";
import { Redirect, Route, Switch } from "react-router";

import HomeContainer from "../pages/Home";
import InputContainer from "../pages/Input";
import OutputContainer from "../pages/Output";

import NavBar from "../components/NavBar";

export default () => (
  <Fragment>
    <NavBar />
    <Switch>
      <Route exact path="/home" component={HomeContainer} />
      <Route exact path="/input" component={InputContainer} />
      <Route exact path="/output" component={OutputContainer} />
      <Redirect from="" to="/home" />
    </Switch>
  </Fragment>
);
