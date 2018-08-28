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
    console.log(detail);

    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
      >
        <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={{uri: detail.verticalImages}}
            resizeMode='cover'
          >
            <Text style={styles.title}>{detail.name}</Text>
          </ImageBackground>
          <Text>描述:{detail.introduction}</Text>
          <Text>作者:{detail.authorName}</Text>
          <Text>更新:{detail.updateValueLabel}</Text>
          <Text>总数:{detail.chapterUpdateInfo}</Text>
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
    width: SCREEN_WIDTH,
    height: 200
  },
  title: {
    fontWeight: '900',
    position: 'absolute',
    left: 10,
    bottom: 10,
    color: '#fff'
  }
});