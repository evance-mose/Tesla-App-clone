import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const StyledButton = () => {
  return (
   <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={()=> console.log("Press")}>
          <Text style={styles.text}>Custom Order</Text>
      </TouchableOpacity>
  </View>
  )
}

export default StyledButton

const styles = StyleSheet.create({
  container:{
    width: '100%',
    padding: 10,
   
    
  },
  button:{
    backgroundColor:'white',
    height: 40,
    borderRadius:20,
    justifyContent:'center',
    alignItems:'center' 

  },
  text:{
    fontSize:14,
    fontWeight:'600',
    textTransform:"uppercase"

  }

})