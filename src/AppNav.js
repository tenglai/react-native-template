/**
 * 导航页
 */
import { createStackNavigator } from 'react-navigation';
import { configRoute } from 'react-navigation-easy-helper';
// 引导页
import GuidePage from './pages/GuidePage';
// 启动页
import LaunchPage from './pages/LaunchPage';
// 登录页
import LoginPage from './pages/LoginPage';
// 主页面
import MainPage from './pages/MainPage';
// 首页--详情页
import HomeDetailPage from './pages/MainPage/HomePage/HomeDetailPage';
// 我的--列表页
import MineListPage from './pages/MainPage/MinePage/MineListPage';
// 我的--目录页
import MineCatalogPage from './pages/MainPage/MinePage/MineCatalogPage';
// 我的--详情页
import MineDetailPage from './pages/MainPage/MinePage/MineDetailPage';
// 测试页
import TeasetApp from '../node_modules/teaset/example/App';

export const AppNavigator = createStackNavigator (
  configRoute({
    GuidePage: {screen: GuidePage}, // 引导页
    LaunchPage: {screen: LaunchPage}, // 启动页
    LoginPage: {screen: LoginPage}, // 登录页
    MainPage: {screen: MainPage}, // 主页面
    HomeDetailPage: {screen: HomeDetailPage}, // 首页--详情页
    MineListPage: {screen: MineListPage}, // 我的--列表页
    MineCatalogPage: {screen: MineCatalogPage}, // 我的--目录页
    MineDetailPage: {screen: MineDetailPage}, // 我的--详情页
    TeasetApp: {
      screen: TeasetApp, navigationOptions: {
        header: null
      }
    },
  }), {
    initialRouteName: 'LoginPage', // 默认启动页
    navigationOptions: {
      header: null
    }
  }
);