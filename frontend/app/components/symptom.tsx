import React from 'react';
import {  Alert,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import {MaterialCommunityIcons, FontAwesome5,Fontisto} from '@expo/vector-icons';

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
        <Text>Cramps</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Back Pain')} style={styles.button}>
        <FontAwesome5 name="tired" size={24} color="black" />
        <Text>Back Pain</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Bloating')} style={styles.button}>
        <MaterialCommunityIcons name="emoticon-sick-outline" size={24} color="black" />
        <Text>Bloating</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Fatigue')} style={styles.button}>
        <Fontisto name="open-mouth" size={24} color="black" />
        <Text>Fatigue</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Drowsiness')} style={styles.button}>
        <MaterialCommunityIcons name="sleep" size={24} color="black" />
        <Text>Drowsiness</Text>
        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECE5C7',
    borderRadius: 10,
    padding: 10,
    borderWidth: 1,
    marginBottom:10,
  },
  heading: {
    fontSize: 20,
    color: 'black',
    fontWeight: '600'
  },
  moods: {
    justifyContent: 'space-between',
    backgroundColor: '#CDC2AE',
    padding: 10,
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1
  },

  button:{
    alignItems:'center',
  }
});
