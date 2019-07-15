import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { routes } from '../shared/common/helpers/RoutesHelper';
import MainContainer from './Main/MainContainer';

const ApplicationRoutes = () => (
  <Switch>
    <Route exact path={routes.default} component={MainContainer} />
    <Route exact path={routes.about} component={MainContainer} />
  </Switch>
);

export default ApplicationRoutes;
