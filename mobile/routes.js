import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Details from './src/pages/Details/index';
import Incidents from './src/pages/Incidents/index';
import Login from './src/pages/Login/index';
import Register from './src/pages/Register/index';
import Intro from './src/pages/Intro/index';
import screens from './src/config/navigation';

const AppStack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name={screens.Intro} component={Intro} />
        <AppStack.Screen name={screens.Login} component={Login} />
        <AppStack.Screen name={screens.Register} component={Register} />
        <AppStack.Screen name={screens.Incidents} component={Incidents} />
        <AppStack.Screen name={screens.Detail} component={Details} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
