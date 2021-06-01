'use strict';

import React, { useState,useEffect } from 'react';

import {StyleSheet} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';

const HelloWorldSceneAR = () => {
  const [text,setText]=useState("...")
  console.log(ViroConstants.TRACKING_NORMAL);
  // _onInitialized = _onInitialized.bind(this);

  // _onInitialized = (state, reason) => {
  //   if (state == ViroConstants.TRACKING_NORMAL) {
  //     setText("HELLO WORLD")
  //   } else if (state == ViroConstants.TRACKING_NONE) {
  //     // Handle loss of tracking
  //   }
  // }
  // OK..
  const onInitialized = (data) => {
    console.log(data)
    if (text == ViroConstants.TRACKING_NORMAL) {
      console.error('Hello World');
      setText("Hello World");
    } else {
      setText(".....")
    }
    // if (text == ViroConstants.TRACKING_NONE)
  }

    return (
      <ViroARScene onTrackingUpdated={(data)=> onInitialized(data)} >
        <ViroText text={text} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
      </ViroARScene>
    );
}

var styles = StyleSheet.create({
  helloWorldTextStyle: {
    fontFamily: 'Arial',
    fontSize: 30,
    color: '#ffffff',
    textAlignVertical: 'center',
    textAlign: 'center',  
  },
});

export default HelloWorldSceneAR