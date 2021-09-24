import React from 'react';
import LottieView from 'lottie-react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamTypes} from '../StackParamTypes';

export const SplashScreen = ({
  navigation,
}: StackScreenProps<StackParamTypes, 'Splash'>) => {
  return (
    <LottieView
      source={require('./sunset.json')}
      autoPlay
      loop={false}
      duration={1000}
      onAnimationFinish={() => navigation.push('Home')}
    />
  );
};
