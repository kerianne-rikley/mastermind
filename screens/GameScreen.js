import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Entry from "../components/Entry";

export default class GameScreen extends React.Component {
  state = {
    codeHistory: [],
    currentChoices: [0,0,0,0],
  }

  choices = [0,1,2,3,4,5];

  updateChoice = (buttonId) => {
    let newChoiceId = (this.state.currentChoices[buttonId] + 1) % 6;
    const newChoices = this.state.currentChoices;
    newChoices[buttonId] = newChoiceId;
    this.setState(newChoices);
  }

  updateHistory = () => {
    this.setState({codeHistory: [this.state.currentChoices]})
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.code}>
            <Entry id={0} choice={this.choices[this.state.currentChoices[0]]} handlePress={this.updateChoice}/>
            <Entry id={1} choice={this.choices[this.state.currentChoices[1]]} handlePress={this.updateChoice}/>
            <Entry id={2} choice={this.choices[this.state.currentChoices[2]]} handlePress={this.updateChoice}/>
            <Entry id={3} choice={this.choices[this.state.currentChoices[3]]} handlePress={this.updateChoice}/>
            <Button
              testID="submit-button"
              title="Submit"
              onPress={() => {this.updateHistory()}}
            />
          </View>
          <Text>{this.state.codeHistory}</Text>
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
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '20'
  }   
});
