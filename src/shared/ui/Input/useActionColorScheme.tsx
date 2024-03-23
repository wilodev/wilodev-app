import { useColorScheme } from 'react-native';

import { IColorsKey } from '@/shared/theme/utils/colors';
import { getColorByKey } from '@/shared/theme/utils/themeHelpers';

/**
 * Custom hook to get color names based on the action type and the current color scheme.
 *
 * @param {string} action - The action type, e.g., 'primary', 'secondary', 'success', etc.
 * @returns {object} An object containing specific color names for border, text, and placeholder.
 */
export const useActionColorScheme = (
  action:
    | 'primary'
    | 'secondary'
    | 'success'
    | 'disabled'
    | 'error'
    | 'warning'
    | 'info',
  isTouched: boolean = false,
  isDirty: boolean = false,
  isInvalid: boolean = false
) => {
  const isDarkMode = useColorScheme() === 'dark';

  const actionColorMap = {
    primary: 'primary',
    secondary: 'secondary',
    success: 'success',
    error: 'error',
    warning: 'warning',
    info: 'info',
    disabled: 'gray',
  };

  let borderColorLevel,
    inputColorLevel,
    placeholderColorLevel,
    inputFieldColorLevel,
    iconColorLevel;
  if (isInvalid) {
    borderColorLevel = isDarkMode ? '600' : '500';
    inputColorLevel = '800';
    placeholderColorLevel = isDarkMode ? '500' : '600';
    inputFieldColorLevel = isDarkMode ? '100' : '500';
  } else {
    // Settings for isTouched o isDirty
    borderColorLevel =
      isTouched || isDirty
        ? isDarkMode
          ? '500'
          : '500'
        : isDarkMode
          ? '700'
          : '700';
    inputColorLevel = isTouched || isDirty ? '500' : '900';
    placeholderColorLevel =
      isTouched || isDirty
        ? isDarkMode
          ? '500'
          : '500'
        : isDarkMode
          ? '700'
          : '700';
    inputFieldColorLevel =
      isTouched || isDirty
        ? isDarkMode
          ? '500'
          : '500'
        : isDarkMode
          ? '700'
          : '700';
    iconColorLevel =
      isTouched || isDirty
        ? isDarkMode
          ? '500'
          : '500'
        : isDarkMode
          ? '700'
          : '700';
  }

  const baseColorName = isInvalid
    ? 'error'
    : actionColorMap[action] || 'primary';

  return {
    darkBorderColor: `${getColorByKey(baseColorName as IColorsKey, borderColorLevel)}`,
    lightBorderColor: `${getColorByKey(baseColorName as IColorsKey, borderColorLevel)}`,
    darkInputColor: `${getColorByKey(baseColorName as IColorsKey, inputColorLevel)}`,
    lightInputColor: `${getColorByKey(baseColorName as IColorsKey, inputColorLevel)}`,
    darkInputFieldColor: `${getColorByKey(baseColorName as IColorsKey, inputFieldColorLevel)}`,
    lightInputFieldColor: `${getColorByKey(baseColorName as IColorsKey, inputFieldColorLevel)}`,
    placeholderTextColor: `${getColorByKey(baseColorName as IColorsKey, placeholderColorLevel)}`,
    iconColor: `${getColorByKey(baseColorName as IColorsKey, iconColorLevel)}`,
  };
};
