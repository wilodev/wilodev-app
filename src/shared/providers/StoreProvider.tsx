/**
 * @fileOverview StoreProvider Component
 * @description This component acts as a context provider for Redux state management.
 *              It wraps the application with the Redux Provider to facilitate global state access
 *              throughout the app. This abstraction ensures a consistent and centralized state management interface.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import React, { PropsWithChildren, ReactNode } from 'react';

import { Provider } from 'react-redux';

import { store } from '@/state/store';

/**
 * StoreProvider component to provide Redux store context.
 * @param {PropsWithChildren} props - Props for the PropsWithChildren component.
 * @returns {ReactNode} - The rendered Provider component wrapping the application.
 */
const StoreProvider: React.FC<PropsWithChildren> = ({
  children,
}): ReactNode => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
