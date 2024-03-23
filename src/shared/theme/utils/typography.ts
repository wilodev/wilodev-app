/**
 * @fileOverview Typography Configuration
 * @description Provides typography settings for React Native Paper and React Navigation.
 *              This file contains configurations for fonts, font sizes, weights, line heights, and letter spacings.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
export const typography = {
  letterSpacings: {
    xs: -0.05,
    sm: -0.025,
    md: 0,
    lg: 0.025,
    xl: 0.05,
    '2xl': 0.1,
  },
  lineHeights: {
    '2xs': 1,
    xs: 1.125,
    sm: 1.25,
    md: 1.375,
    lg: 1.5,
    xl: 1.75,
    '2xl': 2,
    '3xl': 2.5,
    '4xl': 3,
    '5xl': 4,
  },
  fontConfig: {
    Roboto: {
      300: {
        normal: 'Roboto-Light',
      },
      400: {
        normal: 'Roboto-Regular',
      },
      500: {
        normal: 'Roboto-Medium',
      },
      700: {
        normal: 'Roboto-Bold',
      },
    },
    Inter: {
      100: {
        normal: 'Inter-Light',
      },
      300: {
        normal: 'Inter-Light',
      },
      400: {
        normal: 'Inter-Regular',
      },
      500: {
        normal: 'Inter-Medium',
      },
      600: {
        normal: 'Inter-SemiBold',
      },
      700: {
        normal: 'Inter-Bold',
      },
    },
  },
  fontWeights: {
    hairline: 100,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  fonts: {
    heading: 'Inter',
    body: 'Roboto',
    mono: undefined,
  },
  fontSizes: {
    '3xs': 8,
    '2xs': 10,
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    '2xl': 24,
    '3xl': 30,
    '4xl': 36,
    '5xl': 48,
    '6xl': 60,
    '7xl': 72,
    '8xl': 96,
    '9xl': 128,
  },
};

export type ITypography = typeof typography;
export type IFontSize = keyof typeof typography.fontSizes;
export type ILetterSpacing = keyof typeof typography.letterSpacings;
export type ILineHeight = keyof typeof typography.lineHeights;
export type IFontWeight = keyof typeof typography.fontWeights;
// export type IFont = typeof typography.fonts;
export interface IFont {
  heading?: string;
  body?: string;
  mono?: string;
}
