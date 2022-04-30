import React, { lazy, Suspense } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import InnerAppLayout from 'layouts/inner-app-layout';
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const menuList = [
	{ 
		name:'Introduction', 
		key: 'introduction',
		sub: []
	},
	{ 
		name: 'Product Content', 
		key: 'product-content',
		sub: []
	},
	{ 
		name: 'Folder Structure', 
		key: 'folder-structure',
		sub: []
	},
	{ 
		name: 'Layout Overview', 
		key: 'layout-overview',
		sub: []
	},
	{ 
		name: 'Installation', 
		key: 'installation',
		sub: []
	},
	{ 
		name: 'Development', 
		key: 'development',
		sub: []
	},
	{ 
		name: 'Updating', 
		key: 'updating',
		sub: []
	},
	{ 
		name: 'TemplateSetting', 
		key: 'template-setting',
		sub: []
	},
	{ 
		name: 'Routing', 
		key: 'routing',
		sub: [] 
	},
	{ 
		name: 'Authentication', 
		key: 'authentication',
		sub: [
			{
				name: 'JWT', 
				key: 'jwt',
				sub: [] 
			},
			{
				name: 'Firebase', 
				key: 'firebase',
				sub: [] 
			}
		] 
	},
	{ 
		name: 'Localization', 
		key: 'localization',
		sub: [] 
	},
	{ 
		name: 'Components', 
		key: 'components',
		sub: [
			{
				name: 'AvatarStatusDemo', 
				key: 'avatar-status-demo',
				sub: [] 
			},
			{
				name: 'ChartWidgetDemo', 
				key: 'chart-widget-demo',
				sub: [] 
			},
			{
				name: 'CustomStatisticDemo', 
				key: 'custom-statistic-demo',
				sub: [] 
			},
			{
				name: 'ColorPickerDemo', 
				key: 'color-picker-demo',
				sub: [] 
			},
			{
				name: 'DataDisplayWidgetDemo', 
				key: 'data-display-demo',
				sub: [] 
			},
			{
				name: 'DonutChartWidgetDemo', 
				key: 'donut-chart-Widget-demo',
				sub: [] 
			},
			{
				name: 'EllipsisDropdownDemo', 
				key: 'ellipsis-dropdown-demo',
				sub: [] 
			},
			{
				name: 'FlexDemo', 
				key: 'flex-demo',
				sub: [] 
			},
			{
				name: 'GoalWidgetDemo', 
				key: 'goal-widget-demo',
				sub: [] 
			},
			{
				name: 'LoadingDemo', 
				key: 'loading-demo',
				sub: [] 
			},
			{
				name: 'RegiondataWidgetDemo', 
				key: 'regiondata-widget-demo',
				sub: [] 
			},
			{
				name: 'StatisticWidgetDemo', 
				key: 'statistic-widget-demo',
				sub: [] 
			},
			{
				name: 'CustomIconDemo', 
				key: 'custom-icon-demo',
				sub: [] 
			}
		] 
	},
	{ 
		name: 'UtilityClasses', 
		key: 'utility-classes',
		sub: [] 
	},
	{ 
		name: 'Changelog', 
		key: 'changelog',
		sub: [] 
	}
]

const prefix = 'documentation/'

const DocsMenu = (props) => {
	const { match, location } = props
	return (
		<div className="w-100">
			<Menu
				defaultSelectedKeys={`${match.url}/${prefix}introduction`}
				mode="inline"
				selectedKeys={[location.pathname]}
			>
				{menuList.map(elm => {
					if (elm.sub.length === 0) {
						return (
							<Menu.Item key={`${match.url}/${prefix}${elm.key}`}>
								<span>{elm.name}</span>
								<Link to={`${match.url}/${prefix}${elm.key}`}/>
							</Menu.Item>
						)
					} else {
					 	return (
							<Menu.SubMenu key={`${match.url}/${prefix}${elm.key}`} title={elm.name}>
								{elm.sub.map(item =>(
									<Menu.Item key={`${match.url}/${prefix}${item.key}`}>
										<span>{item.name}</span>
										<Link to={`${match.url}/${prefix}${item.key}`}/>
									</Menu.Item>
								))}
							</Menu.SubMenu>
						)
					}
				})}
			</Menu>
		</div>
	)
}

const Docs = props => {
	const { match } = props
	return (
		<InnerAppLayout 
			sideContent={<DocsMenu {...props}/>}
			mainContent={
				<div className="p-4">
					<div className="container-fluid">
						<Suspense fallback={<Loading />}>
							<Switch>
								{menuList.map(elm => (
									elm.sub.length === 0 ?
									<Route 
										key={elm.key}
										path={`${match.url}/${prefix}${elm.key}`} 
										component={lazy(() => import(`./components/${elm.name.replace(/\s/g, '')}`))}
									/>
									:
									elm.sub.map(item => (
										<Route 
											key={item.key}
											path={`${match.url}/${prefix}${item.key}`} 
											component={lazy(() => import(`./components/${item.name.replace(/\s/g, '')}`))}
										/>
									))
								))}
								<Redirect from={`${match.url}`} to={`${match.url}/${prefix}introduction`} />
							</Switch>
						</Suspense>
					</div>
				</div>
			}
			sideContentWidth={300}
			sideContentGutter={false}
			border
		/>
	)
}

export default Docs
