import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleCard}>Mastermind</Text>
        <View style={styles.buttonBox}>
          <Button 
            testID="start-button"
            title="Start Game"
            onPress={() => this.props.navigation.navigate("Game")}
          />
        </View>
        <View style={styles.spacer}/>
        <View style={styles.buttonBox}>
          <Button
            testID="how-to-button"
            title="How To Play"
            onPress={() => this.props.navigation.navigate("HowTo")}
          />
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
  titleCard: {
    fontSize: 30,
    fontWeight: "bold"
  },
  buttonBox: {
    width: 120
  },
  spacer: {
    height: 2
  },
});
