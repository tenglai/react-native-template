/**
 * 我的
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView
} from 'react-native';
import { BaseContainer, CartoonNavTopCell, CartoonNavCell } from '../../../components';
import { observer } from 'mobx-react';
// 导航数据
import { NAVIGATIONDATA } from './data.js';

@observer
export default class MinePage extends Component {
  render() {
    return (
      <BaseContainer
        store={this.store}
        hideLeft
        title={'我的'}
      >
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.listViewContent}
        >
        {/*顶部导航栏*/}
        {
          NAVIGATIONDATA.nav_top.map((item,index) => 
            <CartoonNavTopCell key={item.id} row={item} />
          )
        }
        
        {/*导航栏*/}
        {
          NAVIGATIONDATA.nav_List.map((item,index) => 
            <CartoonNavCell key={item.id} row={item} />
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
  listViewContent: {
    // 横向
    flexDirection: 'row',
    // 自动换行
    flexWrap: 'wrap',
  }
});