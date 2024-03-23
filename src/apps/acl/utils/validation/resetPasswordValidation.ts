/**
 * @fileOverview Reset Password Form Validation
 * @description Defines the validation schema for the reset password form using Yup.
 *              This schema is used to validate user input on the reset password screen.
 * @module apps/acl/utils/validation/resetPasswordValidation
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

import { ResetPasswordFormFields } from '../../types/formTypes';

//  Define the validation schema for the reset password form.
const resetPasswordValidationSchema: ValidationSchema<ResetPasswordFormFields> =
  {
    newPassword: {
      required: translate('aclMessages.resetPassword.requiredNewPassword'),
      isPassword: {
        minLength: {
          value: 8,
          message: translate('aclMessages.resetPassword.minLengthNewPassword'),
        },
      },
    },
    confirmNewPassword: {
      required: translate(
        'aclMessages.resetPassword.requiredConfirmNewPassword'
      ),
      isRepeatPassword: {
        reference: 'newPassword',
        message: translate('aclMessages.resetPassword.passwordsMustMatch'),
      },
    },
  };

// Instance validation adapter factory with the reset password form.
const adapterFactory = getValidationAdapter<ResetPasswordFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const resetPasswordValidator =
  new ValidationManager<ResetPasswordFormFields>(
    resetPasswordValidationSchema,
    adapterFactory
  );
