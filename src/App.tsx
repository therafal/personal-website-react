import { createContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { useTheme } from "./hooks/useTheme";
import { ExtendedTheme } from './components/styles/themes';
import GlobalStyle from "./components/styles/GlobalStyle";
import Main from "./components/pages/Main";
import NotFound from "./components/pages/NotFound";

export const themeContext = createContext<
  ((switchTheme: ExtendedTheme) => void) | null
>(null);


function App() {
    const {theme, themeLoaded, setMode} = useTheme();
    const [selectedTheme, setSelectedTheme] = useState(theme);

    useEffect(() => {
        setSelectedTheme(theme);
    }, [themeLoaded]);

    useEffect(() => {
        const themeColor = theme.colors?.body;
    
        const metaThemeColor = document.querySelector("meta[name='theme-color']");
        const maskIcon = document.querySelector("link[rel='mask-icon']");
        const metaMsTileColor = document.querySelector(
          "meta[name='msapplication-TileColor']"
        );
    
        metaThemeColor && metaThemeColor.setAttribute("content", themeColor);
        metaMsTileColor && metaMsTileColor.setAttribute("content", themeColor);
        maskIcon && maskIcon.setAttribute("color", themeColor);
      }, [selectedTheme]);
    
      const themeSwitcher = (switchTheme: ExtendedTheme) => {
        setSelectedTheme(switchTheme);
        setMode(switchTheme);
    };

    return (
        <>
        {themeLoaded && (
            <ThemeProvider theme={selectedTheme}>
                <GlobalStyle />
                <themeContext.Provider value={themeSwitcher}>
                    <div className="App">
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="404" element={<NotFound />} />
                        </Routes>
                    </div>
                </themeContext.Provider>
            </ThemeProvider>
        )}
        </>
    );
}

export default App;