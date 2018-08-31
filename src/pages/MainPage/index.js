/**
 * 主页面
 */
import React, {Component} from 'react';
import {
  BackHandler, // 物理返回键
  View,
  ToastAndroid,
  Image,
  StyleSheet
} from 'react-native';
/**
 * @inject 注入需要的store
 * @observer 修饰react组件类
 */
import { inject, observer } from 'mobx-react';
import { RouteHelper } from 'react-navigation-easy-helper';
import { Button } from 'teaset';
import ScrollableTabView from 'react-native-scrollable-tab-view';
// 自定义选项卡
import { CustomTabBar } from '../../components';
// 首页
import HomePage from './HomePage';
// 购物车
import ShopCarPage from './ShopCarPage';
// 我的
import MinePage from './MinePage';
// 检测版本升级
// import { checkNativeUpdate } from '../../utils/UpdateUtils';

@inject('userStore', 'shopCar')
@observer
export default class MainPage extends Component {

  lastClickTime = 0;

  constructor(props) {
    super(props);
  }

  render() {
    let tabNames = ['首页', '购物车', '我的'];

    return (
      <ScrollableTabView
        initialPage={0} //初始tab索引
        renderTabBar={() =>
          <CustomTabBar
            tabNames={tabNames} //tab名称
            placeMiddle={false} //中间是否占位，即中间是否需要用特殊按钮样式等
          />
        }
        tabBarPosition='bottom'
      >
        <HomePage key='homePage' tabLabel='home' />

        <ShopCarPage key='ShopCarPage' tabLabel='shopCar' />

        <MinePage key='minePage' tabLabel='mine' />
      </ScrollableTabView>
    );
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackHander);
    // checkNativeUpdate()
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackHander)
  }

  // 物理返回按钮监听事件
  onBackHander = () => {
    if (RouteHelper.routeStack.length === 1 && Date.now() - this.lastClickTime >= 2000) {
      ToastAndroid.show('再按一次退出', ToastAndroid.LONG);
      this.lastClickTime = Date.now();
      return true;
    }
    return false;
  }; 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  tabIcon:{
    width:23,
    height:23,
  }
});