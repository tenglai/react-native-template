/**
 * 漫画顶部导航 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// 引入路由
import { RouteHelper } from 'react-navigation-easy-helper';

export default class CartoonNavTopCell extends Component {
  // 跳转列表页
  goListPage = (id,title) => {
    // RouteHelper.navigate('MineDetailPage',{id: id});
    RouteHelper.navigate('MineListPage',{id: id,title: title});
  }

  render() {
    const { row } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> this.goListPage(row.id,row.title)}
        style={styles.itemContainer}
      >
        <ImageBackground
          style={styles.image}
          source={{uri: row.url}}
          alt=''
        >
          <Text style={styles.title}>{row.title}</Text>
        </ImageBackground>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 5,
    paddingBottom: 5,
    width: '50%',
    height: 80,
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
  image: {
    flex: 1,
    height: 80
  },
  title: {
    position: 'absolute',
    top: '50%',
    left: 9,
    marginTop: -26,
    fontSize: 22,
    color: '#fff',
    fontWeight: 'bold',
  }
});