import { Tabs } from "expo-router";
import { StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TabBar } from "../components/TabBar";
import Feather from '@expo/vector-icons/Feather';


export default function TabLayout() {
  return (
    <Tabs tabBar={props => <TabBar {...props} />} 
      screenOptions={{
        headerShown: false
      }}
    >
      <Tabs.Screen 
        name="index" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} /> // 🏠 Home Icon
          ),
          tabBarLabel: "Home"
        }} 
      />
      <Tabs.Screen 
        name="notification" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="bell" size={24} color="black" />
          ),
          tabBarLabel: "Home"
        }} 
      />
      <Tabs.Screen 
        name="chatbot" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="message-square" size={24} color="black" />
          ),
          tabBarLabel: "Home"
        }} 
      />
      <Tabs.Screen 
        name="page1" 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Feather name="user" size={size} color={color} /> // 👤 User Icon
          ),
          tabBarLabel: "Profile"
        }} 
      />
    </Tabs>
  );
}
