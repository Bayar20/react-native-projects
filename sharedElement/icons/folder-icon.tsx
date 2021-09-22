import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

type IconType = {
  height: number;
  width: number;
  color?: string;
};

export const FolderIcon: React.FC<IconType> = ({width, height, ...rest}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...rest}>
      <Path
        d="M20.1667 17.4167C20.1667 17.9029 19.9735 18.3692 19.6297 18.713C19.2859 19.0568 18.8196 19.25 18.3333 19.25H3.66668C3.18045 19.25 2.71413 19.0568 2.37031 18.713C2.0265 18.3692 1.83334 17.9029 1.83334 17.4167V4.58333C1.83334 4.0971 2.0265 3.63079 2.37031 3.28697C2.71413 2.94315 3.18045 2.75 3.66668 2.75H8.25001L10.0833 5.5H18.3333C18.8196 5.5 19.2859 5.69315 19.6297 6.03697C19.9735 6.38079 20.1667 6.8471 20.1667 7.33333V17.4167Z"
        stroke="#009EF8"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
};
