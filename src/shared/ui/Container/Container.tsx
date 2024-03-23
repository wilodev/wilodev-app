/**
 * @fileOverview Container Component
 * @description This file includes the definition and functionality of the Container component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Container.
 *             Container component.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Center } from '@gluestack-ui/themed';

import { ContainerProps } from './types';

/**
 * Container component to encapsulate the functionality of app.
 * @param {ContainerProps} props - Props for the container component.
 * @returns {JSX.Element} - The rendered container element.
 */
const Container: React.FC<ContainerProps> = ({
  ...props
}): React.JSX.Element => {
  return <Center>{props.children}</Center>;
};

export default Container;
