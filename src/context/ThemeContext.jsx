import React, {useState, createContext} from "react";

export const ThemeContext = createContext();

const ThemeProvider =  ({children}) => {
    const theme = 'light'; 

    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
