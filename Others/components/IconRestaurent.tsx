import { useColorModeValue } from 'native-base';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

export default function IconRestaurent() {
  const iconBgColor = useColorModeValue('#4c1d95', '#8b5cf6');
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={14}
      height={12.604}
      tabIndex="-1"
    >
      <Path
        tabIndex="-1"
        data-name="Icon/shape"
        d="M13.931 4.124l-.736-3.06A1.375 1.375 0 0011.858 0H2.132a1.375 1.375 0 00-1.33 1.064l-.735 3.06a2.363 2.363 0 00.434 2.017 2.684 2.684 0 00.2.2V11.2a1.4 1.4 0 001.4 1.4h9.8a1.4 1.4 0 001.4-1.4V6.344a2.59 2.59 0 00.2-.2 2.355 2.355 0 00.43-2.02zm-2.094-2.731l.735 3.06a.95.95 0 01-.175.819.822.822 0 01-.658.329.875.875 0 01-.847-.8l-.406-3.4zM7.695 1.4h1.372l.378 3.165a.941.941 0 01-.231.749.835.835 0 01-.665.287.891.891 0 01-.854-.916zM4.541 4.565L4.926 1.4h1.369v3.285a.9.9 0 01-.9.917.843.843 0 01-.623-.287 1 1 0 01-.231-.75zm-3.116-.112L2.132 1.4h1.38l-.406 3.4a.881.881 0 01-.847.8.806.806 0 01-.651-.329.926.926 0 01-.183-.818zm.67 6.747V6.981A1.268 1.268 0 002.258 7a2.191 2.191 0 001.569-.665A2.252 2.252 0 005.444 7a2.22 2.22 0 001.561-.651 2.3 2.3 0 001.6.651 2.224 2.224 0 001.569-.665A2.191 2.191 0 0011.746 7a1.268 1.268 0 00.161-.021V11.2z"
        fill={iconBgColor}
      />
    </Svg>
  );
}
