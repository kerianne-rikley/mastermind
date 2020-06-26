import React from "react";
import { StyleSheet, View } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import ErrorBoundary from "./ErrorBoundary";
import HomeScreen from "./screens/HomeScreen";
import GameScreen from "./screens/GameScreen";
import HowToScreen from "./screens/HowToScreen";

const MainNavigator = createSwitchNavigator({
  Home: HomeScreen,
  Game: GameScreen,
  HowTo: HowToScreen
});

const AppContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  render() {
    return (
      <View style={[{flex: 1}]}>
        <ErrorBoundary>
          <View style={styles.container}>
            <AppContainer />
          </View>
        </ErrorBoundary>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#454545",
    alignItems: "center",
    justifyContent: "center"
  }
});
