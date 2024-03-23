/**
 * @fileOverview <FTName|pascalcase> Component
 * @description This file includes the definition and implementation of a custom <FTName|pascalcase> component.
 *              It utilizes 'react-native-paper' for the base UI while adding extended functionalities.
 *              The component is designed following SOLID principles and hexagonal architecture,
 *              ensuring modularity, reusability, and ease of maintenance. It supports various
 *              properties like size, variant, action, and custom styles, making it versatile for different UI needs.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */

import React from 'react';
import { View } from 'react-native';
import {
  getDefaultStyle,
} from './style';
import { <FTName| pascalcase >Props } from './types';

/**
 * <FTName|pascalcase> component to encapsulate UI and behavior of a customizable <FTName | nocase>.
 * @param {<FTName|pascalcase>Props} props - Props for the <FTName | nocase> component.
 * @returns {JSX.Element} - The rendered <FTName | nocase> element.
 */
const <FTName | pascalcase>: React.FC<<FTName|pascalcase>Props> = ({
  children,...props
}): React.JSX.Element => {
  const defaultStyle = getDefaultStyle();
  return (
    <View {...props} style={{...defaultStyle}}>
      {children}
    </View>
  );
};

export default <FTName | pascalcase>;

