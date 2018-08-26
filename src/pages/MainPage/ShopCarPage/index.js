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
import { NewsStore } from '../../../store';
/**
 * toJS 将可观察数据 转换成 普通数据
 * 例如：console.log(toJS(this.store.data.tid));
 */
import { toJS } from 'mobx';
import { BaseContainer, PageListView, RefreshListView, HomeCell } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class ShopCarPage extends Component {
  // 新闻列表
  store = new NewsStore();

  // 子组件渲染
  _renderRow(obj) {
    let row = obj.item;
    return (
      <HomeCell row={row} />
    )
  }

  render() {
    const { data, refreshState, loadData, loadMoreData } = this.store;
    console.log('购物车',toJS(data).length);

    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
      >
        <RefreshListView
          data={toJS(data)}
          keyExtractor={(item,index) => index.toString()}
          renderItem={this._renderRow.bind(this)}

          refreshState={refreshState}
          onHeaderRefresh={loadData.bind(this.store)}
          onFooterRefresh={loadMoreData.bind(this.store)}
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