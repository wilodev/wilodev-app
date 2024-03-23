/**
 * @fileOverview Input Component
 * @description This file includes the definition and functionality of the Input component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Input component.
 *             Input component for different inputs.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Input as GInput, InputField, InputSlot } from '@gluestack-ui/themed';

import { InputProps } from './types';
import { useActionColorScheme } from './useActionColorScheme';
import { Box } from '../Box';

/**
 * Input component to encapsulate the functionality of app.
 * @param {InputProps} props - Props for the input component.
 * @returns {JSX.Element} - The rendered input element.
 */
const Input: React.FC<InputProps> = ({
  action,
  type,
  isTouched,
  isDirty,
  isInvalid,
  startIcon,
  endIcon,
  placeholder,
  handleState,
  ...props
}): React.JSX.Element => {
  const {
    darkBorderColor,
    lightBorderColor,
    darkInputColor,
    lightInputColor,
    darkInputFieldColor,
    lightInputFieldColor,
    placeholderTextColor,
  } = useActionColorScheme(action, isTouched, isDirty, isInvalid);
  return (
    <Box
      $dark-borderBottomColor={darkBorderColor}
      $light-borderBottomColor={lightBorderColor}
      borderTopWidth={0}
      borderRightWidth={0}
      borderBottomWidth={1}
      borderLeftWidth={0}
      borderRadius={0}
      marginBottom={8}>
      <GInput
        borderWidth={0}
        marginVertical={4}
        $dark-color={darkInputColor}
        $light-color={lightInputColor}>
        {startIcon && <InputSlot pl="$3">{startIcon}</InputSlot>}
        <InputField
          type={type}
          placeholder={placeholder}
          $dark-color={darkInputFieldColor}
          $light-color={lightInputFieldColor}
          placeholderTextColor={placeholderTextColor}
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          pl="$4"
          {...props}
        />
        {endIcon && (
          <InputSlot pr="$3" onPress={handleState}>
            {endIcon}
          </InputSlot>
        )}
      </GInput>
    </Box>
  );
};

export default Input;
