import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AddonMd from './markdown/addon.md';
import AllowClearMd from './markdown/allowClear.md';
import AutosizeTextareaMd from './markdown/autosize-textarea.md';
import GroupMd from './markdown/group.md';
import PasswordInputMd from './markdown/password-input.md';
import PresuffixMd from './markdown/presuffix.md';
import SearchInputLoadingMd from './markdown/search-input-loading.md';
import SearchInputMd from './markdown/search-input.md';
import SizeMd from './markdown/size.md';
import TextareaMd from './markdown/textarea.md';
import TooltipMd from './markdown/tooltip.md';
import Basic from './Basic';
import Addon from './Addon';
import AllowClear from './AllowClear';
import AutosizeTextarea from './AutosizeTextarea';
import Group from './Group';
import PasswordInput from './PasswordInput';
import Presuffix from './Presuffix';
import SearchInputLoading from './SearchInputLoading';
import SearchInput from './SearchInput';
import Size from './Size';
import Textarea from './Textarea';
import Tooltip from './Tooltip';

export class InputComponent extends Component {
  render() {
    return (
      <div className="code-box-demo-input">
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={AddonMd}><Addon /></DemoCard>
						<DemoCard code={SearchInputMd}><SearchInput /></DemoCard>
						<DemoCard code={TextareaMd}><Textarea /></DemoCard>
						<DemoCard code={TooltipMd}><Tooltip /></DemoCard>
						<DemoCard code={PasswordInputMd}><PasswordInput /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={SizeMd}><Size /></DemoCard>
						<DemoCard code={GroupMd}><Group /></DemoCard>
						<DemoCard code={SearchInputLoadingMd}><SearchInputLoading /></DemoCard>
						<DemoCard code={AutosizeTextareaMd}><AutosizeTextarea /></DemoCard>
						<DemoCard code={PresuffixMd}><Presuffix /></DemoCard>
						<DemoCard code={AllowClearMd}><AllowClear /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </div>
    );
  }
}

export default InputComponent;
