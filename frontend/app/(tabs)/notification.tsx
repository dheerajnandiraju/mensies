import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router'

export default function Notification() {
  return (
    <View
      style={ styles.container}
    >
      <Text style={styles.text}>page1.</Text>
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