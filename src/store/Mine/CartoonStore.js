/**
 * 漫画数据
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { WANGYICARTOON, WANGYICARTOONCATALOG, WANGYICARTOONDETAIL } from '../../base/Constant';

export class CartoonStore extends BasePageStore {
  // 构造器
  constructor() {
    super([]);
    // this.loadData()
  }
  // 加载(刷新)数据
  loadData(id) {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYICARTOON.url + id + '.json', WANGYICARTOON.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.data)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }

  // 加载更多
  loadMoreData(id,page) {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYICARTOON.url + id + '.json', {page: page}, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.data)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }

  // 加载目录
  loadBookCatalog(bookId) {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYICARTOONCATALOG.url + bookId + '.json', WANGYICARTOONCATALOG.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.catalog.sections[0].sections)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }

  // 加载详情
  loadBookDetail(bookId,sectionId) {
    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(`${WANGYICARTOONDETAIL.url + bookId}/${sectionId}.json`, WANGYICARTOONDETAIL.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.images)
      })
      .catch(e => {
        this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
      })
  }
}