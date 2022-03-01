import { StatusBar } from 'expo-status-bar';
import { StyleSheet, FlatList, Dimensions, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import CarList from './components/CarList';
import Header from './components/Header';


export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarList/>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%'
  },
 
});


