'use strict';

import React, {
  AppRegistry,
  Component,
} from 'react-native';
import { Provider } from 'react-redux';

import BloodPressureJournal from './components/BloodPressureJournal';
import configureStore from './store/configureStore';

const store = configureStore();

class BPJ extends Component {
  render() {
    return (
      <Provider store={store}>
        <BloodPressureJournal />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('BPJ', () => BPJ);
