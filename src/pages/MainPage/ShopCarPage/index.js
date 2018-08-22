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

export default class ShopCarPage extends Component {
  render() {
    return (
      <BaseContainer
        hideLeft
        title={'购物车'}
      >
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