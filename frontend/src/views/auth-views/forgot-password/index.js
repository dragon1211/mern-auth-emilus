import React, { useState } from 'react'
import { Card, Row, Col, Form, Input, Button, Alert } from "antd";
import { MailOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import JwtAuthService from 'services/JwtAuthService';

const backgroundStyle = {
	backgroundImage: 'url(/img/others/img-17.jpg)',
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover'
}

const ForgotPassword = () => {
	const [form] = Form.useForm();
	const [loading, setLoading] = useState(false);
	const [_success, setSuccess] = useState('');
	const [_error, setError] = useState('');

	const theme = useSelector(state => state.theme.currentTheme)

	const onSend = values => {
		setLoading(true);
		setSuccess('');
		setError('');
		JwtAuthService.sendLinkOfResetPassword(values.email)
		.then(res=>{
			if(res.data.status_code === 200){
				setSuccess("We sent link to reset password!");
			} else {
				setError(res.data.message);
			}
			setLoading(false);
		})
	};

	return (
		<div className="h-100" style={backgroundStyle}>
			<div className="container d-flex flex-column justify-content-center h-100">
				<Row justify="center">
					<Col xs={20} sm={20} md={20} lg={9} xl={8}>
						<Card>
							<div className="mb-2 mt-5">
								<div className="text-center">
									{/* <img className="img-fluid" src={`/img/${theme === 'light' ? 'logo.png': 'logo-white.png'}`} alt="" /> */}
									<h3 className="mt-3 font-weight-bold">Forgot Password?</h3>
									<p className="mb-4">Enter your Email to reset password</p>
								</div>
								<Row justify="center">
									<Col xs={24} sm={24} md={20} lg={20}>
										{
											(_error || _success) &&
											<Alert
												message={ _error || _success}
												type={_error ? "error": "success"}
												showIcon
												closable
												className='mb-3'
											/>
										}
										<Form form={form} layout="vertical" name="forget-password" onFinish={onSend}>
											<Form.Item 
												name="email" 
												rules={
													[
														{ 
															required: true,
															message: 'Please input your email address'
														},
														{ 
															type: 'email',
															message: 'Please enter a validate email!'
														}
													]
												}>
												<Input placeholder="Email Address" prefix={<MailOutlined className="text-primary" />}/>
											</Form.Item>
											<Form.Item>
												<Button loading={loading} type="primary" htmlType="submit" block>{loading? 'Sending' : 'Send'}</Button>
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

export default ForgotPassword

