import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SplashScreen, HomeScreen} from './screens';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamTypes} from './StackParamTypes';

const Stack = createStackNavigator<StackParamTypes>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Splash" component={SplashScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
