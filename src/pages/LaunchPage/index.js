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
import { RouteHelper } from 'react-navigation-easy-helper';
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
      RouteHelper.navigate('MainPage')
    } else {
      AsyncStorage.setItem('notFirstOpen', 'true');
      RouteHelper.replace('GuidePage')
    }
  };

  render() {
    return (
      <BaseContainer store={this.store} hideLeft title={Config.TEST_TITLE}>
        <ScrollView style={{flex: 1}}>
          <ListRow title={'Teaset Example'} onPress={() => {
            RouteHelper.navigate('TeasetApp')
          }}/>

          <ListRow title={'打开正常App'} onPress={this.launchApp}/>
        </ScrollView>
      </BaseContainer>
    );
  }
}