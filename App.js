/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import AppNavigator from './src/navigation/AppNavigator';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';



const App: () => React$Node = () => {

  return (
    <>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});



export default App;
