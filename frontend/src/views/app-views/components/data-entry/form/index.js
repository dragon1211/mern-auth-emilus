import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import IndexMd from './markdown/index.en-US.md';
import AdvancedSearchMd from './markdown/advanced-search.md';
import BasicMd from './markdown/basic.md';
import ComplexFormControlMd from './markdown/complex-form-control.md';
import ControlHooksMd from './markdown/control-hooks.md';
import ControlRefMd from './markdown/control-ref.md';
import CustomizedFormControlsMd from './markdown/customized-form-controls.md';
import DynamicFormItemMd from './markdown/dynamic-form-item.md';
import DynamicRuleMd from './markdown/dynamic-rule.md';
import FormContextMd from './markdown/form-context.md';
import FormInModalMd from './markdown/form-in-modal.md';
import GlobalStateMd from './markdown/global-state.md';
import InlineLoginMd from './markdown/inline-login.md';
import LayoutMd from './markdown/layout.md';
import NestMessagesMd from './markdown/nest-messages.md';
import NormalLoginMd from './markdown/normal-login.md';
import RegisterMd from './markdown/register.md';
import SizeMd from './markdown/size.md';
import TimeRelatedControlsMd from './markdown/time-related-controls.md';
import ValidateOtherMd from './markdown/validate-other.md';
import ValidateStaticMd from './markdown/validate-static.md';
import WithoutFormCreateMd from './markdown/without-form-create.md'

import AdvancedSearch from './AdvancedSearch';
import Basic from './Basic';
import ComplexFormControl from './ComplexFormControl';
import ControlHooks from './ControlHooks';
import ControlRef from './ControlRef';
import CustomizedFormControls from './CustomizedFormControls';
import DynamicFormItem from './DynamicFormItem';
import DynamicRule from './DynamicRule';
import FormContext from './FormContext';
import FormInModal from './FormInModal';
import GlobalState from './GlobalState';
import InlineLogin from './InlineLogin';
import Layout from './Layout';
import NestMessages from './NestMessages';
import NormalLogin from './NormalLogin';
import Register from './Register';
import Size from './Size';
import TimeRelatedControls from './TimeRelatedControls';
import ValidateOther from './ValidateOther';
import ValidateStatic from './ValidateStatic';
import WithoutFormCreate from './WithoutFormCreate';

export class FormComponent extends Component {
  render() {
    return (
			<div className="code-box-form-demo">
        <div className="basic">
          <DemoCard code={BasicMd}><Basic /></DemoCard>
        </div>
        <div className="form-method">
          <DemoCard code={ControlHooksMd}><ControlHooks /></DemoCard>
        </div>
        <div className="form-method">
          <DemoCard code={ControlRefMd}><ControlRef /></DemoCard>
        </div>
        <div className="layout">
          <DemoCard code={LayoutMd}><Layout /></DemoCard>
        </div>
        <DemoCard code={SizeMd}><Size /></DemoCard>
        <div className="dynamic-form-item">
          <DemoCard code={DynamicFormItemMd}><DynamicFormItem /></DemoCard>
        </div>
        <div className="nest">
          <DemoCard code={NestMessagesMd}><NestMessages /></DemoCard>
        </div>
        <div className="complex-form-control">
          <DemoCard code={ComplexFormControlMd}><ComplexFormControl /></DemoCard>
        </div>
        <DemoCard code={CustomizedFormControlsMd}><CustomizedFormControls /></DemoCard>
        <DemoCard code={GlobalStateMd}><GlobalState /></DemoCard>
        <div className="control-between-form">
          <DemoCard code={FormContextMd}><FormContext /></DemoCard>
        </div>
				<DemoCard code={InlineLoginMd}><InlineLogin /></DemoCard>
				<div className="normal-login">
					<DemoCard code={NormalLoginMd}><NormalLogin /></DemoCard>
				</div>
				<div className="registration">
					<DemoCard code={RegisterMd}><Register /></DemoCard>
				</div>
				<div className="advanced-search">
					<DemoCard code={AdvancedSearchMd}><AdvancedSearch /></DemoCard>
				</div>
				<div className="dynamic-form-item">
					<DemoCard code={FormInModalMd}><FormInModal /></DemoCard>
				</div>
        <div className="time-related-controls">
				  <DemoCard code={TimeRelatedControlsMd}><TimeRelatedControls /></DemoCard>
        </div>
        <div className="handle-form-data-manually">
				  <DemoCard code={WithoutFormCreateMd}><WithoutFormCreate /></DemoCard>
        </div>
        <div className="validate-static">
				  <DemoCard code={ValidateStaticMd}><ValidateStatic /></DemoCard>
				</div>
        <div className="dynamic-rule">
				  <DemoCard code={DynamicRuleMd}><DynamicRule /></DemoCard>
        </div>
        <div className="other-form">
				  <DemoCard code={ValidateOtherMd}><ValidateOther /></DemoCard>
        </div>
				<ApiContainer code={IndexMd}/>
			</div>
		);
  }
}

export default FormComponent;
