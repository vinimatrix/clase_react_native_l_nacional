import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function ListaPostScreen({posts}){
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Lista">
        <Stack.Screen 
          name="Lista" 
          component={ListaPosts}
          options={{ title: 'Mis Posts' }}
        />
        <Stack.Screen 
          name="Detalles" 
          component={Post}
          options={{ title: 'Detalles del Post' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


