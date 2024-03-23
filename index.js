/**
 * @fileOverview Main Entry Point
 * @description This file serves as the main entry point for the React Native application.
 *              It initializes and configures the core components and providers required for the app.
 *              This includes setting up the translation, store, UI, and safe area providers,
 *              which are essential for the app's functionality and UI consistency.
 *              The Main component is registered with AppRegistry for the app to start.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */

import React from 'react';

import { AppRegistry } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import { TranslationProvider } from '@/shared/providers/TranslationProvider';

import { App } from 'src/App';

import { name as appName } from './app.json';
import { StoreProvider, UIProvider } from './src/shared/providers/';

// Main component that wraps the entire application with essential providers.
const Main = () => {
  return (
    <TranslationProvider>
      <StoreProvider>
        <UIProvider>
          <SafeAreaProvider>
            <App />
          </SafeAreaProvider>
        </UIProvider>
      </StoreProvider>
    </TranslationProvider>
  );
};

// Register the Main component as the root component of the app.
AppRegistry.registerComponent(appName, () => Main);
