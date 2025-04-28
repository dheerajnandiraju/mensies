import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
  Switch
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CalendarComponent from "../components/calendarComponent";
import Mood from "../components/mood";
import Symptom from "../components/symptom";
import Sleep from "../components/sleep";
import menstrualDates from "../hooks/menstrualDate";

export default function Index() {
  const { date, setDate } = menstrualDates();
  const [confirmation, setConfirmation] = useState(false);
  const [selected, setSelected] = useState("menstrual");
  const [isAppLocked, setIsAppLocked] = useState(false);
  const [isPasscodeSet, setIsPasscodeSet] = useState(false);

  useEffect(() => {
    loadAppLockData();
  }, []);

  const loadAppLockData = async () => {
    try {
      const lockState = await AsyncStorage.getItem("isAppLocked");
      const storedPasscode = await AsyncStorage.getItem("passcode");
      setIsAppLocked(lockState === "true");
      setIsPasscodeSet(!!storedPasscode);
    } catch (error) {
      console.error("Error loading app lock data:", error);
    }
  };

  const handleAppLockToggle = async (value: boolean) => {
    if (value) {
      // If enabling app lock, check if passcode is set
      if (!isPasscodeSet) {
        Alert.alert("Error", "Please set a passcode first!");
        setIsAppLocked(false); // Keep the switch off if passcode is not set
        return;
      }
      await AsyncStorage.setItem("isAppLocked", "true");
      setIsAppLocked(true);
    } else {
      await AsyncStorage.setItem("isAppLocked", "false");
      setIsAppLocked(false);
    }
  };

  const setPasscode = async (passcode: string) => {
    try {
      await AsyncStorage.setItem("passcode", passcode);
      setIsPasscodeSet(true);
      Alert.alert("Success", "Passcode has been set!");
    } catch (error) {
      console.error("Error setting passcode:", error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.Calender}>
        <Text style={styles.heading}>Calendar</Text>
        <CalendarComponent selected={selected} />
        {date && !confirmation && (
          <View style={styles.modalButtons}>
            <Text style={styles.modelText}>Did you get {"\n"} your period?</Text>
            <TouchableOpacity onPress={() => setConfirmation(true)}>
              <Text style={styles.button}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setConfirmation(false)}
              style={styles.cancelButton}
            >
              <Text style={styles.cancelButtonText}>No</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={selected === "menstrual" ? styles.phaseButtonActive : styles.phaseButtonInactive}
          onPress={() => setSelected("menstrual")}
        >
          <Text style={styles.phaseButtonText}>Menstrual Phase</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={selected === "conception" ? styles.phaseButtonActive : styles.phaseButtonInactive}
          onPress={() => setSelected("conception")}
        >
          <Text style={styles.phaseButtonText}>Conception Phase</Text>
        </TouchableOpacity>
      </View>

      <Mood />
      <Symptom />
      <Sleep />

      {/* App Lock Toggle for consistency
      <View style={styles.lockContainer}>
        <Text style={styles.lockText}>Enable App Lock</Text>
        <Switch
          value={isAppLocked}
          onValueChange={handleAppLockToggle}
        />
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C2DED1",
    paddingTop: hp("5%"),
    padding: wp("4%"),
  },
  heading: {
    fontSize: wp("5%"),
    color: "black",
    fontWeight: "600",
  },
  button: {
    backgroundColor: "#354259",
    color: "white",
    textAlign: "center",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("1%"),
    borderRadius: wp("12%"),
    width: wp("20%"),
    fontWeight: "600",
  },
  Calender: {
    backgroundColor: "#ECE5C7",
    borderWidth: 1,
    borderRadius: wp("2%"),
    padding: wp("4%"),
  },
  buttonContainer: {
    flex: 1,
    marginVertical: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  phaseButtonActive: {
    backgroundColor: "#CDC2AE",
    borderRadius: wp("12%"),
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("3%"),
    borderWidth: 1,
    elevation: 5,
    width: wp("45%"),
    alignItems: "center",
  },
  phaseButtonInactive: {
    backgroundColor: "#ECE5C7",
    borderRadius: wp("12%"),
    paddingVertical: hp("2%"),
    paddingHorizontal: wp("3%"),
    borderWidth: 1,
    width: wp("45%"),
    alignItems: "center",
  },
  phaseButtonText: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: hp("2%"),
    justifyContent: "center",
    gap: wp("4%"),
    width: "100%",
  },
  cancelButton: {
    backgroundColor: "#555",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("5%"),
    borderRadius: wp("12%"),
    width: wp("20%"),
  },
  cancelButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  modelText: {
    fontWeight: "600",
    fontSize: wp("4%"),
    textAlign: "center",
  },
  journal: {
    backgroundColor: "#ECE5C7",
    padding: wp("3%"),
    borderRadius: wp("2.5%"),
    marginTop: hp("2%"),
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
  },
  username: {
    fontSize: wp("6%"),
    fontWeight: "700",
  },
  lockContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: hp("3%"),
  },
  lockText: {
    fontSize: wp("4%"),
    fontWeight: "600",
    alignSelf: "center",
  },
});
