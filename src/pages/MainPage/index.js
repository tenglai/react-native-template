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
// 底部导航栏
import TabNavigator from 'react-native-tab-navigator';
// 首页
import HomePage from './HomePage';
// 购物车
import ShopCarPage from './ShopCarPage';
// 我的
import MinePage from './MinePage';
// 图片资源
import { images } from '../../res';
// 检测版本升级
// import { checkNativeUpdate } from '../../utils/UpdateUtils';

const dataSource = [
  {
    icon:images.tabbar_home_normal,
    selectedIcon:images.tabbar_home_selected,
    tabPage:'Home',
    tabName:'首页',
    component:HomePage
  },
  {
    icon:images.tabbar_shopcar_normal,
    selectedIcon:images.tabbar_shopcar_selected,
    tabPage:'ShopCar',
    tabName:'购物车',
    component:ShopCarPage
  },
  {
    icon:images.tabbar_mine_normal,
    selectedIcon:images.tabbar_mine_selected,
    tabPage:'Mine',
    tabName:'我的',
    component:MinePage
  }
];

var navigation = null;

@inject('userStore', 'shopCar')
@observer
export default class MainPage extends Component {

  lastClickTime = 0;

  constructor(props) {
    super(props);
    navigation = this.props.navigation;
    this.state = {
      selectedTab:'Home'
    };
  }

  render() {

    let tabViews = dataSource.map((item,i) => {
      return (
        <TabNavigator.Item
          title={item.tabName}
          selected={this.state.selectedTab===item.tabPage}
          titleStyle={{color:'#999999'}}
          selectedTitleStyle={{color:'#ED5100'}}
          renderIcon={()=><Image style={styles.tabIcon} source={item.icon}/>}
          renderSelectedIcon = {() => <Image style={styles.tabIcon} source={item.selectedIcon}/>}
          tabStyle={{alignSelf:'center'}}
          onPress = {() => {this.setState({selectedTab:item.tabPage})}}
          key={i}
          >
          <item.component navigation={navigation}/>
        </TabNavigator.Item>
      );
    });

    return (
      <View style={styles.container}>
        <TabNavigator
          hidesTabTouch={true}
          >
            {tabViews}
        </TabNavigator>
      </View>
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
  }
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