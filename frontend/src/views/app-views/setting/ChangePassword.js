import React, { useState } from 'react'
import { Form, Button, Input, Row, Col, message } from 'antd';
import UserService from 'services/UserService';
import JwtService from 'services/JwtAuthService';

const ChangePassword = () => {

	const [submit, setSubmit] = useState(false);
	const changePasswordFormRef = React.createRef();

	const onFinish = values => {
		setSubmit(false);
		let user = UserService.getCurrentUser();
		JwtService.changePassword(user.email, values.password, values.newPassword)
			.then(res => {
				setSubmit(false);
				onReset();
				if(res.data.status_code === 200){
					message.success(res.data.message);
				} else {
					message.error(res.data.message)
				}
			})
			.catch(error => {
				setSubmit(false);
				message.error('エラーか発生しました。')
				onReset();
			}
		);
	};

	const onReset = () => {
		changePasswordFormRef.current.resetFields();
	};


	return (
		<>
			<h2 className="mb-4">Change Password</h2>
			<Row >
				<Col xs={24} sm={24} md={24} lg={12}>
					<Form
						name="changePasswordForm"
						layout="vertical"
						ref={changePasswordFormRef}
						onFinish={onFinish}
					>
						<Form.Item
							label="現在のパスワード"
							name="password"
							rules={[{ 
								required: true,
								message: 'この項目は必須です!' 
							}]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="新しいパスワード"
							name="newPassword"
							rules={[{ 
								required: true,
								message: 'この項目は必須です!' 
							}]}
						>
							<Input.Password />
						</Form.Item>
						<Form.Item
							label="パスワード確認"
							name="confirmPassword"
							rules={
								[
									{ 
										required: true,
										message: 'この項目は必須です!' 
									},
									({ getFieldValue }) => ({
										validator(rule, value) {
											if (!value || getFieldValue('newPassword') === value) {
												return Promise.resolve();
											}
											return Promise.reject('Password not matched!');
										},
									}),
								]
							}
						>
							<Input.Password />
						</Form.Item>
						<Button 
							type="primary" 
							htmlType="submit"
							loading={submit}	
						>
							Change password
						</Button>
						<Button onClick={onReset} className="ml-3">
							Reset
						</Button>
					</Form>
				</Col>
			</Row>
		</>
	)
}

export default ChangePassword