import { SvgProps } from 'react-native-svg';

import { IColorsKey } from '@/shared/theme/utils/colors';

export interface IconProps extends SvgProps {
  width?: number;
  height?: number;
  color?: IColorsKey;
}
