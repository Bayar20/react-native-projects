import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconType = {
  height: number;
  width: number;
  color?: string;
};
export const DollarIcon: React.FC<IconType> = ({
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
        d="M15 9.75v-.143A2.107 2.107 0 0012.893 7.5h-1.786a2.107 2.107 0 00-.513 4.15l2.812.705a2.107 2.107 0 01-.513 4.151H11.25v-.005h-.143A2.108 2.108 0 019 14.393v-.143M12 6v.95M12 18v-.95"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M18.364 5.636A9 9 0 115.636 18.364 9 9 0 0118.364 5.636"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
