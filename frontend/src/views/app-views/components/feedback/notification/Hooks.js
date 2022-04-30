import React, { Component } from 'react'
import { Button, notification, Divider } from 'antd';
import {
  RadiusUpleftOutlined,
  RadiusUprightOutlined,
  RadiusBottomleftOutlined,
  RadiusBottomrightOutlined,
} from '@ant-design/icons';

const Context = React.createContext({ name: 'Default' });

const Demo = () => {
  const [api, contextHolder] = notification.useNotification();

  const openNotification = placement => {
    api.info({
      message: `Notification ${placement}`,
      description: <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>,
      placement,
    });
  };

  return (
    <Context.Provider value={{ name: 'Ant Design' }}>
      {contextHolder}
      <Button className="mr-2" type="primary" onClick={() => openNotification('topLeft')}>
        <RadiusUpleftOutlined />
        topLeft
      </Button>
      <Button className="mr-2" type="primary" onClick={() => openNotification('topRight')}>
        <RadiusUprightOutlined />
        topRight
      </Button>
      <Divider />
      <Button className="mr-2" type="primary" onClick={() => openNotification('bottomLeft')}>
        <RadiusBottomleftOutlined />
        bottomLeft
      </Button>
      <Button className="mr-2" type="primary" onClick={() => openNotification('bottomRight')}>
        <RadiusBottomrightOutlined />
        bottomRight
      </Button>
    </Context.Provider>
  );
};

export class Hooks extends Component {
	render() {
		return (
			<Demo />
		)
	}
}

export default Hooks
