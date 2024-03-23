/**
 * @fileOverview AppNavigator Component
 * @description This component manages the main navigation of the application.
 *              It sets up the stack navigator and defines the screens for different
 *              parts of the app. It abstracts the navigation logic to ensure a
 *              decoupled and manageable navigation flow.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { DefaultThemeNavigation } from '@/shared/theme/config';

import { ACLNavigator } from './ACL/ACLNavigator';
import { MainTabNavigator } from './Authenticated/MainTabNavigator';

const AppNavigator: React.FC = () => {
  const isAuthenticated = false; // TODO: replace this with state from the authentication slice. (waiting API )
  return (
    <NavigationContainer theme={DefaultThemeNavigation}>
      {!isAuthenticated ? <ACLNavigator /> : <MainTabNavigator />}
    </NavigationContainer>
  );
};

export default AppNavigator;
