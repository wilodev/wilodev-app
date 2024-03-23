/**
 * @fileOverview ACLNavigator Component
 * @description This component manages the navigation flow for authentication-related screens.
 *              It defines the stack navigator for login, register, and password recovery screens,
 *              ensuring a clear and manageable authentication flow.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */

import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useThemeColors } from '@/shared/theme/utils/themeHelpers';

import {
  ActivationCodeScreen,
  ForceChangePasswordScreen,
  ForgotPasswordScreen,
  LoginScreen,
  RegisterScreen,
  ResetCodeScreen,
  ResetPasswordScreen,
  WelcomeScreen,
} from 'src/apps/acl';

export type ACLStackParamList = {
  ActivationCodeScreen: { email: string };
  ForceChangePasswordScreen: { email: string };
  ForgotPasswordScreen: undefined;
  LoginScreen: undefined;
  RegisterScreen: undefined;
  ResetCodeScreen: { email: string };
  ResetPasswordScreen: { email: string };
  WelcomeScreen: undefined;
};
const Stack = createNativeStackNavigator<ACLStackParamList>();

export const ACLNavigator: React.FC = () => {
  const { backgroundColor, primaryColor } = useThemeColors();
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{
        headerTitle: '',
        headerBackTitle: '',
        headerTintColor: primaryColor,
        headerStyle: {
          backgroundColor: backgroundColor,
        },
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="ActivationCodeScreen"
        component={ActivationCodeScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ForceChangePasswordScreen"
        component={ForceChangePasswordScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ForgotPasswordScreen"
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen
        name="ResetCodeScreen"
        component={ResetCodeScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{
          headerLeft: () => null,
          gestureEnabled: false,
        }}
      />
    </Stack.Navigator>
  );
};
