/**
 * 漫画 子组件
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';

export default class CartoonCell extends Component {
  // 跳转目录页
  goCatalogPage = (id,title) => {
    Actions.mineCatalogPage({id: id,title: title});
  }

  render() {
    const { row } = this.props;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={()=> this.goCatalogPage(row.id,row.title)}
        style={styles.itemContainer}
      >
        <View style={{width: '100%',height: 170}}>
          <Image
            style={styles.image}
            source={{uri: row.cover}}
            alt=''
          />
          <Text
            // 该属性的值是一个数字，用于规定最多显示多少行，如果超过该数值，则以省略号（...）表示。
            numberOfLines={1}
            style={styles.title}
          >{row.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingLeft: 5,
    paddingRight: 5,
    marginLeft: 0,
    marginRight: 0,
    width: '33.3333333333%',
    height: 170,
    // 从左到右排列
    alignSelf:'flex-start',
    backgroundColor: '#fff'
  },
  image: {
    flex: 1,
    height: 150
  },
  title: {
    textAlign: 'center',
    lineHeight: 20
  }
});