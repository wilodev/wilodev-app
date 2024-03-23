/**
 * @fileOverview CustomTabBarButton Types
 * @description This file defines the TypeScript types and interfaces used by the CustomTabBarButton component.
 *              It extends and customizes standard CustomTabBarButton properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

import { MainTabParamList } from '@/navigation/Authenticated/MainTabNavigator/MainTabNavigator';

/**
 * TabBarButtonProps interface extends the properties of React Native's TabBarButtonProps.
 * It provides customization options for the CustomTabBarButton component.
 */
export interface TabBarButtonProps extends BottomTabBarButtonProps {
  route: RouteProp<MainTabParamList, keyof MainTabParamList>;
  showBorder: boolean;
}
