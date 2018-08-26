/**
 * 导航配置
 */
import React, { Component } from 'react';
// Router 路由
// Scene 场景(视图)
import { Router, Scene } from 'react-native-router-flux';
// 引导页
import GuidePage from './pages/GuidePage';
// 启动页
import LaunchPage from './pages/LaunchPage';
// 登录页
import LoginPage from './pages/LoginPage';
// 主页面
import MainPage from './pages/MainPage';
// 首页
import HomePage from './pages/MainPage/HomePage';
// 首页--详情页
import HomeDetailPage from './pages/MainPage/HomePage/HomeDetailPage';
// 购物车
import ShopCarPage from './pages/MainPage/ShopCarPage';
// 我的
import MinePage from './pages/MainPage/MinePage';
// 我的--列表页
import MineListPage from './pages/MainPage/MinePage/MineListPage';
// 我的--目录页
import MineCatalogPage from './pages/MainPage/MinePage/MineCatalogPage';
// 我的--详情页
import MineDetailPage from './pages/MainPage/MinePage/MineDetailPage';
// 测试页
import TeasetApp from '../node_modules/teaset/example/App';

export const AppNavigator = () => {
  return (
    <Router>
      {/* 这种写法是将全部的跳转页面都放在Root下面 */}
      <Scene key="root">
        {/* key 就是给页面的标签,供Actions使用 */}
        {/* component 设置关联的页面 */}
        {/* title 就是给页面标题 */}
        {/* initial 就是设置默认页面 */}
        {/* 引导页 */}
        <Scene
          key="guidePage"
          component={GuidePage}
          hideNavBar={true}
        />
        {/* 启动页 */}
        <Scene
          key="launchPage"
          component={LaunchPage}
          hideNavBar={true}
        />
        {/* 登录页 */}
        <Scene
          key="loginPage"
          component={LoginPage}
          hideNavBar={true}
        />
        {/* 主页面 */}
        <Scene
          key="mainPage"
          component={MainPage}
          hideNavBar={true}
          initial={true}
        >
          {/* 首页 */}
          <Scene
            key="homePage"
            component={HomePage}
            hideNavBar={true}
          />
          {/* 购物车 */}
          <Scene
            key="shopCarPage"
            component={ShopCarPage}
            hideNavBar={true}
          />
          {/* 我的 */}
          <Scene
            key="minePage"
            component={MinePage}
            hideNavBar={true}
          />
        </Scene>
        {/* 首页--详情页 */}
        <Scene
          key="homeDetailPage"
          component={HomeDetailPage}
          hideNavBar={true}
        />
        {/* 我的--列表页 */}
        <Scene
          key="mineListPage"
          component={MineListPage}
          hideNavBar={true}
        />
        {/* 我的--目录页 */}
        <Scene
          key="mineCatalogPage"
          component={MineCatalogPage}
          hideNavBar={true}
        />
        {/* 我的--详情页 */}
        <Scene
          key="mineDetailPage"
          component={MineDetailPage}
          hideNavBar={true}
        />
        {/* demo页 */}
        <Scene
          key="teasetApp"
          component={TeasetApp}
          hideNavBar={true}
        />
      </Scene>
    </Router>
  );
}