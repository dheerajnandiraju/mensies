import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CalendarComponent from "../components/calendarComponent";
import { useState } from "react";

export default function Index() {
  const [selected,setSelected]=useState('menstrual')
  return (
    <View
      style={ styles.container}
    >
       <StatusBar style="dark" />
      <View style={styles.Calender}>
        <Text style={styles.heading}>Calendar</Text>
        <CalendarComponent selected={selected}/>
      </View>
      <TouchableOpacity onPress={()=>setSelected(selected==='menstrual'?'conception':'menstrual')}>
        <Text>
          {selected}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#C2DED1',
    paddingTop:50,
    padding:10
  },
  heading:{
    color:'black',
    fontWeight: 600
  },
  button:{
    color:'#fff'
  },
  Calender:{
    backgroundColor:'#ECE5C7',
    borderWidth:1,
    borderRadius: 10,
    padding:10
  }
})