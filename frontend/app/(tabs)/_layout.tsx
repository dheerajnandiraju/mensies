// app/(tabs)/_layout.tsx
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Tabs } from "expo-router";
import { TabBar } from "../components/TabBar";
import Feather from '@expo/vector-icons/Feather';

export default function TabLayout() {
  const [isAppLocked, setIsAppLocked] = useState(false);
  const [appLockPrompt, setAppLockPrompt] = useState(false);
  const [enteredCode, setEnteredCode] = useState("");
  const [isPasscodeSet, setIsPasscodeSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const loadAppLockData = async () => {
    try {
      const storedPasscode = await AsyncStorage.getItem("passcode");
      const lockState = await AsyncStorage.getItem("isAppLocked");
      setIsPasscodeSet(!!storedPasscode);
      setIsAppLocked(lockState === "true");
      if (lockState === "true" && storedPasscode) {
        setAppLockPrompt(true);
      }
    } catch (error) {
      console.error("Error loading app lock data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const validatePasscode = async () => {
    const storedPasscode = await AsyncStorage.getItem("passcode");
    if (enteredCode === storedPasscode) {
      setAppLockPrompt(false);
      setEnteredCode("");
    } else {
      Alert.alert("Incorrect", "Wrong passcode!");
      setEnteredCode("");
    }
  };

  useEffect(() => {
    loadAppLockData();
  }, []);

  if (isLoading) {
    return (
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Loading...</Text>
      </View>
    );
  }

  if (appLockPrompt) {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Enter Passcode to Unlock App</Text>
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
              onPress={() => setAppLockPrompt(false)} // Optional: Handle app exit
            >
              <Text style={styles.modalBtnText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  return (
    <Tabs tabBar={props => <TabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="notification"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="bell" size={24} color="black" />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="chatbot"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="message-square" size={24} color="black" />,
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size }) => <Feather name="user" size={size} color={color} />,
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#CDC2AE",
    borderRadius: 10,
    padding: 20,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    padding: 10,
    width: "100%",
    textAlign: "left",
    fontWeight: "600",
    backgroundColor: "#fff",
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  saveBtn: {
    backgroundColor: "#354259",
    paddingVertical: 15,
    width: "30%",
    borderRadius: 10,
  },
  cancelBtn: {
    backgroundColor: "#555",
    paddingVertical: 15,
    width: "30%",
    borderRadius: 10,
  },
  modalBtnText: {
    color: "white",
    fontWeight: "600",
    textAlign: "center",
  },
});