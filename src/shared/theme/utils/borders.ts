/**
 * @fileOverview Border Widths Configuration
 * @description Provides border width configurations for React Native Paper and React Navigation.
 *              This file contains definitions for border widths used throughout the application,
 *              enabling consistent border styling.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export const borderWidths = {
  '0': 0,
  '1': 1,
  '2': 2,
  '4': 4,
  '8': 8,
  '12': 12,
  '16': 16,
  '20': 20,
  '24': 24,
  '32': 32,
  '40': 40,
  '48': 48,
  '56': 56,
  '64': 64,
};

export type IBorderWidth = keyof typeof borderWidths;
