import * as React from "react";
import { StyleSheet, View } from "react-native";

const colourMap = {
  0: "#316EFF", // "#1e90ff",
  1: "#ee82ee",
  2: "#dc143c",
  3: "#ff8c00",
  4: "#ffd700",
  5: "#228b22",
  6: "black",
  7: "white"
};

export default class Attempt extends React.Component {
  render() {
    let c1 = colourMap[this.props.code[0]];
    let c2 = colourMap[this.props.code[1]];
    let c3 = colourMap[this.props.code[2]];
    let c4 = colourMap[this.props.code[3]];

    let r1 = colourMap[this.props.feedback[0]];
    let r2 = colourMap[this.props.feedback[1]];
    let r3 = colourMap[this.props.feedback[2]];
    let r4 = colourMap[this.props.feedback[3]];

    return (
      <View style={styles.code}>
        <View style={styles.code}>
          <View id="history-0" style={{width: 35, height: 35, backgroundColor: c1, margin: 3 }} />
          <View id="history-1" style={{width: 35, height: 35, backgroundColor: c2, margin: 3 }} />
          <View id="history-2" style={{width: 35, height: 35, backgroundColor: c3, margin: 3 }} />
          <View id="history-3" style={{width: 35, height: 35, backgroundColor: c4, margin: 3 }} />
        </View>
        <View style={styles.grid}>
          <View style={styles.pair}>
            <View id="feedback-0" style={{width: 15, height: 15, backgroundColor: r1, margin: 2 }} />
            <View id="feedback-1" style={{width: 15, height: 15, backgroundColor: r2, margin: 2 }} />
          </View>
          <View style={styles.pair}>
            <View id="feedback-2" style={{width: 15, height: 15, backgroundColor: r3, margin: 2 }} />
            <View id="feedback-3" style={{width: 15, height: 15, backgroundColor: r4, margin: 2 }} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginRight: 22,
  },
  pair: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  grid: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    marginLeft: 12.5,
    marginVertical: 3,
  },
  }
});
