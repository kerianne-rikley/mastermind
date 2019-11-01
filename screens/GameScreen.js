import * as React from "react";
import { StyleSheet, View, Button } from "react-native";
import Entry from "../components/Entry";

export default class GameScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.code}>
          <Entry />
          <Entry />
          <Entry />
          <Entry />
        </View>
        <Button
          testID="home-button"
          title="Home"
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
    fontWeight: "bold",
    marginVertical: 10
  },
  code: {
    flex: 1,
    flexDirection: "row"
  }
});
