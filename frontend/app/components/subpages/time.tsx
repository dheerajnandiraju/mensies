// import { Alert, View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { useState } from 'react';
// import useSleepTime from '../../hooks/sleepTime';

// export default function Time() {
//   const navigation = useNavigation();
//   const { sleepTime, setSleepTime } = useSleepTime(); // Get sleepTime and setSleepTime

//   // State to store input values
//   const [fromHours, setFromHours] = useState('');
//   const [fromMinutes, setFromMinutes] = useState('');
//   const [toHours, setToHours] = useState('');
//   const [toMinutes, setToMinutes] = useState('');

//   // Function to validate and calculate time difference
//   const handleSubmit = () => {
//     // Convert inputs to numbers
//     const fromHrs = parseInt(fromHours, 10);
//     const fromMins = parseInt(fromMinutes, 10);
//     const toHrs = parseInt(toHours, 10);
//     const toMins = parseInt(toMinutes, 10);

//     // Validation
//     if (
//       isNaN(fromHrs) ||
//       isNaN(fromMins) ||
//       isNaN(toHrs) ||
//       isNaN(toMins) ||
//       fromHrs < 0 ||
//       fromHrs > 23 ||
//       fromMins < 0 ||
//       fromMins > 59 ||
//       toHrs < 0 ||
//       toHrs > 23 ||
//       toMins < 0 ||
//       toMins > 59
//     ) {
//       Alert.alert('Invalid Time', 'Please enter valid times (HH: 0-23, MM: 0-59).');
//       return;
//     }

//     // Convert times to minutes for easier calculation
//     const fromTimeInMinutes = fromHrs * 60 + fromMins;
//     const toTimeInMinutes = toHrs * 60 + toMins;

//     // Calculate difference
//     let diffInMinutes = toTimeInMinutes - fromTimeInMinutes;

//     // Handle case where "To" time is earlier than "From" time (e.g., crossing midnight)
//     if (diffInMinutes < 0) {
//       diffInMinutes += 24 * 60; // Add 24 hours in minutes
//     }

//     // Convert difference back to hours and minutes
//     const hours = Math.floor(diffInMinutes / 60);
//     const minutes = diffInMinutes % 60;

//     // Update sleep time using the hook
//     setSleepTime([hours.toString(), minutes.toString()]);

//     // Optional: Keep the Alert for confirmation
//     Alert.alert('Time Duration', `${hours} hours and ${minutes} minutes`);
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.moods}>
//         <Text style={{ textAlign: 'center' }}>(enter your time in 24hrs format)</Text>

//         <View style={styles.timeContainer}>
//           {/* From Section */}
//           <View>
//             <Text style={{ fontWeight: '700', textAlign: 'center' }}>From</Text>
//             <View style={styles.inputRow}>
//               <TextInput
//                 style={styles.input}
//                 keyboardType="numeric"
//                 placeholder="Hrs"
//                 maxLength={2}
//                 value={fromHours}
//                 onChangeText={setFromHours}
//               />
//               <Text style={styles.colon}>:</Text>
//               <TextInput
//                 style={styles.input}
//                 keyboardType="numeric"
//                 placeholder="Min"
//                 maxLength={2}
//                 value={fromMinutes}
//                 onChangeText={setFromMinutes}
//               />
//             </View>
//           </View>

//           {/* To Section */}
//           <View style={{ marginTop: 30 }}>
//             <Text style={{ fontWeight: '700', textAlign: 'center' }}>To</Text>
//             <View style={styles.inputRow}>
//               <TextInput
//                 style={styles.input}
//                 keyboardType="numeric"
//                 placeholder="Hrs"
//                 maxLength={2}
//                 value={toHours}
//                 onChangeText={setToHours}
//               />
//               <Text style={styles.colon}>:</Text>
//               <TextInput
//                 style={styles.input}
//                 keyboardType="numeric"
//                 placeholder="Min"
//                 maxLength={2}
//                 value={toMinutes}
//                 onChangeText={setToMinutes}
//               />
//             </View>
//           </View>

//           {/* Submit Button */}
//           <TouchableOpacity onPress={handleSubmit}>
//             <Text style={styles.button}>Enter</Text>
//           </TouchableOpacity>

//           {/* Display Sleep Duration from Hook */}
//           {sleepTime[0] !== '' && sleepTime[1] !== '' && (
//             <View style={styles.resultContainer}>
//               <Text style={styles.resultText}>
//                 You slept {sleepTime[0]} hrs {sleepTime[1]} min
//               </Text>
//               <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 style={styles.backButton}
//               >
//                 <Text style={styles.backButtonText}>Back to home</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#ECE5C7',
//     borderRadius: 10,
//     padding: 30,
//     borderWidth: 1,
//   },
//   moods: {
//     flex: 1,
//     backgroundColor: '#CDC2AE',
//     padding: 20,
//     borderRadius: 10,
//     borderWidth: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   timeContainer: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//   },
//   inputRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 10,
//   },
//   input: {
//     height: 40,
//     borderWidth: 2,
//     padding: 10,
//     width: 60,
//     textAlign: 'center',
//     fontWeight: '900',
//     backgroundColor: '#fff',
//     borderRadius: 5,
//   },
//   colon: {
//     fontWeight: '900',
//     fontSize: 30,
//     marginHorizontal: 10,
//   },
//   button: {
//     backgroundColor: '#354259',
//     color: 'white',
//     textAlign: 'center',
//     paddingVertical: 10,
//     paddingHorizontal: 50,
//     borderRadius: 50,
//     marginTop: 50,
//     fontWeight: '700',
//   },
//   resultContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   resultText: {
//     fontSize: 16,
//     fontWeight: '700',
//     color: '#333',
//     marginBottom: 10,
//   },
//   backButton: {
//     backgroundColor: '#555',
//     paddingVertical: 8,
//     paddingHorizontal: 30,
//     borderRadius: 50,
//   },
//   backButtonText: {
//     color: 'white',
//     fontWeight: '600',
//     textAlign: 'center',
//   },
// });