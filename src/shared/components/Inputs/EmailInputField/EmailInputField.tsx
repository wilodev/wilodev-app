/**
 * @fileOverview EmailInputField Component
 * @description This file includes the definition and functionality of the EmailInputField component.
 *              It is part of the Components functionality within the wilodev-app project.
 *              This component is responsible for Input field component base.
 *             .
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { IColorsKey } from '@/shared/theme/utils/colors';
import { ErrorText } from '@/shared/ui/ErrorText';
import { HelperText } from '@/shared/ui/HelperText';
import { EmailIcon } from '@/shared/ui/Icons';
import { Input } from '@/shared/ui/Input';
import { useActionColorScheme } from '@/shared/ui/Input/useActionColorScheme';

import { EmailInputFieldProps } from './types';

/**
 * EmailInputField component to encapsulate the functionality of app.
 * @param {EmailInputFieldProps} props - Props for the input field component.
 * @returns {JSX.Element} - The rendered input field element.
 */
const EmailInputField: React.FC<EmailInputFieldProps> = ({
  label,
  errorMessage,
  helperText,
  action = 'primary',
  ...props
}): React.JSX.Element => {
  const { iconColor } = useActionColorScheme(
    action,
    props.isTouched,
    props.isDirty,
    props.isInvalid
  );
  return (
    <>
      <Input
        action={action}
        type="text"
        autoComplete="email"
        inputMode="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        startIcon={
          props.startIcon || <EmailIcon color={iconColor as IColorsKey} />
        }
        {...props}
        placeholder={label}
      />
      {helperText && <HelperText>{helperText}</HelperText>}
      {errorMessage && <ErrorText>{errorMessage}</ErrorText>}
    </>
  );
};

export default EmailInputField;
