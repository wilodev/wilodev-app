/**
 * @fileOverview Login Form Validation
 * @description Defines the validation schema for the login form using Yup.
 *              This schema is utilized to validate user input on the login screen.
 * @module apps/acl/utils/validation/loginValidation
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { translate } from '@/shared/locales/globalTranslation';
import {
  ValidationSchema,
  getValidationAdapter,
  ValidationManager,
} from '@/shared/validation';

import { LoginFormFields } from '../../types/formTypes';

// Define el esquema de validación para el formulario de inicio de sesión.
const loginValidationSchema: ValidationSchema<LoginFormFields> = {
  // Validación de email
  email: {
    required: translate('aclMessages.login.requiredEmail'),
    email: translate('aclMessages.login.invalidEmail'),
  },
  // Validación de contraseña
  password: {
    required: translate('aclMessages.login.passwordRequired'),
  },
};

// Instancia la fábrica de adaptadores de validación con el tipo de datos del formulario de inicio de sesión.
const adapterFactory = getValidationAdapter<LoginFormFields>();

// Instancia el ValidationManager con el esquema y la instancia del adaptador.
export const loginValidator = new ValidationManager<LoginFormFields>(
  loginValidationSchema,
  adapterFactory
);
