/** @format */

import {AppRegistry} from 'react-native';
// 配置文件
import './src/base/Config';
// 全局变量
import './src/base/Global';
// 启动页
import SplashScreen from 'react-native-splash-screen';
// 关闭启动页
SplashScreen.hide();

import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
