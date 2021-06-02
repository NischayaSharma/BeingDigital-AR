
import React, { useState,useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native';


import { ViroARSceneNavigator } from 'react-viro';
import Router from './js/navigation/Router';
import HelloWorldSceneAR from './js/screens/HelloWorldSceneAR';
import BrowseScreen from './js/screens/BrowseScreen';
import HomeScreen from './js/screens/HomeScreen';
import Entypo from "react-native-vector-icons/Entypo"
import Ionicons from "react-native-vector-icons/Ionicons"


// var InitialARScene = require('./js/HelloWorldSceneAR');
const {width,height}=Dimensions.get("window")
const App  = () => {
  const [screen,setScreen]=useState("Browse")
  return (
    <View style={styles.container}>
       {/* {screen==="Home"?<HomeScreen/>:null} */}
       {screen==="Browse"?<BrowseScreen/>:null}
       {/* {screen==="About"?<AboutUsScreen/>:null} */}
      <View style={styles.BottomNavigation}>
        <TouchableOpacity style={styles.bottomTabs}>
          <Entypo name="info-with-circle" size={23} color='#000000' style={styles.bottomTabsText} />
          </TouchableOpacity >
          <TouchableOpacity style={styles.bottomTabs}>
          <Entypo name="camera" size={35} color='#000000' style={styles.bottomTabsText}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTabs}>
          <Ionicons name="search-circle" size={32} color='#000000' style={styles.bottomTabsText}/>
          </TouchableOpacity>
        </View>
       
      </View>
    // <Router>
    // </Router>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    // justifyContent:'center',

 
    backgroundColor:'#ffffff'
  },
  BottomNavigation:{
    // justifyContent: 'flex-end',
    position:'absolute',
    bottom:0,
    backgroundColor:'#00000080',
    paddingVertical:10,
    // marginBottom: 0,
    // height:height/5,
    flexDirection:'row',
    alignItems:'center',
  
  },
  bottomTabs:{
    flex:1,
    // backgroundColor:'green',
    
  },
  bottomTabsText:{
    textAlign:'center'
  }
})

