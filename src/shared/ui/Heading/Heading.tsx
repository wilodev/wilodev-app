/**
 * @fileOverview Heading Component
 * @description This file includes the definition and functionality of the Heading component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Heading for app.
 *             Heading component ui.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Heading as GHeading } from '@gluestack-ui/themed';

import { HeadingProps } from './types';

/**
 * Heading component to encapsulate the functionality of app.
 * @param {HeadingProps} props - Props for the Heading component.
 * @returns {JSX.Element} - The rendered Heading element.
 */
const Heading: React.FC<HeadingProps> = ({
  children,
  ...props
}): React.JSX.Element => {
  return (
    <GHeading $dark-color="$primary300" $light-color="$primary700" {...props}>
      {children}
    </GHeading>
  );
};

export default Heading;
