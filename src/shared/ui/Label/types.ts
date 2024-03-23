/**
 * @fileOverview Label Types
 * @description This file defines the TypeScript types and interfaces used by the Label component.
 *              It extends and customizes standard Label properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { TextProps } from '../Text/types';

/**
 * LabelProps interface extends the properties of React Native's LabelProps.
 * It provides customization options for the Label component.
 */
export interface LabelProps extends TextProps {}
