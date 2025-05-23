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

  // t fonksiyonu: çeviri anahtarlarını string olarak alır
  const t = (key) => {
    return key
      .split('.')
      .reduce((obj, k) => (obj && obj[k] !== undefined ? obj[k] : null), translations[language])
      || '';
  };

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