/**
 * @fileOverview ApiClient Class
 * @description The ApiClient class encapsulates HTTP request functionalities using Axios.
 *              It implements a singleton pattern to ensure a single instance of the Axios
 *              client throughout the application. This class abstracts Axios' HTTP methods
 *              (GET, POST, PUT, DELETE) to provide a simplified interface for making API requests.
 *              By centralizing API request logic, it enhances maintainability and scalability of the application's network layer.
 *              The class also supports custom configurations for each request, allowing flexibility in how requests are handled.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';

import { APP_BASE_API_URL } from '../config';

/**
 * Interface that extends AxiosError from Axios.
 * Can be used to add specific properties or methods for error handling in Axios.
 */
export interface IError extends AxiosError {}

export class ApiClient {
  private static instance: ApiClient;

  private axiosInstance: AxiosInstance;

  private constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
  }

  public static getInstance(): ApiClient {
    const baseUrl = APP_BASE_API_URL || '';
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(baseUrl);
    }
    return ApiClient.instance;
  }

  public async get<ResType>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResType>> {
    return this.axiosInstance.get<ResType>(url, config);
  }

  public async post<ReqType, ResType = ReqType>(
    url: string,
    data?: ReqType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResType>> {
    return this.axiosInstance.post<ResType>(url, data, config);
  }

  public async put<ReqType, ResType = ReqType>(
    url: string,
    data?: ReqType,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResType>> {
    return this.axiosInstance.put<ResType>(url, data, config);
  }

  public async delete<ResType>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<ResType>> {
    return this.axiosInstance.delete<ResType>(url, config);
  }
}
