import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const newRouteStr =  `import React, { lazy } from 'react';

const myNewComponent = lazy(() => import('myNewComponentPath'))

const Apps = ({ match }) => (
	<Switch>
		<Redirect exact from={\`$\{match.url}\`} to={\`$\{match.url}/new-component-path\`} />
		<Route path={\`$\{match.url}/new-component-path\`} component={myNewComponent} />
	</Switch>
);

export default Apps;
`

const navTreeStr = `import { DashboardOutlined } from '@ant-design/icons'

const navigationConfig = [
  {
		key: 'new-component-key',
		path: '/app/new-component-path',
		title: 'myNewComponent',
		icon: DashboardOutlined,
		breadcrumb: false,
		submenu: []
	}
]

export default navigationConfig;
`

const nestedNavTreeStr = `import { DashboardOutlined } from '@ant-design/icons'

const navigationConfig = [
  {
		key: 'new-component-key',
		path: '',
		title: 'myNewComponent',
		icon: DashboardOutlined,
		breadcrumb: false,
		submenu: [
			{
				key: 'new-component-child-key',
				path: '',
				title: 'myNewComponentFirstLevel',
				icon: DashboardOutlined,
				breadcrumb: true,
				submenu: [
					{
						key: 'new-component-child-key-1',
						path: '/app/new-component-path-1',
						title: 'myNewComponentSecondLevelOne',
						icon: DashboardOutlined,
						breadcrumb: true,
						submenu: []
					}
					{
						key: 'new-component-child-key-2',
						path: '/app/new-component-path-2',
						title: 'myNewComponentSecondLevelTwo',
						icon: DashboardOutlined,
						breadcrumb: true,
						submenu: []
					}
				]
			}
		]
	}
]

export default navigationConfig;
`

const Routing = () => {
	return (
		<div>
			<h2>Routing</h2>
			<p>Emilus use <a href="https://reactrouter.com/" target="_blank" rel="noopener noreferrer">react-router</a> as base routing system. To add a new route in the template, you can follow the steps below.</p>
			<div className="mt-4">
				<h4 className="font-weight-bold">Create new route</h4>
				<p>We place all our post login page components in 
					<code>src/views/app-views</code> folder, 
					<code>index.js</code> in this folder is the entry point of all pages, you can basically set your pages in this file.
					Refer below mentioned code to create a route:
				</p>
				<SyntaxHighlighter className="hl-code" language="jsx" style={atomDark}>
          {newRouteStr}
        </SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4 className="font-weight-bold">Navigating</h4>
				<p>You can config your navigation bar in <code>configs/NavigationConfig.js</code>. 
				We grouped up the navigation tree as an array, add object as the code below to the array for new menu item.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {navTreeStr}
        </SyntaxHighlighter>
				<h4 className="font-weight-bold mt-4">Nested</h4>
				<p>Refer below code to create a nested menu item:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {nestedNavTreeStr}
        </SyntaxHighlighter>
			</div>
			<div className="api-container border-0 p-0 mt-5">
				<p>The properties of config are as follows:</p>
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
							<td>key</td>
							<td>The unique identifier of menu item</td>
							<td>string | number</td>
						</tr>
						<tr>
							<td>path</td>
							<td>Path to destination page</td>
							<td>string</td>
						</tr>
						<tr>
							<td>title</td>
							<td>Menu item title, accept IntlMessage key</td>
							<td>string</td>
						</tr>
						<tr>
							<td>icon</td>
							<td>Set icon beside menu title</td>
							<td>ReactNode</td>
						</tr>
						<tr>
							<td>breadcrumb</td>
							<td>Displaay breadcrumb on page</td>
							<td>boolean</td>
						</tr>
						<tr>
							<td>submenu</td>
							<td>Whether have child in this menu item, only accept properties in this table</td>
							<td>array</td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Routing
