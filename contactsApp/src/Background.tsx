import React from 'react';
import {View, ImageBackground} from 'react-native';

type BackgroundPropsColor = {
  color: string;
  url?: never;
};

type BackgroundPropsUrl = {
  url: string;
  color?: never;
};

type BackgroundProps = {
  height: number;
  width: number;
  opacity?: number;
  resizeMode?: 'cover' | 'contain' | 'stretch' | 'repeat' | 'center';
  overflow?: 'visible' | 'hidden';
  children: React.ReactChild | React.ReactChild[];
};

const Background = ({
  height,
  width,
  color,
  url,
  opacity,
  resizeMode,
  overflow,
  children,
}: BackgroundProps &
  (BackgroundPropsColor | BackgroundPropsUrl)): JSX.Element => {
  return (
    <View>
      <ImageBackground
        source={{uri: url}}
        resizeMode={resizeMode}
        style={{
          height: height,
          width: width,
          backgroundColor: color,
          opacity: opacity,
          overflow: overflow,
        }}>
        {children}
      </ImageBackground>
    </View>
  );
};

export default Background;
