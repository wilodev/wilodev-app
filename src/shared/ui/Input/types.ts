/**
 * @fileOverview Input Types
 * @description This file defines the TypeScript types and interfaces used by the Input component.
 *              It extends and customizes standard Input properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React, { ReactElement } from 'react';

import { InputField } from '@gluestack-ui/themed';

import { IColorsKey } from '@/shared/theme/utils/colors';

type GInput = React.ComponentProps<typeof InputField>;

/**
 * InputProps interface extends the properties of React Native's InputProps.
 * It provides customization options for the Input component.
 */
export interface InputProps extends GInput {
  type?: 'text' | 'password';
  isTouched?: boolean;
  isDirty?: boolean;
  isInvalid?: boolean;
  startIcon?: ReactElement | null;
  endIcon?: ReactElement | null;
  handleState?: () => void;
  placeholder?: string;
  action:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'disabled'
    | 'error'
    | 'warning'
    | 'info';
  borderColor?: IColorsKey;
}
