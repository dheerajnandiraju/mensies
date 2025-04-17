    import {Alert, View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
    import { useRouter } from 'expo-router';
    import { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MaterialIcons,MaterialCommunityIcons,Ionicons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
        <Text style={styles.heading}>Irritable</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Emotional')} style={styles.button}>
        <FontAwesome5 name="sad-cry" size={24} color="black" />
        <Text style={styles.heading}>Emotional</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Anxious')} style={styles.button}>
        <FontAwesome5 name="frown" size={24} color="black" />
        <Text style={styles.heading}>Anxious</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sad')} style={styles.button}>
        <FontAwesome5 name="sad-tear" size={24} color="black" />
        <Text style={styles.heading}>Sad</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Frustrated')} style={styles.button}>
        <FontAwesome5 name="grimace" size={24} color="black" />
        <Text style={styles.heading}>Frustrated</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Moody')} style={styles.button}>
        <FontAwesome5 name="meh" size={24} color="black" />
        <Text style={styles.heading}>Moody</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sensitive')} style={styles.button}>
        <MaterialIcons name="sentiment-dissatisfied" size={24} color="black" />
        <Text style={styles.heading}>Sensitive</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Affection')} style={styles.button}>
        <MaterialIcons name="favorite" size={24} color="black" />
        <Text style={styles.heading}>Affection</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Relaxed')} style={styles.button}>
        <FontAwesome5 name="smile" size={24} color="black" />
        <Text style={styles.heading}>Relaxed</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Loving')} style={styles.button}>
        <FontAwesome5 name="heart" size={24} color="black" />
        <Text style={styles.heading}>Loving</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Creative')} style={styles.button}>
        <FontAwesome5 name="paint-brush" size={24} color="black" />
        <Text style={styles.heading}>Creative</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Comfortable')} style={styles.button}>
        <FontAwesome5 name="smile-beam" size={24} color="black" />
        <Text style={styles.heading}>Comfortable</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Goofy')} style={styles.button}>
        <FontAwesome5 name="grin-squint" size={24} color="black" />
        <Text style={styles.heading}>Goofy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Happy')} style={styles.button}>
        <FontAwesome5 name="grin" size={24} color="black" />
        <Text style={styles.heading}>happy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Playful')} style={styles.button}>
        <FontAwesome5 name="grin-tongue" size={24} color="black" />
        <Text style={styles.heading}>Playful</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Empower')} style={styles.button}>
        <MaterialCommunityIcons name="arm-flex" size={24} color="black" />
        <Text style={styles.heading}>Empower</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Lonely')} style={styles.button}>
        <FontAwesome5 name="frown" size={24} color="black" />
        <Text style={styles.heading}>Lonely</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Sleepy')} style={styles.button}>
        <Ionicons name="moon" size={24} color="black" />
        <Text style={styles.heading}>Sleepy</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Thinking')} style={styles.button}>
        <MaterialCommunityIcons name="thought-bubble" size={24} color="black" />
        <Text style={styles.heading}>Thinking</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Excited')} style={styles.button}>
        <MaterialIcons name="stars" size={24} color="black" />
        <Text style={styles.heading}>Excited</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={()=>currentMood('Celebrating')} style={styles.button}>
        <MaterialIcons name="celebration" size={24} color="black" />
        <Text style={styles.heading}>Celebrating</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Mind Blown')} style={styles.button}>
        <MaterialCommunityIcons name="head-lightbulb-outline" size={24} color="black" />
        <Text style={styles.heading}>Mind Blown</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Pleading')} style={styles.button}>
        <MaterialIcons name="emoji-emotions" size={24} color="black" />
        <Text style={styles.heading}>Pleading</Text>
        </TouchableOpacity>

      </View>



        </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#ECE5C7',
          borderRadius: wp('2.5%'),
          padding: wp('6%'),
          borderWidth: 1,
        },
        heading: {
          fontSize: wp('2.5%'),
          color: 'black',
       
        },
        moods: {
          flex: 1,
          columnGap: wp('5%'),
          rowGap: hp('2.5%'),
          justifyContent: 'space-evenly',
          backgroundColor: '#CDC2AE',
          padding: wp('3%'),
          flexDirection: 'row',
          flexWrap: 'wrap',
          borderRadius: wp('2.5%'),
          borderWidth: 1,
        },
        button: {
          alignItems: 'center',
          width: wp('22%'),
          marginBottom: hp('1.5%'),
        },
      });
      