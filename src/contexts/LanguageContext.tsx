'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { SupportedLang, convertText } from '../utils/chineseConvert';

interface LanguageContextType {
  lang: SupportedLang;
  toggleLang: () => void;
  setLang: (l: SupportedLang) => void;
  t: (text: string) => string;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'zh-Hans',
  toggleLang: () => {},
  setLang: () => {},
  t: (text: string) => text,
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<SupportedLang>('zh-Hans');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mal_dz_lang') as SupportedLang;
      if (saved === 'zh-Hans' || saved === 'zh-Hant') {
        setLangState(saved);
      }
    } catch {
      // localStorage may fail in restricted iframe / private browsing
    }
  }, []);

  const setLang = (newLang: SupportedLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('mal_dz_lang', newLang);
      document.documentElement.lang = newLang === 'zh-Hant' ? 'zh-TW' : 'zh-MY';
    } catch {
      // ignore
    }
  };

  const toggleLang = () => {
    const next = lang === 'zh-Hans' ? 'zh-Hant' : 'zh-Hans';
    setLang(next);
  };

  const t = (text: string) => {
    return convertText(text, lang);
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
