import React from 'react';
import {View} from 'react-native';

type SizeType = number | 'small' | 'medium' | 'large';

type PaddingProps = {
  top?: SizeType;
  bottom?: SizeType;
  left?: SizeType;
  right?: SizeType;
  children: React.ReactChild | React.ReactChildren;
};

const Padding = ({
  top,
  bottom,
  left,
  right,
  children,
}: PaddingProps): JSX.Element => {
  return (
    <View
      style={{
        paddingTop: top,
        paddingBottom: bottom,
        paddingLeft: left,
        paddingRight: right,
      }}>
      {children}
    </View>
  );
};

export default Padding;
