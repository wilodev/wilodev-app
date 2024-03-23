/**
 * @fileOverview LoginScreen Component
 * @description This screen component is responsible for displaying the Login user interface.
 *              It serves as a container for specific components related to the Login functionality.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */
import React from 'react';

import { LoginForm } from '@/acl/components/LoginForm';
import { ACLLayout } from '@/shared/layouts';
import { Box, Text } from '@/shared/ui';

const Login: React.FC = () => {
  return (
    <ACLLayout title="Login" subtitle="This is a subtitle">
      <Box>
        <Text>LoginScreen</Text>
        <LoginForm />
      </Box>
    </ACLLayout>
  );
};
export default Login;
