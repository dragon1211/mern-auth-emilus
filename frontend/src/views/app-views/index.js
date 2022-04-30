import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';
import { APP_PREFIX_PATH } from 'configs/AppConfig'

export const AppViews = () => {
  return (
    <Suspense fallback={<Loading cover="content"/>}>
      <Switch>
        <Route path={`${APP_PREFIX_PATH}/dashboards`} component={lazy(() => import(`./dashboards`))} />
        <Route path={`${APP_PREFIX_PATH}/apps`} component={lazy(() => import(`./apps`))} />
        <Route path={`${APP_PREFIX_PATH}/components`} component={lazy(() => import(`./components`))} />
        <Route path={`${APP_PREFIX_PATH}/pages`} component={lazy(() => import(`./pages`))} />
        <Route path={`${APP_PREFIX_PATH}/maps`} component={lazy(() => import(`./maps`))} />
        <Route path={`${APP_PREFIX_PATH}/charts`} component={lazy(() => import(`./charts`))} />
        <Route path={`${APP_PREFIX_PATH}/docs`} component={lazy(() => import(`./docs`))} />
        <Redirect from={`${APP_PREFIX_PATH}`} to={`${APP_PREFIX_PATH}/dashboards`} />
      </Switch>
    </Suspense>
  )
}

export default React.memo(AppViews);
