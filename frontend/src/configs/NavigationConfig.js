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
      key: 'extra-pages-list',
      path: `${APP_PREFIX_PATH}/users`,
      title: 'sidenav.pages.userlist',
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
      key: 'dashboards-default',
      path: `${APP_PREFIX_PATH}/home`,
      title: 'sidenav.dashboard.default',
      icon: DashboardOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'extra-pages-setting',
      path: `${APP_PREFIX_PATH}/setting`,
      title: 'sidenav.pages.setting',
      icon: SettingOutlined,
      breadcrumb: true,
      submenu: []
    },
    {
      key: 'components-charts-apex',
      path: `${APP_PREFIX_PATH}/chart`,
      title: 'sidenav.charts.apex',
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
