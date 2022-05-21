import React, { useState, useEffect } from 'react'
import { useHistory, useLocation  } from "react-router-dom";
import { Card, Row, Col, Form, Input, Button, message } from "antd";
import { LockOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import JwtAuthService from 'services/JwtAuthService';
import { AUTH_PREFIX_PATH } from 'configs/AppConfig'

const backgroundStyle = {
	backgroundImage: 'url(/img/others/img-17.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

const rules = {
	password: [
		{ 
			required: true,
			message: 'この項目は必須です！'
		}
	],
	confirm: [
		{ 
			required: true,
			message: 'パスワードの確認!'
		},
		({ getFieldValue }) => ({
			validator(rule, value) {
				if (!value || getFieldValue('password') === value) {
					return Promise.resolve();
				}
				return Promise.reject('パスワードの確認が一致しません。');
			},
		})
	]
}

const ResetPassword = (props) => {

	const history = useHistory();
	const _location = useLocation();
	const _token= new URLSearchParams(_location.search).get('token');

	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [loaded, setLoaded] = useState(false);

	const theme = useSelector(state => state.theme.currentTheme)


	useEffect(() => {
		JwtAuthService.checkLinkOfResetPassword(_token)
		.then(res => {
			if(res.data.status_code === 200){
				setLoaded(true);
			} else {
				message.error("失敗しました。", ()=>{
					history.push("/forgot-password")
				})
			}
		})
	}, [])


	const onSend = values => {
		setLoading(true);
		JwtAuthService.resetPassword(_token, values.password)
		.then(res=>{
			if(res.data.status_code === 200){
				message.success("Successfully changed!", ()=>{
					history.pushname(`${AUTH_PREFIX_PATH}/login`);
				});
			} else {
				message.error(res.data.message);
			}
			setLoading(false);
		})
		.catch(err => {
			setLoaded(false);
			message.error(err.toString());
		})
	};


	if(!loaded) return null;
	return (
		<div className="h-100" style={backgroundStyle}>
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9} xl={7}>
						<Card>
							<div className="mb-3 mt-5">
								<div className="text-center">
									<h3 className="mt-3 font-weight-bold">Reset Password</h3>
									<p className="mb-4">Enter new password and confirm it.</p>
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
											<Form.Item 
												name="password" 
												label="Password" 
												rules={rules.password}
												hasFeedback
											>
												<Input.Password prefix={<LockOutlined className="text-primary" />}/>
											</Form.Item>
											<Form.Item 
												name="confirm" 
												label="ConfirmPassword" 
												rules={rules.confirm}
												hasFeedback
											>
												<Input.Password prefix={<LockOutlined className="text-primary" />}/>
											</Form.Item>
											<Form.Item>
												<Button loading={loading} type="primary" htmlType="submit" block>{loading? 'Saving' : 'Save'}</Button>
											</Form.Item>
										</Form>
									</Col>
								</Row>
							</div>
						</Card>
					</Col>
				</Row>
			</div>
		</div>
	)
}

export default ResetPassword

