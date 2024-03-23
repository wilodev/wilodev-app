/**
 * @fileOverview Styles for TabBarBackground Component
 * @description This file provides style definitions for the TabBarBackground component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the TabBarBackground component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { StyleSheet } from 'react-native';

import { getColorByKey } from '@/shared/theme/utils/themeHelpers';

const borderTopStyle = {
  borderTopWidth: 1,
  borderTopColor: getColorByKey('muted', '100'),
};

/**
 * Retrieves the default style for CustomTabBarBottom.
 */
const tabBarBackgroundStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: getColorByKey('backgroundDark', '50'),
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%',
    height: 96,
    flex: 1,
  },
});

export const getContainerStyle = (showBorder: boolean) => ({
  ...tabBarBackgroundStyles.container,
  ...(showBorder ? borderTopStyle : {}),
});
