import React from 'react'
import { StyleSheet, Text, View } from 'react-native'


export default function AboutUsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>About Us</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'500',
        color:'#00000070'
    }
})
