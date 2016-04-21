'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  ViewPagerAndroid
} from 'react-native';

import ConfirmationScreen from './components/ConfirmationScreen';
import MainScreen from './components/MainScreen';
import RecordScreen from './components/RecordScreen';
import SplashScreen from './components/SplashScreen';

class BPJ extends Component {
  render() {
    return (
      <ViewPagerAndroid
        initialPage={3}
        style={styles.pagerStyle}
      >
        <View style={styles.pageStyle}>
          <SplashScreen></SplashScreen>
        </View>
        <View>
          <MainScreen></MainScreen>
        </View>
        <View>
          <RecordScreen></RecordScreen>
        </View>
        <View>
          <ConfirmationScreen></ConfirmationScreen>
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
