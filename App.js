import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import ErrorBoundary from "./ErrorBoundary";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";

const MainNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Game: GameScreen
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <ErrorBoundary>
        <View style={styles.container}>
          <AppContainer />
        </View>
      </ErrorBoundary>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
