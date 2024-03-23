/**
 * @fileOverview Validation Adapter Factory
 * @description Provides a factory function to instantiate different types of validation adapters.
 *              This abstracts the creation process of adapters like YupAdapter or ZodAdapter,
 *              promoting a flexible and scalable validation strategy. It allows for easy
 *              swapping of validation logic without impacting the consuming components or services.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { IValidationAdapter } from './IValidationAdapter';
import { YupAdapter } from './yup/YupAdapter';

/**
 * Factory function to create a validation adapter instance.
 * @returns {new () => IValidationAdapter<T>} - A constructor for an IValidationAdapter implementation.
 * @description Can be configured to return different adapter instances based on certain conditions or configurations.
 */
export function getValidationAdapter<
  T extends object,
>(): new () => IValidationAdapter<T> {
  // Currently configured to return an instance of YupAdapter.
  return YupAdapter as new () => IValidationAdapter<T>;
}
