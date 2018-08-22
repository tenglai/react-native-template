/**
 * store 主文件
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


// /**
//  * 汇总 store 并将 store 通过 Provider 绑定到 App(根组件)
//  * 20180820
//  */
// // 基础应用数据
// import { BaseAppStore } from './BaseAppStore';
// // 基础页面数据(公用状态类)
// import { BasePageStore } from './BasePageStore';
// // 新闻列表 数据
// import { NewsStore } from './NewsStore';
// // 购物车数据
// import { ShopCarStore } from './ShopCarStore';
// // 主题
// import { Theme } from './Theme';
// // 用户信息
// import { UserStore } from './UserStore';

// const store = {
//   BaseAppStore,
//   BasePageStore,
//   NewsStore,
//   ShopCarStore,
//   Theme,
//   UserStore
// };

// export default store;