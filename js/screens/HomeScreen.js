import React from 'react'
import { View, Text } from 'react-native'
import { ViroARSceneNavigator } from 'react-viro'
import HelloWorldSceneAR from './HelloWorldSceneAR'

const HomeScreen = ( product ) => {
    console.log("Product ==> ",product);
    return (
        <ViroARSceneNavigator initialScene={{ scene: HelloWorldSceneAR }} viroAppProps={product} />
    )
}

export default HomeScreen

