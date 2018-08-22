/**
 * 加载视图
 */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
// import Spinkit from 'react-native-spinkit';

export class LoadingView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loadingContainer}>
          {/*<Spinkit size={70} type={'9CubeGrid'}/>*/}
          <ActivityIndicator style={styles.loading} />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  loading: {
    marginVertical: 20
  }
});