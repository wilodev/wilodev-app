/**
 * @fileOverview React Hook Form Manager
 * @description Provides an implementation of the IFormManager interface using react-hook-form.
 *              This hook abstracts react-hook-form specific logic, offering a standardized interface
 *              for form handling across the application. It incorporates a custom validation adapter
 *              to validate form data effectively, ensuring data integrity and user input validation.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { useState } from 'react';

import {
  DefaultValues,
  FieldError,
  FieldValues,
  Path,
  ResolverResult,
  useForm,
} from 'react-hook-form';

import { IFormManager } from '../interfaces/IFormManager';
import { IValidationAdapter } from '../validation';

export const useReactHookFormManager = <T extends FieldValues>(
  defaultValues: T,
  validationAdapter: IValidationAdapter<T>
): IFormManager<T> => {
  function initializeState<U extends Record<string, unknown>>(
    values: U
  ): Record<keyof U, boolean> {
    const initialState: Record<keyof U, boolean> = {} as Record<
      keyof U,
      boolean
    >;
    Object.keys(values).forEach((key) => {
      initialState[key as keyof U] = false;
    });
    return initialState;
  }

  const [manualTouched, setManualTouched] = useState(() =>
    initializeState(defaultValues)
  );
  const [manualDirty, setManualDirty] = useState(() =>
    initializeState(defaultValues)
  );
  const {
    handleSubmit,
    formState: { errors, touchedFields, dirtyFields },
    setValue,
    trigger,
    watch,
  } = useForm<T>({
    defaultValues: defaultValues as DefaultValues<T>,
    mode: 'all',
    resolver: async (values): Promise<ResolverResult<T>> => {
      try {
        await validationAdapter.validate(values);
        return { values, errors: {} };
      } catch (e) {
        const validationErrors = validationAdapter.getErrors();
        if (validationErrors) {
          const formattedErrors = Object.keys(validationErrors).reduce(
            (acc, key) => {
              acc[key] = { type: 'validation', message: validationErrors[key] };
              return acc;
            },
            {} as Record<string, FieldError>
          );
          return { values, errors: formattedErrors };
        } else {
          console.error('Unexpected error format:', e);
          return { values, errors: {} };
        }
      }
    },
  });
  const isFieldTouched = (field: keyof T): boolean => {
    return (
      !!touchedFields && !!touchedFields[field as keyof typeof touchedFields]
    );
  };

  const isFieldDirty = (field: keyof T): boolean => {
    return !!dirtyFields && !!dirtyFields[field as keyof typeof dirtyFields];
  };

  // handleChange handles form field updates
  const handleChange =
    <K extends keyof T>(field: K) =>
    async (value: T[K]) => {
      setValue(field as unknown as Path<T>, value);
      setManualDirty({ ...manualDirty, [field]: true });
      await trigger(field as unknown as Path<T>);
    };
  // handleBlur handles onBlur events for form fields
  const handleBlur =
    <K extends keyof T>(field: K) =>
    async () => {
      setManualTouched({ ...manualTouched, [field]: true });
      await trigger(field as unknown as Path<T>);
    };
  // handleFocus handles on focus events for form fields
  const handleFocus =
    <K extends keyof T>(field: K) =>
    () => {
      setManualTouched({ ...manualTouched, [field]: true });
    };
  // handleFormSubmit wraps the handleSubmit function for form submission
  const handleFormSubmit = (callback: (values: T) => void) =>
    handleSubmit(callback);

  const values = watch();

  const fieldStates = Object.keys(defaultValues).reduce(
    (acc, key) => {
      const fieldKey = key as keyof T;
      acc[fieldKey] = {
        isInvalid: !!errors[fieldKey],
        isTouched: manualTouched[fieldKey] || isFieldTouched(fieldKey),
        isDirty: manualDirty[fieldKey] || isFieldDirty(fieldKey),
      };
      return acc;
    },
    {} as Record<
      keyof T,
      { isInvalid: boolean; isTouched: boolean; isDirty: boolean }
    >
  );
  // Mapping errors to a more accessible format
  const errorsMapped: Partial<Record<keyof T, string>> = {};
  for (const key in errors) {
    if (errors.hasOwnProperty(key)) {
      const error = errors[key];
      if (error && typeof error.message === 'string') {
        errorsMapped[key as keyof T] = error.message;
      }
    }
  }
  return {
    values,
    fieldStates,
    handleChange,
    handleBlur,
    handleFocus,
    handleSubmit: handleFormSubmit,
    errors: errorsMapped,
  };
};
