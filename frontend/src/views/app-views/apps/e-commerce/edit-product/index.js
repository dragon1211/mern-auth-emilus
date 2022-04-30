import React from 'react'
import ProductForm from '../ProductForm';

const EditProduct = props => {
	return (
		<ProductForm mode="EDIT" param={props.match.params}/>
	)
}

export default EditProduct
