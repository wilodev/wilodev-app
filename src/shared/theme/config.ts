/**
 * @fileOverview Theme Configuration
 * @description Provides theme configuration and utility functions for React Native Paper and React Navigation.
 *              This file contains the definitions for light and dark themes, color schemes, and functions
 *              to retrieve specific color values and styles based on the theme. It's designed to ensure a consistent
 *              look and feel across the application while allowing easy customization and access to color properties.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
import { FontResolver, createConfig } from '@gluestack-style/react';
import { config } from '@gluestack-ui/config';
import { DefaultTheme } from '@react-navigation/native';

import { aliases } from './utils/alias';
import { borderWidths } from './utils/borders';
import { breakpoints } from './utils/breakpoints';
import { colors } from './utils/colors';
import { opacity } from './utils/opacity';
import { radius } from './utils/radius';
import { sizes } from './utils/sizes';
import { spacing } from './utils/space';
import { typography } from './utils/typography';

export const configTheme = createConfig({
  ...config,
  aliases: {
    ...aliases,
  },
  tokens: {
    ...config.tokens,
    colors: { ...colors },
    borderWidths: { ...borderWidths },
    radii: { ...radius },
    space: { ...spacing },
    breakpoints: { ...breakpoints },
    opacity: { ...opacity },
    fonts: {
      ...config.tokens.fonts,
      ...typography.fonts,
    },
    sizes: { ...sizes },
    fontWeights: {
      ...typography.fontWeights,
    },
  },
  plugins: [
    new FontResolver({
      mapFonts: () => {
        return {
          'Inter-Bold': require('@/assets/fonts/Inter-Bold.ttf'),
          'Inter-ExtraLight': require('@/assets/fonts/Inter-ExtraLight.ttf'),
          'Inter-Light': require('@/assets/fonts/Inter-Light.ttf'),
          'Inter-Medium': require('@/assets/fonts/Inter-Medium.ttf'),
          'Inter-Regular': require('@/assets/fonts/Inter-Regular.ttf'),
          'Inter-SemiBold': require('@/assets/fonts/Inter-SemiBold.ttf'),
          'Roboto-Bold': require('@/assets/fonts/Roboto-Bold.ttf'),
          'Roboto-Light': require('@/assets/fonts/Roboto-Light.ttf'),
          'Roboto-Medium': require('@/assets/fonts/Roboto-Medium.ttf'),
          'Roboto-Regular': require('@/assets/fonts/Roboto-Regular.ttf'),
        };
      },
    }),
  ],
});

export const DefaultThemeNavigation = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'transparent',
    background: 'transparent',
    card: 'transparent',
    text: 'transparent',
    border: 'transparent',
    notification: 'transparent',
  },
};
