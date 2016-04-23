'use strict';

import React, {
  Component,
  Modal,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

class ConfirmationScreen extends Component {
  render() {
    return (
      <Modal>
        <View style={styles.container}>
          <View style={styles.window}>
            <Text style={styles.header}>
              Delete record?
            </Text>
            <View style={styles.buttons}>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={styles.button}>
                  <Text style={styles.button__text}>
                    Cancel
                  </Text>
                </View>
              </TouchableNativeFeedback>
              <TouchableNativeFeedback
                background={TouchableNativeFeedback.SelectableBackground()}
              >
                <View style={styles.button}>
                  <Text style={styles.button__text}>
                    Delete
                  </Text>
                </View>
              </TouchableNativeFeedback>
            </View>
          </View>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  window: {
    margin: 32,
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 22,
    marginBottom: 22,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  button: {
    paddingTop: 8,
    paddingRight: 16,
    paddingBottom: 8,
    paddingLeft: 16,
  },
  button__text: {
    fontSize: 16
  },
});

export default ConfirmationScreen;
