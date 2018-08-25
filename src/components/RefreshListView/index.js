/**
 * 下拉刷新/上拉加载更多 组件(RefreshListView)
 */
import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  ViewPropTypes,
  RefreshControl
} from 'react-native'

const RefreshState = {
  Idle: 0,
  HeaderRefreshing: 1,
  FooterRefreshing: 2,
  NoMoreData: 3,
  Failure: 4,
  EmptyData: 5,
}

class RefreshListView extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
    renderItem: PropTypes.func.isRequired,
    refreshState: PropTypes.number.isRequired,

    listRef: PropTypes.node,
    onHeaderRefresh: PropTypes.func,
    footerContainerStyle: ViewPropTypes.style,
    footerTextStyle: ViewPropTypes.style,

    disabledSeparator: PropTypes.bool,
    disabledHeaderRefresh: PropTypes.bool,
    footerRefreshingText: PropTypes.string,
    footerFailureText: PropTypes.string,
    footerNoMoreDataText: PropTypes.string,
    footerEmptyDataText: PropTypes.string,

    ListEmptyComponent: PropTypes.node,
    footerRefreshingComponent: PropTypes.node,
    footerFailureComponent: PropTypes.node,
    footerNoMoreDataComponent: PropTypes.node,
    footerEmptyDataComponent: PropTypes.node,
  }

  static defaultProps = {
    disabledHeaderRefresh: false,
    footerRefreshingText: '数据加载中…',
    footerFailureText: '点击重新加载',
    footerNoMoreDataText: '已加载全部数据',
    footerEmptyDataText: '暂时没有相关数据',
  }

  componentWillReceiveProps(nextProps) {}

  componentDidUpdate(prevProps, prevState) {}

  onHeaderRefresh = () => {
    if (this.shouldStartHeaderRefreshing()) {
      this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
    }
  }

  onEndReached = () => {
    if (this.shouldStartFooterRefreshing()) {
      this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
    }
  }

  shouldStartHeaderRefreshing = () => {
    if (this.props.refreshState == RefreshState.HeaderRefreshing || this.props.refreshState == RefreshState.FooterRefreshing) {
      return false
    }
    return true
  }

  shouldStartFooterRefreshing = () => {
    const {refreshState, data} = this.props
    if (data.length == 0) {
      return false
    }
    return (refreshState == RefreshState.Idle)
  }

  renderSeparator = () => (
    <View style={{height: 1, backgroundColor: '#e0e0e0'}} />
  )

  renderFooter = () => {
    let footer = null

    let {
      footerRefreshingText,
      footerFailureText,
      footerNoMoreDataText,
      footerEmptyDataText,

      footerRefreshingComponent,
      footerFailureComponent,
      footerNoMoreDataComponent,
      footerEmptyDataComponent,
    } = this.props

    switch (this.props.refreshState) {
      case RefreshState.Idle: {
        footer = (<View style={styles.footerContainer} />)
        break
      }
      case RefreshState.Failure: {
        footer = (
          <TouchableOpacity onPress={() => {
            if (this.props.data.length == 0) {
              this.props.onHeaderRefresh && this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
            } else {
              this.props.onFooterRefresh && this.props.onFooterRefresh(RefreshState.FooterRefreshing)
            }
          }}
          >
            {footerFailureComponent ? footerFailureComponent : (
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{footerFailureText}</Text>
              </View>
            )}
          </TouchableOpacity>
        )
        break
      }
      case RefreshState.EmptyData: {
        footer = (
          <TouchableOpacity onPress={() => {
            this.props.onHeaderRefresh && this.props.onHeaderRefresh(RefreshState.HeaderRefreshing)
          }}
          >
            {footerEmptyDataComponent ? footerEmptyDataComponent : (
              <View style={styles.footerContainer}>
                <Text style={styles.footerText}>{footerEmptyDataText}</Text>
              </View>
            )}
          </TouchableOpacity>
        )
        break
      }
      case RefreshState.FooterRefreshing: {
        footer = footerRefreshingComponent ? footerRefreshingComponent : (
          <View style={styles.footerContainer} >
            <ActivityIndicator size="small" color="#888888" />
            <Text style={[styles.footerText, {marginLeft: 7}]}>{footerRefreshingText}</Text>
          </View>
        )
        break
      }
      case RefreshState.NoMoreData: {
        footer = footerNoMoreDataComponent ? footerNoMoreDataComponent : (
          <View style={styles.footerContainer} >
            <Text style={styles.footerText}>{footerNoMoreDataText}</Text>
          </View>
        )
        break
      }
    }
    return footer
  }

  render() {
    const {renderItem, ...rest} = this.props
    return (
      <FlatList
        ref={this.props.listRef}
        {...rest}
        // 行与行之间的分隔线组件
        ItemSeparatorComponent={this.props.disabledSeparator?false:this.renderSeparator}
        // 列表为空时渲染该组件
        ListEmptyComponent={this.props.ListEmptyComponent}
        // 头部组件
        ListHeaderComponent={this.props.renderHeader}
        // 尾部组件
        ListFooterComponent={this.renderFooter}
        // 当列表被滚动到距离内容最底部不足onEndReachedThreshold的距离时调用
        onEndReached={this.onEndReached}
        // 刷新组件
        refreshControl={
          this.props.disabledHeaderRefresh?false:<RefreshControl
          colors={['#00ff00',"#9Bd35A", "#689F38",]}
          refreshing={this.props.refreshState == RefreshState.HeaderRefreshing}
          onRefresh={this.onHeaderRefresh}
        />}
        // 决定当距离内容最底部还有多远时触发onEndReached回调
        onEndReachedThreshold={0.1}
        // 根据行数据data，渲染每一行的组件
        renderItem={renderItem}
      />
    )
  }
}

const styles = StyleSheet.create({
  footerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    height: 44,
  },
  footerText: {
    fontSize: 14,
    color: '#555555',
  },
})

export {
  RefreshState,
}

export default RefreshListView;