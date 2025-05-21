
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';


const PlaceholderImage = require('@/assets/images/Frame 60.png');

export default function Index() {
const [username, setUsername] = useState('');
const [dob, setDob] = useState('');
const [password, setPassword] = useState('');

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



        {/* Username */}
        <Text style={styles.label}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#aaa"
          value={username}
          onChangeText={setUsername}
        />



        {/* Date of Birth */}
        <Text style={styles.label}>Date of Birth</Text>
        <TextInput
          style={styles.input}
          placeholder="DD/MM/YYYY"
          placeholderTextColor="#aaa"
          value={dob}
          onChangeText={setDob}
        />



        {/* Password */}
        <Text style={styles.label}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          placeholderTextColor="#aaa"
          value={password}
          onChangeText={setPassword}
        />



        {/* Sign In */}
        <TouchableOpacity style={styles.button} onPress={() =>{
          console.log("Username:", username);
          console.log("DOB:", dob);
          console.log("Password:", password);
         router.push('/IrregularPeriods');
        }}>
          <Text style={styles.buttonLabel}>Sign in</Text>
        </TouchableOpacity>
        <View style={styles.divider} />



        {/* Google Sign Up */}
        <TouchableOpacity style={styles.googleButton} onPress={() =>
          {
            console.log("Google Sign In pressed");
            router.push('/IrregularPeriods'); }}>
          <Image
            source={{
              uri: 'https://developers.google.com/identity/images/g-logo.png',
            }}
            style={styles.googleLogo}
          />
          <Text style={styles.googleButtonText}>Sign in with Google</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

//styles

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
    paddingHorizontal: wp('5%'),
    paddingTop: hp('8%'),
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
    justifyContent: 'center',
  },

  image: {
    width: wp('30%'),
    height: wp('30%'),
    borderRadius: 20,
    marginRight: wp('2%'),
  },

  text: {
    color: '#000000',
    fontWeight: '600',
    fontSize: wp('15%'),
    marginBottom: hp('1%'),
  },

  input: {
    backgroundColor: '#fff',
    padding: wp('3.5%'),
    borderRadius: 15,
    marginBottom: hp('2%'),
    fontSize: wp('4.5%'),
    color: '#000',
    elevation: 2,
    width: '100%',
  },

  label: {
    marginBottom: hp('0.6%'),
    fontSize: wp('4.5%'),
    fontWeight: '600',
    color: '#34495e',
    alignSelf: 'flex-start',
  },

  button: {
    backgroundColor: '#354259',
    borderRadius: 15,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },

  buttonLabel: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },

  
  divider: {
    height: 1,
    backgroundColor: '#666',
    width: '85%',
    marginVertical: hp('2.5%'),
    alignSelf:'center',
  },


  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 40,
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('6%'),
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: hp('2%'),
    width: '100%',
    justifyContent: 'center',
  },


  googleLogo: {
    width: wp('6%'),
    height: wp('6%'),
    marginRight: wp('3%'),
  },


  googleButtonText: {
    fontSize: wp('4%'),
    color: '#000',
    fontWeight: '500',
  },
  
});
