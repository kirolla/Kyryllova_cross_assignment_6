import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from '../screens/AuthScreen';
import DrawerNavigator from './DrawerNavigator';
import AddEntryScreen from '../screens/AddEntryScreen';
import TipDetailsScreen from '../screens/TipDetailsScreen';
import { SCREENS } from './screens';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Screen name={SCREENS.ADD_ENTRY} component={AddEntryScreen} />
      <Stack.Screen name="TipDetails" component={TipDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthScreen onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}