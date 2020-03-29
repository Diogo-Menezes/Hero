import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Details from './src/pages/Details/index';
import Incidents from './src/pages/Incidents/index';
import Login from './src/pages/Login/index';
const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Login" component ={{Login}}/>
        <AppStack.Screen name='Incidents' component={Incidents} />
        <AppStack.Screen name='Detail' component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
