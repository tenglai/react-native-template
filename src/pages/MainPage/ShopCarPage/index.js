/**
 * 购物车
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { BaseContainer, StateImage } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标

export default class ShopCarPage extends Component {
  // 构造函数
  constructor(props) {
    super(props);
    this.images = [
      'http://img.taopic.com/uploads/allimg/140804/240388-140P40P33417.jpg',
      'http://pic36.photophoto.cn/20150711/0036036878851215_b.jpg',
      'http://pic36.photophoto.cn/20150711/0036036878851215_b这是错误图片.jpg',
      'http://f9.topitme.com/9/37/30/11224703137bb30379o.jpg',
      'http://fd.topitme.com/d/a8/1d/11315383988791da8do.jpg'
    ];
    this.state = {
      url: 'http://fd.topitme.com/d/a8/1d/11315383988791da8do错误.jpg'
    }
  }

  render() {
    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
      >
        <Icon name='md-home' size={30} color='blue' />
        <Button
          title='切换'
          onPress={() =>
            this.setState({
              url: 'http://pic10.nipic.com/20101001/2531170_011837344719_2.jpg'
            })
          }
        />

        <ScrollView style={{flex: 1}}>
          <StateImage url={this.state.url} style={styles.image} />
          {
            this.images.map(item => 
              <StateImage key={item} url={item} style={styles.image} />
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
  image: {
    width: 100,
    height: 100
  }
});