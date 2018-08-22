/**
 * 登录页
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  // Button
} from 'react-native';
import { ListRow, Input, Button, Toast } from 'teaset';
/**
 * @inject 注入需要的store
 * @observer 修饰react组件类
 */
import { inject, observer } from 'mobx-react';
// import { RouteHelper } from 'react-navigation-easy-helper';
// 导入Action的包,处理页面跳转
import { Actions } from 'react-native-router-flux';
import { BaseContainer } from '../../components';

/**
 * @inject 注入需要的store
 * 可以通过 this.props.userStore 获取上面的值
 */
@inject('userStore')
// @observer 修饰react组件类
@observer
export default class LoginPage extends Component {

  static navigationOptions = ({navigation}) => ({
    headerTitle: 'LoginPage',
  });

  state = {
    account: '', // 用户名
    password: '' // 密码
  }

  // 登录操作
  _login = () => {
    // 验证
    if(!this.state.account){
      Toast.info('请填写用户名');
      // 结束程序
      return false;
    }else if(!this.state.password){
      Toast.info('请填写密码');
      // 结束程序
      return false;
    }

    const { userStore, navigation } = this.props;
    // const { routeName, params, successCallBack } = navigation.state.params;

    userStore.login({
      account: this.state.account, // 用户名
      password: this.state.password, // 密码
      store: this.store, // 数据
      type: 'account', // 登录方式
      callBack: () => {
        if (userStore.isLogin) {
          // if (routeName) {
          //   RouteHelper.replace(routeName, params)
          // }
          // if (successCallBack) {
          //   RouteHelper.goBack();
          //   successCallBack();
          // }

          // 跳转主页面
          Actions.mainPage();
        }
      }
    });
  };

  // 注册操作
  _register = () => {
    this.props.navigation.navigate('LaunchPage')
  }

  render() {
    return (
      <BaseContainer
        hideLeft
        title={'登录页'}
        rightTitle={'注册'}
        rightPress={this._register}
      >
        {/*用户名*/}
        <ListRow title='用户名' detail={
          <Input
            style={{width: 200}}
            value={this.state.account}
            placeholder='用户名'
            onChangeText={text => 
              this.setState({account: text})
            }
          />
        } topSeparator='full' />
        {/*密码*/}
        <ListRow title='密码' detail={
          <Input
            style={{width: 200}}
            value={this.state.password}
            placeholder='密码'
            onChangeText={text => 
              this.setState({password: text})
            }
          />
        } topSeparator='full' />
        {/*登录*/}
        <View style={styles.login}>
          <Button
            title='登录'
            type='primary'
            size='md'
            onPress={this._login}
          />
        </View>

        {/*<Button onPress={() => {
          this.props.navigation.navigate('LaunchPage')
        }} title={'跳转启动页'}/>*/}
      </BaseContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  login: {
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 20
  }
});