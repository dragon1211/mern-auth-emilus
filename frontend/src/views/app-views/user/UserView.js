import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Avatar, Drawer, Divider, Button } from 'antd';
import { 
	MobileOutlined, 
	MailOutlined, 
	UserOutlined, 
	CompassOutlined,
	CalendarOutlined,
} from '@ant-design/icons';
import moment from 'moment';

export class UserView extends Component {
	render() {
		const { data, visible, close} = this.props;
		if(!data) return null;
		return (
			<Drawer
				width={300}
				placement="right"
				onClose={close}
				closable={false}
				visible={visible}
			>
				<div className="text-center mt-3">
					<Avatar size={80} src={data.avatar} />
					<h3 className="mt-2 mb-0">{data.name}</h3>
					<span className="text-muted">{data.nickname}</span>
				</div>
				<Divider dashed />
				<div className="">
					<h6 className="text-muted text-uppercase mb-3">Account details</h6>
					<p>
						<UserOutlined />
						<span className="ml-3 text-dark">ID:　{data._id}</span>
					</p>
					<p>
						<CalendarOutlined />
						<span className="ml-3 text-dark">Birth:　{ data.personalInfo?.birthday && moment(data.personalInfo?.birthday).format("MM/DD/YYYY")}</span>
					</p>
				</div>
				<div className="mt-5">
					<h6 className="text-muted text-uppercase mb-3">CONTACT</h6>
					{
						data.personalInfo?.phoneNumber &&
						<p>
							<MobileOutlined />
							<span className="ml-3 text-dark">Tel:　{data.personalInfo?.phoneNumber}</span>
						</p>
					}
					{
						data.email &&
						<p>
							<MailOutlined />
							<span className="ml-3 text-dark">Email:　{data.email}</span>
						</p>
					}
					{
						data.personalInfo?.locationProvince &&
						<p>
							<CompassOutlined />
							<span className="ml-3 text-dark">
								都道府県:　{data.personalInfo?.locationProvince}
							</span>
						</p>
					}
					{
						data.personalInfo?.locationCity &&
						<p>
							<CompassOutlined />
							<span className="ml-3 text-dark">
								市区町村:　{data.personalInfo?.locationCity}
							</span>
						</p>
					}
					{
						data.personalInfo?.extra &&
						<p>
							<CompassOutlined />
							<span className="ml-3 text-dark">
								住所:　{data.personalInfo?.extra}
							</span>
						</p>
					}
				</div>
				{/* <Link to={`/admin/users/${data._id}`}>
					<Button className='w-100 mt-5'>See more</Button>
				</Link> */}
			</Drawer>
		)
	}
}

export default UserView