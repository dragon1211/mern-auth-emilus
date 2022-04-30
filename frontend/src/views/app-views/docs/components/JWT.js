import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const setupBaseUrlStr = `const dev = {
  API_ENDPOINT_URL: 'https://api.dev-example.com'
};

const prod = {
  API_ENDPOINT_URL: 'https://api.prod-example.com'
};

const test = {
  API_ENDPOINT_URL: 'https://api.test-example.com'
};`

const setupService = `import fetch from 'auth/FetchInterceptor'

const exampleService = {}

exampleService.getPost = function (params) {
  return fetch({
    url: '/posts/1',
    method: 'get',
    params
  })
}

exampleService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default exampleService`

const skipChecking = `exampleService.fetchData = function (data) {
	return fetch({
		url: '/posts',
		method: 'post',
		headers: {
      'public-request': 'true'
    },
		data: data
	})
}`

const usageStr = `import exampleService from 'services/exampleService'
const callApi = () => {
	exampleService.setPost(JSON.stringify({
		title: 'foo',
		body: 'bar',
		userId: 1
	})).then(resp => console.log('resp', resp))
}`

const jwt = () => {
	return (
		<div>
			<h2>JWT</h2>
			<p>Emilus provide a set of code to let you work with JWT authentication & API with the server application, integration process is described below.</p>
			<div className="mt-4">
				<h4>Setup Base URL</h4>
				<p>Setup your API endpoint URL at <code>src/configs/EnvironmentConfig.js</code> depends on your project environment.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{setupBaseUrlStr}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4>Interceptor</h4>
				<p>We provided a request & response interceptor built by 
					<a href="https://github.com/axios/axios"> axios</a>, 
					which able to found in <code>src/auth/FetchInterceptor.js</code>.
					With this interceptor, every API call from client side will contain access token inside requeest header. You can customize your request config or error handling in this file. 
				</p>
			</div>
			<div className="mt-4">
				<h4>Services</h4>
				<p>In order to facilitate manage and maintain, we placed all API 
				integrations related files in <code>src/services/</code> folder. Linked up with interceptor above, you can setup your services as below:</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{setupService}
				</SyntaxHighlighter>
				<p className="mt-3">You can add <code>public-request</code> to header to skip JWT checking.</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{skipChecking}
				</SyntaxHighlighter>
			</div>
			<div className="mt-4">
				<h4>Usage</h4>
				<p>Now you can call services in component or sagas</p>
				<SyntaxHighlighter className="hl-code" language="javascript" style={atomDark}>
					{usageStr}
				</SyntaxHighlighter>
			</div>
		</div>
	)
}

export default jwt
