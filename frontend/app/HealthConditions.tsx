
import React, { useState } from 'react';
import {View,Text,TouchableOpacity,ScrollView,Image,StyleSheet,} from 'react-native';
import {widthPercentageToDP as wp,heightPercentageToDP as hp,} from 'react-native-responsive-screen';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const PlaceholderImage = require('../assets/images/Frame 60.png');
type CheckBoxButtonProps = {
  label: string;
  selected: boolean;
  onPress: () => void;
};

const CheckBoxButton: React.FC<CheckBoxButtonProps> = ({
  label,
  selected,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.checkbox}>
        {selected && <View style={styles.innerCircle} />}
      </View>
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
};

const HealthConditions = () => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const router = useRouter();

  const options = [
    'None',
    'Yeast infection',
    'Urinary tract infection',
    'Bacterial vaginosis',
    'Polycystic ovary syndrome (PCOS)',
    'Endometriosis',
    'Fibroids',
    'I am not sure',
    'No, none of the above',
  ];

  const handleSelect = (label: string) => {
    if (selectedOptions.includes(label)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== label));
    } else {
      setSelectedOptions([...selectedOptions, label]);
    }
  };

  const handleNext = () => {
    if (selectedOptions.length > 0) {
      console.log('selected options:' ,selectedOptions);
      console.log('Input:',selectedOptions);
      router.push('/LastMonthPeriod');
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        {/* Logo Row */}
        <View style={styles.logoRow}>
          <Image source={PlaceholderImage} style={styles.image} />
          <Text style={styles.logoText}>Syla.</Text>
        </View>

        {/* Question */}
        <Text style={styles.question}>
          Do you have any health conditions related to your periods?
        </Text>

        {/* Options */}
        {options.map((label) => (
          <CheckBoxButton
            key={label}
            label={label}
            selected={selectedOptions.includes(label)}
            onPress={() => handleSelect(label)}
          />
        ))}

        {/* Next Button */}
        {selectedOptions.length > 0 && (
          <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: wp('5%'),
    paddingTop: hp('6%'),
  },
  backButton: {
    position: 'absolute',
    top: hp('6%'),
    left: wp('5%'),
    zIndex: 1,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('2%'),
    marginBottom: hp('3%'),
  },
  logoText: {
    fontSize: RFPercentage(6),
    fontWeight: '600',
    marginLeft: wp('3.5%'),
    color: '#000',
  },
  image: {
    width: wp('30%'),
    height: hp('30%'),
    borderRadius: 999,
    resizeMode: 'contain',
  },
  question: {
    fontSize: RFPercentage(2.7),
    textAlign: 'center',
    marginTop: hp('-7%'),
    marginBottom: hp('4%'),
    width: wp('100%'),
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: wp('5%'),
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('3%'),
    alignItems: 'center',
    width: wp('87%'),
    marginBottom: hp('2%'),
  },
  buttonLabel: {
    color: '#000000',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },
  checkbox: {
    height: wp('8%'),
    width: wp('8%'),
    borderRadius: wp('4%'),
    borderWidth: 3,
    borderColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: wp('5%'),
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  innerCircle: {
    height: wp('4.5%'),
    width: wp('4.5%'),
    borderRadius: wp('2%'),
    backgroundColor: '#354259',
  },
  nextButton: {
    backgroundColor: '#354259',
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('20%'),
    borderRadius: wp('5%'),
    marginTop: hp('4%'),
    marginBottom: hp('3%'),
  },
  nextButtonText: {
    color: '#fff',
    fontSize: RFPercentage(2.5),
    fontWeight: '600',
  },
});

export default HealthConditions;
