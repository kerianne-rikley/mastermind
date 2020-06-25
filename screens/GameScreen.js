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
      solution: [Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6),Math.floor(Math.random() * 6)],
      attempts: 0,
      isDisabled: false
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

    for(let index = 0; index < 4; index+=1){ // Find and record 'perfect match' (red)
      if (lastAttempt[index] === sol[index]){
        feedback.push(2);
      } else {
        idxA.push(lastAttempt[index]);
        idxS.push(sol[index]);
      }
    }

    while(iAttempts < idxA.length){ // Find and record 'partial match' (white)
      while(iSolution < idxS.length){
        if (idxA[iAttempts] === idxS[iSolution]){
          feedback.push(0)
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

    if(this.state.attempts > 8){
      this.setState({isDisabled: true});
    }
  }

  resetGame = () => {
    const newSolution = []

    for(let index = 0; index < 4; index+=1) {
      newSolution.push(Math.floor(Math.random() * 6))
    }

    this.setState({
      codeHistory: [[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6]],
      codeFeedback: [[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6]],
      currentChoices: [0,0,0,0],
      solution: [...newSolution],
      attempts: 0,
      isDisabled: false
    })
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <View style={styles.code}>
            <Entry id={0} choice={this.choices[this.state.currentChoices[0]]} handlePress={this.updateChoice} />
            <View style={styles.spacer2} />
            <Entry id={1} choice={this.choices[this.state.currentChoices[1]]} handlePress={this.updateChoice} />
            <View style={styles.spacer2} />
            <Entry id={2} choice={this.choices[this.state.currentChoices[2]]} handlePress={this.updateChoice} />
            <View style={styles.spacer2} />
            <Entry id={3} choice={this.choices[this.state.currentChoices[3]]} handlePress={this.updateChoice} />
            <View style={styles.spacer3} />
            <Button
              testID="submit-button"
              title="Submit"
              disabled={this.state.isDisabled}
              onPress={() => {this.updateHistory()}} 
            />
          </View>
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[0]} feedback={this.state.codeFeedback[0]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[1]} feedback={this.state.codeFeedback[1]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[2]} feedback={this.state.codeFeedback[2]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[3]} feedback={this.state.codeFeedback[3]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[4]} feedback={this.state.codeFeedback[4]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[5]} feedback={this.state.codeFeedback[5]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[6]} feedback={this.state.codeFeedback[6]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[7]} feedback={this.state.codeFeedback[7]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[8]} feedback={this.state.codeFeedback[8]} />
          <View style={styles.spacer} />
          <Attempt code={this.state.codeHistory[9]} feedback={this.state.codeFeedback[9]} />
          <View style={styles.spacer} />
  {/*        <Text>{this.state.solution}</Text> */}
          <View style={styles.code}>  
            <Button testID="home-button" title="Home" onPress={() => this.props.navigation.navigate("Home")} />
            <View style={styles.spacer3} />
            <View style={styles.spacer3} />
            <Button testID="reset-button" title="Reset" onPress={() => this.resetGame()} />
          </View>
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
    fontWeight: "bold",
    marginVertical: 10
  },
  code: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 1,
    marginRight: 1
  },
  history: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    padding: '20'
  },
  spacer: {
    height: 2
  },
  spacer2: {
    width: 2
  },
  spacer3: {
    width: 18
  }
});
