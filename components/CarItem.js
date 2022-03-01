import { StyleSheet,Dimensions, Text, View, ImageBackground } from 'react-native'
import React from 'react'
import StyledButton from './StyledButton'

const CarItem = ({name, tagline, image, taglineCTA }) => {
  return (
    <View style={styles.carContainer}>
    <ImageBackground source={image} style={styles.images}/>
        <View style={styles.titles} >
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subTitle}>{tagline} {''}<Text style={styles.subTitle}>{taglineCTA}</Text></Text>
       
        </View>
       <View style={styles.buttonContainer}>
        <StyledButton content={"Custom Order"} type="primary" onPress={()=>console.log("clicked")} />
        <StyledButton content={"Existing Inventory"} type="secondary" onPress={()=>console.log("clicked")} />
       </View>
   
  </View> 
  )
}
export default CarItem

const styles = StyleSheet.create({
    carContainer:{
        width: '100%',
        height: Dimensions.get('window').height,
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
      subTitleCTA:{
        textDecorationLine: 'underline',
      },

      images: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        position: 'absolute',
      },
      buttonContainer:{
        position: 'absolute',
        bottom: 50,
        width: '100%'
      }
})