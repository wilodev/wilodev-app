import React from 'react';

import EmailSvg from '@/assets/icons/email.svg';
import { getColorByKey } from '@/shared/theme/utils/themeHelpers';

import { IconProps } from './types';

const EmailIcon: React.FC<IconProps> = ({
  width = 24,
  height = 24,
  color,
  ...props
}) => {
  const customColor: string = color || getColorByKey('primary');
  return (
    <EmailSvg width={width} height={height} fill={customColor} {...props} />
  );
};

export default EmailIcon;
