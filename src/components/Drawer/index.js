/**
 * 抽屉视图
 */
import React, { Component } from 'react';
import {
  Button,
  Text,
  SafeAreaView
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Drawer extends Component {
  render() {
    return (
      // SafeAreaView 适配 iPhoneX 的 会自动添加安全区域 可以试试换成View 然后在模拟器或者真机下跑 内容会占据顶部状态栏 加了则会自动加上边距 把内容顶下来
      <SafeAreaView style={{flex: 1}}>
        <Text>
          Drawer 容器
        </Text>
        <Text>
          可以通过 redux 来定制内部的内容 实现淘宝的侧边栏分类动态更换
        </Text>
        <Text>
          有时间我会抽离我自己写的 通过 Redux 控制内容的 demo
        </Text>
        {/*在Drawer内关闭自己*/}
        <Button onPress={() => {
          Actions.drawerClose()
        }} title={'Close me'}/>
      </SafeAreaView>
    )
  }
}