import React, { createContext } from "react";
import useInitialState from '../hooks/useInitialState';

const AppContext = createContext();

function AppProvider({ children }) {
    const initialState = useInitialState();

    return (
        <AppContext.Provider value={initialState}>
            {children}
        </AppContext.Provider>
    );
}

export {AppContext, AppProvider};