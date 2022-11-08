// Imports
import { useState, createContext, useContext } from 'react';

// Instanciate a context
const AppContext = createContext([]);

// Export context
export const useAppContext = () => useContext(AppContext);

// Custom provider
export const AppContextProvider = ({ children }) => {
    
    const [testValue, setTestValue] = useState('hola');

    return (
        <AppContext.Provider
            value={{testValue}}
        >
            {children}
        </AppContext.Provider>
    );
}