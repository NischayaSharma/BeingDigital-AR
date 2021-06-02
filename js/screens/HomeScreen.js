import React from 'react'
import { View, Text } from 'react-native'
import { ViroARSceneNavigator } from 'react-viro'
import HelloWorldSceneAR from './HelloWorldSceneAR'

const HomeScreen = () => {
    return (
        <ViroARSceneNavigator initialScene={{ scene: HelloWorldSceneAR }} />
    )
}

export default HomeScreen

