/**
 * 漫画数据
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// observable 是一种让数据的变化可以被观察的方法
import { toJS, observable, action } from 'mobx';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { WANGYICARTOON, WANGYICARTOONCATALOG, WANGYICARTOONDETAIL } from '../../base/Constant';

export class CartoonStore extends BasePageStore {
  @observable
  page: any;
  @observable
  id: any;
  // 构造器
  constructor() {
    super([]);
    // 初始化
    this.setRefreshState(RefreshState.Idle);
  }
  // 加载(刷新)数据
  @action
  loadData() {
    // 初始化
    this.page = 1;
    // 开始下拉刷新
    this.setRefreshState(RefreshState.HeaderRefreshing);

    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYICARTOON.url + this.id + '.json', WANGYICARTOON.params, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        this.setData(res.data.books)

        // 加载成功
        this.setRefreshState(RefreshState.Idle);

        if(!res.data.length){
          // 服务器没有数据
          this.setRefreshState(RefreshState.EmptyData);
        }
      })
      .catch(e => {
        // 加载失败
        this.setRefreshState(RefreshState.Failure);
        // this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
        Toast.fail('请求失败');
      })
  }

  // 加载更多
  @action
  loadMoreData() {
    this.page++;
    // 开始上拉翻页
    this.setRefreshState(RefreshState.FooterRefreshing);

    this.data.length === 0 && this.setLoading(true);
    HttpUtil.get(WANGYICARTOON.url + this.id + '.json', {...WANGYICARTOON.params,...{page: this.page}}, {show: this.data.length !== 0})
      .then(res => {
        this.data.length === 0 && this.setLoading(false);
        let result = toJS(this.data).concat(res.data.books);
        this.setData(result);

        // 加载成功
        this.setRefreshState(RefreshState.Idle);

        if(!res.data.length){
          // 加载全部数据
          this.setRefreshState(RefreshState.NoMoreData);
        }
      })
      .catch(e => {
        // 加载失败
        this.setRefreshState(RefreshState.Failure);
        // this.data.length === 0 ? this.setError(true, e.msg) : Toast.fail('请求失败')
        Toast.fail('请求失败');
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
        // 加载失败
        this.setRefreshState(RefreshState.Failure);
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