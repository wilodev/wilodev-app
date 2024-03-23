/**
 * @fileOverview Spanish translations for register form validation messages.
 * @description Contains all Spanish language text for register form validation.
 *              These messages are used across the application where register form validation occurs.
 *              The structure and naming conventions ensure consistency and ease of use when integrating
 *              translations into the validation logic.
 * @module acl/locales/es/registerMessages
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export const registerMessages = {
  requiredEmail: 'El correo electrónico es requerido',
  invalidEmail: 'El correo electrónico es inválido',
  requiredPassword: 'La contraseña es requerida',
  passwordMinLength: 'La contraseña debe tener al menos 8 caracteres',
  passwordMaxLength: 'La contraseña no debe exceder los 20 caracteres',
  passwordMismatch: 'Las contraseñas no coinciden',
  requiredConfirmPassword: 'Es necesario confirmar la contraseña',
};
