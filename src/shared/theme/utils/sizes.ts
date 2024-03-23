/**
 * @fileOverview Sizes Configuration
 * @description Provides size values for React Native Paper and React Navigation.
 *              This file contains definitions for various sizing properties like width, height, and space.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
import { spacing } from './space';

const container = {
  xs: 360,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
  '3xl': 1792,
};

export const sizes = {
  ...spacing,
  ...{
    '3xs': 224,
    '2xs': 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    '2xl': 672,
    '3xl': 768,
    '4xl': 896,
    '5xl': 1024,
    '6xl': 1152,
    '7xl': 1280,
    '8xl': 1408,
    '9xl': 1536,
  },
  container,
};

const boxContainer = {
  $xs: 360,
  $sm: 640,
  $md: 768,
  $lg: 1024,
  $xl: 1280,
  $2xl: 1536,
  $3xl: 1792,
  $full: '100%',
};

export type ISizes = keyof typeof sizes;
export type IContainer = keyof typeof boxContainer;
