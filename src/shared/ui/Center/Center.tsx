/**
 * @fileOverview Center Component
 * @description This file includes the definition and functionality of the Center component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Center.
 *             Center component.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Center as GCenter } from '@gluestack-ui/themed';

import { CenterProps } from './types';

/**
 * Center component to encapsulate the functionality of app.
 * @param {CenterProps} props - Props for the Center component.
 * @returns {JSX.Element} - The rendered Center element.
 */
const Center: React.FC<CenterProps> = ({ ...props }): React.JSX.Element => {
  return <GCenter>{props.children}</GCenter>;
};

export default Center;
