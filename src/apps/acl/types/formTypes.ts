/**
 * @fileOverview Form Types for ACL
 * @description Defines interfaces for form fields used in the ACL (Access Control Layer) module.
 *              This includes forms for login, registration, password recovery, etc.
 * @module apps/acl/types/formTypes
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export interface LoginFormFields {
  email: string;
  password: string;
}

export interface RegisterFormFields {
  email: string;
  password: string;
  confirmPassword: string;
}

export interface PasswordRecoveryFormFields {
  email: string;
}

export interface ConfirmationCodeFormFields {
  code: string;
}

export interface ResetPasswordFormFields {
  newPassword: string;
  confirmNewPassword: string;
}

export interface AccountActivationFormFields {
  activationCode: string;
}
