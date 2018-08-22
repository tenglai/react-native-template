/**
 * 基础应用数据(汇总)
 */
// 用户数据
import {UserStore} from './UserStore';
// 购物车数据
import {ShopCarStore} from './ShopCar/ShopCarStore';


export class BaseAppStore {
  userStore: UserStore;
  shopCar: ShopCarStore;

  constructor() {
    this.userStore = new UserStore();
    this.shopCar = new ShopCarStore();
  }
}