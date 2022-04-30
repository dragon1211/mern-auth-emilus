import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import GoogleMap from './google-map';
import SimpleMap from './simple-map';

const MapComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/google-map`} />
      <Route path={`${match.url}/google-map`} component={GoogleMap} />
      <Route path={`${match.url}/simple-map`} component={SimpleMap} />
    </Switch>
  </div>
);

export default MapComponents;