import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    theme: 'light',
    activeMenuIndex: 0,
    mounted: false,
  },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
    },
    setTheme: (state, action) => {
      state.theme = action.payload;
    },
    setActiveMenuIndex: (state, action) => {
      state.activeMenuIndex = action.payload;
    },
    setMounted: (state, action) => {
      state.mounted = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, setActiveMenuIndex, setMounted } = themeSlice.actions;
export default themeSlice.reducer;

