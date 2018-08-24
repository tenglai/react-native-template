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

export class NewsStore extends BasePageStore { // 继承于 BasePageStore, this 拥有其上所有属性
  @observable
  page: any;
  // 构造器
  constructor() {
    super([]);
  }

  // 刷新(首次加载)数据
  @action
  loadData(callBack) {
    // 初始化
    this.page = 2;
    // 请求数据
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: this.page}}, {show: false})
      .then(res => {
        this.setData(res.data.topics);
        // 返回数据
        callBack(res.data.topics);
      })
      .catch(e => {
        Toast.fail('请求失败')
      })
  }

  // 加载更多数据
  @action
  loadMoreData(page,callBack) {
    this.page++;
    // 请求数据
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: this.page}}, {show: false})
      .then(res => {
        let result = toJS(this.data).concat(res.data.topics);
        this.setData(result);
        // 返回数据
        callBack(res.data.topics);
      })
      .catch(e => {
        Toast.fail('请求失败')
      })
  }
}