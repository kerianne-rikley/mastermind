import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

export default class HomeScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.titleCard}>
                    Mastermind
                </Text>
                <Button
                    testID="start-button"
                    title="Start Game"
                    onPress={() => this.props.navigation.navigate('Game')}
                />
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
    titleCard: {
        fontSize: 30,
        fontWeight: 'bold',
    }
});
  