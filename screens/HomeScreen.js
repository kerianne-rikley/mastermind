import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const buttonColor = "#2F1867"

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleCard}>Mastermind</Text>
        <View style={styles.buttonBox}>
          <Button 
            testID="start-button"
            title="Start Game"
            color = {buttonColor}
            onPress={() => this.props.navigation.navigate("Game")}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button
            testID="how-to-button"
            title="How To Play"
            color= {buttonColor}
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
    alignItems: "center",
    justifyContent: "center",
    padding: 50
  },
  titleCard: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "bold",
    padding: 20
  },
  buttonBox: {
    width: 120,
    padding: 2
  }
});
