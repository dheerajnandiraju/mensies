import { View, Platform, StyleSheet } from 'react-native';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import { Text, PlatformPressable } from '@react-navigation/elements';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

export function TabBar({ state, descriptors, navigation }: BottomTabBarProps) {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();

  return (
    <View style={styles.container}>
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
              color: isFocused ? 'black' : colors.text, size: 24,
              focused: false
          }) // Set icon size
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
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            style={{ flex: 1, alignItems: 'center' }} // Align icons and text
          >
            <View style={styles.circle}>
            {IconComponent} 
            </View>
            {/* 🔹 Render the icon */}
            {/* <Text style={{ color: isFocused ? colors.primary : colors.text, textAlign: 'center' }}>
            {label}
            </Text> */}
          </PlatformPressable>
        );
      })}
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
    marginHorizontal: 30  ,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  circle:{
    padding: 10,
    backgroundColor:'#CDC2AE',
    borderRadius: '50%'
  }
});
