/**
 * 漫画导航 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import { images } from '../../res';

export default class CartoonNavCell extends Component {
  // 跳转列表页
  goListPage = (id,title) => {
    // 路由跳转传参
    Actions.mineListPage({id: id, title: title});
  }

  render() {
    const { row } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> this.goListPage(row.id,row.title)}
        style={styles.itemContainer}
      >
        <View style={{width: '100%',height: 170}}>
          <Text
            numberOfLines={1}
            style={styles.title}
          >{row.title}</Text>
          <Text
            numberOfLines={1}
            style={styles.des}
          >{row.des ? row.des : ' '}</Text>
          <ImageBackground
            style={styles.image}
            source={images.default_nav}
            resizeMode='contain'
          >
            <Image
              style={[styles.image]}
              source={{uri: row.url}}
              resizeMode='contain'
              alt=''
            />
          </ImageBackground>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    width: '33.3333333333%',
    height: 150,
    // 从左到右排列
    alignSelf:'flex-start',
    backgroundColor: '#fff',
    // 边框
    borderStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: '#eee',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  title: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 16,
    color: '#000'
  },
  des: {
    textAlign: 'center',
    lineHeight: 20,
    fontSize: 12,
    color: '#666'
  },
  image: {
    width: '100%',
    height: 80
  }
});