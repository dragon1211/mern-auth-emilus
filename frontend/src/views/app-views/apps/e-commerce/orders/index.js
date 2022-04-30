/* eslint-disable no-unused-vars */
import React, {useState} from 'react'
import { Card, Table, Select, Input, Button, Badge, Menu, Tag } from 'antd';
import OrderListData from "assets/data/order-list.data.json"
import { EyeOutlined, FileExcelOutlined, SearchOutlined, PlusCircleOutlined } from '@ant-design/icons';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import EllipsisDropdown from 'components/shared-components/EllipsisDropdown';
import Flex from 'components/shared-components/Flex'
import NumberFormat from 'react-number-format';
import moment from 'moment'; 
import { DATE_FORMAT_DD_MM_YYYY } from 'constants/DateConstant'
import utils from 'utils'

const { Option } = Select

const getPaymentStatus = status => {
	if(status === 'Paid') {
		return 'success'
	}
	if(status === 'Pending') {
		return 'warning'
	}
	if(status === 'Expired') {
		return 'error'
	}
	return ''
}

const getShippingStatus = status => {
	if(status === 'Ready') {
		return 'blue'
	}
	if(status === 'Shipped') {
		return 'cyan'
	}
	return ''
}

const paymentStatusList = ['Paid', 'Pending', 'Expired']

const Orders = () => {

	const [list, setList] = useState(OrderListData)
	const [selectedRows, setSelectedRows] = useState([])
	const [selectedRowKeys, setSelectedRowKeys] = useState([])

	const handleShowStatus = value => {
		if(value !== 'All') {
			const key = 'paymentStatus'
			const data = utils.filterArray(OrderListData, key, value)
			setList(data)
		} else {
			setList(OrderListData)
		}
	}

	const dropdownMenu = row => (
		<Menu>
			<Menu.Item>
				<Flex alignItems="center">
					<EyeOutlined />
					<span className="ml-2">View Details</span>
				</Flex>
			</Menu.Item>
			<Menu.Item>
				<Flex alignItems="center">
					<PlusCircleOutlined />
					<span className="ml-2">Add to remark</span>
				</Flex>
			</Menu.Item>
		</Menu>
	);

	const tableColumns = [
		{
			title: 'ID',
			dataIndex: 'id'
		},
		{
			title: 'Product',
			dataIndex: 'name',
			render: (_, record) => (
				<div className="d-flex">
					<AvatarStatus size={30} src={record.image} name={record.name}/>
				</div>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'name')
		},
		{
			title: 'Date',
			dataIndex: 'date',
			render: (_, record) => (
				<span>{moment.unix(record.date).format(DATE_FORMAT_DD_MM_YYYY)}</span>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'date')
		},
		{
			title: 'Order status',
			dataIndex: 'orderStatus',
			render: (_, record) => (
				<><Tag color={getShippingStatus(record.orderStatus)}>{record.orderStatus}</Tag></>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'orderStatus')
		},
		{
			title: 'Payment status',
			dataIndex: 'paymentStatus',
			render: (_, record) => (
				<><Badge status={getPaymentStatus(record.paymentStatus)} /><span>{record.paymentStatus}</span></>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'paymentStatus')
		},
		{
			title: 'Total',
			dataIndex: 'amount',
			render: (_, record) => (
				<span className="font-weight-semibold">
					<NumberFormat
						displayType={'text'} 
						value={(Math.round(record.amount * 100) / 100).toFixed(2)} 
						prefix={'$'} 
						thousandSeparator={true} 
					/>
				</span>
			),
			sorter: (a, b) => utils.antdTableSorter(a, b, 'amount')
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<EllipsisDropdown menu={dropdownMenu(elm)}/>
				</div>
			)
		}
	];
	
	const rowSelection = {
		onChange: (key, rows) => {
			setSelectedRows(rows)
			setSelectedRowKeys(key)
		}
	};

	const onSearch = e => {
		const value = e.currentTarget.value
		const searchArray = e.currentTarget.value? list : OrderListData
		const data = utils.wildCardSearch(searchArray, value)
		setList(data)
		setSelectedRowKeys([])
	}

	return (
		<Card>
			<Flex alignItems="center" justifyContent="between" mobileFlex={false}>
				<Flex className="mb-1" mobileFlex={false}>
					<div className="mr-md-3 mb-3">
						<Input placeholder="Search" prefix={<SearchOutlined />} onChange={e => onSearch(e)}/>
					</div>
					<div className="mb-3">
						<Select 
							defaultValue="All" 
							className="w-100" 
							style={{ minWidth: 180 }} 
							onChange={handleShowStatus} 
							placeholder="Status"
						>
							<Option value="All">All payment </Option>
							{paymentStatusList.map(elm => <Option key={elm} value={elm}>{elm}</Option>)}
						</Select>
					</div>
				</Flex>
				<div>
					<Button type="primary" icon={<FileExcelOutlined />} block>Export All</Button>
				</div>
			</Flex>
			<div className="table-responsive">
				<Table 
					columns={tableColumns} 
					dataSource={list} 
					rowKey='id' 
					rowSelection={{
						selectedRowKeys: selectedRowKeys,
						type: 'checkbox',
						preserveSelectedRowKeys: false,
						...rowSelection,
					}}
				/>
			</div>
		</Card>
	)
}

export default Orders
