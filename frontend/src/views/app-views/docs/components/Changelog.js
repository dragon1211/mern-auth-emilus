import React from 'react'
import Flex from 'components/shared-components/Flex'

const logData = [
	{
		version: '2.1.5',
		date: '15 Dec 2021',
		updateContent: [
			'[Fix] NavProfile menu item over sized gutter',
			'[Fix] TopNav child menu item height not tally',
			'[Fix] Minor ui issues in demo',
			'[Remove] Radio dot centralize style due to official fixed',
			'[Update] Antd to v4.17.3',
		]
	},
	{
		version: '2.1.4',
		date: '16 Sep 2021',
		updateContent: [
			'[Fix] Minor ui issues',
			'[Fix] ultility spacer not working on responsive',
			'[New] Added Figma design prototype (lite)',
		]
	},
	{
		version: '2.1.3',
		date: '3 Sep 2021',
		updateContent: [
			'[Fix] Right Nav menu item color persist after clicked',
			'[Fix] Dropdown cascading menu having extra border',
			'[Fix] Form validation icon position',
			'[Fix] Date picker cell center aligment not tally',
			'[Fix] Checkbox & label not tally',
			'[Fix] Radio & label not tally',
			'[New] Replace link button by text button',
		]
	},
	{
		version: '2.1.2',
		date: '26 May 2021',
		updateContent: [
			'[Fix] Date range picker selected color in dark mode',
			'[Fix] Dashboard Apex chart out of border',
		]
	},
	{
		version: '2.1.1',
		date: '28 Apr 2021',
		updateContent: [
			'[Fix] User list responsive issue',
			'[Fix] Typo in NavProfile',
			'[Update] Antd to v4.15.3',
		]
	},
	{
		version: '2.1.0',
		date: '21 Mar 2021',
		updateContent: [
			'[New] Full RTL support',
			'[Fix] Nested tables remain light in dark mode',
			'[Fix] Table Fixed Column background overlap',
			'[Fix] Slightly increase border contrast',
		]
	},
	{
		version: '2.0.1',
		date: '21 Jan 2021',
		updateContent: [
			'[Fix] Side nav title remain display when collapse',
			'[Fix] Header nav left auto collpase during mobile view',
			'[Fix] Search bar remain mobile mode during desktop view',
		]
	},
	{
		version: '2.0.0',
		date: '7 Jan 2021',
		updateContent: [
			'[New] Dark mode',
			'[Update] Dependencies Update' ,
			'[Breaking Change] Switch scss to less'
		]
	},
	{
		version: '1.1.3',
		date: '12 Nov 2020',
		updateContent: [
			'[Fix] Transfer component css issue'
		]
	},
	{
		version: '1.1.2',
		date: '24 Oct 2020',
		updateContent: [
			'[Fix] Page rerender when side nav toggle clicked',
			'[Add] Delete & Rename Board to Scrumboard',
			'[Add] App prefix path as constant'
		]
	},
	{
		version: '1.1.1',
		date: '28 Sep 2020',
		updateContent: [
			'[Fix] Mobile menu not display in Safari'
		]
	},
	{
		version: '1.1.0',
		date: '11 Sep 2020',
		updateContent: [
			'[Restructure] Apps module code restructure'
		]
	},
	{
		version: '1.0.1',
		date: '5 Sep 2020',
		updateContent: [
			'[Fix] Minnor bug fix'
		]
	},
	{
		version: '1.0.0',
		date: '24 Aug 2020',
		updateContent: [
			'[Release] Initial Release'
		]
	}
]

const Log = props => {
	return (
		<div className={`py-4 ${props.border && 'border-bottom'}`}>
			<Flex alignItems="center">
				<h3 className="font-weight-normal mb-0 mr-3">{props.version}</h3>
				<code>{props.date}</code>
			</Flex>
			<div className="api-container p-0 border-0 mt-3">
				{props.children}
			</div>
		</div>
	)
}

const Changelog = () => {
	return (
		<div>
			<h2>Changelog</h2>
			{
				logData.map(elm => (
					<Log key={elm.version} version={`v${elm.version}`} date={elm.date}>
						{
							elm.updateContent.length > 0 ? 
							<ul>
								{
									elm.updateContent.map((item, i) => (
										<li key={i}>{item}</li>
									))
								}
							</ul>
							:
							null
						}
					</Log>
				))
			}
		</div>
	)
}

export default Changelog
