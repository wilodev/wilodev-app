/**
 * @fileOverview Label Component
 * @description This file includes the definition and functionality of the Label component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Element to display an error text.
 *             Element to display a default error text will be used in the input.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { getLabelStyles } from './labelStyles';
import { LabelProps } from './types';
import { useLabel } from './useLabel';
import { Text } from '../Text';

/**
 * Label component to encapsulate the functionality of app.
 * @param {LabelProps} props - Props for the error text component.
 * @returns {JSX.Element} - The rendered error text element.
 */
const Label: React.FC<LabelProps> = ({
  children,
  ...props
}): React.JSX.Element => {
  const color = useLabel();
  const LabelStyles = getLabelStyles(props, color);
  return (
    <Text
      style={LabelStyles}
      $dark-color="$textDark0"
      $light-color="$textLight0"
      sx={{
        '@base': {
          fontSize: 14,
        },
        '@md': {
          fontSize: 16,
        },
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default Label;
