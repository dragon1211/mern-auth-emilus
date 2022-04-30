import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AffixComponent from './affix';
import BreadcrumbComponent from './breadcrumb';
import DropdownComponent from './dropdown';
import MenuComponent from './menu';
import PageHeaderComponent from './page-header';
import PaginationComponent from './pagination';
import StepsComponent from './steps';

const NavigationComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/affix`} />
      <Route path={`${match.url}/affix`} component={AffixComponent} />
      <Route path={`${match.url}/breadcrumb`} component={BreadcrumbComponent} />
      <Route path={`${match.url}/dropdown`} component={DropdownComponent} />
      <Route path={`${match.url}/menu`} component={MenuComponent} />
      <Route path={`${match.url}/page-header`} component={PageHeaderComponent} />
      <Route path={`${match.url}/pagination`} component={PaginationComponent} />
      <Route path={`${match.url}/steps`} component={StepsComponent} />
    </Switch>
  </div>
);

export default NavigationComponents;