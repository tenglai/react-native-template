/**
 * 设置一些全局变量，global需慎用
 */
import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window');
global.SCREEN_WIDTH = width;
global.SCREEN_HEIGHT = height;
global._IOS_ = Platform.OS === 'ios';
global._ANDROID_ = Platform.OS === 'android';
// 刷新状态
global.RefreshState = {
  Idle: 0, // 加载成功
  HeaderRefreshing: 1, // 开始下拉刷新
  FooterRefreshing: 2, // 开始上拉翻页
  NoMoreData: 3, // 加载全部数据
  Failure: 4, // 加载失败
  EmptyData: 5, // 服务器没有数据
}