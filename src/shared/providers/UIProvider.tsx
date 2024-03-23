/**
 * @fileOverview UIProvider Component
 * @description This component provides a context for UI components using the React Native Paper library.
 *              It wraps the application with the PaperProvider to ensure a consistent theme and styling
 *              across all UI components. This abstraction facilitates the use of React Native Paper features
 *              and components throughout the app.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React, { PropsWithChildren, ReactNode } from 'react';

import { useColorScheme } from 'react-native';

import { GluestackUIProvider } from '@gluestack-ui/themed';

import { configTheme } from '../theme';

/**
 * UIProvider component to provide React Native Paper context.
 * @param {PropsWithChildren} props - Props for the PropsWithChildren component.
 * @returns {ReactNode} - The rendered PaperProvider component wrapping the application.
 */
const UIProvider: React.FC<PropsWithChildren> = ({ children }): ReactNode => {
  const colorMode = useColorScheme() || 'light';
  return (
    <GluestackUIProvider colorMode={colorMode} config={configTheme}>
      {children}
    </GluestackUIProvider>
  );
};

export default UIProvider;
