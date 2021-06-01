
import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


import { ViroARSceneNavigator } from 'react-viro';
import HelloWorldSceneAR from './js/HelloWorldSceneAR';


// var InitialARScene = require('./js/HelloWorldSceneAR');

const App  = () => {

  return (

    <ViroARSceneNavigator initialScene={{ scene: HelloWorldSceneAR }} />
  );
}

export default App;

