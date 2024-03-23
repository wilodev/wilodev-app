/**
 * @fileOverview Configuration File
 * @description This file provides a centralized point for managing environment variables and configurations using react-native-config.
 *              It simplifies the process of accessing global settings such as API URLs and keys, ensuring consistency and ease of maintenance
 *              across the application. This approach enhances scalability and adaptability, allowing for swift changes in configuration
 *              without affecting multiple areas of the codebase.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [https://cintanegra.net/license](https://raw.githubusercontent.com/wilodev/cintanegra.net/master/LICENSE)
 *
 * @example
 * import { BASE_API_URL, GOOGLE_MAPS_API_KEY } from '@/shared/config;
 *
 * Use BASE_API_URL in application
 * console.log(BASE_API_URL);
 */
import Config from "react-native-config";

export const APP_BASE_API_URL = Config.APP_BASE_API_URL;
