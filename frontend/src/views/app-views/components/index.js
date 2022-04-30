import React, { lazy, Suspense } from "react";
import { Redirect, Route, Switch } from 'react-router-dom';
import Loading from 'components/shared-components/Loading';

const Components = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/general/button`} />
      <Route path={`${match.url}/general`} component={lazy(() => import(`./general`))} />
      <Route path={`${match.url}/layout`} component={lazy(() => import(`./layout`))} />
      <Route path={`${match.url}/navigation`} component={lazy(() => import(`./navigation`))} />
      <Route path={`${match.url}/data-entry`} component={lazy(() => import(`./data-entry`))} />
      <Route path={`${match.url}/data-display`} component={lazy(() => import(`./data-display`))} />
      <Route path={`${match.url}/feedback`} component={lazy(() => import(`./feedback`))} />
      <Route path={`${match.url}/other`} component={lazy(() => import(`./other`))} />
      <Route path={`${match.url}/charts`} component={lazy(() => import(`./charts`))} />
      <Route path={`${match.url}/maps`} component={lazy(() => import(`./maps`))} />
    </Switch>
  </Suspense>
);

export default Components;