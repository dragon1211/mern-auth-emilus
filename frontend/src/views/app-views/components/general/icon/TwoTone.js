import React from 'react'
import { SmileTwoTone, HeartTwoTone, CheckCircleTwoTone } from '@ant-design/icons';

const TwoTone = () => {
	return (
		<div className="font-size-xl">
			<SmileTwoTone className="mr-2"/>
			<HeartTwoTone className="mr-2"twoToneColor="#eb2f96" />
			<CheckCircleTwoTone twoToneColor="#52c41a" />
		</div>
	)
}

export default TwoTone
