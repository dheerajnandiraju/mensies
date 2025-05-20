
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const PlaceholderImage = require('@/assets/images/Frame 60.png');

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
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

        {/* Sign In */}
        <Pressable style={styles.button} onPress={() => router.push('/IrregularPeriods')}>
          <Text style={styles.buttonLabel}>Sign in</Text>
        </Pressable>

        <View style={styles.divider} />

        {/* Google Sign Up */}
        <Pressable style={styles.googleButton} onPress={() =>router.push('/IrregularPeriods') }>
          <Image
            source={{
              uri: 'https://developers.google.com/identity/images/g-logo.png',
            }}
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
