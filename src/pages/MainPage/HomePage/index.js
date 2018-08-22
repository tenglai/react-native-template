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
// toJS 将可观察数据 转换成 普通数据
import { toJS } from 'mobx';
import { BaseContainer } from '../../../components';
import { observer } from 'mobx-react';

@observer
export default class HomePage extends Component {
  // 新闻列表
  store = new NewsStore();

  render() {
    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'首页'}
        // rightTitle={'详情'}
        // rightPress={() => Actions.homeDetailPage()}
      >
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
          <ListRow
            title={'重新刷新'}
            onPress={() => {
              this.store.loadData();
              // 将 观察数据 转换成 普通数据
              console.log(toJS(this.store.data.tid));
            }}
          />
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
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});