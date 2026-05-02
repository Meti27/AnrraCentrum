import { createContext, useContext, useMemo, useState } from "react";
import { translations } from "../data/translations";

const LanguageContext = createContext();

function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => acc?.[key], obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const value = useMemo(() => {
    return {
      language,
      setLanguage,
      t: (path) => getNestedValue(translations[language], path) ?? path,
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}