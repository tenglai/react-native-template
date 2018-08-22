/**
 * 我的--目录页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { BaseContainer } from '../../../components';
import ListRow from 'teaset/components/ListRow/ListRow';
import { CartoonStore } from '../../../store/Mine/CartoonStore.js';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import { observer } from 'mobx-react';

@observer
export default class MineCatalogPage extends Component {
  // 漫画数据
  store = new CartoonStore();

  state = {
    title: '详情页'
  }

  // 生命周期--组件加载完毕
  componentDidMount(){
    // 接收路由传参
    let id = this.props.id;
    let title = this.props.title;
    this.setState({
      title
    });
    // 请求数据
    this.store.loadBookCatalog(id);
  }

  render() {
    return (
      <BaseContainer
        store={this.store}
        leftPress={() => this.props.navigation.goBack()}
        title={this.state.title}
      >
        <ScrollView style={styles.container}>
          {
            this.store.data && this.store.data.map((item, index) =>
              <ListRow
                key={item.bookId}
                title={item.title}
                onPress={() => {
                  // 跳转详情页
                  Actions.mineDetailPage({detail: item});
                }}
              />
            )
          }
        </ScrollView>
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});