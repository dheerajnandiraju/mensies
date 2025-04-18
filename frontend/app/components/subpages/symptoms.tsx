    import {Alert, View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
    import { useRouter } from 'expo-router';
    import { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { MaterialIcons,MaterialCommunityIcons,Ionicons,Fontisto,FontAwesome } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

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
        <Ionicons name="balloon-outline" size={24} color="black" />
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

        <TouchableOpacity onPress={()=>currentMood('Mood Swings')} style={styles.button}>
        <MaterialIcons name="mood-bad" size={24} color="black" />
        <Text>Mood swings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Breast tenderness')} style={styles.button}>
        <FontAwesome name="heart-o" size={24} color="black" />
        <Text>Breast tenderness</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Food cravings')} style={styles.button}>
        <Ionicons name="fast-food-outline" size={24} color="black" />
        <Text>Food cravings</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Acne')} style={styles.button}>
        <MaterialCommunityIcons name="face-woman-outline" size={24} color="black" />
        <Text>Acne</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>currentMood('Nausea')} style={styles.button}>
        <Ionicons name="sad-outline" size={24} color="black" />
        <Text>Nausea</Text>
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
              fontSize: wp('3.5%'),
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
          