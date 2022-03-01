import { StyleSheet,FlatList, Dimensions, Text, View } from 'react-native'
import React from 'react'
import CarItem from './CarItem'
import Header from './Header'

const CarList = () => {
  return (
    <View style={styles.container}>

        <FlatList data={data} 
        keyExtractor={(item)=> item.id} 
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={Dimensions.get('window').height}
        renderItem={({item:{name, image, tagline,taglineCTA}})=>(
          <CarItem name={name} image={image} tagline={tagline} taglineCTA={taglineCTA} />
        )}
        />
    </View>
  )
}

export default CarList

const styles = StyleSheet.create({
    container:{
        width: "100%",
    }
})


const data = [{
    id:'1',
    name: 'Model S',
    tagline: 'Starting at $69,420',
    image: require('../assets/images/ModelS.jpeg'),
  }, {
    id:'2',
    name: 'Model 3',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/Model3.jpeg'),
  }, {
    id:'3',
    name: 'Model X',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/ModelX.jpeg'),
  }, {
    id:'4',
    name: 'Model Y',
    tagline: 'Order Online for',
    taglineCTA: 'Touchless Delivery',
    image: require('../assets/images/ModelY.jpeg'),
  }]