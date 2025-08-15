import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import SkillsScreen from './screens/SkillsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Meu Portfólio' }} />
        <Stack.Screen name="Skills" component={SkillsScreen} options={{ title: 'Minhas Habilidades' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
