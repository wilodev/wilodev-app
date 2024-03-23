/**
 * @fileOverview App Component
 * @description This file defines the App component, which is the root component of the application.
 *              It handles the application's theme, including the status bar style and
 *              the safe area's appearance based on the selected theme (dark or light).
 *              The App component integrates the primary navigation system of the application
 *              using AppNavigator.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { StatusBar, useColorScheme } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { AppNavigator } from './navigation';
import { getSafeAreaProviderStyles } from './shared/theme/utils/customComponentStyles';
import { getColorByKey } from './shared/theme/utils/themeHelpers';

// App component: the root component for the application.
export function App(): React.JSX.Element {
  // Detects the color scheme (dark or light) for theming purposes.
  const isDarkMode = useColorScheme() === 'dark';
  // Retrieves the appropriate style for the safe area based on the theme.
  const safeAreaStyles = getSafeAreaProviderStyles(isDarkMode);
  // Retrieves the background color based on the theme.
  const backgroundColor = getColorByKey(
    isDarkMode ? 'backgroundDark' : 'backgroundLight',
    isDarkMode ? '950' : '50'
  );

  return (
    <SafeAreaProvider style={safeAreaStyles}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundColor}
      />
      <AppNavigator />
    </SafeAreaProvider>
  );
}
