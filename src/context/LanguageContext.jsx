import { createContext, useContext, useState } from 'react'
import ru from '../locales/ru.json'
import en from '../locales/en.json'

const translations = { ru, en }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  // Load initial language from localStorage if available, default to 'ru'
  const [lang, setLangState] = useState(() => {
    const saved = localStorage.getItem('app_lang')
    return saved === 'en' || saved === 'ru' ? saved : 'ru'
  })

  const setLang = (newLang) => {
    if (newLang === 'en' || newLang === 'ru') {
      setLangState(newLang)
      localStorage.setItem('app_lang', newLang)
    }
  }

  // Translation helper
  const t = (path) => {
    const keys = path.split('.')
    let current = translations[lang]
    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key]
      } else {
        // Fallback to Russian translation if key is missing in English
        let fallback = translations['ru']
        for (const fKey of keys) {
          if (fallback && fallback[fKey] !== undefined) {
            fallback = fallback[fKey]
          } else {
            return path
          }
        }
        return fallback
      }
    }
    return current
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
