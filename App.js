import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StartMenu from './StartMenu';

const App = () => {
  return (
    <View style={styles.container}>
      <StartMenu />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
