import React from 'react'
import { Tree } from 'antd';
import { FolderOutlined, FileOutlined } from '@ant-design/icons';

const { DirectoryTree } = Tree;

const treeData = [
  {
    title: 'public',
    key: '0-0',
    children: [],
	},
	{
    title: 'src',
    key: '0-1',
    children: [
      { 
				title: 'assets', 
				key: '0-0-0', 
				children: [] 
			},
      { 
				title: 'auth', 
				key: '0-0-1', 
				children: [] 
			},
			{ 
				title: 'components', 
				key: '0-0-2', 
				children: [] 
			},
			{ 
				title: 'cofigs', 
				key: '0-0-3', 
				children: [] 
			},
			{ 
				title: 'constant', 
				key: '0-0-4', 
				children: [] 
			},
			{ 
				title: 'lang', 
				key: '0-0-5', 
				children: [] 
			},
			{ 
				title: 'layouts', 
				key: '0-0-6', 
				children: [] 
			},
			{ 
				title: 'redux', 
				key: '0-0-7', 
				children: [] 
			},
			{ 
				title: 'services', 
				key: '0-0-8', 
				children: [] 
			},
			{ 
				title: 'views', 
				key: '0-0-9', 
				children: [] 
			},
			{
        title: 'App.js',
        key: '0-0-10',
        isLeaf: true,
			},
			{
        title: 'index.js',
        key: '0-0-11',
        isLeaf: true,
			},
			{
        title: 'index.scss',
        key: '0-0-12',
        isLeaf: true,
			},
			{
        title: 'serviceWorker.js',
        key: '0-0-13',
        isLeaf: true,
      }
    ],
  }
];

const FolderTitle = props => (
	<h4>
		{props.type === 'file' ? <FileOutlined className="text-success" /> :  <FolderOutlined className="text-primary"/>}
		<span className="ml-2">{props.title}</span>
	</h4>
)

const FolderDescribe = props => (
	<div className={`mb-4 ${props.level === 2 && 'ml-4 mt-4'}`}>
		{props.children}
	</div>
)

const FolderStructure = () => {
	return (
		<div>
			<h2>Folder Structure</h2>
			<p>Emilus uses Create React App folder structure to keep its content.</p>
			<div className="mb-4">
				<DirectoryTree
					multiple
					treeData={treeData}
				/>
			</div>
			<FolderDescribe>
				<FolderTitle title="public" />
				<p>public folder keeps all static web resouce, such as images, web fonts, html & etc.</p>
			</FolderDescribe>
			<FolderDescribe>
				<FolderTitle title="src" />
				<p>
					src is the folder where contain our React code, 
					it is also entry point of the application. The below folders 
				</p>
				<FolderDescribe level={2}>
					<FolderTitle title="assets" />
					<p>This folder stores web resouce that require to processed by webpack.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="auth" />
					<p>auth folder include all authentication related config.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="components" />
					<p>The components folder contains a collection of UI components that will be shared and used across files in the project.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="configs" />
					<p>configs basically contains app configuration related files, such as theme and navigation.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="constants" />
					<p>constants folder contains all value which commonly used throughout the app.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="lang" />
					<p>This folder stored all files related to languages.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="layouts" />
					<p>layouts folder contains all layout component. For example app-layout that we used in post login & auth-layout for prelogin</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="redux" />
					<p>redux folder included all redux related fles, there are store, actions, reducers, action constants & sagas subfolder to manage redux states.</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="services" />
					<p>services folder contains service file that used to manage API integrations</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="utils" />
					<p>utils folder is a place to store some utility functions that used oftenly in the project</p>
				</FolderDescribe>
				<FolderDescribe level={2}>
					<FolderTitle title="views" />
					<p>views folder store page component that basically has its own route.</p>
				</FolderDescribe>
			</FolderDescribe>
			<FolderDescribe>
				<FolderTitle title="App.js" type="file"/>
				<p>Main app component.</p>
			</FolderDescribe>
			<FolderDescribe>
				<FolderTitle title="index.js" type="file"/>
				<p>Javascript entry point.</p>
			</FolderDescribe>
			<FolderDescribe>
				<FolderTitle title="index.scss" type="file"/>
				<p>SCSS entry point.</p>
			</FolderDescribe>
		</div>
	)
}

export default FolderStructure
