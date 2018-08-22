/**
 * 新闻数据
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { WANGYINEWS } from '../../base/Constant';

export class NewsStore extends BasePageStore {
  // 构造器
  constructor() {
    super([]);
    this.loadData()
  }

  // 刷新(首次加载)数据
  loadData() {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYINEWS.url, WANGYINEWS.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }

  // 加载更多数据
  loadMoreData() {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYINEWS.url, WANGYINEWS.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }
}