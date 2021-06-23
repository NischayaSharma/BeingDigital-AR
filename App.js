
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
      name:'filter',
      image:"https://images-eu.ssl-images-amazon.com/images/I/41ApDHxyOQL._SY445_SX342_QL70_FMwebp_.jpg",
      text:"Filter 1",
      subtitle:"this is a subtile"

  },
  
  {
      id:2,
      name:'filter',
      image:"https://m.media-amazon.com/images/I/71DVgBTdyLL._AC_UY218_.jpg",
      text:"Filter 2",
      subtitle:"this is a subtile"

  },
  {
      id:3,
      name:'filter',
      image:"https://images-na.ssl-images-amazon.com/images/I/71KIBgL1xmS._SL1500_.jpg",
      text:"Filter 3",
      subtitle:"this is a subtile"

  },
  {
      id:4,
      name:'filter',
      image:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SX679_.jpg",
      text:"Filter 4",
      subtitle:"this is a subtile"

  },
  {
      id: 5,
      name: 'filter',
      image: "https://images-na.ssl-images-amazon.com/images/I/71pkQYAsvKL._SL1500_.jpg",
      text: "Filter 4.1",
      subtitle:"this is a subtile"

  },
  {
      id:6,
      name:'filter',
      image:"https://m.media-amazon.com/images/I/51x00TKVjLS._AC_UY218_.jpg",
      text:"Filter 5",
      subtitle:"this is a subtile"
  },
  {
      id: 7,
      name: 'filter',
      image: "https://images-na.ssl-images-amazon.com/images/I/61F91pD42cL._SL1500_.jpg",
      text: "Filter 6",
      subtitle: "this is a subtile"
  },
  {
      id:8,
      name:'filter',
      image:"https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SX679_.jpg",
      text:"Filter 7",
      subtitle:"this is a subtile"

  },
  {
      id: 9,
      name: 'filter',
      image: "https://images-na.ssl-images-amazon.com/images/I/71pkQYAsvKL._SL1500_.jpg",
      text: "Filter 8",
      subtitle:"this is a subtile"

  },
  
]
// var InitialARScene = require('./js/HelloWorldSceneAR');
const {width,height}=Dimensions.get("window")
const App  = () => {
  const [screen,setScreen]=useState("Browse")
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

