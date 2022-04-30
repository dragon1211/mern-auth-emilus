import React from 'react'
import { createFromIconfontCN } from '@ant-design/icons';

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});

const IconFonts = () => {
	return (
		<div className="font-size-xl">
			<IconFont className="mr-2" type="icon-tuichu" />
			<IconFont className="mr-2" type="icon-facebook" />
			<IconFont className="mr-2" type="icon-twitter" />
		</div>
	)
}

export default IconFonts
