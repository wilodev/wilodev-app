/**
 * @fileOverview Breakpoints Configuration
 * @description Provides breakpoints for responsive design in React Native Paper and React Navigation.
 *              This file contains the definitions of breakpoints used to adapt the layout to different screen sizes.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
export const breakpoints = {
  base: 0,
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  '2xl': 1440,
  '3xl': 1600,
};
export type IBreakpoint = keyof typeof breakpoints;
