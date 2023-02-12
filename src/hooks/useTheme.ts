import { useEffect, useState } from "react";
import { themes, ExtendedTheme  }  from "../components/styles/themes";
import { setToLS, getFromLS } from "../utils/storage";

export const useTheme = () => {
  const [theme, setTheme] = useState<ExtendedTheme>(themes.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: ExtendedTheme) => {
    setToLS("theme", mode.name? mode.name : "dark");
    setTheme(mode);
  };

  useEffect(() => {
    const localThemeName = getFromLS("theme");
    localThemeName ? setTheme(themes[localThemeName]) : setTheme(themes.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
