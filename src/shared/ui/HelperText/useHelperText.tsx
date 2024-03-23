/**
 * @fileOverview useHelperText Hook
 * @description This hook provides a color value for helper text based on the current theme (dark or light mode).
 *              It utilizes the useToken hook from '@gluestack-style/react' to access theme-specific colors.
 * @returns {string} Color value for the helper text.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { useColorScheme } from 'react-native';

import { useToken } from '@gluestack-style/react';

/**
 * Provides the appropriate color for helper text based on the current color scheme.
 *
 * @example
 * const helperTextColor = useHelperText();
 * <Text style={{ color: helperTextColor }}>This is some helper text</Text>
 *
 * @returns {string} The color string for helper text.
 */
export const useHelperText = (): string => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = useToken('colors', isDarkMode ? 'textLight100' : 'textDark100');
  return color;
};
