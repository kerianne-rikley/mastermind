import * as React from "react";
import { StyleSheet, View, Button } from "react-native";

const colourMap = {
  0: "#1e90ff",
  1: "#ee82ee",
  2: "#dc143c",
  3: "#ff8c00",
  4: "#ffd700",
  5: "#228b22"
};

export default class Entry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  updateState = () => {
    this.setState(prevState => ({ value: (prevState + 1) % 6 }));
  };

  render() {
    const stateValueString = this.state.value.toString();
    return (
      <View style={styles.container}>
        <Button
          title={stateValueString}
          color={colourMap[this.state.value]}
          onPress={() => {
            this.updateState();
          }}
        />
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
  titleCard: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10
  }
});
