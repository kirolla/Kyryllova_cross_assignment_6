import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import { useTheme } from '../context/ThemeContext';
import HomeScreen from '../screens/HomeScreen';
import StatisticsScreen from '../screens/StatisticsScreen';
import ProfileScreen from '../screens/ProfileScreen';
import TipsScreen from '../screens/TipsScreen';
import RemindersScreen from '../screens/RemindersScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  const { colors } = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const icons: Record<string, string> = {
            Календар: '📅',
            Статистика: '📊',
            Профіль: '👤',
            Поради: '💡',
            Нагадування: '⏰',
          };
          return <Text style={{ fontSize: 24, color }}>{icons[route.name]}</Text>;
        },
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textLight,
        tabBarStyle: { backgroundColor: colors.background, borderTopColor: colors.border, height: 70, paddingBottom: 8, paddingTop: 8 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Календар" component={HomeScreen} />
      <Tab.Screen name="Статистика" component={StatisticsScreen} />
      <Tab.Screen name="Профіль" component={ProfileScreen} />
      <Tab.Screen name="Поради" component={TipsScreen} />
      <Tab.Screen name="Нагадування" component={RemindersScreen} />
    </Tab.Navigator>
  );
}