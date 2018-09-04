/**
 * 常数(常量)
 */
import { Platform, NativeModules } from 'react-native';
// 获取设备信息
// import { getBuildNumber, getVersion } from 'react-native-device-info';
// //从原生导出常量
// const nativeConstant = NativeModules.nativeConstant;
// //构建类型
// const BUILD_TYPE = nativeConstant.BUILD_TYPES;

const BUILD_TYPE = 'STAGING';

const debug = {
  TEST_TITLE: 'debug模式',
  TYPE: 'debug',
  CODE_PUSH_KEY: Platform.OS === 'ios' ?
    'GJf_gAWqYPwRg_jzh5YtT5qXWrwO06deade4-1f87-4d67-b199-fbf216d3f314' :
    'mENSa_WNjzP6HOMmq9ECK8lEr8qQ06deade4-1f87-4d67-b199-fbf216d3f314'
};

const staging = {
  TEST_TITLE: 'staging模式',
  TYPE: 'staging',
  CODE_PUSH_KEY: Platform.OS === 'ios' ?
    'GJf_gAWqYPwRg_jzh5YtT5qXWrwO06deade4-1f87-4d67-b199-fbf216d3f314' :
    'mENSa_WNjzP6HOMmq9ECK8lEr8qQ06deade4-1f87-4d67-b199-fbf216d3f314'
};

const release = {
  TEST_TITLE: 'release模式',
  TYPE: 'release',
  CODE_PUSH_KEY: Platform.OS === 'ios' ?
    'gm-Zizg975oJztUDW4sgymi6_jm_06deade4-1f87-4d67-b199-fbf216d3f314' :
    'aSqHmmeAAa9an1VvrRjoA4vXkptm06deade4-1f87-4d67-b199-fbf216d3f314'
};

const common = {
  BUILD_TYPE: BUILD_TYPE,
  // VERSION: getVersion(), // 获取 版本
  // BUILD_NUMBER: getBuildNumber(), // 获取 应用编译版本号
  //是否是测试模式
  _STAGING_: BUILD_TYPE === 'STAGING',
  //是否是正式模式
  _RELEASE_: BUILD_TYPE === 'RELEASE',
};

const divisive = __DEV__ ? debug : (common._STAGING_ ? staging : release);
export default {
  ...common,
  ...divisive
}


//网易新闻最新新闻列表
export const WANGYINEWS = {
  url: 'https://c.m.163.com/recommend/getSubDocPic',
  params: {
    from: 'toutiao',
    prog: 'Rpic2',
    devId: '1UbcrWtzxBDULoGcTB1hJexA9PUp90A1Y7H508AYIe7shny%2BRe2OunGz5qjWxQeW',
    version: '32.0',
    spever: 'false',
    net: 'wifi',
    lat: 'uUQaeM4SZQ49aiKb64rOyQ%3D%3D',
    lon: 'RCWxwvYCYWkgmT7G9bPeeA%3D%3D',
    ts: Date.now(),
    sign: 'G33LNmnOoSLg8cNxDc8oRe5DN0yFAQZvZ7%2Bpxyt0PBl48ErR02zJ6/KXOnxX046I',
    encryption: '1',
    canal: 'appstore',
    offset: '0',
    size: '20',
    fn: '5',
    spestr: 'shortnews'
  }
};

// 豆瓣 图书
export const DOUBANBOOK = {
  url: 'https://api.douban.com/v2/book/search',
  params: {
    // count: 10,
    q: 'react'
  }
};

// 快看漫画作品列表
export const KUAIKANCARTOON = {
  url: 'http://m.kuaikanmanhua.com/mobile/topic_lists/0',
  params: {
    // page: 1,
    limit: 20
  }
};

// 网易漫画列表
export const WANGYICARTOON = {
  url: 'https://h5.manhua.163.com/category/',
  params: {
    page: 1
  }
};

// 网易漫画目录
export const WANGYICARTOONCATALOG = {
  url: 'https://h5.manhua.163.com/book/catalog/',
  params: {}
};

// 网易漫画详情
export const WANGYICARTOONDETAIL = {
  url: 'https://h5.manhua.163.com/reader/section/',
  params: {}
};

// 麦萌漫画--类型
export const MAIMENG_CATEGORIES = {
  url: 'http://api-app.maimengjun.com/comic/categories',
  params: {}
};

// 麦萌漫画--分类
export const MAIMENG_BOOK_LIST = {
  url: 'http://api-app.maimengjun.com/category/bookList',
  params: {
    id: 8,
    page: 1,
    size: 10
  }
};

// 麦萌漫画--列表
export const MAIMENG_CHAPTER_LIST = {
  /**
   * http://api-app.maimengjun.com/comic/detail?id=799
   * http://api-app.maimengjun.com/comic/chapterList?id=799&isSize=1
   */
  url: 'http://api-app.maimengjun.com/comic/chapterList',
  params: {
    id: 799,
    isSize: 1
  }
};

// 麦萌漫画--详情
export const MAIMENG_COMIC_CHAPTER = {
  url: 'http://api-app.maimengjun.com/comicChapter/read',
  params: {
    chapterNo: 1,
    bookId: 799
  }
};

// 麦萌漫画--搜索
export const MAIMENG_SEARCH = {
  url: 'http://api-app.maimengjun.com/search',
  params: {
    page: 1,
    size: 30,
    keyword: '',
    model: 1
  }
};