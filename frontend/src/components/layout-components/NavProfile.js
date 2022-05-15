import React from "react";
import { Menu, Dropdown, Avatar } from "antd";
import { Link } from "react-router-dom"
import { connect } from 'react-redux'
import { 
  EditOutlined, 
  SettingOutlined,
  LogoutOutlined,
  UserOutlined
} from '@ant-design/icons';
import Icon from 'components/util-components/Icon';
import { signOut } from 'redux/actions/Auth';
import UserService from "services/UserService";

const menuItem = [    
    {
		title: "Setting",
		icon: SettingOutlined,
		path: "/setting"
    }
]

export const NavProfile = ({signOut}) => {
  const user = UserService.getCurrentUser();

  const profileMenu = (
    <div className="nav-profile nav-dropdown">
      <div className="nav-profile-header">
        <div className="d-flex">
          <div className="pl-3">
            <h4 className="mb-0">{user?.nickname}</h4>
            <span className="text-muted">{user?.email}</span>
          </div>
        </div>
      </div>
      <div className="nav-profile-body">
        <Menu>
          {menuItem.map((el, i) => {
            return (
              <Menu.Item key={i}>
                <Link to={el.path}>
                  <Icon type={el.icon} />
                  <span className="font-weight-normal">{el.title}</span>
                </Link>
              </Menu.Item>
            );
          })}
          <Menu.Item key={menuItem.length + 1} onClick={e => signOut()}>
            <span>
              <LogoutOutlined />
              <span className="font-weight-normal">Sign Out</span>
            </span>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
  return (
    <Dropdown placement="bottomRight" overlay={profileMenu} trigger={["click"]}>
      <Menu className="d-flex align-item-center" mode="horizontal">
        <Menu.Item key="profile">
          <Avatar src={ user?.avatar } icon={<UserOutlined />}/>
        </Menu.Item>
      </Menu>
    </Dropdown>
  );
}

export default connect(null, {signOut})(NavProfile)