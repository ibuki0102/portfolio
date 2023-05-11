import '../styles/globals.css'
import { createContext } from 'react'
import { useState } from 'react'

export const ThemeContext = createContext(null)
export const LanguageContext = createContext(null)

export default function App({ Component, pageProps }) {
  const [theme, setTheme] = useState('light')
  const [language, setLanguage] = useState('zh_tw')
  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Component {...pageProps} />
      </ThemeContext.Provider>
    </LanguageContext.Provider>
  )
}
