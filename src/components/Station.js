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


export default Station = () =>
    <View>
        <Text style={styles.container}>Step One</Text>
        <Text>
            Edit App.js to change this screen and turn it
            into your app.
    </Text>
        <Text style={styles.welcome}>See Your Changes</Text>
        <Text>
            Press Cmd + R inside the simulator to reload
            your app’s code.
    </Text>
        <Text style={styles.container}>Debug</Text>
        <Text>
            Press Cmd + M or Shake your device to open the
            React Native Debug Menu.
    </Text>
        <Text style={styles.container}>Learn</Text>
        <Text>
            Read the docs to discover what to do next:
    </Text>
    </View>

