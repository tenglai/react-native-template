/**
 * 基础页面数据(公用状态类)
 * 其他 store 基于此进行扩展(extends)
 * 绑定到此上的 store 数据可视为 全局变量
 */
// observable 是一种让数据的变化可以被观察的方法
import { observable, action } from 'mobx';

/**
 * 抽出一个页面store共有的状态类。
 */
export class BasePageStore {
  //默认页面的数据变量
  @observable
  data: any;
  //此观察变量控制Page页面是否显示加载视图
  @observable
  isLoading: boolean;
  //此观察变量控制Page页面是否显示错误视图
  @observable
  isError: boolean;
  loadingMsg: string;
  errorMsg: string;
  errorPress: () => void;

  constructor(data = null, isLoading = false, isError = false, loadingMsg = '加载中...', errorMsg = '发生错误了') {
    this.setData(data);
    this.isLoading = isLoading;
    this.isError = isError;
    this.loadingMsg = loadingMsg;
    this.errorMsg = errorMsg;
  }

  /**
   * 加载数据的方法
   */
  loadData() {
    //模拟网络加载请求
    this.setLoading(true);
    setTimeout(() => {
      this.setLoading(false)
    }, 1000)
  }

  /**
   * 改变data的值
   * @param data
   */
  @action setData(data) {
    this.data = data
  }

  /**
   * 改变isError的值
   * @param isError  是否错误
   * @param errorMsg 错误的信息
   * @param errorPress 点击事件
   */
  @action setError(isError: boolean = true, errorMsg: string = '发生错误了', errorPress: () => void = null) {
    if (this.isLoading) {
      this.isLoading = false;
    }
    this.isError = isError;
    this.errorMsg = errorMsg;
    this.errorPress = errorPress;
  }

  /**
   * 改变isLoading的值
   * @param isLoading  是否加载
   * @param loadingMsg 加载提示
   */
  @action setLoading(isLoading: boolean = true, loadingMsg: string = '加载中...') {
    if (this.isError) {
      this.isError = false;
    }
    this.isLoading = isLoading;
    this.loadingMsg = loadingMsg;
  }
}