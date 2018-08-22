/**
 * 启动页
 */
import React, { Component } from 'react';
import {
  ScrollView,
  AsyncStorage,
  NativeModules
} from 'react-native'
import { ListRow } from 'teaset';
import SplashScreen from 'react-native-splash-screen';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
// 主体布局
import { BaseContainer } from '../../components';
// 常数(常量)
import Config from '../../base/Constant';

export default class LaunchPage extends Component {

  componentDidMount() {
    //当启动页完全渲染完毕后隐藏白屏占位图
    SplashScreen.hide();
  }

  componentDidFocus() {
    console.log('componentDidFocus', arguments, this.props)
  }

  componentWillBlur() {
    console.log('componentWillBlur', arguments)
  }

  launchApp = async () => {
    let notFirstOpen = await AsyncStorage.getItem('notFirstOpen');
    if (notFirstOpen) {
      Actions.mainPage();
    } else {
      AsyncStorage.setItem('notFirstOpen', 'true');
      Actions.guidePage();
    }
  };

  render() {
    return (
      <BaseContainer store={this.store} hideLeft title={Config.TEST_TITLE}>
        <ScrollView style={{flex: 1}}>
          <ListRow title={'Teaset Example'} onPress={() => {
            Actions.teasetApp()
          }}/>

          <ListRow title={'打开正常App'} onPress={this.launchApp}/>
        </ScrollView>
      </BaseContainer>
    );
  }
}