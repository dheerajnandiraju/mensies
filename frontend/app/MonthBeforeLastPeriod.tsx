import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
  Platform,
  Alert,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';

const PlaceholderImage = require('../assets/images/Frame 60.png');

export default function MonthBeforeLastPeriod() {
  const router = useRouter();

  const [manualDate, setManualDate] = useState('');
  const [selectedDays, setSelectedDays] = useState<number | ''>('');
  const [showDatePicker, setShowDatePicker] = useState(false);

  // calendar date selection
  const handleDateChange = (
    event: DateTimePickerEvent,
    selectedDate?: Date
  ) => {
    if (Platform.OS === 'android') {
      setShowDatePicker(false); // close calendar on Android
    }
    if (selectedDate) {
      const formatted = selectedDate.toLocaleDateString('en-GB');
      setManualDate(formatted);
    }
  };

  const handleNext = () => {
  if (!manualDate || !selectedDays) {
    Alert.alert(
      'Missing Info',
      'Please select both the date and the number of days.'
    );
    return;
  }

  console.log('Selected Date:', manualDate);
  console.log('Selected Days:', selectedDays);

  // Navigate into your "Home" tab (app/(tabs)/index.tsx)
  router.push('/(tabs)')
  // Or, if you want to replace the history entry:
  // router.replace('/');
};


  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ flex: 1, backgroundColor: '#C2DED1', padding: wp('5%') }}>
        {/* Back Button */}
        <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>

        {/* Logo + Syla */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: hp('2%'),
          }}
        >
          <Image
            source={PlaceholderImage}
            style={{
              width: wp('30%'),
              height: wp('65%'),
              marginRight: wp('3%'),
            }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: wp('15%'),
              fontWeight: '600',
              marginTop: wp('2%'),
            }}
          >
            Syla.
          </Text>
        </View>

        {/* Date Question */}
        <Text style={{ fontSize: wp('5%'), marginBottom: hp('1.5%') }}>
          When did your period the month before last month?
        </Text>

        {/* Date Picker Button */}
        <TouchableOpacity
          onPress={() => setShowDatePicker(true)}
          style={{
            backgroundColor: '#fff',
            padding: wp('4%'),
            borderRadius: wp('3%'),
            marginTop: hp('1.5%'),
          }}
        >
          <Text
            style={{
              fontSize: wp('4.5%'),
              color: manualDate ? '#000' : '#888',
            }}
          >
            {manualDate || 'Select date'}
          </Text>
        </TouchableOpacity>

        {/* Calendar Picker */}
        {showDatePicker && (
          <DateTimePicker
            value={new Date()}
            mode="date"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            maximumDate={new Date()}
            onChange={handleDateChange}
          />
        )}

        {/* Days Question */}
        <Text
          style={{ fontSize: wp('5%'), marginTop: hp('3%'), marginBottom: hp('2%') }}
        >
          How many days did it last?
        </Text>

        {/* Days Dropdown */}
        <View
          style={{
            backgroundColor: '#fff',
            borderRadius: wp('3%'),
            marginTop: hp('1.5%'),
            overflow: 'hidden',
            height: hp('8%'),
            justifyContent: 'center',
          }}
        >
          <Picker
            selectedValue={selectedDays}
            onValueChange={(itemValue) => setSelectedDays(itemValue)}
            style={{
              fontSize: wp('5%'),
              height: hp('8%'),
              paddingLeft: wp('2%'),
            }}
          >
            <Picker.Item label="Select days" value="" />
            {[...Array(10).keys()].map((i) => (
              <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
            ))}
          </Picker>
        </View>

        {/* Next Button */}
        <TouchableOpacity
          onPress={handleNext}
          style={{
            backgroundColor: '#354259',
            padding: wp('4%'),
            borderRadius: wp('4.5%'),
            marginTop: hp('4%'),
            alignItems: 'center',
          }}
        >
          <Text style={{ color: '#fff', fontSize: wp('4.5%') }}>Next</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  backButton: {
    position: 'absolute',
    top: hp('6%'),
    left: wp('5%'),
    zIndex: 1,
  },
});
