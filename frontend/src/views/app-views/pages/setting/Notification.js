import React, { Component } from 'react';
import { List, Switch } from 'antd';
import { 
	TagsOutlined, 
	UserAddOutlined, 
	MailOutlined,
	CommentOutlined,
	ShoppingOutlined,
	UsergroupAddOutlined,
	FileDoneOutlined
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import Flex from 'components/shared-components/Flex'

export class Notification extends Component {

	state ={
		config: [
			{
				key: 'key-mentions',
				title: 'Mentions',
				icon: TagsOutlined,
				desc: 'You will receive an alert when someone was mentioned you in any post.',
				allow: false
			},
			{
				key: 'key-follows',
				title: 'Follows',
				icon: UserAddOutlined,
				desc: 'You will receive an alert when someone is follwing you.',
				allow: true
			},
			{
				key: 'key-comment',
				title: 'Comments',
				icon: CommentOutlined,
				desc: 'You will receive an notifications when someone is comment on your post.',
				allow: true
			},
			{
				key: 'key-email',
				title: 'Email Notifications',
				icon: MailOutlined,
				desc: 'You will receive daily email notifications.',
				allow: false
			},
			{
				key: 'key-product',
				title: 'New product',
				icon: ShoppingOutlined,
				desc: 'You will receive an notifications when a new product arrived.',
				allow: true
			},
			{
				key: 'key-group',
				title: 'Groups Invitation',
				icon: UsergroupAddOutlined,
				desc: 'You will receive an notifications when a group is inviting you.',
				allow: false
			},
			{
				key: 'key-task',
				title: 'Tasks',
				icon: FileDoneOutlined,
				desc: 'You will receive an notifications someone assign you a task',
				allow: false
			}
		]
	}

	render() {
		const { config } = this.state;
		return (
			<>
				<h2 className="mb-4">Notification</h2>
				<List
					itemLayout="horizontal"
					dataSource={config}
					renderItem={item => (
						<List.Item>
							<Flex justifyContent="between" alignItems="center" className="w-100">
								<div className="d-flex align-items-center">
									<Icon className="h1 mb-0 text-primary" type={item.icon} />
									<div className="ml-3">
										<h4 className="mb-0">{item.title}</h4>
										<p>{item.desc}</p>
									</div>
								</div>
								<div className="ml-3">
									<Switch defaultChecked={item.allow} onChange={
										checked => {
											const checkedItem = config.map( elm => {
												if(elm.key === item.key) {
													elm.allow = checked
												}
												return elm
											})
											this.setState({
												config:[
													...checkedItem
												]
											})
										}
									} />
								</div>
							</Flex>
						</List.Item>
					)}
				/>
			</>
		)
	}
}

export default Notification
