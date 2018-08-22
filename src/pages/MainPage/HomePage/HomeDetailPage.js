/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';
// import { RouteHelper } from 'react-navigation-easy-helper';

export default class HomeDetailPage extends Component {
  state = {
    detail: ''
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 获取路由传参
    let detail = this.props.navigation.state.params.detail;
    this.setState({
      detail
    });
  }

  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <Text>{JSON.stringify(this.state.detail)}</Text>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});