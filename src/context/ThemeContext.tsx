import {createContext, useState, ReactNode, useEffect} from "react";
import {Theme} from "../constants/Theme"

interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
    theme: Theme.Light,
    toggleTheme: () => {},
});

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme") as Theme;
        if (storedTheme) {
            return storedTheme;
        }
        const userPrefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
        return userPrefersDark ? Theme.Dark : Theme.Light;
    });

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === Theme.Light ? Theme.Dark : Theme.Light));
    };

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};