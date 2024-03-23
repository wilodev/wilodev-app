/**
 * @fileOverview useLabel Hook
 * @description This hook provides a color value for label text based on the current theme (dark or light mode).
 *              It utilizes the useToken hook from '@gluestack-style/react' to access theme-specific colors.
 * @returns {string} Color value for the label text.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { useColorScheme } from 'react-native';

import { useToken } from '@gluestack-style/react';

/**
 * Provides the appropriate color for label text based on the current color scheme.
 *
 * @example
 * const labelColor = useLabel();
 * <Label style={{ color: labelColor }}>This is some label text</Label>
 *
 * @returns {string} The color string for label text.
 */
export const useLabel = (): string => {
  const isDarkMode = useColorScheme() === 'dark';
  const color = useToken('colors', isDarkMode ? 'textDark300' : 'textLight500');
  return color;
};
