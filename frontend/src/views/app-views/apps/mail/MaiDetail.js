import React, { Component } from 'react'
import MailData from 'assets/data/mail.data.json';
import { ReplySVG } from 'assets/svg/icon';
import { labels, getFileType } from './MailLabels';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import { Tooltip } from 'antd';
import { 
	LeftCircleOutlined, 
	StarOutlined, 
	DeleteOutlined, 
	StarFilled, 
	DownloadOutlined 
} from '@ant-design/icons';
import CustomIcon from 'components/util-components/CustomIcon'


export class MaiDetail extends Component {

	state = {
		detail: {},
		starred: false,
		attachment: []
	}

	componentDidMount() {
		const { category, id } = this.props.match.params
		const currentId = parseInt(id)
		let data = []
		if(labels.includes(category)) {
			data = MailData.inbox.filter(elm => elm.id === currentId)
		} else {
			data = MailData[category].filter(elm => elm.id === currentId)
		}
		const res = data[0]
		this.setState({
			detail: res,
			starred: res.starred,
			attachment: res.attachment
		})
	}

	tick() {
		this.setState({
			starred: !this.state.starred
		})
	}

	back() {
		this.props.history.goBack()
	}

	render() {
		const { name, avatar, title, date, to, content } = this.state.detail;
		const { attachment } = this.state;
		return (
			<div className="mail-detail">
				<div className="d-lg-flex align-items-center justify-content-between">
					<div className="d-flex align-items-center mb-3">
						<div className="font-size-md mr-3" onClick={()=> {this.back()}}>
							<LeftCircleOutlined className="mail-detail-action-icon font-size-md ml-0" />
						</div>
						<AvatarStatus src={avatar} name={name} subTitle={`To: ${to}`}/>
					</div>
					<div className="mail-detail-action mb-3">
						<span className="mr-2 font-size-md">{date}</span>
						<Tooltip title="Reply">
							<CustomIcon className="mail-detail-action-icon" svg={ReplySVG} />
						</Tooltip>
						<Tooltip title="Star" onClick={()=>{this.tick()}}>
							{this.state.starred? <StarFilled className="mail-detail-action-icon star checked" /> : <StarOutlined className="mail-detail-action-icon star" />}
						</Tooltip>
						{attachment.length > 0 ? <Tooltip title="Download Attachment"><DownloadOutlined className="mail-detail-action-icon"/></Tooltip> : null}
						<Tooltip title="Delete">
							<DeleteOutlined className="mail-detail-action-icon"/>
						</Tooltip>
					</div>
				</div>
				<div className="mail-detail-content">
					<h3 className="mb-4">{title}</h3>
					<div dangerouslySetInnerHTML={{ __html: content }} />
					<div className="mail-detail-attactment">
						{
							attachment.map( (elm, i) => (
								<div className="mail-detail-attactment-item" key={`attachment-file-${i}`}>
									<span>{getFileType(elm.type)}</span>
									<div className="ml-2">
										<div>{elm.file}</div>
										<div className="text-muted font-size-sm">{elm.size}</div>
									</div>
								</div>
							))
						}
					</div>
				</div>
			</div>
		)
	}
}

export default MaiDetail
