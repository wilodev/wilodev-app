/**
 * @fileOverview Password Recovery Form Validation
 * @description This file defines the validation schema for the password recovery form,
 *              ensuring that the user input is valid and meets the required criteria.
 *              It is a part of the ACL (Access Control Layer) functionality, focused on
 *              user authentication and password management.
 * @module apps/acl/utils/validation/passwordRecoveryValidation
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

import { PasswordRecoveryFormFields } from '../../types/formTypes';

// Define the validation schema for the password recovery form.
const passwordRecoveryValidationSchema: ValidationSchema<PasswordRecoveryFormFields> =
  {
    // Email validation
    email: {
      required: translate('aclMessages.passwordRecovery.requiredEmail'),
      email: translate('aclMessages.passwordRecovery.invalidEmail'),
    },
  };

// Instantiate the validation adapter factory with the password recovery form data type.
const adapterFactory = getValidationAdapter<PasswordRecoveryFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const passwordRecoveryValidator =
  new ValidationManager<PasswordRecoveryFormFields>(
    passwordRecoveryValidationSchema,
    adapterFactory
  );
