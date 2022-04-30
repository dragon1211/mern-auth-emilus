import React from 'react'

import {
	FileWordOutlined,
	FileExcelOutlined,
	FileImageOutlined,
	FilePdfOutlined
} from '@ant-design/icons';

export const labels = ['works', 'private', 'important']

export const getLabelColor = label => {
	switch (label) {
		case 'works':
			return 'blue';
		case 'private':
			return 'cyan';
		case 'important':
			return 'red';
		default:
			return '#ececec';
	}
}

export const getFileType = fileType => {
	switch (fileType) {
		case 'doc':
			return <FileWordOutlined className="text-primary" />
		case 'xls':
			return <FileExcelOutlined className="text-success"/>;
		case 'pdf':
			return <FilePdfOutlined className="text-danger"/>;
		case 'jpg':
			return <FileImageOutlined className="text-warning"/>;
		case 'png':
			return <FileImageOutlined className="text-warning"/>;
		default:
			return null;
	}
}