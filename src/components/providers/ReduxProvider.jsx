"use client";

import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from "@/redux/store";
import { useEffect } from "react";
import { setTheme, setMounted } from "@/redux/slices/themeSlice";



function ThemeSync() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // Initialize theme from localStorage
  useEffect(() => {
    dispatch(setMounted(true));
    const savedTheme = localStorage.getItem('theme') || 'light';
    dispatch(setTheme(savedTheme));
  }, [dispatch]);

  // Sync theme to DOM and localStorage
  useEffect(() => {
    if (theme) {
      localStorage.setItem('theme', theme);
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme]);

  return null;
}

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <ThemeSync />
      {children}
    </Provider>
  );
}

