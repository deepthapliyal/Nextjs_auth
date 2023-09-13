"use client"
import React, { createContext, useContext, useState } from 'react'


const AlertContext = createContext();

export const useAlertContext = () => {
    return useContext(AlertContext);
};

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const showAlert = (type, message) => {
        setAlert({ type, message });
    };
    const hideAlert = () => {
        setAlert(null)
    };
    return (
        <AlertContext.Provider value={{ alert, showAlert, hideAlert }}>
                {children}
            
        </AlertContext.Provider>
    );
};

