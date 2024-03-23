/**
 * @fileOverview Text Types
 * @description This file defines the TypeScript types and interfaces used by the Text component.
 *              It extends and customizes standard Text properties for enhanced type safety and clarity.
 *              This centralization of types aids in maintaining consistency and readability across the component's usage.
 *              Types are crafted to align with SOLID principles for robust and scalable code structure.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { Text } from '@gluestack-ui/themed';

type GTextProps = React.ComponentProps<typeof Text>;
/**
 * TextProps interface extends the properties of React Native's TextProps.
 * It provides customization options for the Text component.
 */
export interface TextProps extends GTextProps {}
