import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AvatarComponent from './avatar';
import BadgeComponent from './badge';
import CalendarComponent from './calendar';
import CardComponent from './card';
import CarouselComponent from './carousel';
import CollapseComponent from './collapse';
import CommentComponent from './comment';
import DescriptionComponent from './descriptions';
import EmptyComponent from './empty';
import ListComponent from "./list";
import PopoverComponent from './popover';
import StatisticComponent from './statistic';
import TableComponent from './table';
import TabsComponent from './tabs';
import TagComponent from './tag';
import TimelineComponent from './timeline';
import TooltipComponent from './tooltip';
import TreeComponent from './tree';

const DataDisplayComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/avatar`} />
      <Route path={`${match.url}/avatar`} component={AvatarComponent} />
      <Route path={`${match.url}/badge`} component={BadgeComponent} />
      <Route path={`${match.url}/calendar`} component={CalendarComponent} />
      <Route path={`${match.url}/card`} component={CardComponent} />
      <Route path={`${match.url}/carousel`} component={CarouselComponent} />
      <Route path={`${match.url}/collapse`} component={CollapseComponent} />
      <Route path={`${match.url}/comment`} component={CommentComponent} />
      <Route path={`${match.url}/descriptions`} component={DescriptionComponent} />
      <Route path={`${match.url}/empty`} component={EmptyComponent} />
      <Route path={`${match.url}/list`} component={ListComponent} />
      <Route path={`${match.url}/popover`} component={PopoverComponent} />
      <Route path={`${match.url}/statistic`} component={StatisticComponent} />
      <Route path={`${match.url}/table`} component={TableComponent} />
      <Route path={`${match.url}/tabs`} component={TabsComponent} />
      <Route path={`${match.url}/tag`} component={TagComponent} />
      <Route path={`${match.url}/timeline`} component={TimelineComponent} />
      <Route path={`${match.url}/tooltip`} component={TooltipComponent} />
      <Route path={`${match.url}/tree`} component={TreeComponent} />
    </Switch>
  </div>
);

export default DataDisplayComponents;