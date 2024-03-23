/**
 * @fileOverview Register Form Validation
 * @description Defines the validation schema for the registration form using Yup.
 *              This schema is utilized to validate user input on the registration screen,
 *              ensuring data integrity and compliance with defined constraints.
 * @module apps/acl/utils/validation/registerValidation
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */

import {
  ValidationSchema,
  getValidationAdapter,
  ValidationManager,
} from '@/shared/validation';

import { RegisterFormFields } from '../../types/formTypes';

// Define the validation schema for the register form.
const registerValidationSchema: ValidationSchema<RegisterFormFields> = {
  // Email validation
  email: {
    required: 'El correo electrónico es requerido',
    email: 'El correo electrónico es inválido',
  },
  // Password validation
  password: {
    required: 'La contraseña es requerida',
    isPassword: {
      minLength: {
        value: 8,
        message: 'La contraseña debe tener al menos 8 caracteres',
      },
      message: 'La contraseña no cumple con los requisitos de seguridad',
    },
  },
  // Confirmation Password validation
  confirmPassword: {
    required: 'La confirmación de la contraseña es requerida',
    isRepeatPassword: {
      reference: 'password',
      message: 'Las contraseñas no coinciden',
    },
  },
};

// Instantiate the ValidationAdapterFactory with the register form.
const adapterFactory = getValidationAdapter<RegisterFormFields>();
// Instantiate the ValidationManager with the schema and the adapter instance.
export const registerValidator = new ValidationManager<RegisterFormFields>(
  registerValidationSchema,
  adapterFactory
);
