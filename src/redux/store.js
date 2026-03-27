import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import loginReducer from './slices/loginSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
  },
});

