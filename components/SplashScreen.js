'use strict';

import React, {
  Component,
  Image,
  PropTypes,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

class SplashScreen extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.container}>
          <Image
            source={require('./splashscreenicon.png')}
          />
          <Text style={styles.text}>Blood Pressure Journal</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

SplashScreen.propTypes = {
  onPress: PropTypes.func.isRequired
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
