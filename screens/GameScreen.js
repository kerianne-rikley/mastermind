import * as React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import Entry  from '../components/Entry';


export default class GameScreen extends React.Component{
    render(){
        return (
            <View style={styles.container}>
                <Entry />
                <Button
                    testID="home-button"
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
  