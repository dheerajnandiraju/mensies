import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Text, View, Pressable, StyleSheet, ScrollView } from 'react-native';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

const PlaceholderImage = require('@/assets/images/Frame 60.png');

export default function Index() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={PlaceholderImage} style={styles.image} />
        </View>

        <Text style={{fontSize: RFPercentage(4)}}>Syla.</Text>

        <View style={styles.buttonContainer}>
          <Pressable style={styles.button} onPress={() => router.push('/SignUp')}>
            <Text style={[styles.buttonLabel, {fontSize: RFPercentage(3)}]}>Sign up</Text>
          </Pressable>

          <Pressable style={styles.button} onPress={() => router.push('/SignIn')}>
            <Text style={[styles.buttonLabel,{fontSize: RFPercentage(3)}]}>Sign in</Text>
          </Pressable>
        </View>
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
  imageContainer: {
    marginBottom: hp('5%'),
  },
  image: {
    width: wp('70%'),
    height: hp('30%'),
    borderRadius: 18,
    resizeMode: 'contain',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: wp('4.5%'),
    marginBottom: hp('5%'),
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: hp('3%'),
  },
  button: {
    backgroundColor: '#354259',
    borderRadius: 25,
    paddingVertical: hp('2%'),
    paddingHorizontal: wp('8%'),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonLabel: {
    color: '#fff',
    fontSize: wp('4.5%'),
    fontWeight: '500',
  },
});

