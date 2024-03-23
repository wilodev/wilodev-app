/**
 * @fileOverview Types for Layout Components
 * @description This file contains type definitions and interfaces for the Layout components used in the application.
 *              It defines the props for components like AuthLayout and MainLayout, ensuring type safety and enhancing
 *              the development experience. These types play a crucial role in maintaining consistency and predictability
 * in the behavior of the layout components across different screens and modules of the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export interface ACLLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export interface MainLayoutProps {
  children: React.ReactNode;
}
