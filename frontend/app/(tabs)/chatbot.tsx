import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {useRouter} from 'expo-router'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import { askChatbot } from '../chatbot';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

interface ChatMessage {
  id: string;
  type: 'user' | 'bot';
  text: string;
}

export default function Chatbot() {
  const router = useRouter();
  const [input, setInput] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      text: input.trim(),
    };

    setChat(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const response = await askChatbot(userMessage.text);
    const botMessage: ChatMessage = {
      id: Date.now().toString() + '_bot',
      type: 'bot',
      text: response,
    };

    setChat(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push('/(tabs)')}>
        <Ionicons name="arrow-back" size={28} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chatbot</Text>
        </View>
      <FlatList
        data={chat}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageContainer,
              item.type === 'user' ? styles.userMessage : styles.botMessage,
            ]}
          >
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        contentContainerStyle={styles.chatContent}
      />

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Ask about periods..."
          value={input}
          onChangeText={setInput}
          onSubmitEditing={handleSend}
          returnKeyType="send"
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Text style={styles.sendText}>{isLoading ? '...' : 'Send'}</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C2DED1',
  },
  chatContent: {
    padding: wp('3%'),
    paddingBottom: 80,
  },
  messageContainer: {
    marginVertical: hp('2%'),
    maxWidth: '80%',
    padding: wp('2%'),
    borderRadius: 12,
  },
  userMessage: {
    backgroundColor: '#CDC2AE',
    alignSelf: 'flex-end',
  },
  botMessage: {
    backgroundColor: '#ECE5C7',
    alignSelf: 'flex-start',
  },
  messageText: {
    color: '#333',
    fontSize: wp('4%'),
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    padding: 8,
   // backgroundColor: '#CDC2AE',
   // borderTopWidth: 1,
    borderTopColor: '#ccc',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    flex: 1,
    height: hp('5%'),
    paddingHorizontal: hp('1.5%'),
    backgroundColor: '#F2F2F2',
    borderRadius: 20,
    fontSize: wp('4%'),
  },
  sendButton: {
    marginLeft: wp('2%'),
    paddingHorizontal: wp('4%'),
    paddingVertical: hp('1%'),
    backgroundColor: '#354259',
    borderRadius: 20,
  },
  sendText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: hp('2%'),
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
    paddingBottom: hp('1%'),
    backgroundColor: '#E9F6EC',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    marginLeft: wp('2%'),
    color: '#333',
  },
  
});
