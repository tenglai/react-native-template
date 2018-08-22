/**
 * 基础应用数据(汇总)
 * 汇总 store 并将 store 通过 Provider 绑定到 App(根组件)
 * 在 App.js 全局注入(即:全部组件可通过 @inject 获取 BaseAppStore 上的数据)
 * 例如：注入：@inject('userStore') 获取：this.props.userStore
 */
// 用户数据
import { UserStore } from './UserStore';
// 购物车数据
import { ShopCarStore } from './ShopCar/ShopCarStore';


export class BaseAppStore {
  userStore: UserStore;
  shopCar: ShopCarStore;

  constructor() {
    this.userStore = new UserStore();
    this.shopCar = new ShopCarStore();
  }
}