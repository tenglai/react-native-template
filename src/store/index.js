/**
 * store 主文件
 * 便于页面单独引用相关页面 store
 * 例如：import { NewsStore } from '../../../store';
 */
// 基础应用数据(用户数据 + 购物车数据)
export { BaseAppStore } from './BaseAppStore';
// // 基础页面数据(公用状态类)
// export { BasePageStore } from './BasePageStore';
// 新闻列表数据
export { NewsStore } from './Home/NewsStore';
// 购物车数据
export { ShopCarStore } from './ShopCar/ShopCarStore';
// 主题
export { Theme } from './Theme';
// // 用户信息
// export { UserStore } from './UserStore';