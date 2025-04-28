import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Modal,
  TextInput,
  Alert,
  ScrollView,
  Switch,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Image } from "expo-image";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useRouter } from 'expo-router';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FontAwesome } from '@expo/vector-icons';

export default function Index() {
  const router = useRouter();
  const [userInfo, setUserInfo] = useState({
    name: "varshitha",
    age: "19",
    weight: "64",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [imageUri, setImageUri] = useState(require("../../assets/images/syla.png"));
  const [tempInfo, setTempInfo] = useState({ ...userInfo });
  const [isAppLocked, setIsAppLocked] = useState(false);
  const [passcodePrompt, setPasscodePrompt] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [isPasscodeSet, setIsPasscodeSet] = useState(false);
  const [newPasscode, setNewPasscode] = useState("");
  const [confirmPasscode, setConfirmPasscode] = useState("");

  const pickImage = async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!permission.granted) {
      Alert.alert("Permission denied", "Allow access to media library.");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImageUri({ uri: result.assets[0].uri });
    }
  };

  const handleSave = () => {
    setUserInfo(tempInfo);
    setModalVisible(false);
    Alert.alert("Saved", "Your profile has been updated.");
  };

  const handleJournalAccess = () => {
    if (!isPasscodeSet) {
      setPasscodePrompt(true);
    } else {
      setPasscodePrompt(true);
    }
  };

  const validatePasscode = async () => {
    const storedPasscode = await AsyncStorage.getItem("passcode");
    if (enteredCode === storedPasscode) {
      setPasscodePrompt(false);
      router.push('../components/journal');
      setEnteredCode("");
    } else {
      Alert.alert("Incorrect", "Wrong passcode!");
      setEnteredCode("");
    }
  };

  const handleSetPasscode = async () => {
    if (newPasscode === confirmPasscode) {
      await AsyncStorage.setItem("passcode", newPasscode);
      setIsPasscodeSet(true);
      setPasscodePrompt(false);
      setNewPasscode("");
      setConfirmPasscode("");
      Alert.alert("Passcode Set", "Your passcode has been set successfully.");
    } else {
      Alert.alert("Error", "Passcodes do not match. Please try again.");
    }
  };

  const handleAppLockToggle = async (value: boolean) => {
    console.log("Toggle value:", value);
    await AsyncStorage.setItem("isAppLocked", value.toString());
    setIsAppLocked(value);
  };

  const handleDeleteData = async () => {
    try {
      await AsyncStorage.clear(); // Clears all AsyncStorage data
      setIsAppLocked(false); // Reset app lock state
      setIsPasscodeSet(false); // Reset passcode state
      Alert.alert("Success", "All locally saved data has been deleted.");
    } catch (error) {
      console.error("Error clearing data:", error);
      Alert.alert("Error", "Failed to delete data. Please try again.");
    }
  };

  useEffect(() => {
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
    loadAppLockData();
  }, []);

  return (
    <ScrollView style={styles.background}>
      <Text style={styles.title}>Syla</Text>

      <View style={styles.profile}>
        <TouchableOpacity onLongPress={pickImage}>
          <Image source={imageUri} style={styles.logo} contentFit="cover" />
        </TouchableOpacity>

        <View style={styles.userInfo}>
          <Text style={styles.username}>{userInfo.name}</Text>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <Text style={styles.bio}>Age: {userInfo.age}</Text>
            <Text style={styles.bio}>Weight: {userInfo.weight}</Text>
          </View>
          <TouchableOpacity
            style={styles.edit}
            onPress={() => {
              setTempInfo(userInfo);
              setModalVisible(true);
            }}
          >
            <Text style={styles.editButtonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.journal}>
        <Text style={styles.username}>Journal</Text>
        <TouchableOpacity style={styles.saveBtn} onPress={handleJournalAccess}>
          <Text style={styles.modalBtnText}>Open</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.journal}>
        <Text style={styles.username}>Reports</Text>
        <TouchableOpacity style={styles.saveBtn}>
          <FontAwesome style={styles.modalBtnText} name="download" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={styles.journal}>
        <Text style={styles.username}>App Lock</Text>
        <Switch
          value={isAppLocked}
          onValueChange={handleAppLockToggle}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={isAppLocked ? "#f5dd4b" : "#f4f3f4"}
          style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
        />
      </View>

      <TouchableOpacity style={styles.delete} onPress={handleDeleteData}>
        <Text style={styles.deleteData}>Delete Data</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Edit Profile</Text>
            <TextInput
              placeholder="Name"
              style={styles.input}
              value={tempInfo.name}
              onChangeText={(text) => setTempInfo({ ...tempInfo, name: text })}
            />
            <TextInput
              placeholder="Age"
              style={styles.input}
              keyboardType="numeric"
              value={tempInfo.age}
              onChangeText={(text) => setTempInfo({ ...tempInfo, age: text })}
            />
            <TextInput
              placeholder="Weight"
              style={styles.input}
              keyboardType="numeric"
              value={tempInfo.weight}
              onChangeText={(text) => setTempInfo({ ...tempInfo, weight: text })}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
                <Text style={styles.modalBtnText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.cancelBtn}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBtnText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <Modal visible={passcodePrompt} transparent animationType="fade">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {!isPasscodeSet ? (
              <>
                <Text style={styles.modalTitle}>Set Passcode</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter passcode"
                  secureTextEntry
                  keyboardType="number-pad"
                  value={newPasscode}
                  onChangeText={setNewPasscode}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Confirm passcode"
                  secureTextEntry
                  keyboardType="number-pad"
                  value={confirmPasscode}
                  onChangeText={setConfirmPasscode}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.saveBtn} onPress={handleSetPasscode}>
                    <Text style={styles.modalBtnText}>Set Passcode</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => {
                      setPasscodePrompt(false);
                    }}
                  >
                    <Text style={styles.modalBtnText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <>
                <Text style={styles.modalTitle}>Enter Passcode</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter passcode"
                  secureTextEntry
                  keyboardType="number-pad"
                  value={enteredCode}
                  onChangeText={setEnteredCode}
                />
                <View style={styles.modalButtons}>
                  <TouchableOpacity style={styles.saveBtn} onPress={validatePasscode}>
                    <Text style={styles.modalBtnText}>Submit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.cancelBtn}
                    onPress={() => setPasscodePrompt(false)}
                  >
                    <Text style={styles.modalBtnText}>Cancel</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background: {
    paddingVertical: hp("5%"),
    padding: wp("2%"),
    flex: 1,
    backgroundColor: "#C2DED1",
  },
  title: {
    fontSize: wp("8%"),
    fontWeight: "bold",
    alignSelf: "center",
    marginBottom: hp("3%"),
  },
  profile: {
    backgroundColor: "#ECE5C7",
    borderRadius: wp("2.5%"),
    padding: wp("4%"),
    borderWidth: 1,
    marginTop: hp("2%"),
    flexDirection: "row",
    justifyContent: "space-between",
  },
  logo: {
    width: hp("15%"),
    height: hp("15%"),
    borderRadius: hp("50%"),
    borderWidth: 2,
  },
  userInfo: {
    width: wp("50%"),
    rowGap: hp("1%"),
    justifyContent: "center",
  },
  username: {
    fontSize: wp("6%"),
    fontWeight: "700",
  },
  bio: {
    fontSize: wp("4%"),
    fontWeight: "600",
  },
  edit: {
    backgroundColor: "#555",
    paddingVertical: hp("1.5%"),
    paddingHorizontal: wp("2%"),
    borderRadius: wp("10%"),
  },
  editButtonText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
    fontSize: wp("3.5%"),
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#CDC2AE",
    borderRadius: wp("2.5%"),
    padding: wp("5%"),
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  input: {
    height: hp("5%"),
    padding: wp("2%"),
    width: "100%",
    textAlign: "left",
    fontWeight: "600",
    backgroundColor: "#fff",
    borderRadius: wp("2%"),
    fontSize: wp("4%"),
    marginBottom: hp("1%"),
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: hp("2%"),
    justifyContent: "space-between",
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#354259",
    paddingVertical: hp("1.5%"),
    width: wp('30%'),
    borderRadius: wp("10%"),
  },
  cancelBtn: {
    backgroundColor: "#555",
    paddingVertical: hp("1.5%"),
    width: wp('30%'),
    borderRadius: wp("10%"),
  },
  modalBtnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
  journal: {
    backgroundColor: "#ECE5C7",
    padding: wp("3%"),
    borderRadius: wp("2.5%"),
    marginTop: hp("2%"),
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
  },
  delete: {
    backgroundColor: "#ECE5C7",
    padding: wp("3%"),
    borderRadius: wp("2.5%"),
    marginTop: hp("2%"),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderWidth: 1,
    width: wp('50%'),
    alignSelf: 'center',
    opacity: 0.9,
  },
  deleteData: {
    alignSelf: 'center',
    color: 'red',
    fontSize: wp("5%"),
    fontWeight: "500",
  },
});