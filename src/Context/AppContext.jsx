"use client"

import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const AppContext = ({ children }) => {


    const [isDarkmode, setIsDarkmode] = useState(true);

    const handleToggole = () => {
        setThemeChange(!themeChange)
    }


    const [isOpen, setIsOpen] = React.useState(false)

    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const authInfo = { isOpen, setIsOpen, toggleDrawer, isDarkmode, setIsDarkmode, handleToggole };

    return (
        <ThemeContext.Provider value={authInfo}>{children}</ThemeContext.Provider>
    );
};

export default AppContext;
