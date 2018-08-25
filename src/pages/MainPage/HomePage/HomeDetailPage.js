/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { BaseContainer } from '../../../components';

export default class HomeDetailPage extends Component {
  state = {
    detail: ''
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 获取路由传参
    // let detail = this.props.detail;
    // this.setState({
    //   detail
    // });
  }

  render() {
    const { detail } = this.props;

    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={{uri: detail.cover_image_url}}
            resizeMode='cover'
          >
            <Text style={styles.title}>{detail.title}</Text>
          </ImageBackground>
          <Text>描述:{detail.description}</Text>
          <Text>作者:{detail.user.nickname}</Text>
          <Text>更新:{detail.update_day}</Text>
          <Text>喜欢:{detail.likes_count}</Text>
        </ScrollView>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: SCREEN_WIDTH,
    height: 200
  },
  title: {
    fontWeight: '900',
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: '#fff'
  }
});