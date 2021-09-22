import * as React from 'react';
import {Animated} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {ModalScreen} from '../screens';
import {StackParamTypes} from './StackParamTypes';
import {StackCardInterpolationProps} from '@react-navigation/stack';
import TabBar from './TabBar';

const Stack = createStackNavigator<StackParamTypes>();

export const MyNavigationStack = () => {
  const forSlide = ({
    current,
    next,
    inverted,
    layouts: {screen},
  }: StackCardInterpolationProps) => {
    const progress = Animated.add(
      current.progress.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 1],
        extrapolate: 'extend',
      }),
      next
        ? next.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
            extrapolate: 'extend',
          })
        : 0,
    );

    return {
      cardStyle: {
        transform: [
          {
            translateY: Animated.multiply(
              progress.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [screen.height, 0, screen.height * -0.3],
                extrapolate: 'extend',
              }),
              inverted,
            ),
          },
        ],
      },
    };
  };
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Group>
        <Stack.Screen name="TabBar" component={TabBar} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
        <Stack.Screen
          name="Modal"
          component={ModalScreen}
          options={{cardStyleInterpolator: forSlide}}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MyNavigationStack;
