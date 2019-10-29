import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import StartMenu from './StartMenu';
import GameScreen from './GameScreen';

const MainNavigator = createSwitchNavigator({
  Home: StartMenu,
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
