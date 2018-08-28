/**
 * 麦萌漫画
 */
import { BasePageStore } from '../BasePageStore';
import { Toast } from 'teaset';
// observable 是一种让数据的变化可以被观察的方法
import { toJS, observable, action } from 'mobx';
// 数据请求封装
import { HttpUtil } from '../../utils/HttpUtil';
// 常量
import { MAIMENG_BOOK_LIST } from '../../base/Constant';

export class MaiMengComicStore extends BasePageStore { // 继承于 BasePageStore, this 拥有其上所有属性
  @observable
  page: any;
  // 构造器
  constructor() {
    super([]);
  }

  // 刷新(首次加载)数据
  @action loadData(callBack) {
    // 初始化
    this.page = 1;
    // 请求数据
    HttpUtil.get(MAIMENG_BOOK_LIST.url, {...MAIMENG_BOOK_LIST.params,...{page: this.page}}, {show: false})
      .then(res => {
        this.setData(res.data);
        // 返回数据
        callBack(res.data);
      })
      .catch(e => {
        Toast.fail('请求失败');
      })
  }

  // 加载更多数据
  @action loadMoreData(page,callBack) { // page必须存在
    this.page++;
    // 请求数据
    HttpUtil.get(MAIMENG_BOOK_LIST.url, {...MAIMENG_BOOK_LIST.params,...{page: this.page}}, {show: false})
      .then(res => {
        let result = toJS(this.data).concat(res.data);
        this.setData(result);
        // 返回数据
        callBack(res.data);
      })
      .catch(e => {
        Toast.fail('请求失败');
      })
  }
}