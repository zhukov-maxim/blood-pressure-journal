'use strict';

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  TextInput,
  ToolbarAndroid,
  View
} from 'react-native';

class RecordScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid
          navIcon={require('./arrow-left.png')}
          style={styles.toolbar}
        />
        <View style={styles.containerInner}>
          <TextInput
            defaultValue='2016.04.12'
            keyboardType='numeric'
            maxLength={10}
            placeholder='Date'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
          <TextInput
            defaultValue='20:53'
            keyboardType='numeric'
            maxLength={5}
            placeholder='Time'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
          <TextInput
            autoFocus={true}
            keyboardType='numeric'
            maxLength={3}
            placeholder='Systolic'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
          <TextInput
            keyboardType='numeric'
            maxLength={3}
            placeholder='Diastolic'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
          <TextInput
            keyboardType='numeric'
            maxLength={3}
            placeholder='Pulse'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
          <TextInput
            autoCapitalize='sentences'
            keyboardType='default'
            maxLength={80}
            placeholder='Comment'
            placeholderTextColor='#ccc'
            style={styles.input}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerInner: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
  },
  toolbar: {
    height: 56,
    backgroundColor: '#f44336'
  },
  input: {
    color: '#333',
    fontSize: 20,
    paddingTop: 6,
    paddingRight: 16,
    paddingBottom: 6,
    paddingLeft: 16,
  }
});

export default RecordScreen;
