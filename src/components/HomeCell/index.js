/**
 * 首页 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// 引入路由
import { RouteHelper } from 'react-navigation-easy-helper';
// 错误图处理
import StateImage from '../StateImage';

export default class HomeCell extends Component {
  // 跳转目录页
  goHomeDetailPage = (obj) => {
    // 跳转详情页
    RouteHelper.navigate('HomeDetailPage',{detail: obj});
  }

  render() {
    const { row } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> this.goHomeDetailPage(row)}
        style={styles.itemContainer}
      >
        {/*图片*/}
        <StateImage
          style={styles.image}
          url={row.cover_image_url}
        />
        {/*文本*/}
        <View style={styles.imageDesc}>
          <Text
            // 该属性的值是一个数字，用于规定最多显示多少行，如果超过该数值，则以省略号（...）表示。
            numberOfLines={1}
            style={styles.title}
          >{row.title}</Text>
          <Text
            // 该属性的值是一个数字，用于规定最多显示多少行，如果超过该数值，则以省略号（...）表示。
            numberOfLines={1}
            style={styles.update}
          >{row.update_day}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    width: SCREEN_WIDTH,
    height: 100,
    // 从左到右排列
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  image: {
    width: 150,
    height: 80,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: '#000'
  },
  imageDesc: {
    height: 100
  },
  title: {
    textAlign: 'left',
    lineHeight: 50,
    fontWeight: '900'
  },
  update: {
    textAlign: 'left',
  }
});