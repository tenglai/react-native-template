/**
 * 主体布局
 */
import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
// 加载视图
import { LoadingView } from '../LoadingView';
// 错误视图
import { ErrorView } from '../ErrorView';
// 导航视图
import NavBar from '../NavBar';

@observer
export default class BaseContainer extends Component {
  static propTypes = {
    store: PropTypes.object, // 数据
    onErrorPress: PropTypes.func, // 错误的点击事件
    navBar: PropTypes.element, // 导航栏

    title: PropTypes.string, // 中间标题
    hideLeft: PropTypes.bool, // 隐藏/显示左侧
    leftPress: PropTypes.func, // 左侧点击事件
    leftTitle: PropTypes.string, // 左侧标题
    leftView: PropTypes.element, // 左侧视图
    leftIcon: PropTypes.any, // 左侧图标
    hideRight: PropTypes.bool, // 隐藏/显示右侧
    rightPress: PropTypes.func, // 右侧点击事件
    rightView: PropTypes.element, // 右侧视图
    rightIcon: PropTypes.any, // 右侧图标
    rightTitle: PropTypes.string, // 右侧标题
    hasShadow: PropTypes.bool // 是否有阴影
  };

  defaultPress = () => {
    const {store} = this.props;
    store.loadData()
  };

  renderContent() {
    const {store, children, onErrorPress} = this.props;
    if (!store) return children;
    const {isLoading, isError} = store;
    if (isLoading) return <LoadingView/>;
    if (isError) return <ErrorView onPress={onErrorPress || this.defaultPress}/>;
    return children;
  }

  renderNavView() {
    const {navBar, ...navProps} = this.props;
    let navView = null;
    if (typeof navBar === 'undefined') {
      navView = <NavBar {...navProps}/>
    } else {
      navView = navBar;
    }
    return navView
  }

  render() {
    return <View style={styles.container}>
      {this.renderNavView()}
      {this.renderContent()}
    </View>
  }
}
const styles = StyleSheet.create({
  container: {flex: 1}
});