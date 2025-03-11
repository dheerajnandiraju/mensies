import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  return (
    <View
      style={ styles.container}
    >
       <StatusBar style="dark" />
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#C2DED1',
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    color:'#fff'
  },
  button:{
    color:'#fff'
  }
})