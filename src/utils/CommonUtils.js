/**
 * 通用工具类
 */
import React, { Component } from 'react';
import { StatusBar, Dimensions } from 'react-native';
import { AlbumView, Overlay, Button } from 'teaset';
// import Barcode from 'react-native-smart-barcode';

//设计宽度
const basePixelWidth = 375;
const {width} = Dimensions.get('window');
export const px2dp = px => {
  return px * width / basePixelWidth;
};

// class CustomBarcode extends Component {

//   componentDidMount() {
//     this.timeout = setTimeout(() => {
//       this._barCode.startScan();
//     }, 100);
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timeout);
//     this._barCode.stopScan()
//   }

//   render() {
//     const {onBarCodeRead} = this.props;
//     return <Barcode
//       style={{flex: 1}}
//       ref={ref => this._barCode = ref}
//       onBarCodeRead={(e) => {
//         console.log('onBarCodeRead', e.nativeEvent);
//         onBarCodeRead && onBarCodeRead(e.nativeEvent.data);
//       }}
//     />
//   }
// }

export class CommonUtils {
  /**
   * 显示大图
   * @param actionView  点击的组件
   * @param index  默认显示
   * @param images  图片数组
   * @param onPress  点击图片关闭后回调
   */
  static showBigImages(actionView, index, images, onPress) {
    actionView.measureInWindow((x, y, width, height) => {
      let overlayView = (
        <Overlay.PopView
          containerStyle={{flex: 1}}
          overlayOpacity={1}
          type='custom'
          customBounds={{x, y, width, height}}
          ref={v => this.fullImageView = v}
        >
          <AlbumView
            style={{flex: 1}}
            control={true}
            images={images}
            defaultIndex={index}
            onPress={(index, event) => {
              this.fullImageView && this.fullImageView.close();
              onPress && onPress(index, event)
            }}
          />
          <StatusBar animated={false} hidden={true}/>
        </Overlay.PopView>
      );
      Overlay.show(overlayView);
    });
  }

  /**
   * 二维码扫描
   * @param callBack
   */
  // static showQCord(callBack) {
  //   let key = null;
  //   let overlayView = (
  //     <Overlay.PopView
  //       containerStyle={{flex: 1}}
  //       overlayOpacity={1}
  //     >
  //       <CustomBarcode onBarCodeRead={e => {
  //         Overlay.hide(key);
  //         callBack && callBack(e)
  //       }}/>
  //       <Button
  //         title='关闭'
  //         tyle={'link'}
  //         titleStyle={{color: 'white'}}
  //         onPress={() => Overlay.hide(key)}
  //         style={{
  //           position: 'absolute',
  //           top: 40,
  //           left: 30,
  //           backgroundColor: '#0000',
  //           borderColor: 'white'
  //         }}/>
  //       <StatusBar barStyle={'light-content'}/>
  //     </Overlay.PopView>
  //   );
  //   key = Overlay.show(overlayView);
  // }

  /**
   *
   * 以Base64位字符串数据的形式返回一个图片的source
   * @param data
   * @returns {{uri: string}}
   */
  static base64Image(data) {
    return `data:image/png;base64,${data}`
  }

  static lastClickTime = 0;

  /**
   * 是否连续点击
   * @param delay 间隔,默认1000ms
   * @returns {boolean}
   */
  static isFastClick(delay: number = 1000) {
    let nowTime = Date.now();
    if ((nowTime - this.lastClickTime) <= delay) {
      return true
    } else {
      this.lastClickTime = nowTime;
      return false
    }
  }
}