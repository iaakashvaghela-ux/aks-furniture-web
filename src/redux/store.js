import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import loginReducer from './slices/loginSlice';
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    login: loginReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
