/**
 * @fileOverview Redux Store
 * @description Configuration of the Redux Toolkit store for global state management.
 *              This store integrates different reducers from across the application.
 *              It's set up with Redux Toolkit to simplify Redux usage and enforce best practices.
 *              The store is the centralized location for state management in the application.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 */

import { configureStore } from '@reduxjs/toolkit';

import uiReducer from './redux/slices/uiSlice';

export const store = configureStore({
  reducer: {
    ui: uiReducer, // Integrating the UI slice reducer.
  },
});

// Typing for the app's state and dispatch to enhance type safety and autocomplete.
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
