/**
 * @fileOverview Image Component
 * @description This file includes the definition and functionality of the Image component.
 *              It is part of the Ui functionality within the wilodev-app project.
 *              This component is responsible for Image ui.
 *             Image ui extends image react native.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React from 'react';

import { Image as GImage } from '@gluestack-ui/themed';

import { ImageProps } from './types';

/**
 * Image component to encapsulate the functionality of app.
 * @param {ImageProps} props - Props for the image component.
 * @returns {JSX.Element} - The rendered image element.
 */
const Image: React.FC<ImageProps> = ({ ...props }): React.JSX.Element => {
  return <GImage {...props} />;
};

export default Image;
