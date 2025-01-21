import { Dimensions, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { legalArr } from '../data/data'
import { useNavigation } from '@react-navigation/native'

const Legal = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContaier}>
        <Image source={require("../assets/legal.png")} style={styles.legalImage}></Image>
      </View>
      <View>
        {legalArr.map((arr)=>(
          <TouchableOpacity key={arr} style={styles.card} onPress={()=>(navigation.navigate(arr))}>
            <Text style={styles.cardText}>{arr}</Text>
            <Image source={require("../assets/icons/right.png")} style={styles.arrowImage}></Image>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default Legal

const styles = StyleSheet.create({
  container:{flex:1,width:Dimensions.get("screen").width},
  legalImage:{alignSelf:"center",height:200,width:350},
  imageContaier:{backgroundColor:"white",padding:10,marginBottom:10},
  card:{
    flexDirection:"row",
    width:"99%",
    justifyContent:"space-between",
    backgroundColor:"white",
    padding:10,
    marginBottom:2,
    alignItems:"center",
    height:60
  },
  arrowImage:{
    height:25,
    width:25
  },
  cardText:{
    fontSize:17
  }
})