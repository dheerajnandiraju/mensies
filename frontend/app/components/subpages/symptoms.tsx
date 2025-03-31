    import {Alert, View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
    import { useRouter } from 'expo-router';
    import { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MaterialIcons,MaterialCommunityIcons,Ionicons,Fontisto } from '@expo/vector-icons';

    export default function Sysmptoms() {
     
    const router = useRouter();
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({ title: "Select Symptom" });
      }, [navigation]);

      const currentMood=(mood:string)=>{
        console.log(mood);
        Alert.alert("mood selected: " + mood)
      }
    

    return (
        <View style={styles.container}>
        
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
        flex:1,
        backgroundColor: '#ECE5C7',
        borderRadius: 10,
        padding: 30,
        borderWidth: 1
    },
    heading: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600'
    },
    moods: {
        
        flex:1,
        columnGap: 20,
        rowGap:30,
        justifyContent: 'space-evenly',
        backgroundColor: '#CDC2AE',
        padding: 10,
        flexDirection:'row',
        flexWrap:'wrap',
        borderRadius: 10,
        borderWidth: 1
    },

    button:{
        alignItems:'center',
    }
    });
