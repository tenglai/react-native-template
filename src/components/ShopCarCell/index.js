/**
 * 购物车 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
// 错误图处理
import StateImage from '../StateImage';

export default class HomeCell extends Component {
  // 跳转目录页
  goShopCarDetailPage = (obj) => {
    // 跳转详情页
    Actions.shopCarDetailPage({detail: obj})
  }

  render() {
    const { row } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> this.goShopCarDetailPage(row)}
        style={styles.itemContainer}
      >
        {/*图片*/}
        <StateImage
          style={styles.image}
          url={row.verticalImages}
        />
        {/*文本*/}
        <View style={styles.imageDesc}>
          <Text
            // 该属性的值是一个数字，用于规定最多显示多少行，如果超过该数值，则以省略号（...）表示。
            numberOfLines={1}
            style={styles.title}
          >{row.name}</Text>
          <Text
            // 该属性的值是一个数字，用于规定最多显示多少行，如果超过该数值，则以省略号（...）表示。
            numberOfLines={3}
            style={styles.intro}
          >描述:{row.introduction}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    // height: 100,
    // 从左到右排列
    flexDirection: 'row',
    backgroundColor: '#fff',
    // 边框
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  image: {
    width: 70,
    height: 100,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#000'
  },
  imageDesc: {
    // height: 110
  },
  title: {
    textAlign: 'left',
    lineHeight: 50,
    fontWeight: '900'
  },
  intro: {
    textAlign: 'left',
    width: SCREEN_WIDTH - 90,
  }
});