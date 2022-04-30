import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import ButtonComponent from './button';
import TypographyComponent from './typography'
import IconComponent from './icon'

const GeneralComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/button`} />
      <Route path={`${match.url}/button`} component={ButtonComponent} />
      <Route path={`${match.url}/typography`} component={TypographyComponent} />
      <Route path={`${match.url}/icon`} component={IconComponent} />
    </Switch>
  </div>
);

export default GeneralComponents;