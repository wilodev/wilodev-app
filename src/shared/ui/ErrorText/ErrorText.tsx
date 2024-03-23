/**
 * @fileOverview ErrorText Component
 * @description This file includes the definition and functionality of the ErrorText component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Element to display an error text.
 *             Element to display a default error text will be used in the input.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Text } from '@gluestack-ui/themed';

import { getErrorTextStyles } from './errorTextStyles';
import { ErrorTextProps } from './types';

/**
 * ErrorText component to encapsulate the functionality of app.
 * @param {ErrorTextProps} props - Props for the error text component.
 * @returns {JSX.Element} - The rendered error text element.
 */
const ErrorText: React.FC<ErrorTextProps> = ({
  children,
  ...props
}): React.JSX.Element => {
  const errorTextStyles = getErrorTextStyles(props);
  return (
    <Text
      {...props}
      $dark-color="$error0"
      $light-color="$error500"
      style={errorTextStyles}>
      {children}
    </Text>
  );
};

export default ErrorText;
