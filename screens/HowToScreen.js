import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const buttonColor = "#2F1867"

export default class HowToScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonBox}>
          <Button
            testID="close-button"
            title="X"
            color={buttonColor}
            onPress={() => this.props.navigation.navigate("Home")}
          />
        </View>
        <Text style={styles.titleCard}>How To Play</Text>
        <Text style={styles.textCard}>To play this game you will be given six colours and four positions. Your goal is to place the correct colour in each position. You will get 10 tries to crack the code. For each attempt you will be provided with feedback, indicating the how many colours are in the correct position, and how many colours are correct but in the incorrect position.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#D0BCFC",
    margin: 100
  },
  titleCard: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 15
  },
  textCard:{
    alignItems: "left",
    justifyContent: "right",
    padding: 15,
  },
  buttonBox: {
    alignSelf: "flex-end",
    width: 50,
    padding: 2,
  }
});
