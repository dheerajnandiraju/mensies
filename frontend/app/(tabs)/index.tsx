import { Text, View, StyleSheet, TouchableOpacity,ScrollView } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Link} from 'expo-router'
import { StatusBar } from 'expo-status-bar';
import CalendarComponent from "../components/calendarComponent";
import { useState,useEffect } from "react";
import Mood from "../components/mood";
import Symptom from "../components/symptom";
import Sleep from "../components/sleep";
//import { ScrollView } from "react-native-gesture-handler";
import menstrualDates from '../hooks/menstrualDate'

export default function Index() {
  const {date,setDate} = menstrualDates()
  const [confirmation,setConfirmation]=useState(false)
  const [selected,setSelected]=useState('menstrual')


useEffect(()=>{
  if(!date)
      setConfirmation(false)
},[date])

  return (
    <ScrollView
      style={ styles.container}
    >
       <StatusBar style="dark" />
      <View style={styles.Calender}>
        <Text style={styles.heading}>Calendar</Text>
        <CalendarComponent selected={selected}/>
         {date && !confirmation &&
         (<View style={styles.modalButtons}>
          <Text style={styles.modelText}>Did you get {"\n"} your period?</Text>
                      <TouchableOpacity >
                        <Text onPress={()=>setConfirmation(true)} style={styles.button}>Yes</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={()=>setConfirmation(false)}
                        style={styles.cancelButton}
                      >
                        <Text style={styles.cancelButtonText}>No</Text>
                      </TouchableOpacity>
                    </View>)}
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={selected=='menstrual'?styles.phaseButtonActive:styles.phaseButtonInactive}  onPress={()=>setSelected('menstrual')}>
        <Text style={styles.phaseButtonText}>menstrual Phase</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={selected=='conception'?styles.phaseButtonActive:styles.phaseButtonInactive}  onPress={()=>setSelected('conception')}>
        <Text style={styles.phaseButtonText}>conception Phase</Text>
      </TouchableOpacity>
      </View>

      <Mood/>

      <Symptom/>

      <Sleep/>
  
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
    paddingTop: hp('5%'),
    padding: wp('4%'),
  },
  heading: {
    fontSize: wp('5%'),
    color: 'black',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#354259',
    color: 'white',
    textAlign: 'center',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('1%'),
    borderRadius: wp('12%'),
    width: wp('20%'),
    fontWeight: '600',
  },
  Calender: {
    backgroundColor: '#ECE5C7',
    borderWidth: 1,
    borderRadius: wp('2%'),
    padding: wp('4%'),
  },
  buttonContainer: {
    flex: 1,
    marginVertical: hp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  phaseButtonActive: {
    backgroundColor: '#CDC2AE',
    borderRadius: wp('12%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    borderWidth: 1,
    elevation: 5,
    width:wp('45%'),
    alignItems:'center'
  },
  phaseButtonInactive: {
    backgroundColor: '#ECE5C7',
    borderRadius: wp('12%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    borderWidth: 1,
     width:wp('45%'),
    alignItems:'center'
  },
  phaseButtonText: {
    fontSize: wp('4%'),
    fontWeight:'600'
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    justifyContent: 'center',
    gap: wp('4%'),
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#555',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('5%'),
    borderRadius: wp('12%'),
    width: wp('20%'),
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
  modelText: {
    fontWeight: '600',
    fontSize: wp('4%'),
    textAlign: 'center',
  },
});
