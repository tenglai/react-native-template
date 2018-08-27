/**
 * 我的--列表页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { BaseContainer, CartoonCell, RefreshListView } from '../../../components';
import { CartoonStore } from '../../../store/Mine/CartoonStore.js';
// toJS 将可观察数据 转换成 普通数据
import { toJS } from 'mobx';
import { observer } from 'mobx-react';

@observer
export default class MineListPage extends Component {
  // 漫画数据
  store = new CartoonStore();

  state = {
    title: '列表页'
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    let id = this.props.id;
    let title = this.props.title;
    this.setState({
      title: title
    });
    this.store.id = id;
    // 请求数据
    this.store.loadData();
  }

  // 子组件渲染
  _renderRow(obj) {
    let row = obj.item;
    return (
      <CartoonCell row={row} />
    )
  }

  render() {
    const { data, refreshState, loadData, loadMoreData } = this.store;

    return (
      <BaseContainer
        store={this.store}
        leftPress={() => this.props.navigation.goBack()}
        title={this.state.title}
      >
        {/*<ScrollView 
          style={styles.container}
          contentContainerStyle={styles.listViewContent}
        >
          {
            this.store.data && this.store.data.map((item, index) =>
              <CartoonCell key={item.id} row={item} />
            )
          }
        </ScrollView>*/}

        <RefreshListView
          numColumns={'3'}

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
  // container: {
  //   flex: 1,
  // },
  // listViewContent: {
  //   // 横向
  //   flexDirection: 'row',
  //   // 自动换行
  //   flexWrap: 'wrap',
  //   // 子元素 从左到右排列
  //   alignItems: 'flex-start'
  // }
});