/**
 * @fileOverview Validation Manager
 * @description Manages validation processes across the application. It abstracts the specific details of
 *              validation libraries (like Yup or Zod) and provides a consistent interface for validation.
 *              This class facilitates the handling of validation schemas and adapters, streamlining the
 *              validation process.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { IValidationAdapter } from './IValidationAdapter';
import { ValidationSchema } from './ValidationSchema';

class ValidationManager<T extends object> {
  // The adapter that handles the specifics of the validation process.
  private adapter: IValidationAdapter<T>;

  /**
   * Creates an instance of ValidationManager.
   * @param {ValidationSchema} schema - The validation schema to be used.
   * @param {new () => IValidationAdapter<T>} adapter - The adapter factory function.
   */
  constructor(
    schema: ValidationSchema<T>, // The validation schema to be used.
    adapter: new () => IValidationAdapter<T> // The adapter factory function.
  ) {
    // Instantiates the adapter using the provided factory function.
    this.adapter = new adapter();
    // Sets the validation schema in the adapter.
    this.adapter.setSchema(schema);
  }

  /**
   * Validates the provided data against the schema.
   * @param {T} data - The data to be validated.
   * @returns {Promise<void>} - A promise that resolves if validation passes, or rejects with errors.
   */
  async validate(data: T): Promise<void> {
    await this.adapter.validate(data);
  }

  /**
   * Retrieves the adapter instance for further operations.
   * @returns {IValidationAdapter<T>} - The validation adapter instance.
   */
  getAdapter(): IValidationAdapter<T> {
    return this.adapter;
  }
}

export default ValidationManager;
