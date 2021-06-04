import React, { useState,useEffect } from 'react';

import {FlatList, StyleSheet, View,Text} from 'react-native';

import {
  ViroARScene,
  ViroText,
  ViroConstants,
} from 'react-viro';



const HelloWorldSceneAR = ( props ) => {
  const [text,setText]=useState("init")
  console.log("Tracking ==> ",ViroConstants.TRACKING_NORMAL);
  console.log("Inside AR Scene, Props ==>", props.arSceneNavigator.viroAppProps);
 
  const onInitialized = (data) => {
    console.log("initdata ==> ", data)
    if (data == ViroConstants.TRACKING_NORMAL) {
      setText(props != undefined ? props.arSceneNavigator.viroAppProps.product.productUrl : 'Hello World');
    } else {
      setText(".....")
    }
  }


    return (
      <View>
        <ViroARScene onTrackingUpdated={(data)=> onInitialized(data)} >
        {/* <ViroARScene> */}
          <ViroText text={props != undefined ? props.arSceneNavigator.viroAppProps.product.productUrl : 'Hello World'} scale={[.5, .5, .5]} position={[0, 0, -1]} style={styles.helloWorldTextStyle} />
        </ViroARScene>
      </View>

        
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