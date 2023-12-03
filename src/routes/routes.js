import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import PrivateRoute from "./private-route";

import { Login, Register, Home, Products, Cart } from "../containers";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/register" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />
      </Switch>
    </Router>
  );
}

export default Routes;
