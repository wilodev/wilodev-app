/**
 * @fileOverview Authentication Navigation Hooks
 * @description This file contains custom hooks related to navigation within the authentication flow of the application.
 *              It utilizes '@react-navigation/native' to provide a convenient and consistent way to navigate across
 *              different screens in the authentication stack. These hooks simplify navigation logic and improve
 *              code readability, ensuring easy maintenance and scalability.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import { ACLStackParamList } from './ACL/ACLNavigator';

/**
 * Custom hook to access the navigation object specific to the authentication flow.
 * @returns {NavigationProp<ACLStackParamList>} The navigation prop with type safety for the authentication stack.
 */
export const useAuthNavigation = (): NavigationProp<ACLStackParamList> => {
  const navigation: NavigationProp<ACLStackParamList> = useNavigation();
  return navigation;
};

/**
 * Custom hook to type-check the route parameters for the authentication flow.
 * @returns {RouteProp<ACLStackParamList, keyof ACLStackParamList>} The route prop with type safety.
 */
export const useAuthRoute = <T extends keyof ACLStackParamList>(): RouteProp<
  ACLStackParamList,
  T
> => {
  return useRoute<RouteProp<ACLStackParamList, T>>();
};
