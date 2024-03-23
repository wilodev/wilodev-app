/**
 * @fileOverview Box Component
 * @description This file includes the definition and functionality of the Box component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Box container other elements.
 *             Box container the ui elements.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Box as GBox } from '@gluestack-ui/themed';

import { BoxProps } from './types';

/**
 * Box component to encapsulate the functionality of app.
 * @param {BoxProps} props - Props for the box component.
 * @returns {JSX.Element} - The rendered box element.
 */
const Box: React.FC<BoxProps> = ({ children, ...props }): React.JSX.Element => {
  return <GBox {...props}>{children}</GBox>;
};

export default Box;
