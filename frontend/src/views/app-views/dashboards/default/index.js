import React, { useState } from "react";
import { Row, Col, Button, Card, Avatar, Dropdown, Table, Menu, Tag } from 'antd';
import StatisticWidget from 'components/shared-components/StatisticWidget';
import ChartWidget from 'components/shared-components/ChartWidget';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import GoalWidget from 'components/shared-components/GoalWidget';
import { 
  VisitorChartData, 
  AnnualStatisticData, 
  ActiveMembersData, 
  NewMembersData, 
  RecentTransactionData 
} from './DefaultDashboardData';
import ApexChart from "react-apexcharts";
import { apexLineChartDefaultOption, COLOR_2 } from 'constants/ChartConstant';
import { 
  UserAddOutlined, 
  FileExcelOutlined, 
  PrinterOutlined, 
  PlusOutlined, 
  EllipsisOutlined, 
  StopOutlined, 
  ReloadOutlined 
} from '@ant-design/icons';
import utils from 'utils';
import {withRouter} from 'react-router-dom';
import { useSelector } from 'react-redux';

const MembersChart = props => (
  <ApexChart {...props}/>
)

const memberChartOption = {
  ...apexLineChartDefaultOption,
  ...{
    chart: {
      sparkline: {
        enabled: true,
      }
    },
    colors: [COLOR_2],
  }
}

const newJoinMemberOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <PlusOutlined />
          <span className="ml-2">Add all</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <StopOutlined />
          <span className="ml-2">Disable all</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
)

const latestTransactionOption = (
  <Menu>
    <Menu.Item key="0">
      <span>
        <div className="d-flex align-items-center">
          <ReloadOutlined />
          <span className="ml-2">Refresh</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="1">
      <span>
        <div className="d-flex align-items-center">
          <PrinterOutlined />
          <span className="ml-2">Print</span>
        </div>
      </span>
    </Menu.Item>
    <Menu.Item key="12">
      <span>
        <div className="d-flex align-items-center">
          <FileExcelOutlined />
          <span className="ml-2">Export</span>
        </div>
      </span>
    </Menu.Item>
  </Menu>
);

const cardDropdown = (menu) => (
  <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
    <a href="/#" className="text-gray font-size-lg" onClick={e => e.preventDefault()}>
      <EllipsisOutlined />
    </a>
  </Dropdown>
)

const tableColumns = [
  {
    title: 'Customer',
    dataIndex: 'name',
    key: 'name',
    render: (text, record) => (
      <div className="d-flex align-items-center">
        <Avatar size={30} className="font-size-sm" style={{backgroundColor: record.avatarColor}}>
          {utils.getNameInitial(text)}
        </Avatar>
        <span className="ml-2">{text}</span>
      </div>
    ),
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: () => <div className="text-right">Status</div>,
    key: 'status',
    render: (_, record) => (
      <div className="text-right">
        <Tag className="mr-0" color={record.status === 'Approved' ? 'cyan' : record.status === 'Pending' ? 'blue' : 'volcano'}>{record.status}</Tag>
      </div>
    ),
  },
];

export const DefaultDashboard = () => {
  const [visitorChartData] = useState(VisitorChartData);
  const [annualStatisticData] = useState(AnnualStatisticData);
  const [activeMembersData] = useState(ActiveMembersData);
  const [newMembersData] = useState(NewMembersData)
  const [recentTransactionData] = useState(RecentTransactionData)
  const { direction } = useSelector(state => state.theme)

  return (
    <>  
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={18}>
          <Row gutter={16}>
            {
              annualStatisticData.map((elm, i) => (
                <Col xs={24} sm={24} md={24} lg={24} xl={8} key={i}>
                  <StatisticWidget 
                    title={elm.title} 
                    value={elm.value}
                    status={elm.status}
                    subtitle={elm.subtitle}
                  />
                </Col>
              ))
            }
          </Row>
          <Row gutter={16}>
            <Col span={24}>
                <ChartWidget 
                  title="Unique Visitors" 
                  series={visitorChartData.series} 
                  xAxis={visitorChartData.categories} 
                  height={'400px'}
                  direction={direction}
                />
            </Col>
          </Row>
        </Col>
        <Col xs={24} sm={24} md={24} lg={6}>
          <GoalWidget 
            title="Monthly Target" 
            value={87}
            subtitle="You need abit more effort to hit monthly target"
            extra={<Button type="primary">Learn More</Button>}
          />
          <StatisticWidget 
            title={
              <MembersChart 
                options={memberChartOption}
                series={activeMembersData}
                height={145}
              />
            }
            value='17,329'
            status={3.7}
            subtitle="Active members"
          />
        </Col>
      </Row>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={24} lg={7}>
          <Card title="New Join Member" extra={cardDropdown(newJoinMemberOption)}>
            <div className="mt-3">
              {
                newMembersData.map((elm, i) => (
                  <div key={i} className={`d-flex align-items-center justify-content-between mb-4`}>
                    <AvatarStatus id={i} src={elm.img} name={elm.name} subTitle={elm.title} />
                    <div>
                      <Button icon={<UserAddOutlined />} type="default" size="small">Add</Button>
                    </div>
                  </div>
                ))
              }
            </div>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={17}>
          <Card title="Latest Transactions" extra={cardDropdown(latestTransactionOption)}>
            <Table 
              className="no-border-last" 
              columns={tableColumns} 
              dataSource={recentTransactionData} 
              rowKey='id' 
              pagination={false}
            />
          </Card>
        </Col>
      </Row>
    </>
  )
}


export default withRouter(DefaultDashboard);
