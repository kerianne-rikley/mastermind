import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

const colourMap = {0:'#1e90ff', 1: '#ee82ee', 2: '#dc143c', 3: '#ff8c00', 4: '#ffd700', 5: '#228b22'};

export default class Entry extends React.Component{
    state = {value: 0};

    updateState = () => {
        this.setState({value: (this.state.value+1)%6})
    }

    render(){
        return (
            <View style={styles.container}>
                <Button
                    title={this.state.value}
                    color = {colourMap[this.state.value]}
                    onPress = {() => {this.updateState()}}
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
