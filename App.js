import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import PayScreen from './Payment/Pay';
export default function App() {
  const Stack = createStackNavigator();

  return (
      <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            <Stack.Navigator>
              <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='MapScreen'
                component={MapScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name='PayScreen'
                component={PayScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
      </NavigationContainer>
  );
}
