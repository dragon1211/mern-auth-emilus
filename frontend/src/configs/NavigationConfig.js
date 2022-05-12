import { 
  DashboardOutlined, 
  AppstoreOutlined,
  PieChartOutlined,
  FundOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from 'configs/AppConfig'


const dashBoardNavTree = [{
  key: 'dashboards',
  path: `${APP_PREFIX_PATH}`,
  title: 'sidenav.dashboard',
  icon: DashboardOutlined,
  breadcrumb: false,
  submenu: [
    {
      key: 'dashboard-user-list',
      path: `${APP_PREFIX_PATH}/users`,
      title: 'sidenav.dashboard.userlist',
      icon: UserOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]

const appsNavTree = [{
  key: 'apps',
  path: `${APP_PREFIX_PATH}`,
  title: 'sidenav.apps',
  icon: AppstoreOutlined,
  breadcrumb: true,
  submenu: [
  
    {
      key: 'apps-home',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'home',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-setting',
      path: `${APP_PREFIX_PATH}/setting`,
      title: 'sidenav.apps.setting',
      icon: SettingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'apps-chart',
      path: `${APP_PREFIX_PATH}/chart`,
      title: 'sidenav.apps.chart',
      icon: PieChartOutlined,
      breadcrumb: true,
      submenu: []
    },
  ]
}]



const navigationConfig = [
  ...dashBoardNavTree,
  ...appsNavTree,
]

export default navigationConfig;
