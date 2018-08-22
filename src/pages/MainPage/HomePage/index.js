/**
 * 首页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
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
import { BaseContainer, PageListView } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {
  // 新闻列表
  store = new NewsStore();

  // 下拉刷新
  _refresh(callBack){
    let arr = this.store.loadData();
    callBack(arr);
  }
   
  // 上拉加载更多
  _loadMore(page,callBack){
    let arr = this.store.loadMoreData();
    callBack(arr);
  }
   
  // 子组件渲染
  _renderRow(item) {
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
    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'首页'}
      >
        <ScrollView style={styles.container}>
          {
            this.store.data.tid && this.store.data.tid.map((item, index) =>
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
        </ScrollView>

        {/*<PageListView
          pageLen={10}
          renderRow={this._renderRow.bind(this)}
          refresh={this._refresh.bind(this)}
          loadMore={this._loadMore.bind(this)}
        />*/}
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});