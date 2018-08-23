/**
 * 首页--详情页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
} from 'react-native';
import { BaseContainer } from '../../../components';
import { CartoonStore } from '../../../store/Mine/CartoonStore.js';
import { observer } from 'mobx-react';
import { images } from '../../../res';

@observer
export default class MineDetailPage extends Component {
  // 漫画数据
  store = new CartoonStore();

  state = {
    title: '详情页'
  };

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 获取路由传参
    let detail = this.props.detail;
    this.setState({
      title: detail.titleText
    });
    // 请求数据
    this.store.loadBookDetail(detail.bookId,detail.sectionId);
  }

  render() {
    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={this.state.title}
      >
        <ScrollView style={styles.container}>
          {
            this.store.data && this.store.data.map((item, index) =>
              <ImageBackground
                key={item.bookId}
                style={{width:SCREEN_WIDTH,height:SCREEN_WIDTH / item.bookImageWidth * item.bookImageHeight}}
                source={images.default_loading}
                resizeMode='cover'
              >
                <Image
                  style={{width:SCREEN_WIDTH,height:SCREEN_WIDTH / item.bookImageWidth * item.bookImageHeight}}
                  source={{uri: item.url}}
                  alt=''
                />
              </ImageBackground>
            )
          }
        </ScrollView>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // image: {
  //   width: '100%',
  //   height: '100%'
  // }
});