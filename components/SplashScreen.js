'use strict';

import React, {
  Component,
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./splashscreenicon.png')}
        />
        <Text style={styles.text}>Blood Pressure Journal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    marginTop: 56,
    fontSize: 22,
  }
});

export default SplashScreen;
