/**
 * @fileOverview Color Configuration
 * @description Provides color configurations for React Native Paper and React Navigation.
 *              This file contains color definitions and schemes used across the application,
 *              ensuring a consistent color theme.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { Leaves } from './types';

export const colors = {
  primary0: '#007AFF',
  primary50: '#4D9FFF',
  primary100: '#80BFFF',
  primary200: '#B3DFFF',
  primary300: '#E6F0FF',
  primary400: '#F2F7FF',
  primary500: '#007AFF',
  primary600: '#0062CC',
  primary700: '#004C99',
  primary800: '#003666',
  primary900: '#002033',
  secondary0: '#34C759',
  secondary50: '#62D47F',
  secondary100: '#8FE1A5',
  secondary200: '#BCEDCB',
  secondary300: '#E8FAF1',
  secondary400: '#F4FDF8',
  secondary500: '#34C759',
  secondary600: '#2DAB50',
  secondary700: '#268F47',
  secondary800: '#1F733E',
  secondary900: '#184735',
  error0: '#FF3B30',
  error50: '#FF6B5A',
  error100: '#FF9B84',
  error200: '#FFCBB0',
  error300: '#FFEBDB',
  error400: '#FFF5F2',
  error500: '#FF3B30',
  error600: '#E63329',
  error700: '#CC2B22',
  error800: '#B3241C',
  error900: '#991D16',
  success0: '#4CD964',
  success50: '#6EDB83',
  success100: '#90EDA2',
  success200: '#B1FEC2',
  success300: '#D3FFE1',
  success400: '#E9FFF0',
  success500: '#4CD964',
  success600: '#44C55A',
  success700: '#3BB150',
  success800: '#329D46',
  success900: '#29883C',
  warning50: '#FFC94D',
  warning100: '#FFE08A',
  warning200: '#FFE9B8',
  warning300: '#FFF2E5',
  warning400: '#FFF9F2',
  warning500: '#FF9500',
  warning600: '#E68500',
  warning700: '#CC7600',
  warning800: '#B36600',
  warning900: '#994F00',
  info50: '#69CAFF',
  info100: '#8CD4FF',
  info200: '#B0DFFF',
  info300: '#D3EAFF',
  info400: '#E6F4FF',
  info500: '#5AC8FA',
  info600: '#50B4E6',
  info700: '#46A0CC',
  info800: '#3C8CB3',
  info900: '#327899',
  borderDark0: '#142F2F',
  borderDark50: '#265E5E',
  borderDark100: '#398D8D',
  borderDark200: '#4CBDAD',
  borderDark300: '#5FEDCD',
  borderDark400: '#73FFFF',
  borderDark500: '#007AFF',
  borderDark600: '#005F99',
  borderDark700: '#004473',
  borderDark800: '#002A4D',
  borderDark900: '#001427',
  borderDark950: '#000A14',
  borderLight0: '#E6F4FF',
  borderLight50: '#CCE9FF',
  borderLight100: '#B3DFFF',
  borderLight200: '#99D5FF',
  borderLight300: '#80CAFF',
  borderLight400: '#66BFFF',
  borderLight500: '#007AFF',
  borderLight600: '#0062CC',
  borderLight700: '#004C99',
  borderLight800: '#003666',
  borderLight900: '#002033',
  borderLight950: '#00141A',
  backgroundDark0: '#102C4C',
  backgroundDark50: '#204D6F',
  backgroundDark100: '#306E92',
  backgroundDark200: '#408FB6',
  backgroundDark300: '#50B0D9',
  backgroundDark400: '#60D1FC',
  backgroundDark500: '#007AFF',
  backgroundDark600: '#0062CC',
  backgroundDark700: '#004C99',
  backgroundDark800: '#003666',
  backgroundDark900: '#002033',
  backgroundDark950: '#00141A',
  backgroundLight0: '#E6F0FF',
  backgroundLight50: '#CCE1FF',
  backgroundLight100: '#B3D2FF',
  backgroundLight200: '#99C3FF',
  backgroundLight300: '#80B4FF',
  backgroundLight400: '#66A5FF',
  backgroundLight500: '#007AFF',
  backgroundLight600: '#0062CC',
  backgroundLight700: '#004C99',
  backgroundLight800: '#003666',
  backgroundLight900: '#002033',
  backgroundLight950: '#00141A',
  textLight0: '#000000',
  textLight50: '#333333',
  textLight100: '#666666',
  textLight200: '#999999',
  textLight300: '#CCCCCC',
  textLight400: '#E6E6E6',
  textLight500: '#000000',
  textLight600: '#000000',
  textLight700: '#000000',
  textLight800: '#000000',
  textLight900: '#000000',
  textDark0: '#FFFFFF',
  textDark50: '#E6E6E6',
  textDark100: '#CCCCCC',
  textDark200: '#B3B3B3',
  textDark300: '#999999',
  textDark400: '#808080',
  textDark500: '#FFFFFF',
  textDark600: '#FFFFFF',
  textDark700: '#FFFFFF',
  textDark800: '#FFFFFF',
  textDark900: '#FFFFFF',
  white: '#FFFFFF',
  black: '#000000',
};

export type IColors = Leaves<typeof colors>;
export type IColorsKey =
  | 'backgroundDark'
  | 'backgroundLight'
  | 'primary'
  | 'secondary'
  | 'danger'
  | 'error'
  | 'warning'
  | 'info'
  | 'success'
  | 'muted'
  | 'light'
  | 'dark';

export type IColorTypes = {
  backgroundDark: keyof IColors;
  backgroundLight: keyof IColors;
  primary: keyof IColors;
  secondary: keyof IColors;
  error: keyof IColors;
  warning: keyof IColors;
  info: keyof IColors;
  success: keyof IColors;
};

// Define the type for the custom configuration
export type ColorConfig = {
  [key in keyof IColorTypes]?: {
    light?: keyof IColors;
    dark?: keyof IColors;
  };
};

export const getSafeAreaStyle = (
  darkMode: boolean
): {
  backgroundColor: string;
  color: string;
} => {
  return {
    backgroundColor: darkMode
      ? colors.backgroundDark0
      : colors.backgroundLight0,
    color: darkMode ? colors.textLight0 : colors.textDark0,
  };
};
