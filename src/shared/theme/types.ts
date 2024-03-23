/**
 * @fileOverview Theme Types
 * @description Defines various type definitions used in theme configuration.
 *              Includes definitions for color names, color weights, size variants, and text variants.
 *              These types are essential for maintaining a consistent styling and theming approach throughout the app.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

export interface ThemePropertyMap {
  borderRadius: 'radius';
  color: 'colors';
  letterSpacing: 'letterSpacings';
  lineHeight: 'lineHeights';
  fontFamily: 'fonts';
  fontSize: 'fontSizes';
  fontWeight: 'fontWeights';
  size: 'sizes';
  space: 'space';
  border: 'borders';
  shadow: 'shadows';
}

export interface IColorTheme {
  backgroundColor: string;
  primaryColor: string;
  secondaryColor: string;
  errorColor: string;
  warningColor: string;
  infoColor: string;
  successColor: string;
}
