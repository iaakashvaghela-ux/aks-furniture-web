import { useDispatch, useSelector } from "react-redux";
import { toggleTheme, setActiveMenuIndex } from "./slices/themeSlice";

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export const useTheme = () => {
  const dispatch = useDispatch();
  const { theme, mounted, activeMenuIndex } = useSelector((state) => state.theme);

  return {
    theme,
    mounted,
    activeMenuIndex,
    toggleTheme: () => dispatch(toggleTheme()),
    setActiveMenuIndex: (index) => dispatch(setActiveMenuIndex(index)),
  };
};

