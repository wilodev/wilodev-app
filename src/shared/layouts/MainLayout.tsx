/**
 * @fileOverview MainLayout Component
 * @description This file includes the definition and implementation of the MainLayout component.
 *              It provides a consistent layout for all main screens such as Home, Transfers, Account.
 *              The layout includes a container, a box for content and additional children components.
 *              This component ensures a uniform look and feel across all authentication screens, enhancing the user experience and
 *              maintaining consistency throughout the app.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 *
 * @example
 * <MainLayout>
 *   <HomeForm />
 * </MainLayout>
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

import { MainLayoutProps } from './types';
import { getSafeAreaViewStyles } from '../theme/utils/customComponentStyles';
import { Container } from '../ui';

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const insets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <SafeAreaView style={getSafeAreaViewStyles(isDarkMode, insets)}>
        <Container
          marginTop={-insets.top}
          marginBottom={-insets.bottom}
          marginRight={-insets.right}
          marginLeft={-insets.left}>
          {children}
        </Container>
      </SafeAreaView>{' '}
    </TouchableWithoutFeedback>
  );
};

export default MainLayout;
