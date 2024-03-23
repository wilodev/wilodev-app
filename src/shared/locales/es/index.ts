/**
 * @fileOverview Spanish Translation Index
 * @description This file aggregates and exports all Spanish translation messages used across the application.
 *              It combines global translation messages with module-specific messages (like ACL) to provide
 *              a comprehensive set of Spanish translations. This centralization facilitates the management
 *              and usage of translation resources within the application.
 * @module shared/locales/es
 * @author Wilson Fabian Pérez Sucuzhañay
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { aclMessages } from 'src/apps/acl/locales/es';

// Global Spanish translation messages
const globalMessages = {
  // Define global translation keys and messages here
  welcome: 'Bienvenido a nuestra aplicación',
  goodbye: 'Gracias por visitarnos',
};

// Combining ACL and other module-specific messages with global messages
export const esMessages = {
  ...globalMessages,
  aclMessages: { ...aclMessages }, // Incorporating ACL module-specific messages
};
