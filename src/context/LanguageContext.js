import React, { createContext, useState, useContext, useEffect } from 'react';
import { translations } from '../translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('tr'); // Varsayılan dil Türkçe

  useEffect(() => {
    console.log('LanguageContext - Aktif dil değişti:', language);
    console.log('LanguageContext - Mevcut çeviriler:', translations[language]);
  }, [language]);

  const changeLanguage = (lang) => {
    console.log('LanguageContext - Dil değiştiriliyor:', lang);
    setLanguage(lang);
  };

  // Çeviri objesini context'e ekle!
  const t = translations[language];
  console.log('LanguageContext - Aktif çeviriler:', t);

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext; 