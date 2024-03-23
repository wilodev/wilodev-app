/**
 * @fileOverview <FTName|pascalcase> Component
 * @description This file includes the definition and functionality of the <FTName|pascalcase> component.
 *              It is part of the <app|pascalcase> functionality within the wilodev-app project.
 *              This component is responsible for <intro|sentencecase>.
 *             <description|sentencecase>.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 */

import React from 'react';
import { Box } from '@/ui/Box';
import { <FTName| pascalcase >Props } from './types';

/**
 * <FTName|pascalcase> component to encapsulate the functionality of app.
 * @param {<FTName|pascalcase>Props} props - Props for the <FTName | nocase> component.
 * @returns {JSX.Element} - The rendered <FTName | nocase> element.
 */
const <FTName | pascalcase>: React.FC<<FTName|pascalcase>Props> = ({
  children,...props
}): React.JSX.Element => {
  return (
    <Box>
      {children}
    </Box>
  );
};

export default <FTName | pascalcase>;

