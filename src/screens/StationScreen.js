import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'right',
        color: 'blue',
        margin: 10,
    }
});


export default StationScreen = () =>

    <View>
        <Text style={styles.container}>Sation Details</Text>
        <Text>
            Edit App.js to change this screen and turn it
            into your app.
    </Text>
    </View>

StationScreen.navigationOptions = {
    title: 'Details'
}