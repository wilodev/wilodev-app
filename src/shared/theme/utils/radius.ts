/**
 * @fileOverview Radius Configuration
 * @description Provides radius values for React Native Paper and React Navigation.
 *              This file contains the definitions of border radius used to style components with rounded corners.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export const radius = {
  none: 0,
  xs: 2,
  sm: 4,
  md: 6,
  lg: 8,
  xl: 12,
  '2xl': 16,
  '3xl': 24,
  '4xl': 32,
  '5xl': 48,
  '6xl': 64,
  '7xl': 128,
  '8xl': 160,
  '9xl': 192,
  full: 9999,
};

export type IRadius = keyof typeof radius;
