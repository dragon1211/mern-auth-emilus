import React from 'react'
import ChatData from "assets/data/chat.data.json"
import { Avatar, Divider, Input, Form, Button, Menu } from 'antd';
import { 
	FileOutlined, 
	SendOutlined, 
	PaperClipOutlined, 
	SmileOutlined, 
	AudioMutedOutlined,
	UserOutlined,
	DeleteOutlined
} from '@ant-design/icons';
import { Scrollbars } from 'react-custom-scrollbars';
import Flex from 'components/shared-components/Flex';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown'

const	menu = () => (
	<Menu>
		<Menu.Item key="0">
			<UserOutlined />
			<span>User Info</span>
		</Menu.Item>
		<Menu.Item key="1">
			<AudioMutedOutlined />
			<span>Mute Chat</span>
		</Menu.Item>
		<Menu.Divider />
		<Menu.Item key="3">
			<DeleteOutlined />
			<span>Delete Chat</span>
		</Menu.Item>
	</Menu>
);

export class Conversation extends React.Component {
	formRef = React.createRef();
	chatBodyRef = React.createRef()

	state = {
		info: {},
		msgList: [],
	}
	
	componentDidMount() {
		this.getConversation(this.getUserId())
	}

	componentDidUpdate(prevProps) {
		if (this.props.location.pathname !== prevProps.location.pathname) {
			this.getConversation(this.getUserId())			
		}
		this.scrollToBottom()
	}
	
	getUserId() {
		const { id } = this.props.match.params
		return parseInt(parseInt(id))
	}
	

	getConversation = currentId => {
		const data = ChatData.filter(elm => elm.id === currentId)
		this.setState({
			info: data[0],
			msgList: data[0].msg
		})	
	}

	getMsgType = obj => {
		switch (obj.msgType) {
			case 'text':
				return <span>{obj.text}</span>
			case 'image':
				return <img src={obj.text} alt={obj.text} />
			case 'file':
				return (
				<Flex alignItems="center" className="msg-file">
					<FileOutlined className="font-size-md"/>
					<span className="ml-2 font-weight-semibold text-link pointer">
						<u>{obj.text}</u>
					</span>
				</Flex>
				)
			default:
				return null;
		}
	}

	scrollToBottom = () => {
		this.chatBodyRef.current.scrollToBottom()
	}

	onSend = values => {
		if (values.newMsg) {
			const newMsgData = {
				avatar: "",
				from: "me",
				msgType: "text",
				text: values.newMsg,
				time: "",
			}
			this.formRef.current.setFieldsValue({
				newMsg: ''
			});
			this.setState({
				msgList: [...this.state.msgList, newMsgData]
			})
		}
	};
	
	emptyClick = (e) => {
    e.preventDefault();
	};
	
	chatContentHeader = name => (
		<div className="chat-content-header">
			<h4 className="mb-0">{name}</h4>
			<div>
				<EllipsisDropdown menu={menu}/>
			</div>
		</div>
	)

	chatContentBody = (props, id) => (
		<div className="chat-content-body">
			<Scrollbars ref={this.chatBodyRef} autoHide>
				{
					props.map((elm, i) => (
						<div 
							key={`msg-${id}-${i}`} 
							className={`msg ${elm.msgType === 'date'? 'datetime' : ''} ${elm.from === 'opposite'? 'msg-recipient' : elm.from === 'me'? 'msg-sent' : ''}`}
						>
							{
								elm.avatar? 
								<div className="mr-2">
									<Avatar src={elm.avatar} />
								</div>
								:
								null
							}
							{
								elm.text?
								<div className={`bubble ${!elm.avatar? 'ml-5' : ''}`}>
									<div className="bubble-wrapper">
										{this.getMsgType(elm)}
									</div>
								</div>
								:
								null
							}
							{
								elm.msgType === 'date'?
								<Divider>{elm.time}</Divider>
								: 
								null
							}
						</div>
					))
				}
			</Scrollbars>
		</div>
	)

	chatContentFooter = () => (
		<div className="chat-content-footer">
			<Form name="msgInput" ref={this.formRef} onFinish={this.onSend} className="w-100">
				<Form.Item name="newMsg" className="mb-0">
					<Input 
						autoComplete="off" 
						placeholder="Type a message..."
						suffix={
							<div className="d-flex align-items-center">
								<a href="/#"  className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
									<SmileOutlined />
								</a>
								<a href="/#" className="text-dark font-size-lg mr-3" onClick={this.emptyClick}>
									<PaperClipOutlined />
								</a>
								<Button shape="circle" type="primary" size="small" onClick={this.onSend} htmlType="submit">
									<SendOutlined />
								</Button>
							</div>
						}
					/>
				</Form.Item>
			</Form>
		</div>
	)


	render() {
		const { id } = this.props.match.params
		const { info, msgList } = this.state
		return (
			<div className="chat-content">
				{this.chatContentHeader(info.name)}
				{this.chatContentBody(msgList, id)}
				{this.chatContentFooter()}
			</div>
		)
	}
}


export default Conversation
