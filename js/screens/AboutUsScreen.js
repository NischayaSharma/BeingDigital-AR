import React from 'react'
import { Dimensions, StyleSheet, Text, View,FlatList,Image } from 'react-native'

const {width,height}=Dimensions.get("window")
ABOUTUSDATA=[
    {
        id:1,
        image:"https://play-lh.googleusercontent.com/IeNJWoKYx1waOhfWF6TiuSiWBLfqLb18lmZYXSgsH1fvb8v1IYiZr5aYWe0Gxu-pVZX3",
        align:'odd',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris pellentesque nisi nec congue scelerisque.Cras faucibus vulputate est, sed elementum massa rhoncus et.Curabitur lorem tortor, mattis a volutpat a, dignissim eu nunc.Cras congue, urna nec pharetra viverra, risus metus consequat nibh, sed vulputate dolor urna sed dolor.Praesent id urna ligula.Cras porta turpis ac porttitor molestie.Aliquam maximus rutrum interdum.Aenean ut diam porttitor, euismod justo quis, fermentum neque. "
    },
    {
        id: 2,
        image: "https://5.imimg.com/data5/TJ/QM/MY-10416151/magic-square-rubic-cube-500x500.jpg",
        align:'even',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris pellentesque nisi nec congue scelerisque.Cras faucibus vulputate est, sed elementum massa rhoncus et.Curabitur lorem tortor, mattis a volutpat a, dignissim eu nunc.Cras congue, urna nec pharetra viverra, risus metus consequat nibh, sed vulputate dolor urna sed dolor.Praesent id urna ligula.Cras porta turpis ac porttitor molestie.Aliquam maximus rutrum interdum.Aenean ut diam porttitor, euismod justo quis, fermentum neque. "
    },
    {
        id:3,
        image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Square_-_black_simple.svg/1200px-Square_-_black_simple.svg.png",
        align:'odd',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris pellentesque nisi nec congue scelerisque.Cras faucibus vulputate est, sed elementum massa rhoncus et.Curabitur lorem tortor, mattis a volutpat a, dignissim eu nunc.Cras congue, urna nec pharetra viverra, risus metus consequat nibh, sed vulputate dolor urna sed dolor.Praesent id urna ligula.Cras porta turpis ac porttitor molestie.Aliquam maximus rutrum interdum.Aenean ut diam porttitor, euismod justo quis, fermentum neque. "
    },
    {
        id: 4,
        image: "https://i.vimeocdn.com/portrait/17653845_640x640",
        align:'even',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Mauris pellentesque nisi nec congue scelerisque.Cras faucibus vulputate est, sed elementum massa rhoncus et.Curabitur lorem tortor, mattis a volutpat a, dignissim eu nunc.Cras congue, urna nec pharetra viverra, risus metus consequat nibh, sed vulputate dolor urna sed dolor.Praesent id urna ligula.Cras porta turpis ac porttitor molestie.Aliquam maximus rutrum interdum.Aenean ut diam porttitor, euismod justo quis, fermentum neque. "
    },
]
export default function AboutUsScreen() {
    const renderAbout=({item})=>{
        if(item.align=="odd"){
        return(
          
                <View style={styles.aboutBar}>
                    <View style={{width:width/2}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Heading</Text>
                        <Text style={{textAlign:'justify',textJustify:'inter-word'}}>{item.content}</Text>
                    </View>
                    <Image
                        style={styles.aboutImages}
                        source={{
                        uri: item.image,
                        }}
                    />
                </View>
        )
        }else{
            return(
          
                <View style={styles.aboutBar}>
                    <Image
                        style={styles.aboutImages}
                        source={{
                        uri: item.image,
                        }}
                    />
                    <View style={{width:width/2}}>
                        <Text style={{fontSize:18,fontWeight:'bold'}}>Heading</Text>
                        <Text style={{textAlign:'justify',textJustify:'inter-word'}}>{item.content}</Text>
                    </View>
                    
                </View>
        )
        }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>

                <Text style={{fontSize:25,fontWeight:'bold',color:'#00000070'}}>About Us</Text>
            </View>
            <FlatList
                data={ABOUTUSDATA}
                renderItem={item=>renderAbout(item)}
                keyExtractor={item=>item.id}
                contentContainerStyle={styles.list}
                showsVerticalScrollIndicator={false}
            />
            {/* <Text style={styles.text}>About Us</Text> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        // flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontSize:25,
        fontWeight:'500',
        color:'#00000070'
    },
    header:{
        backgroundColor:'#12c7c7',
        position:'absolute',
        top:0,
        width:width,
        height:height/12,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        alignItems:'center',
        justifyContent:'center',
        zIndex:100
    },
    aboutImages:{
        width:width/2.5,
        height:width/2.5
    },
    aboutBar:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:width-20,
        marginTop:20,
        alignItems:'center'
    },
    list:{
        paddingTop:(height/12)+10,
        paddingBottom:(height/12)+10,
        

    }
    

})
