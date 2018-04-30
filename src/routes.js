import React from "react";
import { Route, Switch } from "react-router-dom";

import MainContainer from "./containers/MainContainer";

const Page404 = () => <div>404</div>;

const Routes = props => (
  <Switch>
    <Route exact path="/" component={MainContainer} />
    <Route component={Page404} />
  </Switch>
);

export default Routes;
