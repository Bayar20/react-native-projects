import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {ListScreen, DetailScreen} from './screens';
import {StackParamList} from './StackParamList';

const Stack = createSharedElementStackNavigator<StackParamList>();

const App = () => {
  console.log('app Screen Called');

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={ListScreen} />
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            sharedElements={route => {
              const {item} = route.params;
              return [
                {
                  id: item.title,
                  animation: 'fade',
                },
              ];
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default App;
