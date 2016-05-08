'use strict';

import React, {
  Component,
  StyleSheet,
  ToolbarAndroid,
  View
} from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions/actions'

import ScrollableTabView from 'react-native-scrollable-tab-view';

import ConfirmationScreen from './ConfirmationScreen';
import MainScreen from './MainScreen';
import RecordScreen from './RecordScreen';
import SplashScreen from './SplashScreen';

class BloodPressureJournal extends Component {
  onSplashPress() {
    this.props.dispatch(actions.loadCompleted());
  }

  renderSplashScreen() {
    return (
      <SplashScreen onPress={() => this.onSplashPress()}/>
    );
  }

  renderApp() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          title='Blood Pressure Journal'
          style={styles.toolbar}
        />
        <ScrollableTabView
          style={styles.scrollableTabView}
          tabBarTextStyle={styles.scrollableTabView__tabBarText}
          tabBarUnderlineColor={'#fff'}
        >
          <MainScreen tabLabel='MainScreen'/>
          <RecordScreen tabLabel='RecordScreen'/>
        </ScrollableTabView>
      </View>
    );
  }

  render() {
    const isLoading = this.props.isLoading;

    return (
      isLoading ?
        this.renderSplashScreen() :
        this.renderApp()
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    height: 56,
    backgroundColor: '#f44336',
  },
  scrollableTabView: {
    backgroundColor: '#f44336',
  },
  scrollableTabView__tabBarText: {
    color: '#fff',
    fontWeight: 'normal',
    fontSize: 16,
    height: 20,
  },
});

function mapStateToProps(state) {
  return {
    isLoading: state.isLoading
  }
}

export default connect(mapStateToProps)(BloodPressureJournal);
