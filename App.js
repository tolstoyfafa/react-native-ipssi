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



const App: () => React$Node = () => {

  return (
    <>
      <Station />
      <ClientApi />
    </>
  );
};



export default App;
