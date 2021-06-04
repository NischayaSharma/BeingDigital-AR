
import React, { useState,useEffect, createRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView,FlatList,Image } from 'react-native';


import { ViroARSceneNavigator } from 'react-viro';
import Router from './js/navigation/Router';
import HelloWorldSceneAR from './js/screens/HelloWorldSceneAR';
import BrowseScreen from './js/screens/BrowseScreen';
import HomeScreen from './js/screens/HomeScreen';
import AboutUsScreen from './js/screens/AboutUsScreen'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";



DATA=[
  {
    id:1,
    model: "",
    image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    text:"Filter1"
  },
  {
    id:2,
    image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    text:"Filter2"
  },
  {
    id:3,
    image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    text:"Filter3"
  },
  {
    id:4,
    image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    text:"Filter4"
  },
]
// var InitialARScene = require('./js/HelloWorldSceneAR');
const {width,height}=Dimensions.get("window")
const App  = () => {
  const [screen,setScreen]=useState("Home")

  const [selectedProduct, setSelectedProduct] = useState({productUrl: 'Some Url'})

  flatlist = createRef();

  const filterClicked = (item) => {
    setSelectedProduct({ productUrl: item.text })
    flatlist.current.scrollToOffset({offset: 110, animated: true})
  }
  
  
  const renderFlatList=({item})=>{
    return (
      <View>
        <TouchableOpacity style={styles.imageView} onPress={() => filterClicked(item)}>
        <Image
            style={styles.productImage}
            source={{
            uri: item.image,
            }}
        />
        </TouchableOpacity>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
       {screen==="Home"?<HomeScreen product={selectedProduct} />:null}
       {screen==="Browse"?<BrowseScreen/>:null}
       {screen==="About"?<AboutUsScreen/>:null}
      <View style={styles.BottomNavigation}>
        <TouchableOpacity style={styles.bottomTabs} onPress={()=>setScreen("About")} >
          <Entypo name="info-with-circle" size={23}  style={[styles.bottomTabsText,screen=="About"?{color:'#ffffff'}:{color:'#ffffff70'}]} />
          </TouchableOpacity >
          <TouchableOpacity style={styles.bottomTabs} onPress={()=>setScreen("Home")}>
          <Entypo name="camera" size={35}  style={[styles.bottomTabsText,screen=="Home"?{color:'#ffffff'}:{color:'#ffffff70'}]}/>
          </TouchableOpacity>
          <TouchableOpacity style={styles.bottomTabs} onPress={()=>setScreen("Browse")}>
          <Ionicons name="search-circle" size={32} style={[styles.bottomTabsText,screen=="Browse"?{color:'#ffffff'}:{color:'#ffffff70'}]}/>
          </TouchableOpacity>
        </View>
        <View style={{position:'absolute',bottom:80}} >
        <FlatList
            ref={flatlist}
            data={DATA}
            renderItem={(item)=>renderFlatList(item)}
            keyExtractor={item=>item.id}
            horizontal={true}
            contentContainerStyle={{paddingHorizontal:width/2.7}}
            showsHorizontalScrollIndicator={false}
            snapToAlignment={"center"}
            snapToInterval={110}
            // pagingEnabled={true}
            decelerationRate={0}
            onMomentumScrollEnd = {(event) => console.log("MOMENTUM ->",event)}
            // 2021-06-04 14:58:39.345 30839-30883/com.bdar W/RenderInspector: DequeueBuffer time out on com.bdar/com.bdar.MainActivity, count=60, avg=19 ms, max=42 ms.
        />
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
    backgroundColor:'#000000',
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
  },
  productImage:{
    width:80,
    height:80,
    borderRadius:100,
    
  

  },
  imageView:{
    width:100,
    height:100,
    // padding:10,
    borderRadius:100,
    marginRight:10,
    borderRadius:width,
    borderColor:'#000000',
    borderWidth:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

