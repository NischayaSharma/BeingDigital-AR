import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Dimensions,FlatList ,Image} from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"

const {width,height}=Dimensions.get("window")

DATA=[
    {
        id:1,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:2,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:3,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
    },
]
export default function BrowseScreen() {
    const [search,setSearch]=useState("")

    const renderFilters=({item})=>{
        return(
            <View>
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: item.image,
                    }}
                />
            </View>

        )
    }

    return (
        <View style={{paddingLeft:20,paddingTop:10}}>
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-down" size={25} color={"#000000"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar}>
                    <FontAwesome name="search" size={24} color={"#000000"}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={setSearch}
                        value={search}
                        placeholder="Search"
                    />
                </TouchableOpacity>
            </View>
            {/* <View style={styles.filterDisplay}> */}
                <FlatList
                    data={DATA}
                    renderItem={item=>renderFilters(item)}
                    keyExtractor={item=>item.id}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                />
            {/* </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    topBar:{
        flexDirection:'row',
        // justifyContent:'space-between',
        alignItems:'center',
        width
    },
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        // flex:1,
        width:width-50,
        backgroundColor:'green'
    },
    input:{
        // backgroundColor:'red',
        // flex:1
        width:width-50,
    },
    tinyLogo:{
        width:width/3.7,
        height:height/3.7,
        borderRadius:20,
        marginRight:20,
        
    },
    list:{
        // flexDirection:'row',
        justifyContent:'space-between'
    }
})
