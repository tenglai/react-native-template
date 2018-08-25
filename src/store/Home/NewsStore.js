/**
 * 新闻数据
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// observable 是一种让数据的变化可以被观察的方法
import { toJS, observable, action } from 'mobx';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { WANGYINEWS, KUAIKANCARTOON } from '../../base/Constant';

// const RefreshState = {
//   Idle: 0,
//   HeaderRefreshing: 1,
//   FooterRefreshing: 2,
//   NoMoreData: 3,
//   Failure: 4,
//   EmptyData: 5,
// }

export class NewsStore extends BasePageStore { // 继承于 BasePageStore, this 拥有其上所有属性
  @observable
  page: any;
  // @observable
  // refreshState: any;
  // 构造器
  constructor() {
    super([]);
    // 初始化
    // this.refreshState = RefreshState.Idle;
    this.setRefreshState(RefreshState.Idle);
    this.loadData();
  }

  // 刷新(首次加载)数据
  @action loadData(callBack) {
    // 初始化
    this.page = 2;
    // 开始下拉刷新
    // this.refreshState = RefreshState.HeaderRefreshing;
    this.setRefreshState(RefreshState.HeaderRefreshing);
    // 请求数据
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: this.page}}, {show: false})
      .then(res => {
        this.setData(res.data.topics);
        // console.log(this.page,'刷新',toJS(this.data));
        // 返回数据
        // callBack(res.data.topics);

        // 加载成功
        // this.refreshState = RefreshState.Idle;
        this.setRefreshState(RefreshState.Idle);

        if(!res.data.topics.length){
          // 服务器没有数据
          // this.refreshState = RefreshState.EmptyData;
          this.setRefreshState(RefreshState.EmptyData);
        }
      })
      .catch(e => {
        // 加载失败
        // this.refreshState = RefreshState.Failure;
        this.setRefreshState(RefreshState.Failure);
        Toast.fail('请求失败');
      })
  }

  // 加载更多数据
  @action loadMoreData(page,callBack) {
    this.page++;
    // 开始上拉翻页
    // this.refreshState = RefreshState.FooterRefreshing;
    this.setRefreshState(RefreshState.FooterRefreshing);
    // 请求数据
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: this.page}}, {show: false})
      .then(res => {
        let result = toJS(this.data).concat(res.data.topics);
        this.setData(result);
        // console.log(this.page,'加载更多',toJS(this.data));
        // 返回数据
        // callBack(res.data.topics);

        // 加载成功
        // this.refreshState = RefreshState.Idle;
        this.setRefreshState(RefreshState.Idle);

        if(!res.data.topics.length){
          // 加载全部数据
          // this.refreshState = RefreshState.NoMoreData;
          this.setRefreshState(RefreshState.NoMoreData);
        }
      })
      .catch(e => {
        // 加载失败
        // this.refreshState = RefreshState.Failure;
        this.setRefreshState(RefreshState.Failure);
        Toast.fail('请求失败');
      })
  }

  // /**
  //  * 改变refreshState的值
  //  * @param refreshState
  //  */
  // @action setRefreshState(refreshState) {
  //   this.refreshState = refreshState
  // }
}