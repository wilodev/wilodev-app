/**
 * @fileOverview LoginFormState and LoginFormActions
 * @description This file contains type definitions for the state and actions of the LoginForm.
 *              It is designed to support form management with strong typing, enhancing the
 *              development experience and ensuring robustness. The LoginFormState interface
 *              describes the structure of the form's state, including field values and validation errors.
 *              LoginFormActions interface outlines methods for handling form interactions such as
 *              field changes, submissions, and navigation.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { NavigationProp } from '@react-navigation/native';

import { ACLStackParamList } from '@/navigation/index';
import { FieldState } from '@/shared/interfaces/IFormManager';

import { LoginFormFields } from './formTypes';

/**
 * LoginFormState interface defines the structure of the state used in the LoginForm.
 * It includes form field states, field states, and validation errors.
 */
export interface LoginFormState {
  fieldStates: FieldState<LoginFormFields>;
  values: LoginFormFields;
  errors: Partial<Record<keyof LoginFormFields, string>>;
}

/**
 * LoginFormActions interface provides a set of methods for managing form interactions.
 * It includes functions for handling field changes, form submission, and navigation within the application.
 */
export interface LoginFormActions {
  handleChange: <K extends keyof LoginFormFields>(
    field: K
  ) => (value: LoginFormFields[K]) => void;
  handleBlur: <K extends keyof LoginFormFields>(field: K) => () => void;
  handleFocus: <K extends keyof LoginFormFields>(field: K) => () => void;
  handleSubmit: (callback: (values: LoginFormFields) => void) => void;
  handleLoginSubmit: () => void;
  navigation: NavigationProp<ACLStackParamList>;
}
