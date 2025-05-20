

import { View, Text, TextInput, Pressable, StyleSheet,ScrollView, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const PlaceholderImage = require('@/assets/images/Frame 60.png');

export default function SignUp() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.container}>
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
            />

            {/* Date of Birth */}
            <Text style={styles.label}>Date of Birth</Text>
            <TextInput
                style={styles.input}
                placeholder="DD/MM/YYYY"
                placeholderTextColor="#aaa"
            />

            {/* Password */}
            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            {/* Confirm Password */}
            <Text style={styles.label}>Confirm Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Confirm Password"
                secureTextEntry
                placeholderTextColor="#aaa"
            />

            {/* Sign Up Button */}
            <Pressable style={styles.button} onPress={() => router.push('/IrregularPeriods')}>
                <Text style={styles.buttonLabel}>Sign up</Text>
            </Pressable>

            <View style={styles.divider} />

            <Pressable style={styles.googleButton} onPress={() => router.push('/IrregularPeriods')}> 
                <Image
                    source={{ uri: 'https://developers.google.com/identity/images/g-logo.png' }}
                    style={styles.googleLogo}
                />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </Pressable>
        </View>
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C2DED1',
        paddingHorizontal: wp('5%'),
        paddingTop: hp('8%'),
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: hp('10%'),
        justifyContent: 'center',
    },
    image: {
        width: wp('15%'),
        height: wp('15%'),
        borderRadius: 20,
        marginRight: wp('2%'),
    },
    text: {
        color: '#000000',
        fontWeight: '600',
        fontSize: wp('12%'),
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
        borderRadius: 15,
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
        marginTop: hp('2%'),
        backgroundColor: '#fff',
        borderWidth: 1,
        paddingVertical: hp('1.8%'),
        borderRadius: 40,
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
