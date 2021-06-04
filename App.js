
import React, { useState,useEffect, createRef } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions, SafeAreaView,FlatList,Image } from 'react-native';

import BrowseScreen from './js/screens/BrowseScreen';
import HomeScreen from './js/screens/HomeScreen';
import AboutUsScreen from './js/screens/AboutUsScreen'
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import Carousel from 'react-native-snap-carousel';



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
  const [select,setSelect]=useState(1)

  const [selectedProduct, setSelectedProduct] = useState({productUrl: 'Some Url'})

  flatlist = createRef();

  const filterClicked = (id) => {
    setSelectedProduct({ productUrl: DATA[id].text })
    setSelect(id+1)
    console.log("Clicked / Scrolled To: ", id);
  }
  
  
  const renderFlatList=({item})=>{
    return (
      <View>
        <TouchableOpacity style={select==item.id?styles.imageView:styles.imageNonView} onPress={() => filterClicked(item.id - 1)}>
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
        { screen==="Home"?
          <View style={{position:'absolute',bottom:80, width: '100%'}} >
            <Carousel
              ref={ref => carousel = ref}
              // layout={'default'}
              data={DATA}
              sliderWidth={width}
              itemWidth={100}
              renderItem={renderFlatList}
              onSnapToItem={index => filterClicked(index)} />
          </View> : null }
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
  },
  imageView:{
    width:100,
    height:100,
    
    marginRight:10,
    borderRadius:width,
    borderWidth:5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  }
})

