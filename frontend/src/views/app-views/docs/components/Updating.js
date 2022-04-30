import React from 'react'

const Updating = () => {
	return (
		<div>
			<h2>Updating</h2>
			<div className="mt-4">
				<p>Since there is no version control system provided by the platform, the update could be difficult. However, we provided some sugguestion here which might help you to keep the template updated easier.</p>
				<ul className="mt-4">
					<li className="mb-3">Before starting your new project, you might host the original template to your own reposity as original branch.</li>
					<li className="mb-3">Pull a branch from original branch as your workspace.</li>
					<li className="mb-3">For every new update released, you can push the latest version content to the original branch.</li>
					<li className="mb-3">Merging workspace branch with the original branch to update the latest changed.</li>
				</ul>
			</div>
		</div>
	)
}

export default Updating
