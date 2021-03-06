import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="page"/>}>
      <Switch>
        <Route exact path={`${AUTH_PREFIX_PATH}/login`} component={lazy(() => import(`./login`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/register`} component={lazy(() => import(`./register/index`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/forgot-password`} component={lazy(() => import(`./forgot-password`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/reset-password`} component={lazy(() => import(`./forgot-password/reset`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/verify-email`} component={lazy(() => import(`./verify-email/index`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/verify-email/activate`} component={lazy(() => import(`./verify-email/activate`))} />
        <Route exact path={`${AUTH_PREFIX_PATH}/error`} component={lazy(() => import(`./errors/error-page-1`))} />
        <Redirect from={`${AUTH_PREFIX_PATH}`} to={`${AUTH_PREFIX_PATH}/login`} />
      </Switch>
    </Suspense>
  )
}

export default AppViews;

