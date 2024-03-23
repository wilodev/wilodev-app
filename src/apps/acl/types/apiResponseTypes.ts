/**
 * @fileOverview Response Types for ACL
 * @description Defines interfaces for API responses in the ACL (Access Control Layer) module.
 *              This includes responses for login, registration, password recovery, etc.
 * @module apps/acl/types/responseTypes
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

export interface RegisterResponse {
  success: boolean;
  message: string;
}

export interface PasswordRecoveryResponse {
  success: boolean;
  message: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
}

export interface AccountActivationResponse {
  success: boolean;
  message: string;
}

// Tipo auxiliar para la información del usuario
export interface User {
  id: string;
  email: string;
  name: string;
}
