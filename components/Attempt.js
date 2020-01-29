import * as React from "react";
import { StyleSheet, View } from "react-native";

const colourMap = {
  0: "#1e90ff",
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
      <View style={styles.container}>
        <View style={styles.code}>
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: c1 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: c2 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: c3 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: c4 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: r1 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: r2 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: r3 }} />
          <View style={{width: 20, height: 20, padding: 2, backgroundColor: r4 }} />
        </View>
      </View>
    );
  }
}

// React.propTypes = {
//   id: PropTypes.number.isRequired
// };

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
    padding: '20'
  }   

});
