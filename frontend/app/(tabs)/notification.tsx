import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, TextInput, ScrollView,} from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Link } from 'expo-router';

export default function Notification() {
  const [cycleTracker, setcycleTracker] = useState(false);
  const [conception, setconception] = useState(false);
  const [hydration, sethydration] = useState(false);
  const [sleep, setSleep] = useState(false);
  const [notifications, setNotifications] = useState<string[]>([
    'Welcome to your reminders!',
    'Stay hydrated and healthy!',
    'Track your cycle with ease!',
  ]); // Independent static array of strings

  const cycleTrackerToggle = () => {
    setcycleTracker((prev) => !prev);
  };

  const conceptionToggle = () => {
    setconception((prev) => !prev);
  };

  const hydrationToggle = () => {
    sethydration((prev) => !prev);
  };

  const sleepToggle = () => {
    setSleep((prev) => !prev);
  };

  // Optional utility function (not triggered by toggles)
  const updateNotifications = () => {
    const newNotifications: string[] = [
      'New reminder added!',
      'Check your settings!',
      'Have a great day!',
    ];
    setNotifications(newNotifications);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.container2}>
        <Text style={styles.heading}>Reminders</Text>
        <View style={styles.content}>
          <View>
            <View style={styles.switchContainer}>
              <View style={styles.switchWrapper}>
                <Switch
                  value={cycleTracker}
                  onValueChange={cycleTrackerToggle}
                  trackColor={{ false: '#e0e0e0', true: '#E8FFE2' }}
                  thumbColor={cycleTracker ? '#fff' : '#fff'}
                  ios_backgroundColor="#3e3e3e"
                  style={styles.switchStyle}
                />
              </View>
              <Text style={styles.switchLabel}>Cycle Tracking</Text>
            </View>
            <View style={cycleTracker ? styles.descriptionTrue : styles.descriptionFalse}>
              <Text style={styles.switchContent}>
                Select your prior days you want to get your notification:
              </Text>
              <TextInput
                style={styles.numberInput}
                keyboardType="numeric"
                placeholder="Days"
                maxLength={1}
                editable={cycleTracker}
              />
            </View>
          </View>

          <View>
            <View style={styles.switchContainer}>
              <View style={styles.switchWrapper}>
                <Switch
                  value={conception}
                  onValueChange={conceptionToggle}
                  trackColor={{ false: '#e0e0e0', true: '#E8FFE2' }}
                  thumbColor={conception ? '#fff' : '#fff'}
                  ios_backgroundColor="#3e3e3e"
                  style={styles.switchStyle}
                />
              </View>
              <Text style={styles.switchLabel}>Conception Phase</Text>
            </View>
            <View style={conception ? styles.descriptionTrue : styles.descriptionFalse}>
              <Text style={styles.switchContent}>
                Select your prior days you want to get your notification:
              </Text>
              <TextInput
                style={styles.numberInput}
                keyboardType="numeric"
                placeholder="Days"
                maxLength={1}
                editable={conception}
              />
            </View>
          </View>

          <View>
            <View style={styles.switchContainer}>
              <View style={styles.switchWrapper}>
                <Switch
                  value={hydration}
                  onValueChange={hydrationToggle}
                  trackColor={{ false: '#e0e0e0', true: '#E8FFE2' }}
                  thumbColor={hydration ? '#fff' : '#fff'}
                  ios_backgroundColor="#3e3e3e"
                  style={styles.switchStyle}
                />
              </View>
              <Text style={styles.switchLabel}>Hydration</Text>
            </View>
            <View style={hydration ? styles.descriptionTrue : styles.descriptionFalse}>
              <Text style={styles.switchContent1}>Notifies you for every hour</Text>
            </View>
          </View>

          <View>
            <View style={styles.switchContainer}>
              <View style={styles.switchWrapper}>
                <Switch
                  value={sleep}
                  onValueChange={sleepToggle}
                  trackColor={{ false: '#e0e0e0', true: '#E8FFE2' }}
                  thumbColor={sleep ? '#fff' : '#fff'}
                  ios_backgroundColor="#3e3e3e"
                  style={styles.switchStyle}
                />
              </View>
              <Text style={styles.switchLabel}>Bed Time</Text>
            </View>
            <View style={sleep ? styles.descriptionTrue : styles.descriptionFalse}>
              <Text style={styles.switchContent}>Enter your bed time in 24hrs format:</Text>
              <TextInput
                style={styles.numberInput}
                keyboardType="numeric"
                placeholder="hrs"
                maxLength={2}
                editable={sleep}
              />
            </View>
          </View>
      
          <Text style={styles.heading}>Notifications</Text>
          <ScrollView style={styles.scrollView}>
            {notifications.length > 0 ? (
              notifications.map((notification, index) => (
                <View key={index} style={styles.notificationItem}>
                  <Text style={styles.notificationText}>{notification}</Text>
                </View>
              ))
            ) : (
              <Text style={styles.noNotificationsText}>No notifications</Text>
            )}
          </ScrollView>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
    paddingTop: hp('6%'),
    paddingHorizontal: wp('3%'),
    paddingBottom: hp('10%'),
  },
  container2: {
    flex: 1,
    backgroundColor: '#ECE5C7',
    borderRadius: wp('2.5%'),
    padding: wp('3%'),
    borderWidth: 1,
    marginBottom: hp('1.5%'),
  },
  heading: {
    alignSelf: 'center',
    fontSize: wp('4%'),
    color: 'black',
    fontWeight: '800',
  },
  content: {
    flex: 1,
    backgroundColor: '#CDC2AE',
    padding: wp('3%'),
    borderRadius: wp('2.5%'),
    borderWidth: 1,
    alignItems: 'flex-start',
  },
  switchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: wp('2%'),
  },
  switchLabel: {
    marginRight: wp('2%'),
    fontSize: wp('3%'),
    color: '#333',
    fontWeight: '800',
  },
  switchContent: {
    width: wp('60%'),
    fontSize: wp('2.8%'),
    color: '#333',
  },
  switchContent1: {
    fontSize: wp('2.8%'),
    color: '#333',
  },
  descriptionTrue: {
    opacity: 1,
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  descriptionFalse: {
    opacity: 0.5,
    flexDirection: 'row',
    marginTop: hp('1%'),
  },
  switchWrapper: {
    width: wp('18%'),
    height: hp('5%'),
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchStyle: {
    transform: [{ scale: 1.5 }],
  },
  numberInput: {
    height: hp('5%'),
    width: wp('18%'),
    borderWidth: 1,
    borderColor: '#354259',
    borderRadius: wp('2%'),
    textAlign: 'center',
    marginLeft: wp('2%'),
    fontSize: wp('3%'),
    color: '#333',
    backgroundColor: '#fff',
  },
  scrollView: {
    marginTop: hp('2%'),
    flex: 1,
  },
  notificationItem: {
    width: wp('80%'),
    padding: wp('2%'),
    backgroundColor: '#fff',
    marginBottom: hp('1%'),
    borderRadius: wp('2%'),
  },
  notificationText: {
    fontSize: wp('3.5%'),
    color: '#333',
  },
  noNotificationsText: {
    fontSize: wp('3.5%'),
    color: '#666',
    textAlign: 'center',
    padding: wp('3%'),
  },
});
