import React, { useState, useEffect } from 'react';
import {
  View,
  Platform,
  StyleSheet,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => {
      setKeyboardVisible(true);
    });
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardVisible(false);
    });

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  if (isKeyboardVisible) return null;

  const currentRouteName = state.routes[state.index].name;
  if (isKeyboardVisible || currentRouteName === 'chatbot') return null;

  return (
    <View style={styles.wrapper}>
      <KeyboardAvoidingView style={styles.container}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
          const isFocused = state.index === index;
  
          const IconComponent = options.tabBarIcon
            ? options.tabBarIcon({
                color: isFocused ? 'black' : colors.text,
                size: 24,
                focused: isFocused,
              })
            : null;
  
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
  
            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };
  
          return (
            <PlatformPressable
              key={route.name}
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              onPress={onPress}
              style={{ flex: 1, alignItems: 'center' }}
            >
              <View style={isFocused ? styles.circle : null}>{IconComponent}</View>
            </PlatformPressable>
          );
        })}
      </KeyboardAvoidingView>
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
  
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 2,
    backgroundColor: '#ECE5C7',
    position: 'absolute',
    bottom: 10,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    width:wp(80),
    
  },
  circle: {
    padding: 10,
    backgroundColor: '#CDC2AE',
    borderRadius: 9999,
  },
  wrapper: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
    alignItems: 'center', // 💡 This centers the child (tab bar)
  },
});
