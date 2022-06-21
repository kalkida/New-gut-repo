import React from 'react';
import { KeyboardAvoidingView } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Provider } from 'react-redux';
import store from './redux/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MapScreen from './screens/MapScreen';
import PayScreen from './Payment/Pay';
import Verified from './Auth/Verified';
import Login from './Auth/Login';
import Profile from './componenets/Profile';
export default function App() {
  const Stack = createStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{ flex: 1 }}
            keyboardVerticalOffset={Platform.OS === 'ios' ? -64 : 0}>
            <Stack.Navigator>
            <Stack.Screen
                name='Login'
                component={Login}
                options={{ headerShown: false }}
              />
               <Stack.Screen
                name='Verified'
                component={Verified}
                options={{ headerShown: false }}
              />
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
                <Stack.Screen
                name='Profile'
                component={Profile}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>
      </NavigationContainer>
      </Provider>
  );
}
