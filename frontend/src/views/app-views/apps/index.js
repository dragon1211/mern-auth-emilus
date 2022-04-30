import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Apps = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/mail`} component={lazy(() => import(`./mail`))} />
      <Route path={`${match.url}/chat`} component={lazy(() => import(`./chat`))} />
      <Route path={`${match.url}/calendar`} component={lazy(() => import(`./calendar`))} />
      <Route path={`${match.url}/project`} component={lazy(() => import(`./project`))} />
      <Route path={`${match.url}/ecommerce`} component={lazy(() => import(`./e-commerce`))} />
      <Redirect from={`${match.url}`} to={`${match.url}/mail`} />
    </Switch>
  </Suspense>
);

export default Apps;