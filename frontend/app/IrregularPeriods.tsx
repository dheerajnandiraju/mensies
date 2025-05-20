
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useRouter } from 'expo-router';


// Importing image
const PlaceholderImage = require('@/assets/images/Frame 60.png');

const IrregularPeriods = () => {
    const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
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
        <TouchableOpacity style={styles.button} onPress={() => router.push('/HealthConditions')}>
          <Text style={styles.buttonText}>Yes</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push('/HealthConditions')}>
          <Text style={styles.buttonText}>No</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C2DED1',
      alignItems: 'center',
      justifyContent: 'center',
      padding: wp('5%'),
    },
    imageTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: hp('5%'),
    },
    image: {
      width: wp('12%'),
      height: wp('12%'),
      borderRadius: 20,
      marginRight: wp('2%'),
    },
    text: {
      color: '#000000',
      fontWeight: '600',
      fontSize: wp('10%'),
    },
  question: {
    fontSize: RFPercentage(2.8),
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
    borderRadius: wp('3%'),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: hp('2%'),
  },
  buttonText: {
    fontSize: RFPercentage(2.2),
  },
});

export default IrregularPeriods;
