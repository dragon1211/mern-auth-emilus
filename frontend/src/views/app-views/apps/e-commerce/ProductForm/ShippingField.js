import React from 'react'
import { Input, Row, Col, Card, Form, InputNumber, Select } from 'antd';

const { Option } = Select;
const legthUnit = ['cm', 'mm', 'm']
const weightUnit = ['kg', 'g', 'mg']

const ShippingField = () => {
	return (
		<Card title="Shipping">
			<Row gutter={16}>
				<Col xs={24} sm={24} md={12}>
					<Form.Item name="width" label="Width">
						<Input addonAfter={
							<Form.Item name="widthUnit" noStyle>
								<Select style={{minWidth: 70}} >
									{
										legthUnit.map(unit => <Option key={unit} value={unit}>{unit}</Option>)
									}
								</Select>
							</Form.Item>
						}/>
					</Form.Item>
				</Col>
				<Col xs={24} sm={24} md={12}>
					<Form.Item name="height" label="Height">
						<Input addonAfter={
							<Form.Item name="heightUnit" noStyle>
								<Select style={{minWidth: 70}} >
									{
										legthUnit.map(unit => <Option key={unit} value={unit}>{unit}</Option>)
									}
								</Select>
							</Form.Item>
						}/>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item name="weight" label="Weight">
						<Input addonAfter={
							<Form.Item name="weightUnit" noStyle>
								<Select style={{minWidth: 70}} >
									{
										weightUnit.map(unit => <Option key={unit} value={unit}>{unit}</Option>)
									}
								</Select>
							</Form.Item>
						}/>
					</Form.Item>
				</Col>
				<Col span={24}>
					<Form.Item name="shippingFees" label="Shipping fees">
						<InputNumber
							className="w-100"
							formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
							parser={value => value.replace(/\$\s?|(,*)/g, '')}
						/>
					</Form.Item>
				</Col>
			</Row>
		</Card>
	)
}

export default ShippingField
