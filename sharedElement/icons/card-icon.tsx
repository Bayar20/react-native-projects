import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconType = {
  height: number;
  width: number;
  color?: string;
};

export const CardIcon: React.FC<IconType> = ({
  height,
  width,
  color = '#08D586',
  ...rest
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}>
      <Path
        d="M3 9h18M9.57 13H7M21 16.2c0 1.546-1.151 2.8-2.571 2.8H5.571C4.151 19 3 17.746 3 16.2V7.8C3 6.254 4.151 5 5.571 5h12.857C19.849 5 21 6.254 21 7.8v8.4z"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
