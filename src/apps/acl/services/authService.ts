/**
 * @fileOverview AuthService
 * @description Contains functions for authentication-related API calls.
 *              Abstracts the details of API requests for login, registration, and other auth processes.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { ApiClient } from '@/shared/lib/ApiClient';

import { LoginFormFields } from '../types/formTypes';

/**
 * Send login credentials to the server and handle the response.
 *
 * @param loginData Data containing email and password for login.
 * @returns Promise with the server response or error.
 */
export const login = async (loginData: LoginFormFields) => {
  const apiClient = ApiClient.getInstance();
  try {
    const response = await apiClient.post('/auth/login', loginData);
    return response.data; // Assuming the API returns some user data on successful login
  } catch (error) {
    // Handle error, e.g., invalid credentials, server error, etc.
    throw error;
  }
};
