import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../../helpers/routes.helper';
import Home from './Home/Home';
import About from './About/About';

const MainRoutes = () => (
  <Switch>
    <Route exact path={routes.default} component={Home} />
    <Route exact path={routes.about} component={About} />
  </Switch>
);

export default MainRoutes;
