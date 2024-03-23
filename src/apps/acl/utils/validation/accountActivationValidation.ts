/**
 * @fileOverview Account Activation Form Validation
 * @description Defines the validation schema for the account activation form using Yup.
 *              This schema is used to validate user input on the account activation screen.
 * @module apps/acl/utils/validation/accountActivationValidation
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

import { AccountActivationFormFields } from '../../types/formTypes';

// Define the validation schema for the account activation form.
const accountActivationValidationSchema: ValidationSchema<AccountActivationFormFields> =
  {
    activationCode: {
      required: translate(
        'aclMessages.accountActivation.requiredActivationCode'
      ),
      minLength: {
        value: 6,
        message: translate(
          'aclMessages.accountActivation.minLengthActivationCode'
        ),
      },
      maxLength: {
        value: 6,
        message: translate(
          'aclMessages.accountActivation.maxLengthActivationCode'
        ),
      },
    },
  };

// Instance validation adapter factory with the account activation form.
const adapterFactory = getValidationAdapter<AccountActivationFormFields>();

// Instantiate the ValidationManager with the schema and the adapter instance.
export const accountActivationValidator =
  new ValidationManager<AccountActivationFormFields>(
    accountActivationValidationSchema,
    adapterFactory
  );
