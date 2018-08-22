/**
 * 入口文件
 */
import React, {Component} from 'react';
import { AppNavigator } from './src/AppNav';
import { Provider } from 'mobx-react';
import { BaseAppStore } from './src/store/index';
import { RouteHelper } from 'react-navigation-easy-helper';
// 热更新
// import codePush from 'react-native-code-push';
// 悬浮窗口
// import MoveView from './src/components/MoveView';
import { Platform, StatusBar, Text, TouchableOpacity, View } from 'react-native';
// 极光推送
// import JPushModule from 'jpush-react-native';
import { Toast } from 'teaset';
// 获取汇总后的store
const store = new BaseAppStore();
const needLoginPage = ['UserPage'];

//设置路由拦截器,项目所有跳转方法推荐都用RouteHelper.navigate()
RouteHelper.routeInterceptor = (routeName, params) => {
  if (!store.userStore.isLogin && needLoginPage.indexOf(routeName) !== -1) {
    RouteHelper.navigate('LoginPage', {
      routeName,
      params
    });
    return false;
  }
  console.log(store, params);
  return true
};

// @codePush
export default class App extends Component<Props> {
  // 构造函数
  constructor(props) {
    super(props);
    this.state={
      source:{html:''}
    }
  }

  // componentDidMount() {
  //   if (Platform.OS === 'android') {
  //     StatusBar.setTranslucent(true);
  //     StatusBar.setBackgroundColor('transparent');
  //     JPushModule.notifyJSDidLoad(res => console.log(res));
  //   }
  //   JPushModule.getRegistrationID(registrationId => {
  //     console.log('registrationId', registrationId);
  //     Toast.message(registrationId);
  //   });
  //   this.notificationListener = event => {
  //     console.log('addReceiveNotificationListener', event);
  //     alert(`Notification:${JSON.stringify(event)}`);
  //   };
  //   JPushModule.addReceiveNotificationListener(this.notificationListener);
  //   this.customMsgListener = event => {
  //     console.log('addReceiveCustomMsgListener', event);
  //     alert(`Custom:${JSON.stringify(event)}`);
  //   };
  //   JPushModule.addReceiveCustomMsgListener(this.customMsgListener);
  // }

  // componentWillUnmount() {
  //   JPushModule.removeReceiveCustomMsgListener(this.customMsgListener);
  //   JPushModule.removeReceiveNotificationListener(this.notificationListener);
  // }

  render() {
    return (
      <Provider {...store}>
        <View style={{flex: 1}}>
          <AppNavigator/>
        </View>
      </Provider>
    );
  }
}