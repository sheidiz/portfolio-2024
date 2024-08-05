import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("es");

    const switchLanguage = (lang) => {
        setLanguage(lang);
    }

    return (
        <LanguageContext.Provider value={{ language, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);