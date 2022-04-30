import React from 'react'

const techList = [
	{ name: 'Create React App' },
	{ name: 'React' },
	{ name: 'Redux' },
	{ name: 'Redux-Saga' },
	{ name: 'React Router 5' },
	{ name: 'Ant Design' },
	{ name: 'React Apexcharts' },
	{ name: 'React Chartjs 2' },
	{ name: 'React beautiful dnd' },
	{ name: 'React Simple Maps' },
	{ name: 'Google Maps React' },
	{ name: 'Authentication Firebase...etc' }
]

const Introduction = () => {
	return (
		<div>
			<h2>Introduction</h2>
			<p className="font-size-md">
				<strong>Emilus</strong> - 
				A developer friendly & highly scalable admin 
				dashboard template built with React & top notch technologies stack.
				It offers a clean code base and detailed documentation which allow you 
				to develop your web application faster and cost effectively.
				Emilus can be used to build any modern web application including a SaaS, admin panels, CRM, CMS, e-commerce panel, etc.
			</p>
			<p className="font-size-md">
				<strong>NOTE: </strong>
				<span>
					This is a React based template, 
					it required at least an entry-level of Javascript(ES6), React, Redux, SCSS to use this template.
				</span>
			</p>
			<div className="mt-5">
				<h2>Core libraries we used</h2>
				{techList.map((elm, index) => (
					<div className="mb-2" key={elm.name + index}>- {elm.name}</div>
				))}
			</div>
		</div>
	)
}

export default Introduction
