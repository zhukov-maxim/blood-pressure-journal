'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ViewPagerAndroid
} from 'react-native';

import SplashScreen from './components/SplashScreen';
import MainScreen from './components/MainScreen';

class BPJ extends Component {
  render() {
    return (
      <ViewPagerAndroid
        initialPage={0}
        style={styles.pagerStyle}
      >
        <View style={styles.pageStyle}>
          <SplashScreen></SplashScreen>
        </View>
        <View>
          <MainScreen></MainScreen>
        </View>
      </ViewPagerAndroid>
    );
  }
}

const styles = StyleSheet.create({
  pagerStyle:  {
    flex: 1,
  },
});

AppRegistry.registerComponent('BPJ', () => BPJ);
