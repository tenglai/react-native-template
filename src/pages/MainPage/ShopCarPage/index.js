/**
 * 购物车
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { BaseContainer } from '../../../components';
import Icon from 'react-native-vector-icons/Ionicons'; //引入图标

export default class ShopCarPage extends Component {
  render() {
    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
      >
        <Icon name='md-home' size={30} color='blue' />
      </BaseContainer>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    justifyContent: 'center',
    alignItems: 'center'
  }
});