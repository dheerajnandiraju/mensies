import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CalendarComponent from "../components/calendarComponent";
import { useState } from "react";
import Mood from "../components/mood";
import Symptom from "../components/symptom";
//import { ScrollView } from "react-native-gesture-handler";

export default function Index() {
  const [selected,setSelected]=useState('menstrual')
  return (
    <ScrollView
      style={ styles.container}
    >
       <StatusBar style="dark" />
      <View style={styles.Calender}>
        <Text style={styles.heading}>Calendar</Text>
        <CalendarComponent selected={selected}/>
      </View>
      {/* <TouchableOpacity onPress={()=>setSelected(selected==='menstrual'?'conception':'menstrual')}>
        <Text>
          {selected}
        </Text>
      </TouchableOpacity> */}
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={selected=='menstrual'?styles.phaseButtonActive:styles.phaseButtonInactive}  onPress={()=>setSelected('menstrual')}>
        <Text style={styles.phaseButtonText}>menstrual Phase</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={selected=='conception'?styles.phaseButtonActive:styles.phaseButtonInactive}  onPress={()=>setSelected('conception')}>
        <Text>conception Phase</Text>
      </TouchableOpacity>
      </View>

      <Mood/>

      <Symptom/>
  
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container :{
    flex:1,
    backgroundColor: '#C2DED1',
    paddingTop:50,
    padding:10,
   
  },
  heading:{
    fontSize:20,
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
  },

  buttonContainer:{
    //flex:1,
    marginVertical :10,
    flexDirection:'row',
    justifyContent: 'space-between'
  },
  phaseButtonActive:{
    backgroundColor: '#CDC2AE',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
	    width: 10,
	    height: 2,
    },
    shadowOpacity: 100,
    shadowRadius: 0,
    elevation: 5,
  
  },
  phaseButtonInactive:{
    backgroundColor: '#ECE5C7',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderWidth: 1,
  
  },

  phaseButtonText:{
    fontSize: 15,
  }
})