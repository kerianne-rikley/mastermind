import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Entry extends React.Component{
    state = {value: 0};

    updateState = () => {
        this.setState({value: (this.state.value+1)%6})
    }

    render(){
        return (
            <View style={styles.container}>
                <Button
                    title='test'//{this.state}
                    onPress = {() => {this.updateState()}}
                />
                <Text>{this.state.value}</Text>
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
