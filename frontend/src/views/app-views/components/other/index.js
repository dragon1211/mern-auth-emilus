import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AnchorComponent from './anchor';
import BackTopComponent from './backtop';
import ConfigProviderComponent from './config-provider';
import DividerComponent from './divider';

const OtherComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/anchor`} />
      <Route path={`${match.url}/anchor`} component={AnchorComponent} />
      <Route path={`${match.url}/backtop`} component={BackTopComponent} />
      <Route path={`${match.url}/config-provider`} component={ConfigProviderComponent} />
      <Route path={`${match.url}/divider`} component={DividerComponent} />
    </Switch>
  </div>
);

export default OtherComponents;