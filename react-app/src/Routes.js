import React from "react";
import { Switch } from "react-router-dom";

import AppliedRoute from "./components/AppliedRoute";
import Home from "./containers/Home";
import Signup from './containers/Signup';
import Login from './containers/Login';
import Tools from "./containers/Tools";

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <AppliedRoute path='/signup' exact component={Signup} props={childProps} />
    <AppliedRoute path='/login' exact component={Login} props={childProps} />
    <AppliedRoute path='/tools' exact component={Tools} props={childProps} />
  </Switch>
