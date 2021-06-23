import React,{useState} from 'react'
import { StyleSheet, Text, View,TouchableOpacity,TextInput,Dimensions,FlatList ,Image} from 'react-native'
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import HomeScreen from './HomeScreen'
import { ViroARSceneNavigator } from 'react-viro'
import HelloWorldSceneAR from './HelloWorldSceneAR'

const {width,height}=Dimensions.get("window")

export default function BrowseScreen() {
    const [search,setSearch]=useState("")
    const [list,setList]=useState(DATA)
    const [selectedProduct, setSelectedProduct] = useState({ productUrl: "Some Url" })
    const [showCam, setShowCam]=useState(false)

    const onTextChnage=(text)=>{
        setSearch(text);
        if(text != "") {
            setList(filterItems(text));
            console.log(filterItems(text));
        } else {
            setList(DATA)
        }
        
    }

    const filterItems = (searchTerm) => {
        return list.filter(item => {
            return item.text.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    const filterClicked = (id) => {
        setSelectedProduct({ productUrl: DATA[id].text })
        setShowCam(true);
        // setSelect(id + 1)
        console.log("Clicked / Scrolled To: ", id);
    }

    const renderFilters=({item})=>{
        console.log("browse",item)
        return(
            <TouchableOpacity style={styles.productStyle} onPress={() => filterClicked(item.id - 1)}>
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
                <Text style={styles.titltText} ellipsizeMode='tail'  numberOfLines={1}>{item.text}</Text>
                <Text style={{width:width/4,textAlign:'center',marginLeft:-20,color:"#000000"}} ellipsizeMode='tail'  numberOfLines={1} >{item.subtitle}</Text>
            </TouchableOpacity>

        )
    }

    return (
        <View style={styles.container}>
            { showCam ?
                <HomeScreen product = { selectedProduct } />
                :
                <View style={{ paddingLeft: 20, paddingTop: 10 }}>
                {/* {showCam ? <ViroARSceneNavigator initialScene={{ scene: HelloWorldSceneAR }} viroAppProps={{product: selectedProduct}} />: null} */}
                <View style={styles.topBar}>
                    <TouchableOpacity>
                        <MaterialIcons name="keyboard-arrow-down" size={24} color={"#000000"} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.searchBar}>
                        <FontAwesome name="search" size={2} color={"#000000"} style={{ marginLeft: 20, marginTop: -3, marginRight: 5 }} />
                        <TextInput
                            style={styles.input}
                            onChangeText={(text) => onTextChnage(text)}
                            value={search}
                            placeholder="Search"
                        />
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={list}
                    renderItem={item => renderFilters(item)}
                    keyExtractor={item => item.id}
                    numColumns={3}
                    contentContainerStyle={styles.list}
                />
                </View> 
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent:'center',


        backgroundColor: '#ffffff'
    },
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
        paddingTop:20,
        paddingBottom:height/6
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
