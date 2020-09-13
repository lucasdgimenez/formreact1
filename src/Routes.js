import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./view/Login";
import Cadastro from "./view/usuario_novo";

export default () => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route exact path="/cadastro">
        <Cadastro />
      </Route>
      
    </Switch>
  );
};
