/**
 * @fileOverview UISlice
 * @description Slice for managing UI related state within the Redux store.
 *              This includes states like loading indicators, which can be used
 *              across the application to show/hide loading spinners or progress bars.
 *              The setLoading action allows for easy toggling of this state.
 *              It's part of the global state management using Redux Toolkit.
 * @author Wilson Fabian Pérez Sucuzhañay
 * @contact wilsonperez.developer@gmail.com, wperez@cintanegra.net
 * @copyright 2024 @wilodev
 * @license For license details, see [License](https://raw.githubusercontent.com/wilodev/wilodev-app/develop/LICENSE.md)
 */

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UIState {
  loading: boolean;
}

const initialState: UIState = {
  loading: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    // Action to set the loading state. True to show loading, false to hide.
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = uiSlice.actions;
export default uiSlice.reducer;
