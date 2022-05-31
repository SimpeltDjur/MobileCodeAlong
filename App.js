import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View, TextInput, Button, FlatList, ImageBackground } from 'react-native';
import { useState } from 'react';
import TodosScreen from './screens/TodosScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SelectedTodoScreen from './screens/SelectedTodoScreen';


export default function App() {

  const StackNavigation = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <StackNavigation.Navigator>
        <StackNavigation.Screen
          options={{ headerShown: false }}
          name='TodosScreen'
          component={TodosScreen}
        />
        <StackNavigation.Screen
          name='SelectedTodoScreen'
          component={SelectedTodoScreen}
        />
      </StackNavigation.Navigator>
    </NavigationContainer>
  );
}
