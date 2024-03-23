/**
 * @fileOverview TabBarButton Component
 * @description This file includes the definition and functionality of the TabBarButton component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for Component that encapsulates the tab bar button.
 *             Component that encapsulates the logic and components to create the button tab bar.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Box, Text, Image } from '@/shared/ui';

import {
  getContainerStyle,
  getIconStyle,
  getTitleStyle,
} from './tabBarButtonStyles';
import { TabBarButtonProps } from './types';

const iconMap = {
  UserAccount: {
    focused: require('@/assets/icons/user.png'),
    unfocused: require('@/assets/icons/user-outline.png'),
  },
};

/**
 * TabBarButton component to encapsulate the functionality of app.
 * @param {TabBarButtonProps} props - Props for the custom tab bar button component.
 * @returns {JSX.Element} - The rendered custom tab bar button element.
 */
const TabBarButton: React.FC<TabBarButtonProps> = ({
  route,
  showBorder,
  accessibilityState,
}): React.JSX.Element => {
  const focused = accessibilityState?.selected;
  const icon = focused
    ? iconMap[route.name].focused
    : iconMap[route.name].unfocused;
  const containerStyle = getContainerStyle(showBorder);
  const iconStyle = getIconStyle(focused);
  const titleStyle = getTitleStyle(focused);
  return (
    <Box testID="ContainerCustomTab" style={containerStyle}>
      <Image
        source={icon}
        resizeMode="contain"
        style={iconStyle}
        alt={`icon-${route.name}`}
      />
      <Text testID="LabelCustomTab" style={titleStyle}>
        {route.name}
      </Text>
    </Box>
  );
};

export default TabBarButton;
