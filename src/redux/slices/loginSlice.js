import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    token: Cookies.get('token') || null,
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
      Cookies.set('token', state.token);
    },
    removeToken: (state) => {
      state.token = null;
      Cookies.remove('token');
    },
  },
});

export const { setToken, removeToken } = loginSlice.actions;
export default loginSlice.reducer;