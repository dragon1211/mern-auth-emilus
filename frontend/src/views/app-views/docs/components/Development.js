import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const appConfigStr = `npm run build`

const Development = () => {
	return (
		<div>
			<h2>Development</h2>
			<div className="mt-4">
				<h4>Starting project</h4>
				<p>After installing the dependencies, you can use <code>npm run dev</code> command to run the project on local server, it will run on <code>http://localhost:3000</code> by default.</p>
			</div>
			<div className="mt-4">
				<h4>Production</h4>
				<p>Run the following command to build the application into <code>/build</code> directory</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
          {appConfigStr}
        </SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4>Deployment</h4>
				<p>If you having issue about server configuration, try to checkout the guide from the create-react-app  
					<a rel="noopener noreferrer" href="https://create-react-app.dev/docs/deployment/" target="_blank">
						<u> doc</u>
					</a>.
				</p>
			</div>
		</div>
	)
}

export default Development
