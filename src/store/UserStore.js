/**
 * 用户数据
 */
import { observable, computed, action, autorun } from 'mobx'

export class UserStore {
  @observable
  data: UserData;

  @computed get isLogin() {
    return this.data && this.data.uid && true //其它一些条件
  }

  @action
  setData(user: UserData) {
    this.data = user
  }

  constructor() {
    autorun(() => {
      console.log('用户状态改变', this.isLogin, this.data)
    })
  }

  /**
   * 账号密码登录
   * @param params
   */
  login(params: { type: string, account: string, password: string, openId: string, store: string, callBack: () => void }) {
    /**
     * 判断
     * 启动加载框
     */
    params.store && params.store.setLoading(true);
    // 判断登录方式
    switch (params.type) {
      case 'account':
        //请求后台接口 API.login(params.account,params.password,type:params.type)
        break;
      case 'qq':
        //请求后台接口 API.login(params.openId,type:params.type)
        break;
      case 'wx':
        //请求后台接口 API.login(params.openId,type:params.type)
        break;
      case 'sina':
        //请求后台接口 API.login(params.openId,type:params.type)
        break;
    }
    setTimeout(() => {
      // 关闭加载框
      params.store && params.store.setLoading(false);
      // 保存用户信息
      this.setData(new UserData({uid: '21123', name: '张三', headImg: 'http://'}));
      // 如果回调函数存在,则调用
      params.callBack && params.callBack()
    }, 2000)
  }

  /**
   * 退出登录
   */
  logout() {
    this.setData(null);
    //doSomething
  }
}

// 用户信息
export class UserData {
  uid: string;
  @observable
  name: string;
  @observable
  headImg: string;
  //其它一些用户数据。。。

  constructor(...params) {
    // 合并对象
    Object.assign(this, ...params)
    autorun(() => {
      console.log('用户信息改变', this.name)
    })
  }

  // 保存昵称
  @action setName(name: string) {
    this.name = name;
  }

  // 保存头像
  @action setHeaderImg(url: string) {
    this.headImg = url;
  }
}