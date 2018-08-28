/**
 * 购物车
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from 'react-native';
import { MaiMengComicStore } from '../../../store';
/**
 * toJS 将可观察数据 转换成 普通数据
 * 例如：console.log(toJS(this.store.data.tid));
 */
import { toJS } from 'mobx';
import { BaseContainer, PageListView, ShopCarCell } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class ShopCarPage extends Component {
  // 新闻列表
  store = new MaiMengComicStore();

  // 子组件渲染
  _renderRow(row) {
    return (
      <ShopCarCell row={row} />
    )
  }

  render() {
    const { loadData, loadMoreData } = this.store;

    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
      >
        <PageListView
          pageLen={10}
          renderRow={this._renderRow.bind(this)}
          refresh={loadData.bind(this.store)}
          loadMore={loadMoreData.bind(this.store)}
        />
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100
  }
});