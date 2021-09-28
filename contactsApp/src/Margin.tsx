import React from 'react';
import {View} from 'react-native';

type SizeType = number | 'small' | 'medium' | 'large';

type MarginProps = {
  top?: SizeType;
  bottom?: SizeType;
  left?: SizeType;
  right?: SizeType;
  children: React.ReactChild | React.ReactChildren;
};

const Margin = ({
  top,
  bottom,
  left,
  right,
  children,
}: MarginProps): JSX.Element => {
  return (
    <View
      style={{
        paddingTop: top,
        marginBottom: bottom,
        marginLeft: left,
        marginRight: right,
      }}>
      {children}
    </View>
  );
};

export default Margin;
