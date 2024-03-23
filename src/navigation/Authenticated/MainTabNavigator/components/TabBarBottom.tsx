/**
 * @fileOverview TabBarLabel Component
 * @description Component to display the custom label in the navigation bar.
 *              This component facilitates consistency and reuse of label styles in navigation.
 *              Used within the MainTabNavigator to represent the labels of each screen/tab.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */
import React from 'react';

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { TabBarBackground } from '@/shared/components/TabBar/TabBarBackground';
import { TabBarButton } from '@/shared/components/TabBar/TabBarButton';

import { MainTabParamList } from '../MainTabNavigator';

export const tabBarButton = (
  props: BottomTabBarButtonProps,
  route: RouteProp<MainTabParamList, keyof MainTabParamList>,
  showBorder: boolean
) => <TabBarButton {...props} route={route} showBorder={showBorder} />;

export const tabBarBackground = (showBorder: boolean) => (
  <TabBarBackground showBorder={showBorder} />
);
