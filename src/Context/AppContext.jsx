"use client"

import React, { createContext } from "react";

export const ThemeContext = createContext();

const AppContext = ({ children }) => {


    const [isOpen, setIsOpen] = React.useState(false)
    
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }


    const authInfo = { isOpen, setIsOpen, toggleDrawer };

    return (
        <ThemeContext.Provider value={authInfo}>{children}</ThemeContext.Provider>
    );
};

export default AppContext;
