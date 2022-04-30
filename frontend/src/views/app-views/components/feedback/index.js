import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AlertComponent from './alert';
import DrawerComponent from './drawer';
import MessageComponent from './message';
import ModalComponent from './modal';
import NotificationComponent from './notification';
import PopconfirmComponent from './popconfirm';
import ProgressComponent from './progress';
import ResultComponent from './result';
import SkeletonComponent from './skeleton';
import SpinComponent from './spin';

const FeedBackComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/alert`} />
      <Route path={`${match.url}/alert`} component={AlertComponent} />
			<Route path={`${match.url}/drawer`} component={DrawerComponent} />
			<Route path={`${match.url}/message`} component={MessageComponent} />
			<Route path={`${match.url}/modal`} component={ModalComponent} />
			<Route path={`${match.url}/notification`} component={NotificationComponent} />
			<Route path={`${match.url}/popconfirm`} component={PopconfirmComponent} />
			<Route path={`${match.url}/progress`} component={ProgressComponent} />
			<Route path={`${match.url}/result`} component={ResultComponent} />
			<Route path={`${match.url}/skeleton`} component={SkeletonComponent} />
			<Route path={`${match.url}/spin`} component={SpinComponent} />
    </Switch>
  </div>
);

export default FeedBackComponents;