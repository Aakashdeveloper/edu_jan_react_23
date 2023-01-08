import React from 'react';
import {View,Text,StyleSheet,ScrollView,Image} from 'react-native'


function Display(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return(
                    <View key={item.restaurant_id}>
                        <Image style={style.logo}
                        source={{uri:item.restaurant_thumb}}/>
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={style.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )

}

const style = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:42
    },
    logo:{
        width:170,
        height:170
    }
})

export default Display;