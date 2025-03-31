    import {Alert, View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
    import { useRouter } from 'expo-router';
    import { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MaterialIcons,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';

    export default function Moods() {
     
    const router = useRouter();
    const navigation = useNavigation();


    useEffect(() => {
        navigation.setOptions({ title: "Select Your Mood" });
      }, [navigation]);

      const currentMood=(mood:string)=>{
        console.log(mood);
        Alert.alert("mood selected: " + mood)
      }
    

    return (
        <View style={styles.container}>
        
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

        <TouchableOpacity onPress={()=>currentMood('Moody')} style={styles.button}>
        <FontAwesome5 name="meh" size={24} color="black" />
        <Text>Moody</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sensitive')} style={styles.button}>
        <MaterialIcons name="sentiment-dissatisfied" size={24} color="black" />
        <Text>Sensitive</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Affection')} style={styles.button}>
        <MaterialIcons name="favorite" size={24} color="black" />
        <Text>Affection</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Relaxed')} style={styles.button}>
        <FontAwesome5 name="smile" size={24} color="black" />
        <Text>Relaxed</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Loving')} style={styles.button}>
        <FontAwesome5 name="heart" size={24} color="black" />
        <Text>Loving</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Creative')} style={styles.button}>
        <FontAwesome5 name="paint-brush" size={24} color="black" />
        <Text>Creative</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Comfortable')} style={styles.button}>
        <FontAwesome5 name="smile-beam" size={24} color="black" />
        <Text>Comfortable</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Goofy')} style={styles.button}>
        <FontAwesome5 name="grin-squint" size={24} color="black" />
        <Text>Goofy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Happy')} style={styles.button}>
        <FontAwesome5 name="grin" size={24} color="black" />
        <Text>happy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Playful')} style={styles.button}>
        <FontAwesome5 name="grin-tongue" size={24} color="black" />
        <Text>Playful</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Empower')} style={styles.button}>
        <MaterialCommunityIcons name="arm-flex" size={24} color="black" />
        <Text>Empower</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Lonely')} style={styles.button}>
        <FontAwesome5 name="frown" size={24} color="black" />
        <Text>Lonely</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sleepy')} style={styles.button}>
        <Ionicons name="moon" size={24} color="black" />
        <Text>Sleepy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Thinking')} style={styles.button}>
        <MaterialCommunityIcons name="thought-bubble" size={24} color="black" />
        <Text>Thinking</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Excited')} style={styles.button}>
        <MaterialIcons name="stars" size={24} color="black" />
        <Text>Excited</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>currentMood('Celebrating')} style={styles.button}>
        <MaterialIcons name="celebration" size={24} color="black" />
        <Text>Celebrating</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Mind Blown')} style={styles.button}>
        <MaterialCommunityIcons name="head-lightbulb-outline" size={24} color="black" />
        <Text>Mind Blown</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Pleading')} style={styles.button}>
        <MaterialIcons name="emoji-emotions" size={24} color="black" />
        <Text>Pleading</Text>
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
