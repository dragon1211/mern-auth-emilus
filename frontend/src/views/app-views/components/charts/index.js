import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Apex from './apex';
import ChartJs from './chartjs';

const ChartsComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/apex-charts`} />
      <Route path={`${match.url}/apex-charts`} component={Apex} />
      <Route path={`${match.url}/chartjs`} component={ChartJs} />
    </Switch>
  </div>
);

export default ChartsComponents;