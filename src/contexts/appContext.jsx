// Imports
import { useState, createContext, useContext, useEffect } from 'react';

// Instanciate a context
const AppContext = createContext([]);

// Export context
export const useAppContext = () => useContext(AppContext);

// Custom provider
export const AppContextProvider = ({ children }) => {
    
    const [testValue, setTestValue] = useState('hola');
    const [isActive, setIsActive] = useState(false);
    const [price, setPrice] = useState(0);

    const updateStatus = (status) => {
        setIsActive(status);
    };

    const updatePrice = (price) => {
        setPrice(price);
    };

    useEffect(() => {
        console.log(price);        
    })

    return (
        <AppContext.Provider
            value={{testValue, updateStatus, updatePrice}}
        >
            {children}
        </AppContext.Provider>
    );
}
