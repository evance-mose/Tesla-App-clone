import { StyleSheet, Text, View, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'

const StyledButton = ({type, content, onPress}) => {
  const bg = type === 'primary'? '#171A2BCC' : '#FFFFFFA6';
  const txtColor = type !== 'primary'?  '#171A2BCC' : '#FFFFFFA6';

  return (
   <View style={styles.container}>
      <TouchableOpacity style={[styles.button, {backgroundColor: bg} ]} onPress={onPress}>
          <Text style={[styles.text, {color:txtColor}]} >{content}</Text>
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