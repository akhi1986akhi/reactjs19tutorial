import React, {createContext, useState} from "react";

const AppContext = createContext();

export function AppProvider({children}){

    const [message, setMessage]= useState('Welcome to the home component!');

    return(

        <AppContext.Provider value={{message, setMessage}}>{children}</AppContext.Provider>

    )
}

export default AppContext;