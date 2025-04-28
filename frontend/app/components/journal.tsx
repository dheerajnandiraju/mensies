import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

// Define the structure of a journal entry
interface JournalEntry {
  date: string;
  text: string;
}

export default function JournalScreen() {
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({ title: "your Journal" });
      }, [navigation]);


  const [entry, setEntry] = useState<string>(""); // Entry text state
  const [entries, setEntries] = useState<JournalEntry[]>([]); // Journal entries state

  // Load saved journal entries from AsyncStorage
  const loadEntries = async () => {
    try {
      const saved = await AsyncStorage.getItem("journals");
      if (saved) setEntries(JSON.parse(saved));
    } catch (e) {
      Alert.alert("Error", "Could not load journals.");
    }
  };

  // Save a new journal entry
  const saveEntry = async () => {
    if (!entry.trim()) return;

    const newEntries: JournalEntry[] = [
      { date: new Date().toLocaleString(), text: entry },
      ...entries,
    ];

    try {
      await AsyncStorage.setItem("journals", JSON.stringify(newEntries));
      setEntries(newEntries);
      setEntry("");
    } catch (e) {
      Alert.alert("Error", "Could not save journal.");
    }
  };

  useEffect(() => {
    loadEntries();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Write About Your Day</Text>
      <TextInput
        style={styles.input}
        multiline
        placeholder="How was your day?"
        value={entry}
        onChangeText={setEntry}
      />
      <TouchableOpacity style={styles.button} onPress={saveEntry}>
        <Text style={styles.buttonText}>Save Entry</Text>
      </TouchableOpacity>

      <Text style={styles.subHeader}>Previous Entries</Text>
      <FlatList
        data={entries}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.entry}>
            <Text style={styles.date}>{item.date}</Text>
            <Text>{item.text}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: wp("5%"),
    backgroundColor: "#C2DED1",
    flex: 1,
  },
  header: {
    fontSize: wp("6%"),
    fontWeight: "bold",
    marginBottom: hp("2%"),
  },
  input: {
    borderWidth: 1,
    backgroundColor: '#CDC2AE',
    borderRadius: wp("2%"),
    padding: wp("3%"),
    height: hp("20%"),
    textAlignVertical: "top",
    marginBottom: hp("1.5%"),
  },
  button: {
    backgroundColor: "#354259",
    paddingVertical: hp("1.5%"),
    borderRadius: wp("2%"),
    alignItems: "center",
    marginBottom: hp("2%"),
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  subHeader: {
    fontSize: wp("5%"),
    fontWeight: "bold",
    marginBottom: hp("1%"),
  },
  entry: {
    backgroundColor: "#ECE5C7",
    padding: wp("3%"),
    borderRadius: wp("2%"),
    marginBottom: hp("1%"),
  },
  date: {
    fontWeight: "bold",
    marginBottom: hp("0.5%"),
  },
});
