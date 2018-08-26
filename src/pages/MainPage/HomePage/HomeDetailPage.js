/**
 * 首页--详情页
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
import { BaseContainer,  } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
import { Theme, Drawer, ListRow, Button } from 'teaset';
import { images } from '../../../res';

export default class HomeDetailPage extends Component {
  state = {
    rootTransform: 'none'
  };

  // 显示或隐藏侧边菜单(抽屉)
  toggleMenu(side){
    let { rootTransform } = this.state;
    this.drawer = Drawer.open(this.renderDrawerMenu(), side, rootTransform);
  }

  // 侧边菜单(抽屉)
  renderDrawerMenu(){
    return (
      <View style={{backgroundColor: Theme.defaultColor, width: 260, flex: 1}}>
        <View style={{height: 60}} />
        <ListRow
          icon={
            <View style={{paddingRight: 12}}>
              <Image style={{width: 30, height: 30, tintColor: Theme.primaryColor}} source={images.error} />
            </View>
          }
          title='User name'
          />
        <ListRow
          icon={images.error}
          title='Home'
          />
        <ListRow
          icon={images.error}
          title='Store'
          bottomSeparator='none'
          />
        <View style={{flex: 1}} />
        <Button type='link' size='sm' title='Hide' onPress={() => this.drawer && this.drawer.close()} />
      </View>
    );
  }

  render() {
    const { detail } = this.props.navigation.state.params;

    return (
      <BaseContainer
        leftPress={() => this.props.navigation.goBack()}
        title={'详情页'}
        rightView={<Icon name='md-home' size={30} onPress={() => this.toggleMenu('left')} />}
      >
        <ScrollView style={styles.container}>
          <ImageBackground
            style={styles.image}
            source={{uri: detail.cover_image_url}}
            resizeMode='cover'
          >
            <Text style={styles.title}>{detail.title}</Text>
          </ImageBackground>
          <Text>描述:{detail.description}</Text>
          <Text>作者:{detail.user.nickname}</Text>
          <Text>更新:{detail.update_day}</Text>
          <Text>喜欢:{detail.likes_count}</Text>
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