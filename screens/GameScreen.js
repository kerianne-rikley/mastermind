import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Entry from "../components/Entry";
import Attempt from "../components/Attempt";

export default class GameScreen extends React.Component {
  choices = [0,1,2,3,4,5];

  constructor(){
    super();
    this.state = {
      codeHistory: [[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6]],
      currentChoices: [0,0,0,0],
      attempts: 0
    };
  }

  updateChoice = (buttonId) => {
    const newChoiceId = (this.state.currentChoices[buttonId] + 1) % 6;
    const newChoices = this.state.currentChoices;
    newChoices[buttonId] = newChoiceId;
    this.setState(newChoices);
  }

  updateHistory = () => {
    const lastAttempt = [...this.state.currentChoices]
    this.state.codeHistory[this.state.attempts] = lastAttempt
    this.setState({currentChoices: [0,0,0,0], attempts: this.state.attempts+1});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.code}>
            <Entry id={0} choice={this.choices[this.state.currentChoices[0]]} handlePress={this.updateChoice} />
            <Entry id={1} choice={this.choices[this.state.currentChoices[1]]} handlePress={this.updateChoice} />
            <Entry id={2} choice={this.choices[this.state.currentChoices[2]]} handlePress={this.updateChoice} />
            <Entry id={3} choice={this.choices[this.state.currentChoices[3]]} handlePress={this.updateChoice} />
            <Button
              testID="submit-button"
              title="Submit"
              onPress={() => {this.updateHistory()}}
            />
          </View>
          <View style={styles.history}>
            <Attempt code={this.state.codeHistory[0]} />
            <Attempt code={this.state.codeHistory[1]} />
            <Attempt code={this.state.codeHistory[2]} />
            <Attempt code={this.state.codeHistory[3]} />
            <Attempt code={this.state.codeHistory[4]} />
            <Attempt code={this.state.codeHistory[5]} />
          {/* <Text>{this.state.codeHistory}</Text> */}
          </View>
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
  },
  history: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20'
  }
});
