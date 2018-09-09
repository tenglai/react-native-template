/**
 * 购物车--详情页
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

export default class ShopCarDetailPage extends Component {
  render() {
    const { detail } = this.props;

    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <ScrollView style={styles.container}>
          <View style={styles.headerContent}>
            <ImageBackground
              style={styles.image}
              source={{uri: detail.verticalImages}}
              resizeMode='cover'
            >
              <Text
                style={styles.title}
                numberOfLines={1}
              >{detail.name}</Text>
            </ImageBackground>
            <View style={styles.desc}>
              <Text style={styles.descItem}>作者:{detail.authorName}</Text>
              <Text style={styles.descItem}>更新:{detail.updateValueLabel}</Text>
              <Text style={styles.descItem}>总数:{detail.chapterUpdateInfo}</Text>
            </View>
          </View>
          <Text style={styles.intro}>描述:{detail.introduction}</Text>
        </ScrollView>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff'
  },
  headerContent: {
    width: SCREEN_WIDTH,
    // 从左到右排列
    flexDirection: 'row',
  },
  image: {
    width: 140,
    height: 200,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10
  },
  title: {
    width: 130,
    fontWeight: '900',
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: '#fff'
  },
  desc: {
    width: SCREEN_WIDTH - 160,
    marginTop: 30,
  },
  descItem: {
    lineHeight: 30,
    fontWeight: '900'
  },
  intro: {
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10
  }
});