import React, { useState, useEffect, useContext, useRef } from 'react'
import { 
	Modal, 
	Form, 
	Input, 
	Button, 
	Select, 
	DatePicker, 
	Tag, 
	Badge, 
	Divider, 
	Card, 
	Row, 
	Col, 
	Menu, 
	Dropdown,
	Avatar 
} from 'antd';
import { 
	FileTextOutlined, 
	PaperClipOutlined, 
	EllipsisOutlined, 
	StarOutlined, 
	DeleteOutlined, 
	StarFilled, 
	CommentOutlined 
} from '@ant-design/icons';
import { modalModeTypes, AssigneeAvatar, getLabelsColor, getCover, createCommentObject } from './utils';
import { DATE_FORMAT_DD_MM_YYYY } from 'constants/DateConstant';
import { scrumboardData, memberIds, labels } from './ScrumboardData';
import moment from 'moment';
import { ScrumboardContext } from './ScrumboardContext'

const { Option } = Select;

const memberTagRender = (props) => <AssigneeAvatar id={props.value} size={25} />

function labelTagRender(props) {
  const { value } = props;
  return (
		<Tag className="my-1">
			<div className="d-flex align-items-center">
				<Badge color={getLabelsColor(value)} />
				<span>{value}</span>
			</div>
		</Tag>
  );
}

const getModalTitle = type => {
	switch (type) {
		case modalModeTypes(0):
			return 'New card';
		case modalModeTypes(2):
			return 'New board';
		default:
			return;
	}
} 

const AddCardForm = ({onSubmit}) => {
	return (
		<Form layout="inline" name="add-card-ref" onFinish={onSubmit}>
			<Form.Item name="cardTitle" label="Card Title">
				<Input autoComplete="off" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Add</Button>
			</Form.Item>
		</Form>
	)
}

const UpdateCardForm = ({onSubmit, cardData, listId}) => {
	const context	= useContext(ScrumboardContext)

	const [attachmentsList, setAttachmentsList] = useState(cardData.attachments)
	const [commentsList, setCommentsList] = useState(cardData.comments)
	const [cover, setCover] = useState(cardData.cover)

	const commentInput = useRef();

	useEffect(() => {
		setAttachmentsList(cardData.attachments);
		setCommentsList(cardData.comments);
		setCover(cardData.cover)
	}, [cardData.attachments, cardData.comments, cardData.cover]);

	const initialValues = {
		name: cardData?.name,
		members: cardData?.members,
		dueDate: cardData?.dueDate ? moment(cardData.dueDate) : '',
		labels: cardData?.labels,
		description: cardData?.description,
	}

	const onCoverChange = id => {
		const updatedCover = getCover(id, attachmentsList)
		updateAttachment(updatedCover)
	}

	const submitUpdate = values => {
		let updatedValue = values
		updatedValue.attachments = attachmentsList
		updatedValue.comments = commentsList
		updatedValue.cover = cover
		updatedValue.id = cardData.id
		onSubmit(updatedValue)
	}

	const updateAttachment = (updatedCover) => {
		const data = context.columns
    const updatadedCards = data[listId].map(elm => {
      if(elm.id === cardData.id) {
        elm.attachments = attachmentsList;
        elm.cover = updatedCover
      }
      return elm
    })
		data[listId] = updatadedCards
		context.updateColumns(data)
		context.updateOrdered(Object.keys(data))
	}

	const removeCover = () => {
		updateAttachment('')
	}

	const	submitComment = () => {
		const message = commentInput.current.state.value
		const { currentListId, columns, updateColumns, updateOrdered } = context
    const data = columns;
    let newComment = createCommentObject()
    newComment.message = message;
    const updatedComment = data[currentListId].map(elm => {
      if(elm.id === cardData.id) {
        elm.comments = [...elm.comments, ...[newComment]];
      }
      return elm
		})
		commentInput.current.state.value = ''
		data[currentListId] = updatedComment
		updateColumns(data)
		updateOrdered(Object.keys(data))
	}

	return (
		<Form name="edit-card-ref" layout="vertical" onFinish={submitUpdate} initialValues={initialValues}>
			<Form.Item name="name" className="mb-0">
				<Input className="board-card-modal input"/>
			</Form.Item>
			<Form.Item className="mb-3">
				<p>Board: <span className="font-weight-semibold">{listId}</span></p>
			</Form.Item>
			<Form.Item label="Assigned to" name="members" className="blockform-col col-3">
				<Select 
					filterOption={false} 
					tagRender={memberTagRender} 
					mode="tags" 
					removeIcon={null}
					placeholder="None"
					className="board-card-modal select"
				>
					{
						memberIds.map(elm => (
							<Option key={elm} value={elm}>
								<AssigneeAvatar id={elm} name/>
							</Option>
						))
					}
				</Select>
			</Form.Item>
			<Form.Item label="Due Date" name="dueDate" className="blockform-col col-3">
				<DatePicker placeholder="Due date unset" className="board-card-modal date-picker w-100" format={DATE_FORMAT_DD_MM_YYYY} />
			</Form.Item>
			<Form.Item label="Labels" name="labels" className="blockform-col col-3">
				<Select 
					filterOption={false} 
					tagRender={labelTagRender} 
					mode="tags" 
					removeIcon={null}
					placeholder="None"
					className="board-card-modal select"
				>
					{
						labels.map(elm => (
							<Option key={elm.label} value={elm.label}>
								<div className="d-flex align-items-center">
									<Badge color={getLabelsColor(elm.label)} />
									<span>{elm.label}</span>
								</div>
							</Option>
						))
					}
				</Select>
			</Form.Item>
			<Divider className="mt-0"/>
			<div className="d-flex">
				<div className="mr-3 font-size-md">
					<FileTextOutlined />	
				</div>
				<div className="w-100">
					<h4>Description</h4>
					<Form.Item name="description">
						<Input.TextArea className="board-card-modal text-area"/>
					</Form.Item>
				</div>
			</div>
			{
				attachmentsList?.length > 0? 
				<div className="d-flex">
					<div className="mr-3 font-size-md">
						<PaperClipOutlined />
					</div>
					<div className="w-100">
						<h4>Attachments</h4>
						<Row gutter={16}>
							{
								attachmentsList?.map(elm => (
									<Col sm={24} md={8} key={elm.id}>
										<Card
											bodyStyle={{padding: 0}}
											cover={
												<div className="p-2">
													<img className="img-fluid" alt="example" src={elm.src} />
												</div>
											}
										>
											<div className="px-2 pb-2 d-flex align-items-center justify-content-between">
												<div>
													<h5 className="mb-0">{elm.name}</h5>
													<span className="text-muted font-size-sm">{elm.size}</span>
												</div>
												<div className="d-flex">
													{
														cover === elm.src ? <div className="mr-2 text-warning font-size-md"><StarFilled /></div> : null
													}
													<Dropdown 
														placement="bottomRight"
														overlay={
															<Menu>
																<Menu.Item key="0" onClick={() => onCoverChange(elm.id)}>
																	<span>
																		<>
																			<StarOutlined />
																			<span className="ml-2">Set Cover</span>
																		</>
																	</span>
																</Menu.Item>
																<Menu.Item key="1" onClick={() => removeCover()}>
																	<span>
																		<DeleteOutlined />
																		<span className="ml-2">Remove</span>
																	</span>
																</Menu.Item>
															</Menu>
														} 
														trigger={['click']}>
														<a className="font-size-md text-gray" href="/#" onClick={e => e.preventDefault()}>
															<EllipsisOutlined style={{transform: 'rotate(90deg)'}}/>
														</a>
													</Dropdown>
												</div>
											</div>
										</Card>
									</Col>
								))
							}
						</Row>
					</div>
				</div>
				:
				null
			}
			{
				cardData?.comments.length > 0? 
				<div className="d-flex">
					<div className="mr-3 font-size-md">
						<CommentOutlined />
					</div>
					<div className="w-100">
						<h4 className="mb-3">Comments ({commentsList.length})</h4>
						{
							commentsList.map(elm => 
								<div className="mb-3 d-flex" key={elm.id}>
									<div className="mt-2">
										<Avatar src={elm.src}/>
									</div>
									<div className="ml-2 bg-gray-lightest p-3 rounded w-100">
										<div className="d-flex align-items-center mb-2">
											<h4 className="mb-0">{elm.name}</h4>
											<span className="mx-1"> | </span>
											<span className="font-size-sm text-dark">{moment(elm.date).format('DD MMMM YYYY')}</span>
										</div>
										<p className="mb-0">{elm.message}</p>
									</div>
								</div>
							)
						}
						<div className="mb-3 d-flex">
							<Avatar src="/img/avatars/thumb-1.jpg"/>
							<div className="ml-2 bg-gray-lightest p-3 rounded w-100">
								<Input
									ref={commentInput}
									placeholder="Write comment"
									suffix={
										<div 
											onClick={() => submitComment()} 
											className="cursor-pointer font-weight-semibold text-primary">
											Send
										</div>
									}
								/>
							</div>
						</div>
					</div>
				</div>
				:
				null 
			}
			<Form.Item className="text-right mb-0">
				<Button type="primary" htmlType="submit">Change</Button>
			</Form.Item>
		</Form>
	)	
}

const AddBoardForm = ({onSubmit}) => {
	return(
		<Form layout="inline" name="add-board-ref" onFinish={onSubmit}>
			<Form.Item 
				name="boardTitle" 
				label="Board Title"
				rules={[() => ({
						validator(rule, value) {
							if(scrumboardData[value]) {
								return Promise.reject('Board already exist!');
							}
							return Promise.resolve();
						},
					}),
				]}
			>
				<Input autoComplete="off" />
			</Form.Item>
			<Form.Item>
				<Button type="primary" htmlType="submit">Add</Button>
			</Form.Item>
		</Form>
	)
}

const ModalForm = ({ visible, modalMode, cardData, listId, onClose, onModalSubmit }) => {

	const showClosable = modalMode === modalModeTypes(1) ? false : true
	const modalWidth = modalMode === modalModeTypes(1) ? 800 : 425;

	const submit = (values, mode) => {
		onModalSubmit(values, mode)
		onClose()
	};

	return (
		<Modal
			title={getModalTitle(modalMode)}
			visible={visible}
			closable={showClosable}
			footer={null}
			width={modalWidth}
			style={modalMode === modalModeTypes(1)? {top: 20} : null}
			destroyOnClose
			onCancel={() => onClose()}
		>
			<div style={modalMode === modalModeTypes(1)? {maxHeight: '85vh', overflowY: 'auto', overflowX: 'hidden'} : null}>
				<div className={modalMode === modalModeTypes(1)? 'mr-2 ml-2' : null}>
					{ 
						(() => {
							switch(modalMode) {
								case modalModeTypes(0):
									return <AddCardForm onSubmit={values => submit(values, modalModeTypes(0))}/>;
								case modalModeTypes(1):
									return (
										<UpdateCardForm 
											cardData={cardData} 
											listId={listId} 
											onSubmit={values => submit(values, modalModeTypes(1))}
										/>
									);
								case modalModeTypes(2):
									return <AddBoardForm onSubmit={values => submit(values, modalModeTypes(2))}/>;
								default:
									return null;
							}
						})()
					}
				</div>
			</div>
		</Modal>
	)
}

export default ModalForm
