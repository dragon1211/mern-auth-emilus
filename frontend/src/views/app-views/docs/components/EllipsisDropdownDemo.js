import React from 'react'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import ComponentIntro from './ComponentIntro.js'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, Menu } from 'antd'

const Demo = () => {
	return (
		<EllipsisDropdown menu={
			<Menu>
				<Menu.Item>
					<span>Menu Item 1</span>
				</Menu.Item>
				<Menu.Item>
					<span>Menu Item 2</span>
				</Menu.Item>
				<Menu.Item>
					<span>Menu Item 3</span>
				</Menu.Item>
			</Menu>
		}/>
	)
}

const  usageStr = `import React from 'react'
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'
import { Menu } from 'antd'

export default const Demo = () =>  {
	return (
		<EllipsisDropdown menu={
			<Menu>
				<Menu.Item>
					<span>Menu Item 1</span>
				</Menu.Item>
				<Menu.Item>
					<span>Menu Item 2</span>
				</Menu.Item>
				<Menu.Item>
					<span>Menu Item 3</span>
				</Menu.Item>
			</Menu>
		}/>
	}
)`

const EllipsisDropdownDemo = () => {
	return (
		<div>
			<h2>EllipsisDropdown</h2>
			<div className="mt-4">
				<ComponentIntro name="Location" desc="src/components/shared-components/EllipsisDropdown.js"/>
				<ComponentIntro name="Description" desc="Dropdown menu with ellipsis icon"/>
				<div className="mt-4">
					<Card title="Example">
						<Demo />
						<div className="mt-4">
							<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
								{usageStr}
							</SyntaxHighlighter>
						</div>
					</Card>
				</div>
				<h4 className="mt-4">Props</h4>
				<div className="api-container border-0 p-0">
					<table>
						<thead>
							<tr>
								<th>Property</th>
								<th>Description</th>
								<th>Type</th>
								<th>Default</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>menu</td>
								<td>Dropdown menu</td>
								<td><a href="https://ant.design/components/menu/">Menu</a> | () =&gt; Menu</td>
								<td></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	)
}

export default EllipsisDropdownDemo
