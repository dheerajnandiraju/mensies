import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useRouter } from 'expo-router';

// ✅ Correct image path
const PlaceholderImage = require('../assets/images/Frame 60.png');

// ✅ Custom Checkbox Button Component
// ✅ Type definition for props
type CheckBoxButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

// ✅ Updated to accept props
const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <MaterialIcons
        name={selected ? 'check-box' : 'check-box-outline-blank'}
        size={wp('5%')}
        color="#000000"
        style={{ marginRight: wp('10%') }}
      />
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};


const HealthConditions = () => {
const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const router = useRouter(); 
const handlePress = (option: string) => {
  setSelectedOption(option); // ✅ No more TS error
  router.push('/LastMonthPeriod');
};




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
          Do you have any health conditions related to your periods?
        </Text>

        {[
          'Yeast infection',
          'Urinary tract infection',
          'bacterial vaginosis',
          'polycystic ovary syndrome(pcos)',
          'endometriosis',
          'fibroids',
          'i am not sure',
          'no, none of the above'
        ].map((label) => (
          <CheckBoxButton
            key={label}
            label={label}
            selected={selectedOption === label}
            onPress={() => handlePress(label)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

// ✅ Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#C2DED1',
    paddingTop: hp('5%'),
    paddingHorizontal: wp('5%'),
  },
  imageTextContainer: {
    alignItems: 'center',
    marginBottom: hp('3%'),
  },
  image: {
    width: wp('30%'),
    height: wp('30%'),
    resizeMode: 'contain',
  },
  text: {
    color: '#000000',
    fontWeight: '600',
    fontSize: wp('10%'),
  },
  question: {
    fontSize: RFPercentage(2.8),
    textAlign: 'center',
    marginBottom: hp('4%'),
    width: wp('90%'),
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 15,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: wp('80%'),
    marginBottom: hp('2%'),
  },
  buttonLabel: {
    color: '#000000',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },
});

export default HealthConditions;

