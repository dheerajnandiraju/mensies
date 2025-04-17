import React from 'react';
import {  Alert,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Mood() {
  const router = useRouter();

const currentMood=(mood:string)=>{
        console.log(mood);
        Alert.alert("mood selected: " + mood)
      }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.heading}>Mood</Text>
        <TouchableOpacity onPress={() => router.push('/components/subpages/moods')}>
          <AntDesign style={{ marginRight: 5 }} name="doubleright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.moods}>
        <TouchableOpacity onPress={()=>currentMood('Irritable')} style={styles.button}>
        <FontAwesome5 name="angry" size={24} color="black" />
        <Text style={styles.text}>Irritable</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Emotional')} style={styles.button}>
        <FontAwesome5 name="sad-cry" size={24} color="black" />
        <Text style={styles.text}>Emotional</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Anxious')} style={styles.button}>
        <FontAwesome5 name="frown" size={24} color="black" />
        <Text style={styles.text}>Anxious</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sad')} style={styles.button}>
        <FontAwesome5 name="sad-tear" size={24} color="black" />
        <Text style={styles.text}>Sad</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Frustrated')} style={styles.button}>
        <FontAwesome5 name="grimace" size={24} color="black" />
        <Text style={styles.text}>Frustrated</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECE5C7',
    borderRadius: wp('2.5%'),
    padding: wp('4%'),
    borderWidth: 1,
    marginBottom: hp('2%'),
  },
  heading: {
    fontSize: wp('3.5%'),
    color: 'black',
    fontWeight: '600',
  },
  moods: {
    justifyContent: 'space-between',
    backgroundColor: '#CDC2AE',
    paddingHorizontal: hp('1%'),
    paddingVertical: wp('3%'),
    flexDirection: 'row',
   // flexWrap: 'wrap', // Optional: helps wrap mood buttons if more are added
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    //rowGap: hp('2%'), // Add if you want spacing between rows
    //columnGap: wp('3%'), // Add if you want spacing between columns
  },
  button: {
    alignItems: 'center',
    width: 'auto',
   // marginBottom: hp('2%'),
  },
  text:{
    fontSize: wp('2.5%'),
    color: 'black',
  }
});