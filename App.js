import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './src/screens/home';
import { UserScreen } from './src/screens/user';
import { BienvenidaScreen } from './src/screens/bienvenida';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="User" component={UserScreen} />
        <Stack.Screen name="Bienvenida" component={BienvenidaScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}