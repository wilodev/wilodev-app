/**
 * @fileOverview Styles for <FTName| pascalcase > Component
 * @description This file provides style definitions for the <FTName| pascalcase > component, offering
 *              a centralized approach for consistent and reusable designs. It includes
 *              styles for various size options (small, medium, large) and action types
 *              (primary, secondary, etc.). This modular approach aids in maintaining
 *              and scaling the UI design of the <FTName| pascalcase > component. The styles are designed
 *              to be flexible and easily modifiable to fit various design requirements.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */

import { StyleSheet } from 'react-native';

// Create a StyleSheet for <FTName | pascalcase> styles
const <FTName | camelcase>Styles = StyleSheet.create({
  default: {
    display: 'flex',
  },
});

/**
 * Retrieves the default style for <FTName| pascalcase >.
 */
export const getDefaultStyle = () => {
  return <FTName | camelcase>Styles.default;
};
