import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import { Language, getTranslations, LocalizedStrings } from '@/lib/i18n';

// Create context here instead of in i18n.ts to avoid circular dependencies
export const I18nContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: LocalizedStrings;
} | null>(null);

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [language, setLanguage] = useState<Language>(() => {
    // Get from localStorage or default to Punjabi
    const stored = localStorage.getItem('nabha-health-language');
    if (stored && ['en', 'hi', 'pa', 'bn', 'ta', 'te', 'gu', 'mr', 'ur'].includes(stored)) {
      return stored as Language;
    }
    
    // Try to detect from browser language
    const browserLang = navigator.language.slice(0, 2);
    if (['hi', 'pa', 'bn', 'ta', 'te', 'gu', 'mr', 'ur'].includes(browserLang)) {
      return browserLang as Language;
    }
    
    return 'pa'; // Default to Punjabi as requested
  });

  useEffect(() => {
    localStorage.setItem('nabha-health-language', language);
    
    // Update document lang attribute for accessibility
    document.documentElement.lang = language;
    
    // Update font class for Punjabi
    document.body.classList.toggle('font-gurmukhi', language === 'pa');
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: getTranslations(language),
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}