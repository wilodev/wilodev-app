/**
 * @fileOverview Styles for CustomTabBarBottom Component
 * @description This file provides style definitions for the CustomTabBarBottom component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the CustomTabBarBottom component. The styles are designed
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
  borderTopColor: getColorByKey('muted', '50'),
};

/**
 * Retrieves the default style for CustomTabBarBottom.
 */
const customTabBarBottomStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'column',
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    marginTop: 4,
    fontSize: 12,
  },
});

export const getContainerStyle = (showBorder: boolean) => ({
  ...customTabBarBottomStyles.container,
  ...(showBorder ? borderTopStyle : {}),
});

export const getIconStyle = (focused: boolean = false) => ({
  ...customTabBarBottomStyles.icon,
  tintColor: focused ? getColorByKey('secondary') : getColorByKey('muted'),
});

export const getTitleStyle = (focused: boolean = false) => ({
  ...customTabBarBottomStyles.title,
  color: focused ? getColorByKey('secondary') : getColorByKey('muted'),
});
