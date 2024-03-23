/**
 * @fileOverview Text Component
 * @description This file includes the definition and functionality of the Text component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Text for app.
 *             Text component ui.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Text as GText } from '@gluestack-ui/themed';

import { TextProps } from './types';

/**
 * Text component to encapsulate the functionality of app.
 * @param {TextProps} props - Props for the text component.
 * @returns {JSX.Element} - The rendered text element.
 */
const Text: React.FC<TextProps> = ({
  children,
  color,
  ...props
}): React.JSX.Element => {
  return (
    <GText
      {...props}
      $dark-color={color ?? '$textDark0'}
      $light-color={color ?? '$textLight0'}>
      {children}
    </GText>
  );
};

export default Text;
