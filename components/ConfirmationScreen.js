'use strict';

import React, {
  Component,
  Modal,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ConfirmationScreen extends Component {
  render() {
    return (
      <Modal>
        <View style={styles.window}>
          <Text>Please confirm...</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  window: {
    flex: 1,
    margin: 16,
    padding: 16,
    backgroundColor: '#fff',
  },
});

export default ConfirmationScreen;
