import React from 'react'
import ColorPicker from 'components/shared-components/ColorPicker';
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card } from 'antd'

const usageStr = `import React from 'react'
import ColorPicker from 'components/shared-components/ColorPicker';

export default const Demo = () =>  (
	const onColorChange = (value) => {
		console.log('Selected color: ', value)
	}

	return (
		<ColorPicker color={'#3e82f7'} colorChange={onColorChange}/>
	)
)`

const Demo = () => {

	const onColorChange = (value) => {
		console.log('Selected color: ', value)
	}

	return (
		<ColorPicker color={'#3e82f7'} colorChange={onColorChange}/>
	)
}

const ColorPickerDemo = () => {
	return (
		<div>
			<h2>AvatarStatus</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/ColorPicker.js"/>
				<ComponentIntro name="Description" desc="ColorPicker allow you select & get the color info from color palette."/>
			</div>
			<div className="mt-4">
				<Card title="Example">
					<Demo />
					<div className="mt-4">
						<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
							{usageStr}
						</SyntaxHighlighter>
					</div>
				</Card>
				<h4 className="mt-4">Props</h4>
				<div className="api-container border-0 p-0">
					<table>
						<thead>
							<tr>
								<th>Property</th>
								<th>Description</th>
								<th>Type</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>color</td>
								<td>Initial color</td>
								<td>string</td>
							</tr>
							<tr>
								<td>colorChange</td>
								<td>Handler click on color picker</td>
								<td>() =&gt; {'{'} hex, hsl, hsv, oldHue, rgb, source {'}'}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default ColorPickerDemo
