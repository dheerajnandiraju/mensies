import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';


const PlaceholderImage = require('../assets/images/Frame 60.png');


const IrregularPeriods = () => {
const router = useRouter();


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>

        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>


        {/* Logo and Title */}
        <View style={styles.imageTextContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
          <Text style={styles.text}>Syla.</Text>
        </View>


        {/* Question */}
        <Text style={styles.question}>
          Do you have irregular periods?
        </Text>


        {/* Description */}
        <Text style={styles.description}>
          Irregular periods are when your menstrual cycle comes early, late, skips, or changes in flow.
        </Text>



        {/* Buttons */}

        {/* yes */}
        <TouchableOpacity
         style={styles.button}
          onPress={() => {
          console.log('user selected: yes') ;
          router.push('/HealthConditions');
          }}
          >
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        {/* no */}
        <TouchableOpacity 
        style={styles.button} 
        onPress={() =>
        {
        console.log('user selected: no');
        router.push('/HealthConditions');
        }}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: wp('5%'),
  },

  backButton: {
    position: 'absolute',
    top: hp('6%'),
    left: wp('5%'),
    zIndex: 1,
  },

  imageTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp('5%'),
  },

  image: {
    width: wp('30%'),
    height: wp('30%'),
    //borderRadius: 18,
    marginRight: wp('3%'),
  }, 

  text: {
    color: '#000000',
    fontWeight: '600',
    fontSize: wp('15%'),
  },

  question: {
    fontSize: RFPercentage(3),
    textAlign: 'center',
    marginBottom: hp('1%'),
    width: wp('90%'),
  },

  description: {
    fontSize: RFPercentage(2),
    textAlign: 'center',
    marginBottom: hp('5%'),
    color: '#444',
    width: wp('90%'),
  },

  button: {
    width: wp('70%'),
    height: hp('6%'),
    borderRadius: wp('4%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },

  buttonText: {
    fontSize: RFPercentage(2.5),
  },

});

export default IrregularPeriods;
