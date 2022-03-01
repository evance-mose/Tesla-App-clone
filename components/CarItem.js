import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import StyledButton from './StyledButton'

const CarItem = () => {
  return (
    <View style={styles.carContainer}>
    <ImageBackground source={require('../assets/images/ModelX.jpeg')} style={styles.image}>
        <View style={styles.titles} >
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subTitle} >Starting at $69,420</Text>
        </View>
        <StyledButton/>
    </ImageBackground>
   
  </View>
  )
}
export default CarItem

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: '100%',
        resizeMode:"contain"       
      },
      titles:{
        marginTop:"30%",
        width: '100%',
        alignItems: "center"  
      },
      title:{
        fontSize:40,
        fontWeight:'600'
      },
      subTitle:{
        fontSize:16,
        color: '#5c5e62'
        
      },
      image:{
        width: '100%',
        height: '100%',
      }
})