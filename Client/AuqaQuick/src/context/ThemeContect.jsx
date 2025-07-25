import {  createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({children})=>{
    const [darkMode, setDarkMode] = useState(true);

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }else{
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    },[darkMode]);

    return (
    <ThemeContext.Provider value={{darkMode, setDarkMode}}>
       {children}
    </ThemeContext.Provider>
    )
}