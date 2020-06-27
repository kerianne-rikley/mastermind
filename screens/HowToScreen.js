import * as React from "react";
import { StyleSheet, View, Text, Button } from "react-native";

const buttonColor = "#E70088"

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
        <Text style={styles.textCard}>To play this game you will be given six colours and four positions. Your goal is to place the correct colour in each position. You will get 10 tries to crack the code. For each attempt you will be provided with feedback. A small red box indicates the how many colours are in the correct position, a small white box indicates how many colours are correct but in the incorrect position, and a black box indicates the number of incorrect colours.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#EEEEEE",
    margin: 100
  },
  titleCard: {
    fontSize: 30,
    fontWeight: "bold",
    padding: 15,
    textAlign: "center"
  },
  textCard:{
    alignItems: "left",
    justifyContent: "right",
    padding: 15,
  },
  buttonBox: {
    alignSelf: "flex-end",
    width: 30,
    height: 30,
    padding: 2,
  }
});
