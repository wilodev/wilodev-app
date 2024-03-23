/**
 * @fileOverview User Account Stack Navigator
 * @description This file contains the configuration for the stack navigator used within the User Account section.
 *              It defines the navigation flow and screens related to user account management such as viewing the profile,
 *              changing password, etc. This navigator is part of the authenticated area of the application, accessible only
 *              after successful user login.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { getHeaderTitleStyle } from '@/shared/theme/utils/customComponentStyles';
import { useThemeColors } from '@/shared/theme/utils/themeHelpers';

import { UserProfileScreen } from 'src/apps/authenticated/user-account';

export type UserAccountStackParamList = {
  UserProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<UserAccountStackParamList>();

const UserAccountStackNavigator: React.FC = () => {
  const { backgroundColor, primaryColor } = useThemeColors();
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerShadowVisible: false,
        headerBackTitleVisible: false,
        headerTintColor: primaryColor,
        headerTitleStyle: getHeaderTitleStyle(),
      }}>
      <Stack.Screen
        name="UserProfileScreen"
        component={UserProfileScreen}
        options={{ title: 'Mi Cuenta' }}
      />
    </Stack.Navigator>
  );
};

export default UserAccountStackNavigator;
