import * as React from 'react';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';

export default class GameScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Button
                    title="Home"
                    onPress={() => this.props.navigation.navigate('Home')}
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
        marginVertical: 10,
    },
});
  