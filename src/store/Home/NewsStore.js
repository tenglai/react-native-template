/**
 * 新闻数据
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { WANGYINEWS, KUAIKANCARTOON } from '../../base/Constant';

export class NewsStore extends BasePageStore { // 继承于 BasePageStore, this 拥有其上所有属性
  // 构造器
  constructor() {
    super([]);
    this.loadData()
  }

  // // 刷新(首次加载)数据
  // loadData() {
  //   this.data.length === 0 && this.setLoading(true);
  //   HttpUtil.get(WANGYINEWS.url, WANGYINEWS.params, {show: this.data.length !== 0})
  //     .then(res => {
  //       this.data.length === 0 && this.setLoading(false);
  //       this.setData(res);
  //     })
  //     .catch(e => {
  //       this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
  //     })
  // }

  // // 加载更多数据
  // loadMoreData() {
  //   this.data.length === 0 && this.setLoading(true);
  //   HttpUtil.get(WANGYINEWS.url, WANGYINEWS.params, {show: this.data.length !== 0})
  //     .then(res => {
  //       // this.data.length === 0 && this.setLoading(false);
  //       res = this.data.concat(res);
  //       this.setData(res)
  //       // 将数据返回到页面
  //       return res;
  //     })
  //     .catch(e => {
  //       this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
  //     })
  // }

  // 刷新(首次加载)数据
  loadData() {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: 2}}, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.data.topics);
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }

  // 加载更多数据
  loadMoreData() {
    // this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(KUAIKANCARTOON.url, {...KUAIKANCARTOON.params,...{page: 3}}, {show: this.data.length !== 0})
      .then(res => {
        // this.data.length === 0 && this.setLoading(false);
        // this.setData(this.data.concat(res.data.topics));
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }
}