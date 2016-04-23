'use strict';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

import BloodPressureJournal from './components/BloodPressureJournal';

class BPJ extends Component {
  render() {
    return (
      <BloodPressureJournal />
    );
  }
}

AppRegistry.registerComponent('BPJ', () => BPJ);
