import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { Card, Table, Tag, Tooltip, message, Button,  Input, Select, Popconfirm } from 'antd';
import { 
	EyeOutlined, 
	SearchOutlined,
	DeleteOutlined,
	UserOutlined
 } from '@ant-design/icons';
import moment from 'moment';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import Flex from 'components/shared-components/Flex'
import AdminService from "services/AdminService";
import utils from 'utils'

const { Option } = Select

const userStatusList = [
	{ key: 'all', label: 'All', value: -1},
	// { key: 'identityVerified',   label: '本人確認未', value: -1 },
	// { key: 'identityVerified',   label: '本人確認申請中', value: 0 },
	// { key: 'identityVerified',   label: '本人確認済み', value: 1 },
	{ key: 'emailVerified',label: 'メール認証未', value: false },
	{ key: 'emailVerified',label: 'メール認証済み', value: true },
	// { key: 'actived',         label: 'Actived', value: 1 },
	// { key: 'actived',         label: 'Blocked', value: 0 },
]


export const UserList = () => {
	
	const [users, setUsers] = useState();
	const [list, setList] = useState()
	const [userProfileVisible, setUserProfileVisible] = useState(false);
	const [selectedUser, setSelectedUser] = useState(null);

	const [searchKey, setSearchKey] = useState('');
	const [indexSelectBox, setIndexOfSelectBox] = useState(0);


	useEffect(()=>{
		AdminService.getAllUsers()
		.then(res=>{
			setUsers(res.data);
			setList(res.data);
		})
		.catch(()=>{
			message.error("エラーが発生しました。")
		})
	}, [])


	const showUserProfile = userInfo => {
		setUserProfileVisible(true);
		setSelectedUser(userInfo);
	};
	
	const closeUserProfile = () => {
		setUserProfileVisible(false);
		setSelectedUser(null);
	}

	const deleteUser = (id) => {
		AdminService.deleteOneOfUser(id)
		.then(res => {
			setUsers(res.data);
			setList(res.data);
			message.success("ユーザーを削除しました!")
		})
		.catch(()=>{
			message.error("エラーが発生しました。")
		})
	}

	const tableColumns = [
		{
			title: '名前',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus src={record?.avatar} icon={<UserOutlined />} name={record.personalInfo?.name} subTitle={record.email}/>
				</div>
			),
			sorter: {
				compare: (a, b) => {
					a = a.email.toLowerCase();
					  b = b.email.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: '登録日',
			dataIndex: 'created_at',
			render: created_at => (
				<span>{moment(created_at).format("MM/DD/YYYY")} </span>
			),
			sorter: (a, b) => moment(a.created_at) - moment(b.created_at)
		},
		{
			title: 'メール認証',
			dataIndex: 'emailVerified',
			render: emailVerified => (
				<Tag className ="text-capitalize" 
					color={ !emailVerified ? 'volcano' : 'cyan'}>
						{ !emailVerified ? '未' : '済み'}
				</Tag>
			),
			sorter: {
				compare: (a, b) => a.emailVerified - b.emailVerified,
			},
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right d-flex justify-content-end">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Popconfirm
							title="本当に削除しますか？"
							onConfirm={()=> {deleteUser(elm._id)}}
							okText="YES"
							cancelText="NO"
							placement="rightTop"
						> 
							<Button danger icon={<DeleteOutlined />} size="small"/>
						</Popconfirm>
					</Tooltip>
				</div>
			)
		}
	];


	const onSearch = e => {
		const value = e.currentTarget.value
		setSearchKey(value);
	}

	const changeSelectBox = (value) => {
		setIndexOfSelectBox(value);
	}

	useEffect(()=>{
		if(users){
			const data = searchUserWithNameAndEmail(users, searchKey);
			if(indexSelectBox === 0){
				setList(data);
			} else {
				let key = userStatusList[indexSelectBox].key;
				let value = userStatusList[indexSelectBox].value;
				let result = utils.filterArray(data, key, value);
				setList(result);
			}
		}
	}, [users, indexSelectBox, searchKey]);


	const  searchUserWithNameAndEmail = (list, input) => {
		const searchText = (item) => {
			var keys = ['personalInfo', 'email', 'id'];
			for(let i = 0; i < keys.length; i ++){
				if(item[keys[i]]){
					if(i === 0){
						for(let key in item.personalInfo){
							if(item.personalInfo[key] && item.personalInfo[key].toUpperCase().indexOf(input.toString().toUpperCase()) !== -1){
								return true;
							}
						}
					} else {
						if(item[keys[i]].toUpperCase().indexOf(input.toString().toUpperCase()) !== -1){
							return true;
						}
					}
				}
			}
		};
		list = list.filter(value => searchText(value));
		return list;
	}


	if(!users) return null;
	return (
		<Card>
			<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} 
							onChange={e => onSearch(e)}
						/>
					</div>
					<div className="mb-3">
						<Select 
							defaultValue={0} 
							className="w-100" 
							style={{ minWidth: 180 }} 
							onChange={changeSelectBox} 
							placeholder="Status"
						>
							{userStatusList.map((elm, index) => <Option key={elm.label} value={index}>{elm.label}</Option>)}
						</Select>
					</div>
				</Flex>
				<h4 className="ml-3 float-right font-yuMincho">
					{`検索結果: ${list ? list.length : users.length}人`}
				</h4>
			</Flex>
			<div className="table-responsive">
				<Table columns={tableColumns} dataSource={list} rowKey="_id"/>
			</div>
			<UserView data={selectedUser} visible={userProfileVisible} close={closeUserProfile}/>
		</Card>
	)
}

export default UserList