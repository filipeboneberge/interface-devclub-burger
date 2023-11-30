import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./private-route";

import { Login, Register, Home, Products } from "../containers";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
      </Switch>
    </Router>
  );
}

export default Routes;
