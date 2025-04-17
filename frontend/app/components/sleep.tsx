import React, { useState } from 'react';
import { Alert, Text, View, StyleSheet, TouchableOpacity, TextInput, Modal } from 'react-native';
import useSleepTime from '../hooks/sleepTime';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


export default function Sleep() {
  const { sleepTime, setSleepTime } = useSleepTime();
  const [modalVisible, setModalVisible] = useState(false);

  // State for Time inputs
  const [fromHours, setFromHours] = useState('');
  const [fromMinutes, setFromMinutes] = useState('');
  const [toHours, setToHours] = useState('');
  const [toMinutes, setToMinutes] = useState('');

  // Function to validate and calculate time difference
  const handleSubmit = () => {
    // Convert inputs to numbers
    const fromHrs = parseInt(fromHours, 10);
    const fromMins = parseInt(fromMinutes, 10);
    const toHrs = parseInt(toHours, 10);
    const toMins = parseInt(toMinutes, 10);

    // Validation
    if (
      isNaN(fromHrs) ||
      isNaN(fromMins) ||
      isNaN(toHrs) ||
      isNaN(toMins) ||
      fromHrs < 0 ||
      fromHrs > 23 ||
      fromMins < 0 ||
      fromMins > 59 ||
      toHrs < 0 ||
      toHrs > 23 ||
      toMins < 0 ||
      toMins > 59
    ) {
      Alert.alert('Invalid Time', 'Please enter valid times (HH: 0-23, MM: 0-59).');
      return;
    }

    // Convert times to minutes for easier calculation
    const fromTimeInMinutes = fromHrs * 60 + fromMins;
    const toTimeInMinutes = toHrs * 60 + toMins;

    // Calculate difference
    let diffInMinutes = toTimeInMinutes - fromTimeInMinutes;

    // Handle case where "To" time is earlier than "From" time
    if (diffInMinutes < 0) {
      diffInMinutes += 24 * 60;
    }

    // Convert difference back to hours and minutes
    const hours = Math.floor(diffInMinutes / 60);
    const minutes = diffInMinutes % 60;

    // Update sleep time
    setSleepTime([hours.toString(), minutes.toString()]);

    // Clear inputs and close modal
    setFromHours('');
    setFromMinutes('');
    setToHours('');
    setToMinutes('');
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
        <Text style={styles.heading}>Sleep</Text>
      </View>

      <View style={styles.moods}>
        {sleepTime[0] === '' && sleepTime[1] === '' ? (
          <View style={{ flex: 1, justifyContent: 'center' }}>
              <Text style={styles.label}>Enter your sleep</Text>
            <Text style={styles.timePlaceholder}>From: --:--   To: --:--</Text>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <Text style={styles.sleepDuration}>
              {sleepTime[0]} hrs {sleepTime[1]} min
            </Text>
          </View>
        )}

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.button}>
            {sleepTime[0] === '' && sleepTime[1] === '' ? 'Enter' : 'Update'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Time Input Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={{ textAlign: 'center', marginBottom: 10 }}>
              (enter your time in 24hrs format)
            </Text>

            {/* From Section */}
            <View>
              <Text style={{ fontWeight: '700', textAlign: 'center' }}>From</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Hrs"
                  maxLength={2}
                  value={fromHours}
                  onChangeText={setFromHours}
                />
                <Text style={styles.colon}>:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Min"
                  maxLength={2}
                  value={fromMinutes}
                  onChangeText={setFromMinutes}
                />
              </View>
            </View>

            {/* To Section */}
            <View style={{ marginTop: 30 }}>
              <Text style={{ fontWeight: '700', textAlign: 'center' }}>To</Text>
              <View style={styles.inputRow}>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Hrs"
                  maxLength={2}
                  value={toHours}
                  onChangeText={setToHours}
                />
                <Text style={styles.colon}>:</Text>
                <TextInput
                  style={styles.input}
                  keyboardType="numeric"
                  placeholder="Min"
                  maxLength={2}
                  value={toMinutes}
                  onChangeText={setToMinutes}
                />
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity onPress={handleSubmit}>
                <Text style={styles.button}>Enter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={styles.cancelButton}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ECE5C7',
    borderRadius: wp('2.5%'),
    padding: wp('4%'),
    borderWidth: 1,
    marginBottom: hp('18%'),
  },
  heading: {
    fontSize: wp('5%'),
    color: 'black',
    fontWeight: '600',
  },
  moods: {
    backgroundColor: '#CDC2AE',
    padding: wp('4%'),
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: wp('4%'),
    fontWeight: '600',
    marginBottom: hp('1%'),
  },
  timePlaceholder: {
    fontSize: wp('4%'),
    color: '#555',
  },
  sleepDuration: {
    fontSize: wp('6%'),
    fontWeight: '700',
    color: '#333',
  },
  button: {
    backgroundColor: '#354259',
    color: 'white',
    textAlign: 'center',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    borderRadius: wp('10%'),
    fontWeight: '700',
    fontSize: wp('3.5%'),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#CDC2AE',
    borderRadius: wp('2.5%'),
    padding: wp('5%'),
    width: '80%',
    alignItems: 'center',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: hp('1%'),
  },
  input: {
    height: hp('5%'),
    borderWidth: 2,
    padding: wp('2%'),
    width: wp('15%'),
    textAlign: 'center',
    fontWeight: '900',
    backgroundColor: '#fff',
    borderRadius: wp('2%'),
    fontSize: wp('3%'),
  },
  colon: {
    fontWeight: '900',
    fontSize: wp('8%'),
    marginHorizontal: wp('2.5%'),
  },
  modalButtons: {
    flexDirection: 'row',
    marginTop: hp('2%'),
    justifyContent: 'space-between',
    width: '100%',
  },
  cancelButton: {
    backgroundColor: '#555',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('8%'),
    borderRadius: wp('10%'),
  },
  cancelButtonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
    fontSize: wp('3.5%'),
  },
});