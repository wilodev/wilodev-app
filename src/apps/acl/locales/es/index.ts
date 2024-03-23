/**
 * @fileOverview Locales Index
 * @description This file serves as a central hub for exporting all locale files used in the application.
 *              It simplifies the import of locale strings throughout the app and helps maintain a clear structure.
 *              As new locale files are added for different components or screens, they should be exported here.
 *
 *              Example Import:
 *              import { loginFormLocale } from '[Relative Path]/locales';
 *
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { accountActivationMessages } from './accountActivationMessages';
import { confirmationCodeMessages } from './confirmationCodeMessages';
import { loginMessages } from './loginMessages';
import { passwordRecoveryMessages } from './passwordRecoveryMessages';
import { registerMessages } from './registerMessages';
import { resetPasswordMessages } from './resetPasswordMessages';
import { welcomeMessages } from './welcomeMessages';

export const aclMessages = {
  accountActivation: accountActivationMessages,
  confirmationCode: confirmationCodeMessages,
  login: loginMessages,
  passwordRecovery: passwordRecoveryMessages,
  register: registerMessages,
  resetPassword: resetPasswordMessages,
  welcome: welcomeMessages,
};
