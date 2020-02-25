import * as React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Entry from "../components/Entry";
import Attempt from "../components/Attempt";

export default class GameScreen extends React.Component {
  choices = [0,1,2,3,4,5];

  constructor(){
    super();
    this.state = {
      codeHistory: [[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6]],
      codeFeedback: [[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6]],
      currentChoices: [0,0,0,0],
      solution: [1,2,3,3],
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
    const sol = this.state.solution
    const results = [6,6,6,6]
    const idxA = []
    const idxS = []
    const feedback = []
    let iAttempts = 0
    let iSolution = 0

    for(let index = 0; index < 4; index+=1){
      if (lastAttempt[index] !== sol[index]){
        idxA.push(lastAttempt[index]);
        idxS.push(sol[index]);
      } else {
        feedback.push(2);
      }
    }
    
    while(iAttempts < idxA.length){
      while(iSolution < idxS.length){
        if (lastAttempt[idxA[iAttempts]] === sol[idxS[iSolution]]){
          feedback.push(7)
          idxS.splice(iSolution,1)
          iSolution=5
        }
        iSolution+=1
      }
      iAttempts+=1
      iSolution = 0
    }


    for(let idx = 0; idx < feedback.length; idx+=1){
      results[idx] = feedback[idx]
    }

    this.state.codeHistory[this.state.attempts] = lastAttempt
    this.state.codeFeedback[this.state.attempts] = results
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
            <Button testID="submit-button" title="Submit" onPress={() => {this.updateHistory()}} />
          </View>
          <Attempt code={this.state.codeHistory[0]} feedback={this.state.codeFeedback[0]} />
          <Attempt code={this.state.codeHistory[1]} feedback={this.state.codeFeedback[1]} />
          <Attempt code={this.state.codeHistory[2]} feedback={this.state.codeFeedback[2]} />
          <Attempt code={this.state.codeHistory[3]} feedback={this.state.codeFeedback[3]} />
          <Attempt code={this.state.codeHistory[4]} feedback={this.state.codeFeedback[4]} />
          <Attempt code={this.state.codeHistory[5]} feedback={this.state.codeFeedback[5]} />
          <Attempt code={this.state.codeHistory[6]} feedback={this.state.codeFeedback[6]} />
          <Attempt code={this.state.codeHistory[7]} feedback={this.state.codeFeedback[7]} />
          <Attempt code={this.state.codeHistory[8]} feedback={this.state.codeFeedback[8]} />
          <Attempt code={this.state.codeHistory[9]} feedback={this.state.codeFeedback[9]} />
          <Text>{this.state.attempts}</Text>
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
