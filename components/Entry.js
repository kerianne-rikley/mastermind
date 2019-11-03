import * as React from "react";
import PropTypes from "prop-types";
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
  // // constructor(props) {
  // //   super(props);
  // //   this.state = { value: 0 };
  // // }

  // updateState = () => {
  //   this.setState(prevState => ({ value: (prevState.value + 1) % 6 }));
  // };

  render() {
    return (
      <View style={styles.container}>
        <Button
          id={`entry-button-${this.props.id}`}
          title={this.props.choice}
          color={colourMap[this.props.choice]}
          onPress={() => {
            this.props.handlePress(this.props.id)
          }}
        />
      </View>
    );
  }
}

React.propTypes = {
  id: PropTypes.number.isRequired
};

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
