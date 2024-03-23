/**
 * @fileOverview useLoginFormManager Hook
 * @description Custom hook for initializing and managing the login form state.
 *              This hook abstracts the form logic from the LoginForm component,
 *              providing a cleaner interface for form state management.
 *              It utilizes useFormManager with the specific validation schema for login.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */

import { useAuthNavigation } from '@/navigation/hooks';
import { HookOutput } from '@/shared/interfaces/hook';
import { useFormManager } from '@/shared/providers/FormManager';

import { login } from '../services/authService';
import { LoginFormFields } from '../types';
import {
  LoginFormActions,
  LoginFormState,
} from '../types/LoginFormStateAndActions';
import { loginValidator } from '../utils';

export const useLoginFormManager = (): HookOutput<
  LoginFormState,
  LoginFormActions
> => {
  const navigation = useAuthNavigation();
  const {
    values,
    errors,
    fieldStates,
    handleChange,
    handleBlur,
    handleSubmit,
    handleFocus,
  } = useFormManager<LoginFormFields>(
    { email: '', password: '' },
    loginValidator
  );
  // Function send to the form manager to handle the form submission
  const handleOnSubmit = async (valuesForm: LoginFormFields) => {
    try {
      const userData = await login(valuesForm);
      console.log(
        '🚀 ~ useLoginFormManager ~ handleOnSubmit ~ userData ~ line 46:',
        userData
      );
      // Do something with the userData, like updating the user context or redirecting
    } catch (error) {
      // Handle errors, for example, showing error messages in the UI
    }
  };
  // Empaquetar el estado y las acciones en objetos separados
  const state: LoginFormState = { fieldStates, values, errors };
  const actions: LoginFormActions = {
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit,
    handleLoginSubmit: handleSubmit(handleOnSubmit),
    navigation,
  };

  return { state, actions };
};
