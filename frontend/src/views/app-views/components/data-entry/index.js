import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import AutoCompleteComponent from './auto-complete';
import CascaderComponent from './cascader';
import CheckboxComponent from './checkbox';
import DatePickerComponent from './date-picker';
import FormComponent from './form';
import InputComponent from './input';
import InputNumberComponent from './input-number';
import MentionsComponent from './mentions';
import RadioComponent from './radio';
import RateComponent from './rate';
import SelectComponent from './select';
import SliderComponent from './slider';
import SwitchComponent from './switch';
import TimepickerComponent from './time-picker';
import TransferComponent from './transfer';
import TreeSelectComponent from './tree-select';
import UploadComponent from './upload';

const DataEntryComponents = ({ match }) => (
  <div>
    <Switch>
      <Redirect exact from={`${match.url}`} to={`${match.url}/auto-complete`} />
      <Route path={`${match.url}/auto-complete`} component={AutoCompleteComponent} />
      <Route path={`${match.url}/cascader`} component={CascaderComponent} />
      <Route path={`${match.url}/checkbox`} component={CheckboxComponent} />
      <Route path={`${match.url}/date-picker`} component={DatePickerComponent} />
      <Route path={`${match.url}/form`} component={FormComponent} />
      <Route path={`${match.url}/input`} component={InputComponent} />
      <Route path={`${match.url}/input-number`} component={InputNumberComponent} />
      <Route path={`${match.url}/mentions`} component={MentionsComponent} />
      <Route path={`${match.url}/radio`} component={RadioComponent} />
      <Route path={`${match.url}/rate`} component={RateComponent} />
      <Route path={`${match.url}/select`} component={SelectComponent} />
      <Route path={`${match.url}/slider`} component={SliderComponent} />
      <Route path={`${match.url}/switch`} component={SwitchComponent} />
      <Route path={`${match.url}/time-picker`} component={TimepickerComponent} />
      <Route path={`${match.url}/transfer`} component={TransferComponent} />
      <Route path={`${match.url}/tree-select`} component={TreeSelectComponent} />
      <Route path={`${match.url}/upload`} component={UploadComponent} />
    </Switch>
  </div>
);

export default DataEntryComponents;