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
        productName:"Filter Name",
        subtitle:"this is a subtilelelelhdhdhdhdhdhdhdhe"
    },
    {
        id:2,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
        productName:"Filter Name",
        subtitle:"this is a sub"
    },
    {
        id:3,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
        productName:"Filter Name",
        subtitle:"this is a sub"
    },
    {
        id:4,
        name:'filter',
        image:"https://image.shutterstock.com/image-photo/large-beautiful-drops-transparent-rain-600w-668593321.jpg",
        productName:"Filter Name",
        subtitle:"this is a sub"
    }
]
export default function BrowseScreen() {
    const [search,setSearch]=useState("")
    const [LIST,setLIST]=useState(DATA)

    

    const onTextChnage=(text)=>{
        setSearch(text)
        
    }

    const renderFilters=({item})=>{
        return(
            <TouchableOpacity style={styles.productStyle}>
                <Image
                    style={styles.mainImage}
                    source={{
                    uri: item.image,
                    }}
                />
                <Image
                    style={styles.tinyLogo}
                    source={{
                    uri: item.image,
                    }}
                />
                <Text style={styles.titltText} ellipsizeMode='tail'  numberOfLines={1}>{item.productName}</Text>
                <Text style={{width:width/4,textAlign:'center',marginLeft:-20}} ellipsizeMode='tail'  numberOfLines={1} >{item.subtitle}</Text>
            </TouchableOpacity>

        )
    }

    return (
        <View style={{paddingLeft:20,paddingTop:10}}>
            <View style={styles.topBar}>
                <TouchableOpacity>
                    <MaterialIcons name="keyboard-arrow-down" size={24} color={"#000000"}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.searchBar}>
                    <FontAwesome name="search" size={22} color={"#000000"} style={{marginLeft:20,marginTop:-3,marginRight:5}}/>
                    <TextInput
                        style={styles.input}
                        onChangeText={(text)=>onTextChnage(text)}
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
        width,
    },
    searchBar:{
        flexDirection:'row',
        alignItems:'center',
        // flex:1,
        width:width-50,
        backgroundColor:'#00000010',
        borderRadius:25
    },
    input:{
        // backgroundColor:'red',
        // flex:1
        width:width-50,
    },
    mainImage:{
        width:width/3.7,
        height:height/3.7,
        borderRadius:15,
        marginRight:20,
        
    },
    tinyLogo:{
        width:width/6,
        height:height/12,
        marginTop:-50,
        // resizeMode:'contain',
        borderRadius:width,
        marginLeft:-20,
        borderWidth:5,
        borderColor:'#ffffff'
    },
    list:{
        // flexDirection:'row',
        justifyContent:'space-between',
        paddingTop:20
    },
    productStyle:{
        flexDirection:'column',
        alignItems:'center',
        marginBottom:20,
        justifyContent:'center'
       
    },
    titltText:{
        fontSize:18,
        color:'#000000',
        fontWeight:"500",
        marginLeft:-20,
        textAlign:'center',
        width:width/4
    }
})
