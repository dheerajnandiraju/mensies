

import { View, Text, TextInput, Pressable, StyleSheet,ScrollView, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';



const PlaceholderImage = require('@/assets/images/Frame 60.png');


export default function SignUp() {
    const [username, setUsername] = useState('');
    const [dob, setDob] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword,setconfirmpassword]=useState('');


const router = useRouter();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>

             {/* Back Button */}
                    <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                      <Ionicons name="arrow-back" size={28} color="#000" />
                    </TouchableOpacity>

            
            <View style={styles.imageContainer}>
                <Image source={PlaceholderImage} style={styles.image} />
                <Text style={styles.text}> Syla.</Text>
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



            {/* Confirm Password */}
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#aaa"
                value={confirmpassword}
                onChangeText={setconfirmpassword}
            />



            {/* Sign Up Button */}
            <TouchableOpacity style={styles.button} onPress={() =>
                {
                    console.log("Google Sign Up pressed");
                     router.push('/IrregularPeriods');}}>
                <Text style={styles.buttonLabel}>Sign up</Text>
            </TouchableOpacity>



            <View style={styles.divider} />



            <TouchableOpacity style={styles.googleButton} onPress={() => router.push('/IrregularPeriods')}> 
                <Image
                    source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }}
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

    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('5%'),
        justifyContent: 'center',
    },

    image: {
        width: wp('30%'),
        height: wp('30%'),
        borderRadius: wp('5%'),
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
        borderRadius: wp('5%'),
        marginBottom: hp('2%'),
        fontSize: wp('4.5%'),
        color: '#000',
        elevation: 2,
    },

    label: {
        marginBottom: hp('0.6%'),
        fontSize: wp('4.5%'),
        fontWeight: '600',
        color: '#34495e',
    },

    button: {
        backgroundColor: '#354259',
        paddingVertical: hp('1.8%'),
        borderRadius: wp('5%'),
        alignItems: 'center',
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
        marginTop: hp('1%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingVertical: hp('1.8%'),
        borderRadius: wp('5%'),
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
        borderColor: '#ccc',
    },

    googleLogo: {
        width: wp('5%'),
        height: wp('5%'),
        marginRight: wp('2%'),
    },

    googleButtonText: {
        color: '#000',
        fontSize: wp('4%'),
        fontWeight: '500',
        textTransform: 'capitalize',
    },

});
