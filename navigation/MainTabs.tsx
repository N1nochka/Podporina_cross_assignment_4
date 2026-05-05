import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import DonateScreen from '../screens/DonateScreen';
import BonusesScreen from '../screens/BonusesScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color }) => {
          const icons: Record<string, string> = {
            Головна: '🏠',
            Запис: '📅',
            Бонуси: '🎁',
            Профіль: '👤',
          };
          return <Text style={{ fontSize: 24, color }}>{icons[route.name]}</Text>;
        },
        tabBarActiveTintColor: '#D32F2F',
        tabBarInactiveTintColor: '#9E9E9E',
        tabBarStyle: { backgroundColor: '#FFFFFF', height: 70, paddingBottom: 8, paddingTop: 8 },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Головна" component={HomeScreen} />
      <Tab.Screen name="Запис" component={DonateScreen} />
      <Tab.Screen name="Бонуси" component={BonusesScreen} />
      <Tab.Screen name="Профіль" component={ProfileScreen} />
    </Tab.Navigator>
  );
}