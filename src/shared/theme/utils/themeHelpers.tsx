/**
 * @fileOverview Theme Helpers
 * @description This file contains various helper functions for theme management in the application.
 *              It includes functions for accessing theme colors, getting safe area styles, and other
 *              theme-related utilities. These helpers facilitate consistent theming and styling
 *              across the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { useColorScheme } from 'react-native';

import { ColorConfig, IColorsKey, colors } from './colors';
import { IColorTheme } from '../types';

// Default weights for the colors
const DEFAULT_WEIGHT = '500';

/**
 * Retrieves a specific color from the color configuration.
 * It allows specifying a color variant (weight), defaulting to 500 if not provided.
 *
 * @param {keyof colors} colorKey - The key for the desired color.
 * @param {string} [variant='500'] - Optional weight variant of the color.
 * @returns {string} The color string associated with the specified key and variant.
 *
 * @example
 * // Returns the color string for 'danger' with a weight of '500'
 * const dangerColor = getColorByKey('danger');
 *
 * // Returns the color string for 'danger' with a weight of '700'
 * const dangerColorVariant = getColorByKey('danger', '700');
 */
export const getColorByKey = (
  colorKey: IColorsKey,
  variant: string = '500'
): string => {
  const keyWithVariant = `${colorKey}${variant}`;

  if (keyWithVariant in colors) {
    return colors[keyWithVariant as keyof typeof colors] as string;
  }
  return '';
};

/**
 * Custom hook to access theme colors based on the current color scheme (light/dark).
 * It returns a set of color properties like background, primary, secondary, etc.
 * The hook also supports custom weight for colors in both light and dark modes.
 *
 * @param {ColorConfig} [config={}] - Optional configuration for custom color variants.
 * @returns {IColorTheme} Object containing color properties.
 */
export const useThemeColors = (config: ColorConfig = {}): IColorTheme => {
  const isDark = useColorScheme() === 'dark';
  return {
    backgroundColor: getColorByKey(
      isDark ? 'backgroundDark' : 'backgroundLight',
      isDark ? '950' : '0'
    ),
    primaryColor: getColorByKey(
      'primary',
      isDark
        ? config?.primary?.dark?.toString() || DEFAULT_WEIGHT
        : config?.primary?.light?.toString() || DEFAULT_WEIGHT
    ),
    secondaryColor: getColorByKey(
      'secondary',
      isDark
        ? config?.secondary?.dark?.toString() || DEFAULT_WEIGHT
        : config?.secondary?.light?.toString() || DEFAULT_WEIGHT
    ),
    errorColor: getColorByKey(
      'error',
      isDark
        ? config?.error?.dark?.toString() || DEFAULT_WEIGHT
        : config?.error?.light?.toString() || DEFAULT_WEIGHT
    ),
    warningColor: getColorByKey(
      'warning',
      isDark
        ? config?.warning?.dark?.toString() || DEFAULT_WEIGHT
        : config?.warning?.light?.toString() || DEFAULT_WEIGHT
    ),
    infoColor: getColorByKey(
      'info',
      isDark
        ? config?.info?.dark?.toString() || DEFAULT_WEIGHT
        : config?.info?.light?.toString() || DEFAULT_WEIGHT
    ),
    successColor: getColorByKey(
      'success',
      isDark
        ? config?.success?.dark?.toString() || DEFAULT_WEIGHT
        : config?.success?.light?.toString() || DEFAULT_WEIGHT
    ),
  };
};
