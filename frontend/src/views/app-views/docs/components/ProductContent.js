import React from 'react'
import { FolderOutlined } from '@ant-design/icons';


const InfoList = props => (
	<p className="d-flex align-items-center">
		<span className="d-flex font-size-md align-items-center">
			<FolderOutlined className="text-primary"/>
			<span className="ml-2 text-dark font-weight-bold">{props.title}</span>
		</span>
		<span className="mx-2"> - </span>
		<span>{props.children}</span>
	</p>
)

const ProductContent = () => {
	return (
		<div>
			<h2>Product Content</h2>
			<p>Once you have download the package and extract it, you can 3 seperated project as below:</p>
			<div className="mt-4">
				<InfoList title="demo">
					This is the main preview project. It contains everything that can see in the live demo.
				</InfoList>
				<InfoList title="starter - boilerplate">
					You can use this folder to kickstart your project with a basic template setup.
				</InfoList>
				<InfoList title="starter - firebase_auth">
					This starter project included firebase auth initialize, you can use boilerplater starter folder instead, if you have a different auth intergration.
				</InfoList>
				<InfoList title="prototype">
					This folder included the theme design prototype.
				</InfoList>
			</div>
		</div>
	)
}

export default ProductContent
