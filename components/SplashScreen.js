'use strict';

import React, {
  Component,
  Image,
  StyleSheet,
  View
} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./splashscreenicon.png')}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F44336',
  },
});

export default SplashScreen;
