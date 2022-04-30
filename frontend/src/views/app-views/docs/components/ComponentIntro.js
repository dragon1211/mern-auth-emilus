import React from 'react'

const ComponentIntro = ({name, desc}) => (
	<div className="mb-3">
		<span className="font-weight-bold text-dark">{name}:</span>
		<span className="text-gray-light"> {desc}</span>
	</div>
)

export default ComponentIntro