import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconType = {
  height: number;
  width: number;
  color?: string;
};

export const BellIcon: React.FC<IconType> = ({
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
        d="M12 3a6 6 0 016 6M18 9v4M12 3a6 6 0 00-6 6M6 9v4M18 13c0 .986.447 1.919 1.216 2.537M6 13c0 .986-.447 1.919-1.216 2.537M4.784 15.537l-.309.248c-.916.736-.395 2.215.78 2.215h13.49c1.175 0 1.696-1.479.78-2.215l-.309-.248M10.5 21h3"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
