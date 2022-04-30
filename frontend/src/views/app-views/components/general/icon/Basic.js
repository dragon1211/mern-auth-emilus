import React from 'react'
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

export const Basic = () => {
	return (
		<div className="font-size-xl">
			<HomeOutlined className="mr-2" />
			<SettingFilled className="mr-2"/>
			<SmileOutlined className="mr-2"/>
			<SyncOutlined spin/>
			<SmileOutlined className="ml-2" rotate={180} />
			<LoadingOutlined />
		</div>
	)
}

export default Basic