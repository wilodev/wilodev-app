/**
 * @fileOverview HelperText Component
 * @description This file includes the definition and functionality of the HelperText component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Element to display a help text.
 *             Element to display a help text below an input.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { getHelperTextStyles } from './helperTextStyles';
import { HelperTextProps } from './types';
import { useHelperText } from './useHelperText';
import { Text } from '../Text';

/**
 * HelperText component to encapsulate the functionality of app.
 * @param {HelperTextProps} props - Props for the helper text component.
 * @returns {JSX.Element} - The rendered helper text element.
 */
const HelperText: React.FC<HelperTextProps> = ({
  children,
  ...props
}): React.JSX.Element => {
  const color = useHelperText();
  const helperTextStyles = getHelperTextStyles(props, color);
  return (
    <Text
      style={helperTextStyles}
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

export default HelperText;
