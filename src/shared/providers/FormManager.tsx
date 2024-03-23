/**
 * @fileOverview Form Manager Hook
 * @description Provides the useFormManager hook, which interfaces with the React Hook Form Manager.
 *              This hook abstracts form logic, facilitating the integration with different form management solutions.
 *              It utilizes a validation manager to handle form validation, streamlining the process of managing form state and validation.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { FieldValues } from 'react-hook-form';

import { useReactHookFormManager } from './ReactHookFormManager';
import { IFormManager } from '../interfaces/IFormManager';
import { ValidationManager } from '../validation';

export const useFormManager = <T extends FieldValues>(
  defaultValues: T,
  validationManager: ValidationManager<T>
): IFormManager<T> => {
  const validationAdapter = validationManager.getAdapter();
  return useReactHookFormManager(defaultValues, validationAdapter);
};
