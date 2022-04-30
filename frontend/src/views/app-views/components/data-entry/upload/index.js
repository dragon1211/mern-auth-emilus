import React, { Component } from 'react';
import DemoCard from 'components/util-components/DemoCard';
import ApiContainer from 'components/util-components/ApiContainer';
import { Row, Col } from 'antd';
import IndexMd from './markdown/index.en-US.md';
import BasicMd from './markdown/basic.md';
import AvatarMd from './markdown/avatar.md';
import DefaultFileListMd from './markdown/defaultFileList.md';
import DirectoryMd from './markdown/directory.md';
import DragMd from './markdown/drag.md';
import FileListMd from './markdown/fileList.md';
import PictureCardMd from './markdown/picture-card.md';
import PictureStyleMd from './markdown/picture-style.md';
import PreviewFileMd from './markdown/preview-file.md';
import TransformFileMd from './markdown/transform-file.md';
import UploadManuallyMd from './markdown/upload-manually.md';
import UploadWithAliyunOssMd from './markdown/upload-with-aliyun-oss.md';
import UploadCustomActionIconMd from  './markdown/upload-custom-action-icon.md';
import Basic from './Basic';
import Avatar from './Avatar';
import DefaultFileList from './DefaultFileList';
import Directory from './Directory';
import Drag from './Drag';
import FileList from './FileList';
import PictureCard from './PictureCard';
import PictureStyle from './PictureStyle';
import PreviewFile from './PreviewFile';
import TransformFile from './TransformFile';
import UploadManually from './UploadManually';
import UploadWithAliyunOss from './UploadWithAliyunOss';
import UploadCustomActionIcon from  './UploadCustomActionIcon';

export class UploadComponent extends Component {
  render() {
    return (
			<React.Fragment>
        <Row gutter={16} type="flex">
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={BasicMd}><Basic /></DemoCard>
						<DemoCard code={DefaultFileListMd}><DefaultFileList /></DemoCard>
						<DemoCard code={FileListMd}><FileList /></DemoCard>
						<DemoCard code={DirectoryMd}><Directory /></DemoCard>
						<DemoCard code={PictureStyleMd}><PictureStyle /></DemoCard>
						<DemoCard code={TransformFileMd}><TransformFile /></DemoCard>
						<DemoCard code={UploadCustomActionIconMd}><UploadCustomActionIcon /></DemoCard>
					</Col>
					<Col sm={24} md={24} lg={12}>
						<DemoCard code={AvatarMd}><Avatar /></DemoCard>
						<DemoCard code={PictureCardMd}><PictureCard /></DemoCard>
						<DemoCard code={DragMd}><Drag /></DemoCard>
						<DemoCard code={UploadManuallyMd}><UploadManually /></DemoCard>
						<DemoCard code={PreviewFileMd}><PreviewFile /></DemoCard>
						<DemoCard code={UploadWithAliyunOssMd}><UploadWithAliyunOss /></DemoCard>
					</Col>
        </Row>
        <ApiContainer code={IndexMd} />
      </React.Fragment>
		);
  }
}

export default UploadComponent;
