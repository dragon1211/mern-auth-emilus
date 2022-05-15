import { useEffect, useState } from 'react';
import { Form, Avatar, Button, Input, DatePicker, Row, Col, message, Upload } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { ROW_GUTTER } from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex';
import UserService from 'services/UserService';
import moment from "moment";
import { create } from "ipfs-http-client";

const client = create("https://ipfs.infura.io:5001/api/v0");

const EditProfile = () => {

	const user = UserService.getCurrentUser();
	const [avatar, setAvatar] = useState('');
	const [loaded, setLoaded] = useState(false);
	const [loaded_avatar, setLoadedAvatar] = useState(false);
	const [submit, setSubmit] = useState(false);

	
	useEffect(()=>{
		setAvatar(user.avatar);
		setLoaded(true);
	}, [])


	const onFinish = values => {
		let req = {
			_id: UserService.getCurrentUser()._id,
			avatar: avatar,
			nickname: values.nickname,
			name: values.name,
			furigana: values.furigana,
			phoneNumber: values.phoneNumber,
			birthday: values.birthday.toString()
		}
		setSubmit(true);
		UserService.updatePersonalInfo(req)
		.then(res => {
			setSubmit(false);
			console.log(res.data);
			UserService.setCurrentUser(res.data);
			message.success("プロフィールを更新しました!");
		})
		.catch(err => {
			setSubmit(false);
			message.error("失敗しました。");
		})
	};

	const onFinishFailed = errorInfo => {
		console.log('Failed:', errorInfo);
	};

	const onUploadAavater = info => {
		setLoadedAvatar(true);
		client.add(info.file.originFileObj).then(res =>{
			const preUrl = `https://ipfs.io/ipfs/${res.path}`;
			let req = {
				avatar: preUrl,
				_id: UserService.getCurrentUser()._id
			}
			UserService.updateUserAvatar(req)
			.then(res => {
				setLoadedAvatar(false);
				setAvatar(preUrl);
				UserService.setCurrentUser(res.data);
				message.success("Avatarを更新しました!", 1, ()=>{
					window.location.reload();
				});
			})
		})
		.catch(err => {
			setLoadedAvatar(false);
			message.error("IPFSの接続を確認してください。");
		})
	};


	if(!loaded) return null;
	return (
		<>
			<Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
				<Avatar size={90} src={avatar} icon={<UserOutlined />}/>
				<div className="ml-3 mt-md-0 mt-3">
					<Upload onChange={onUploadAavater} showUploadList={false} customRequest={()=>{ return; }}>
						<Button type="primary" loading={loaded_avatar}>Change Avatar</Button>
					</Upload>
					<Button className="ml-2" onClick={() => setAvatar('')}>Remove</Button>
				</div>
			</Flex>
			<div className="mt-4">
				<Form
					name="basicInformation"
					layout="vertical"
					initialValues={
						{ 
							'nickname': user.nickname,
							'name': user.personalInfo?.name,
							'furigana': user.personalInfo?.furigana,
							'birthday': moment(user.personalInfo?.birthday),
							'phoneNumber': user.personalInfo?.phoneNumber,
						}
					}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Row>
						<Col xs={24} sm={24} md={24} lg={16}>
							<Row gutter={ROW_GUTTER}>
								<Col xs={24} sm={24} md={24}>
									<Form.Item
										label="ニック名"
										name="nickname"
										rules={[
											{
												required: true,
												message: 'この項目は必須です！',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="お名前"
										name="name"
										rules={[
											{
												required: true,
												message: 'この項目は必須です！',
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="フリガナ"
										name="furigana"
										rules={[
											{
												required: true,
												message: 'この項目は必須です！'
											},
										]}
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="電話番号"
										name="phoneNumber"
									>
										<Input />
									</Form.Item>
								</Col>
								<Col xs={24} sm={24} md={12}>
									<Form.Item
										label="生年月日"
										name="birthday"
									>
										<DatePicker className="w-100"/>
									</Form.Item>
								</Col>
							</Row>
							<Button type="primary" htmlType="submit"
								loading={submit}
							>
								Save Change
							</Button>
						</Col>
					</Row>
				</Form>
			</div>
		</>
	)
}

export default EditProfile