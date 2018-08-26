/**
 * 首页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { NewsStore } from '../../../store';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标
import { Theme, Drawer, ListRow, Button } from 'teaset';
import { images } from '../../../res';
/**
 * toJS 将可观察数据 转换成 普通数据
 * 例如：console.log(toJS(this.store.data.tid));
 */
import { toJS } from 'mobx';
import { BaseContainer, PageListView, RefreshListView, HomeCell } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {
  // 新闻列表
  store = new NewsStore();

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
   
  // 子组件渲染
  _renderRow(obj) {
    let row = obj.item;
    return (
      <HomeCell row={row} />
    )
  }

  render() {
    const { data, refreshState, loadData, loadMoreData } = this.store;

    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'首页'}
        rightView={<Icon name='md-home' size={30} onPress={() => this.toggleMenu('left')} />}
      >
        {/*<PageListView
          pageLen={20}
          renderRow={this._renderRow.bind(this)}
          refresh={loadData.bind(this.store)}
          loadMore={loadMoreData.bind(this.store)}
        />*/}

        <RefreshListView
          data={toJS(data)}
          keyExtractor={(item,index) => index.toString()}
          renderItem={this._renderRow.bind(this)}

          refreshState={refreshState}
          onHeaderRefresh={loadData.bind(this.store)}
          onFooterRefresh={loadMoreData.bind(this.store)}
        />
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});