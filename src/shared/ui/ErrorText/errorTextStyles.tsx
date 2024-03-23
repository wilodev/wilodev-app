/**
 * @fileOverview Styles for ErrorText Component
 * @description This file provides style definitions for the ErrorText component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the ErrorText component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { StyleSheet, TextStyle } from 'react-native';

import { ErrorTextProps } from './types';

/**
 * Retrieves the default style for ErrorText.
 */
export const getErrorTextStyles = (props: ErrorTextProps) => {
  const style = props.style;
  const defaultStyle: TextStyle = {};
  if (props.size === undefined) {
    defaultStyle.fontSize = 14;
  }
  return StyleSheet.compose(style, defaultStyle);
};
