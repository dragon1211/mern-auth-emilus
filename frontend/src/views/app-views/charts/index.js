import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Charts = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/apex-charts`} />
      <Route path={`${match.url}/apex-charts`} component={lazy(() => import(`./apex`))} />
      <Route path={`${match.url}/chartjs`} component={lazy(() => import(`./chartjs`))} />
    </Switch>
  </Suspense>
);

export default Charts;