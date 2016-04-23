'use strict';

import React, {
  Component,
  ListView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View
} from 'react-native';

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
  }

  componentDidMount() {
    this.setState({
      dataSource: this.state.dataSource.cloneWithRows([
        {"title": "17 апреля – 21:19 – 120-80 1"},
        {"title": "17 апреля – 21:19 – 120-80 2"},
        {"title": "17 апреля – 21:19 – 120-80 3"},
        {"title": "17 апреля – 21:19 – 120-80 4"},
        {"title": "17 апреля – 21:19 – 120-80 5"},
        {"title": "17 апреля – 21:19 – 120-80 6"},
        {"title": "17 апреля – 21:19 – 120-80 7"},
        {"title": "17 апреля – 21:19 – 120-80 8"},
        {"title": "17 апреля – 21:19 – 120-80 9"},
        {"title": "17 апреля – 21:19 – 120-80 10"},
        {"title": "17 апреля – 21:19 – 120-80 11"},
        {"title": "17 апреля – 21:19 – 120-80 12"},
        {"title": "17 апреля – 21:19 – 120-80 13"},
        {"title": "17 апреля – 21:19 – 120-80 14"},
        {"title": "17 апреля – 21:19 – 120-80 15"},
        {"title": "17 апреля – 21:19 – 120-80 16"},
        {"title": "17 апреля – 21:19 – 120-80 17"},
        {"title": "17 апреля – 21:19 – 120-80 18"},
        {"title": "17 апреля – 21:19 – 120-80 19"},
        {"title": "17 апреля – 21:19 – 120-80 20"}
      ])
    });
  }

  renderLine(line) {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.line}>
          <Text style={styles.lineText}>♡&ensp;{line.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerInner}>
          <ListView
            dataSource={this.state.dataSource}
            renderRow={this.renderLine}
            style={styles.listView}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  containerInner: {
    flex: 1,
    justifyContent: 'center',
  },
  listView: {
    backgroundColor: '#fff'
  },
  line: {
    padding: 16,
  },
  lineText: {
    fontSize: 16,
  }
});

export default MainScreen;
