/**
 * 底部导航栏
 */
import React, { PureComponent } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
// 图标
import Icon from 'react-native-vector-icons/FontAwesome';

export default class TabBar extends PureComponent{
  constructor(props){
    super(props);
    this.data = {
      HomePage:{
        title:"首页",
        icon:"home",
      },
      ShopCarPage:{
        title:"购物车",
        icon:"shopping-cart",
      },
      MinePage:{
        title:"我的",
        icon:"user",
      }
    }
  }
  render(){
    let param = this.data[this.props.component.displayName];
    let activeStyle = this.props.focused ? {color:"#3399FF"} : {};
    
    return <View>
      <Icon name={param.icon} color={activeStyle.color} size={25}/>
      <Text style={[activeStyle,styles.tabbarItem]}>{param.title}</Text>
    </View>
  }
}

const styles = StyleSheet.create({
  tabbarItem:{
    alignItems:"center",
    justifyContent:"center",
    textAlign:"center",
    marginLeft:-3
  }
});