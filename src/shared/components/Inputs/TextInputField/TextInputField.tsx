/**
 * @fileOverview TextInputField Component
 * @description This file includes the definition and functionality of the TextInputField component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for Input field component base.
 *             .
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { ErrorText } from '@/shared/ui/ErrorText';
import { HelperText } from '@/shared/ui/HelperText';
import { Input } from '@/shared/ui/Input';

import { TextInputFieldProps } from './types';

/**
 * TextInputField component to encapsulate the functionality of app.
 * @param {TextInputFieldProps} props - Props for the input field component.
 * @returns {JSX.Element} - The rendered input field element.
 */
const TextInputField: React.FC<TextInputFieldProps> = ({
  label,
  errorMessage,
  helperText,
  action = 'primary',
  ...props
}): React.JSX.Element => {
  return (
    <>
      <Input
        action={action}
        type="text"
        inputMode="text"
        keyboardType="default"
        textContentType="none"
        {...props}
        placeholder={label}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export default TextInputField;
