import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';

const MainNavigator = createSwitchNavigator({
  Home: StartScreen,
  Game: GameScreen,
})

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
