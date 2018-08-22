/**
 * 引导页
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  StyleSheet
} from 'react-native';
import { Carousel, Button } from 'teaset';
import { observer } from 'mobx-react';
import { action, observable } from 'mobx';
import { RouteHelper } from 'react-navigation-easy-helper';
// 主题
import { Theme } from '../../store';
// 图片资源
import { images } from '../../res';

@observer
export default class GuidePage extends Component {

  static navigationOptions = {
    header: null
  };

  //引导页数据,替换成项目图片
  list = [images.swiper_1, images.swiper_2,images.swiper_3];

  @observable isShow = false;

  @action setShow(show) {
    this.isShow = show
  }

  render() {
    return (
      <View style={styles.container}>
        <Carousel
          control={
            <Carousel.Control
              style={styles.controlContainer}
              dot={<Text style={[styles.control, {color: Theme.baseColor,}]}>□</Text>}
              activeDot={<Text style={[styles.control, {color: Theme.baseColor,}]}>■</Text>}
            />
          }
          cycle={false}
          carousel={false}
          style={styles.container}
          onChange={(index, total) => {
            this.setShow(index === total - 1);
          }}>
          {
            this.list.map(item =>
              <Image
                key={item}
                style={styles.image}
                source={item}
              />
            )
          }
        </Carousel>
        {
          this.isShow 
          ? 
          <Button
            style={{
              position: 'absolute',
              backgroundColor: Theme.baseColor,
              top: SCREEN_HEIGHT - 60,
              width: 120,
              alignSelf: 'center',
              height: 35,
              borderColor: Theme.baseColor
            }}
            title={'立即体验'}
            titleStyle={{color: 'white'}}
            onPress={() => {
              RouteHelper.navigate('MainPage')
            }}
          /> 
          :
          null
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  controlContainer: {
    alignItems: 'center'
  },
  control: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    padding: 4
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT
  }
});