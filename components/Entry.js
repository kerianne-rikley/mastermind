import * as React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, Button } from "react-native";

const colorMap = {
  0: "#316EFF", //"#1e90ff",
  1: "#ee82ee",
  2: "#dc143c",
  3: "#ff8c00",
  4: "#ffd700",
  5: "#228b22"
};

export default class Entry extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          id={`entry-button-${this.props.id}`}
          title={`${this.props.choice}`}
          color={colorMap[this.props.choice]}
          titleStyle={{color:"black"}}
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
    width: 40,
    height: 40,
    padding: 2,
    margin: 3
  }
});
