/**
 * 首页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
} from 'react-native';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import ListRow from 'teaset/components/ListRow/ListRow';
import { NewsStore } from '../../../store';
/**
 * toJS 将可观察数据 转换成 普通数据
 * 例如：console.log(toJS(this.store.data.tid));
 */
import { toJS } from 'mobx';
import { BaseContainer, PageListView, RefreshListView } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {
  // 新闻列表
  store = new NewsStore();
   
  // 子组件渲染
  _renderRow(obj) {
    let item = obj.item;
    return (
      <ListRow
        key={item.id}
        title={item.title}
        onPress={() => {
          // 跳转详情页
          Actions.homeDetailPage({detail: item})
        }}
      />
    )
  }

  render() {
    const { data, refreshState, loadData, loadMoreData } = this.store;

    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'首页'}
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