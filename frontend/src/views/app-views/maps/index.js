import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Maps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/google-map`} />
      <Route path={`${match.url}/google-map`} component={lazy(() => import(`./google-map`))} />
      <Route path={`${match.url}/simple-map`} component={lazy(() => import(`./simple-map`))} />
    </Switch>
  </Suspense>
);

export default Maps;