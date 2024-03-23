/**
 * @fileOverview Box Types
 * @description This file defines the TypeScript types and interfaces used by the Box component.
 *              It extends and customizes standard Box properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { Box } from '@gluestack-ui/themed';

type GBoxProps = React.ComponentProps<typeof Box>;
/**
 * BoxProps interface extends the properties of React Native's BoxProps.
 * It provides customization options for the Box component.
 */
export interface BoxProps extends GBoxProps {}
