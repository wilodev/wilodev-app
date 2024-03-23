/**
 * @fileOverview MainTabNavigator Component
 * @description Component that handles the main navigation of the application.
 *              Defines the navigation settings and visual style for the application tabs.
 *              Uses TabBarIcon, TabBarLabel and TabBarBackground components for a cohesive user experience.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { getHeaderTitleStyle } from '@/shared/theme/utils/customComponentStyles';
import { useThemeColors } from '@/shared/theme/utils/themeHelpers';

import { tabBarBackground, tabBarButton } from './components/TabBarBottom';
import { UserAccountStackNavigator } from '../UserAccountStackNavigator';

export type MainTabParamList = {
  UserAccount: undefined;
  // Add more tabs to the main tab navigator
};

const Tab = createBottomTabNavigator<MainTabParamList>();
export const MainTabNavigator: React.FC = () => {
  const { backgroundColor } = useThemeColors();
  const showBorder = true;
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerStyle: {
          backgroundColor: backgroundColor,
          borderBottomWidth: 0,
        },
        headerShadowVisible: false,
        tabBarStyle: {
          backgroundColor: backgroundColor,
        },
        tabBarLabelStyle: {
          marginTop: 16,
        },
        tabBarButton: (props) => tabBarButton(props, route, showBorder),
        tabBarBackground: () => tabBarBackground(showBorder),
        headerTitleStyle: getHeaderTitleStyle(),
      })}>
      <Tab.Screen
        name="UserAccount"
        component={UserAccountStackNavigator}
        options={{
          headerShown: false,
          title: 'Cuenta',
        }}
      />
    </Tab.Navigator>
  );
};
