'use strict';

import React, {
  Component,
  StyleSheet,
  TextInput,
  View
} from 'react-native';

import { setTheme, MKTextField, MKColor } from 'react-native-material-kit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 16,
    paddingTop: 10,
    backgroundColor: '#fff',
  },
  line: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textfieldWithFloatingLabel: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
    marginBottom: 5,
  },
  textfieldWithFloatingLabelShort: {
    height: 48,  // have to do it on iOS
    marginTop: 10,
    marginBottom: 5,
    width: 150,
  },
});

class RecordScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.line}>
          <MKTextField
            placeholder='Date'
            defaultValue='2016.05.05'
            keyboardType='numeric'
            maxLength={10}
            style={styles.textfieldWithFloatingLabelShort}
            floatingLabelEnabled={true}
            highlightColor={'#f44336'}
            tintColor={MKColor.Black}
            textInputStyle={{fontSize: 20}}
            underlineSize={2}
          />
          <MKTextField
            placeholder='Time'
            defaultValue='22:50'
            keyboardType='numeric'
            maxLength={5}
            style={styles.textfieldWithFloatingLabelShort}
            floatingLabelEnabled={true}
            highlightColor={'#f44336'}
            tintColor={MKColor.Black}
            textInputStyle={{fontSize: 20}}
            underlineSize={2}
          />
        </View>
        <View style={styles.line}>
          <MKTextField
            placeholder='Systolic'
            keyboardType='numeric'
            maxLength={3}
            style={styles.textfieldWithFloatingLabelShort}
            floatingLabelEnabled={true}
            highlightColor={'#f44336'}
            tintColor={MKColor.Black}
            textInputStyle={{fontSize: 20}}
            underlineSize={2}
          />
          <MKTextField
            placeholder='Diastolic'
            keyboardType='numeric'
            maxLength={3}
            style={styles.textfieldWithFloatingLabelShort}
            floatingLabelEnabled={true}
            highlightColor={'#f44336'}
            tintColor={MKColor.Black}
            textInputStyle={{fontSize: 20}}
            underlineSize={2}
          />
        </View>
        <MKTextField
          placeholder='Pulse'
          keyboardType='numeric'
          maxLength={3}
          style={styles.textfieldWithFloatingLabel}
          floatingLabelEnabled={true}
          highlightColor={'#f44336'}
          tintColor={MKColor.Black}
          textInputStyle={{fontSize: 20}}
          underlineSize={2}
        />
        <MKTextField
          placeholder='Comment'
          autoCapitalize='sentences'
          maxLength={140}
          style={styles.textfieldWithFloatingLabel}
          floatingLabelEnabled={true}
          highlightColor={'#f44336'}
          tintColor={MKColor.Black}
          textInputStyle={{fontSize: 20}}
          underlineSize={2}
        />
      </View>
    );
  }
}

export default RecordScreen;
