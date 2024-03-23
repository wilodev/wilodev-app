/**
 * @fileOverview ACLLayout Component
 * @description This file includes the definition and implementation of the ACLLayout component.
 *              It provides a consistent layout for all authentication-related screens such as Login, Forgot Password, and Register.
 *              The layout includes a container, a box for content, and areas for a title, subtitle, and additional children components.
 *              This component ensures a uniform look and feel across all authentication screens, enhancing the user experience and
 *              maintaining consistency throughout the app.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 *
 * @example
 * <ACLLayout title="Login" subtitle="Enter your credentials">
 *   <LoginForm />
 * </ACLLayout>
 */

import React from 'react';

import {
  Keyboard,
  TouchableWithoutFeedback,
  useColorScheme,
} from 'react-native';

import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

import logo from '@/assets/images/logo.png';

import { ACLLayoutProps } from './types';
import { getSafeAreaViewStyles } from '../theme/utils/customComponentStyles';
import { Box, Center, Image, Text } from '../ui';

const ACLLayout: React.FC<ACLLayoutProps> = ({ title, subtitle, children }) => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={getSafeAreaViewStyles(isDarkMode, insets)}>
        <Box width={366} flex={1} alignSelf="center">
          <Center>
            <Image
              source={logo}
              alt="logo"
              width={46}
              height={46}
              objectFit="cover"
            />
            <Text size="2xl" bold mt={8}>
              {title}
            </Text>
            {subtitle && (
              <Text size="sm" marginVertical={8}>
                {subtitle}
              </Text>
            )}
          </Center>
          {children}
        </Box>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ACLLayout;
