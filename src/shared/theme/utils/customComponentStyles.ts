/**
 * @fileOverview Custom Component Styles
 * @description This file contains style definitions for various components used in the application
 *              which are not directly tied to Gluestack components. It includes styles for React Navigation elements,
 *              SafeAreaView, and other non-Gluestack components. These styles help maintain consistency
 *              and theming across the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { StyleProp, TextStyle, ViewStyle } from 'react-native';

import { EdgeInsets } from 'react-native-safe-area-context';

import { getColorByKey } from './themeHelpers'; // Asumiendo que getColorByKey se exporta desde aquí

/**
 * Generates styles for SafeAreaView based on the current theme.
 *
 * @returns {object} A StyleSheet object containing styles for SafeAreaView.
 *
 * @example
 * const safeAreaStyles = getSafeAreaViewStyles(isDark);
 * <SafeAreaView style={safeAreaStyles.safeArea} />
 */
export const getSafeAreaViewStyles = (
  isDark: boolean,
  insets: EdgeInsets
): StyleProp<ViewStyle> => {
  const backgroundColor = getColorByKey(
    isDark ? 'backgroundDark' : 'backgroundLight',
    isDark ? '950' : '0'
  );
  return {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor,
    marginTop: -insets?.top,
    marginBottom: -insets?.bottom,
    marginLeft: -insets?.left,
    marginRight: -insets?.right,
  };
};

/**
 * Generates styles for SafeAreaProvider based on the current theme.
 *
 * @returns {object} A StyleSheet object containing styles for SafeAreaProvider.
 *
 * @example
 * const safeAreaStyles = getSafeAreaProviderStyles(isDark);
 * <SafeAreaProvider style={safeAreaStyles.safeArea} />
 */
export const getSafeAreaProviderStyles = (
  isDark: boolean
): StyleProp<ViewStyle> => {
  const backgroundColor = getColorByKey(
    isDark ? 'backgroundDark' : 'backgroundLight',
    isDark ? '950' : '0'
  );
  return {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor,
  };
};

/**
 * Generates styles for the header title in React Navigation.
 *
 * @returns {TextStyle} A style object for the header title.
 *
 * @example
 * const headerTitleStyle = getHeaderTitleStyle();
 * <Stack.Screen options={{ headerTitleStyle }} />
 */
export const getHeaderTitleStyle = (): StyleProp<
  Pick<TextStyle, 'fontFamily' | 'fontSize' | 'fontWeight'> & {
    color?: string | undefined;
  }
> => {
  return {
    fontSize: 20, // Ejemplo: tamaño de fuente
    fontWeight: 'bold', // Ejemplo: peso de la fuente
    color: getColorByKey('primary'), // Ajusta el color según tu tema
  };
};
