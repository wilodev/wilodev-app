/**
 * @fileOverview LoginForm Component
 * @description This file includes the definition and functionality of the LoginForm component.
 *              It is part of the Acl functionality within the wilodev-app project.
 *              This component is responsible for Login form.
 *             Login form and other components to login screen.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { useLoginFormManager } from '@/acl/hooks/useLoginFormManager';
import { EmailInputField } from '@/shared/components/Inputs/EmailInputField';

import { LoginFormProps } from './types';

/**
 * LoginForm component to encapsulate the functionality of app.
 * @param {LoginFormProps} props - Props for the login form component.
 * @returns {JSX.Element} - The rendered login form element.
 */
const LoginForm: React.FC<LoginFormProps> = ({
  ...props
}): React.JSX.Element => {
  const {
    state: { fieldStates, values, errors },
    actions: { handleChange, handleBlur, handleFocus },
  } = useLoginFormManager();
  return (
    <>
      <EmailInputField
        action="primary"
        label="Correo electrónico"
        value={values.email}
        onChangeText={handleChange('email')}
        onBlur={handleBlur('email')}
        errorMessage={errors.email}
        isDirty={fieldStates.email.isDirty}
        isTouched={fieldStates.email.isTouched}
        isInvalid={fieldStates.email.isInvalid}
        onFocus={handleFocus('email')}
        {...props}
      />
    </>
  );
};

export default LoginForm;
