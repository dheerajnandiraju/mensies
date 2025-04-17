import React from 'react';
import {  Alert,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import {MaterialCommunityIcons, FontAwesome5,Fontisto} from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Symptom() {
  const router = useRouter();

const currentMood=(mood:string)=>{
        console.log(mood);
        Alert.alert("Symptoms selected: " + mood)
      }
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.heading}>Symptoms</Text>
        <TouchableOpacity onPress={() => router.push('/components/subpages/symptoms')}>
          <AntDesign style={{ marginRight: 5 }} name="doubleright" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.moods}>
        <TouchableOpacity onPress={()=>currentMood('Cramps')} style={styles.button}>
        <FontAwesome5 name="user-injured" size={24} color="black" />
        <Text style={styles.text}>Cramps</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Back Pain')} style={styles.button}>
        <FontAwesome5 name="tired" size={24} color="black" />
        <Text style={styles.text}>Back Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Bloating')} style={styles.button}>
        <MaterialCommunityIcons name="emoticon-sick-outline" size={24} color="black" />
        <Text style={styles.text}>Bloating</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Fatigue')} style={styles.button}>
        <Fontisto name="open-mouth" size={24} color="black" />
        <Text style={styles.text}>Fatigue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Drowsiness')} style={styles.button}>
        <MaterialCommunityIcons name="sleep" size={24} color="black" />
        <Text style={styles.text}>Drowsiness</Text>
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