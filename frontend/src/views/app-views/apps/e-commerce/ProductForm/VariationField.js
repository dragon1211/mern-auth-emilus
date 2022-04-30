import React from 'react'
import { Input, Row, Col, Card, Form, Button, InputNumber } from 'antd';
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons';

const VariationField = props => (
	<Card title="Variants">
		<p>Add a custome variat options for your product, like different sizes or colors.</p>
		<Form.List name="variants">
			{(fields, { add, remove }) => {
				return (
					<div className="mt-3">
						{fields.map((field, index) => (
							<Row key={field.key} gutter={16}> 
								<Col sm={24} md={7}>
									<Form.Item
										{...field}
										label="Variant"
										name={[field.name, 'variant']}
										fieldKey={[field.fieldKey, 'variant']}
										rules={[{ required: true, message: 'Please enter variant name' }]}
										className="w-100"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col sm={24} md={7}>
									<Form.Item
										{...field}
										label="Price"
										name={[field.name, 'price']}
										fieldKey={[field.fieldKey, 'price']}
										rules={[{ required: true, message: 'Please enter variant price' }]}
										className="w-100"
									>
										<InputNumber
											className="w-100"
											formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
											parser={value => value.replace(/\$\s?|(,*)/g, '')}
										/>
									</Form.Item>
								</Col>
								<Col sm={24} md={7}>
									<Form.Item
										{...field}
										label="Stock keeping unit"
										name={[field.name, 'sku']}
										fieldKey={[field.fieldKey, 'sku']}
										rules={[{ required: true, message: 'Please enter variant SKU' }]}
										className="w-100"
									>
										<InputNumber className="w-100"/>
									</Form.Item>
								</Col>
								<Col sm={24} md={2}>
									<MinusCircleOutlined className="mt-md-4 pt-md-3" onClick={() => { remove(field.name)}} />
								</Col>
								<Col span={24}>
									<hr className="mt-2"/>
								</Col>
							</Row>
						))}
						<Form.Item>
							<Button type="dashed" onClick={() => { add()}} className="w-100">
								<PlusOutlined /> Add field
							</Button>
						</Form.Item>
					</div>
				);
			}}
		</Form.List>
	</Card>
)

export default VariationField
