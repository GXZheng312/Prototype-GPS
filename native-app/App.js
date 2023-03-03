import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import homeScreen from './src/screens/homeScreen';
import apiScreen from './src/screens/apiScreen';
import stemScreen from './src/screens/stemScreen';

const Stack = createNativeStackNavigator();

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home">
        <Stack.Screen name="home" component={homeScreen} />
        <Stack.Screen name="stem" component={stemScreen} />
        <Stack.Screen name="api" component={apiScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

