/**
 * @fileOverview TabBarBackground Component
 * @description This file includes the definition and functionality of the TabBarBackground component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for Background tab.
 *             Tab bar background component.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Box } from '@/shared/ui';

import { getContainerStyle } from './tabBarBackgroundStyles';
import { TabBarBackgroundProps } from './types';

/**
 * TabBarBackground component to encapsulate the functionality of app.
 * @param {TabBarBackgroundProps} props - Props for the tab bar background component.
 * @returns {JSX.Element} - The rendered tab bar background element.
 */
const TabBarBackground: React.FC<TabBarBackgroundProps> = ({
  showBorder,
  ...props
}): React.JSX.Element => {
  const containerStyle = getContainerStyle(showBorder);
  return <Box {...props} style={containerStyle} />;
};

export default TabBarBackground;
