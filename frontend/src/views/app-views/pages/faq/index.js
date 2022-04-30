import React, { Component } from 'react'
import PageHeaderAlt from 'components/layout-components/PageHeaderAlt'
import { Input, Row, Col, Card, Collapse } from 'antd';
import { SearchOutlined, RightOutlined } from '@ant-design/icons';
import { faqCategories, faqList } from './faqData';

const { Panel } = Collapse;

export class Faq extends Component {

	state = {
		curentCategory: 'faq-1'
	}

	render() {
		const { curentCategory } = this.state
		return (
      		<>
				<PageHeaderAlt className="bg-primary" overlap>
					<div className="container text-center">
						<div className="py-lg-4">
							<h1 className="text-white display-4">Search for Solution</h1>
							<Row type="flex" justify="center">
								<Col xs={24} sm={24} md={12}>
									<p className="text-white w-75 text-center mt-2 mb-4 mx-auto">
										Look at these words. Are they small words? And he referred to my words - if they're small, something else must be small..
									</p>
								</Col>
							</Row>
							<Row type="flex" justify="center" className="mb-5">
								<Col xs={24} sm={24} md={12}>
									<Input placeholder="Search" prefix={<SearchOutlined type="search" />}/>
								</Col>
							</Row>
						</div>
					</div>
				</PageHeaderAlt>
				<div className="container my-4">
					<Row gutter={16}>
						{faqCategories.map(elm => (
							<Col xs={24} sm={24} md={8} key={elm.key}>
								<Card 
									hoverable 
									onClick={() => {
										this.setState({
											curentCategory: elm.key
										})
									}}>
									<div className="text-center">
										<img className="img-fluid" src={elm.image} alt={elm.title} />
										<h3 className="mt-4">{elm.title}</h3>
									</div>
								</Card>
							</Col>
						))}
					</Row>
					<Card className="mt-4">
						<Collapse 
							accordion 
							defaultActiveKey={'faq-1-1'} 
							bordered={false}
							expandIcon={({ isActive }) => <RightOutlined className="text-primary" type="right" rotate={isActive ? 90 : 0} />}
						>
							{faqList.filter( elm => elm.id === curentCategory)[0].data.map( elm => (
								<Panel header={elm.title} key={elm.key}>
									<p>{elm.desc}</p>
								</Panel>
							))}
						</Collapse>
				
					</Card>
				</div>
			</>
    	);
	}
}

export default Faq
