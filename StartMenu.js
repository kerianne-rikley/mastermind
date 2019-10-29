import * as React from 'react';
import { Stylesheet, View, Text, Button, Alert } from 'react-native';

export default class StartMenu extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Text>
                    Mastermind
                </Text>
                <Button
                    title="Start Game"
                    onPress={() => Alert.alert('Game Started')}
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
  });
  