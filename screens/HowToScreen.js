import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class HowToScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleCard}>How To Play</Text>
        <Text style={styles.paragraph}>This is where basic instruction would go... maybe throw in an informative picture too</Text>
        <Button
          testID="close-button"
          title="Close"
          onPress={() => this.props.navigation.navigate("Home")}
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
    fontWeight: "bold"
  }
});
