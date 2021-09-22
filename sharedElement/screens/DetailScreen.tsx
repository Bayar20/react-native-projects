import React from 'react';
import {Text, ImageBackground} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamList} from '../StackParamList';
import {SharedElement} from 'react-navigation-shared-element';

type Props = StackScreenProps<StackParamList, 'Detail'>;

export const DetailScreen = ({route}: Props) => {
  const {item} = route.params;
  return (
    <SharedElement id={item.title}>
      <ImageBackground
        source={{uri: item.img}}
        style={{borderRadius: 20, height: 700}}>
        <Text style={{color: '#fff'}}>{item.title}</Text>
      </ImageBackground>
    </SharedElement>
  );
};
