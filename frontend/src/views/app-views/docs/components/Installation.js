import React from 'react'

const Installation = () => {
	return (
		<div>
			<h2>Installation</h2>
			<div className="mt-4">
				<h4>Environment Setup</h4>
				<p>Emilus required some prerequisite, you many need to install the following tools before starting the app.</p>
				<div className="d-flex mt-4">
					<div> - </div>
					<div className=" ml-3">
						<h5 className="font-weight-bold">
							<a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">Node.js </a>
						</h5>
					</div>
				</div>
				<div className="d-flex mt-2">
					<div> - </div>
					<div className=" ml-3">
						<h5 className="font-weight-bold">
							<a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn</a>
						</h5>
					</div>
				</div>
			</div>
			<div className="mt-4">
				<h4>Installing Packages</h4>
				<p>Navigate to project root directory and execute <code>npm install</code><span> or </span><code>yarn install</code>  to install all necessary dependencies. </p>
			</div>
		</div>
	)
}

export default Installation
