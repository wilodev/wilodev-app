/**
 * @fileOverview Validation Schema
 * @description Defines the structure for various validation rules used in the application.
 *              This schema acts as a centralized reference for validation rules like required,
 *              email, length constraints, etc. It enables consistent validation logic throughout
 *              the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

type DateComparison = {
  isAfter?: string | { value: string; message: string }; // Date should be after the specified date
  isBefore?: string | { value: string; message: string }; // Date should be before the specified date
  isBetween?: { start: string; end: string; message: string }; // Date should be between two dates
  isEqualOrAfter?: string | { value: string; message: string }; // Date should be equal or after the specified date
  isEqualOrBefore?: string | { value: string; message: string }; // Date should be equal or before the specified date
  isNotEqual?: string | { value: string; message: string }; // Date should not be equal to the specified date
};

type TimeComparison = DateComparison;

type YearComparison = DateComparison;

type ValidationRule = {
  required?: boolean | string; // Indicates if a field is required. Can be a boolean or a custom error message string.
  email?: boolean | string; // Checks for a valid email format. Can be a boolean or a custom error message string.
  minLength?: number | { value: number; message: string }; // Specifies minimum length for a field with an optional custom message.
  maxLength?: number | { value: number; message: string }; // Specifies maximum length for a field with an optional custom message.
  isString?: {
    // Additional string validations with optional minLength, maxLength, and custom messages.
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    message?: string;
  };
  isNumber?: {
    // Validation for numbers with optional minLength, maxLength, and custom messages.
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    message?: string;
  };
  isPhone?: {
    // Validation for phone numbers with minLength, maxLength, and custom messages.
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    message?: string;
  };
  isPassword?: {
    // Password-specific validations including length, character requirements, and custom messages.
    minLength?: number | { value: number; message: string };
    maxLength?: number | { value: number; message: string };
    minUppercase?: number | { value: number; message: string };
    minLowercase?: number | { value: number; message: string };
    minNumbers?: number | { value: number; message: string };
    minSymbols?: number | { value: number; message: string };
    message?: string;
  };
  isRepeatPassword?: {
    // Validation for confirming that two fields (like password and confirm password) match.
    reference: string; // Reference to the field to match.
    message?: string; // Custom error message.
  };
  isDate?: boolean | ({ message: string } & DateComparison); // Checks for a valid date format with additional comparison rules
  isTime?: boolean | ({ message: string } & TimeComparison); // Checks for a valid time format with additional comparison rules
  isYear?: boolean | ({ message: string } & YearComparison); // Checks for a valid year with additional comparison rules
};

export type ValidationSchema<T extends object> = {
  [K in keyof T]?: ValidationRule; // A mapping of field names to their respective validation rules.
};
