/**
 * 漫画 子组件
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
          <ImageBackground
            style={styles.image}
            source={images.default_background}
            resizeMode='contain'
          >
            <Image
              style={styles.image}
              source={{uri: row.cover}}
              resizeMode='contain'
            />
          </ImageBackground>
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
    paddingTop: 5,
    marginLeft: 0,
    marginRight: 0,
    width: '33.3333333333%',
    height: 175,
    // 从左到右排列
    alignSelf:'flex-start',
    backgroundColor: '#fff',
    borderRightColor: '#e0e0e0',
    borderRightWidth: 1
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