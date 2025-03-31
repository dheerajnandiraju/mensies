import React from 'react';
import {  Alert,Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

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
        <Text>Irritable</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Emotional')} style={styles.button}>
        <FontAwesome5 name="sad-cry" size={24} color="black" />
        <Text>Emotional</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Anxious')} style={styles.button}>
        <FontAwesome5 name="frown" size={24} color="black" />
        <Text>Anxious</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sad')} style={styles.button}>
        <FontAwesome5 name="sad-tear" size={24} color="black" />
        <Text>Sad</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Frustrated')} style={styles.button}>
        <FontAwesome5 name="grimace" size={24} color="black" />
        <Text>Frustrated</Text>
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
