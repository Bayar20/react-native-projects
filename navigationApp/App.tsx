import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyNavigationStack from './src/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <MyNavigationStack />
    </NavigationContainer>
  );
};
export default App;
