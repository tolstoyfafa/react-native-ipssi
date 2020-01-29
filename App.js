/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import ClientApi from './src/components/ClientApi';
import Station from './src/components/Station';
import AppNavigator from './src/navigation/AppNavigator';



const App: () => React$Node = () => {

  return (
    <>
      <ClientApi />
      <AppNavigator />
    </>
  );
};



export default App;
