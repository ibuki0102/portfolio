import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './public/locales/en.json'
import zh_tw from './public/locales/zh_tw.json'

const resources = {
  en: {
    translation: en,
  },
  zh_tw: {
    translation: zh_tw,
  },
}

i18n.use(initReactI18next).init({
  resources, // 會是所有翻譯資源
  fallbackLng: 'en', // 如果當前切換的語言沒有對應的翻譯則使用這個語言
  lng: 'zh_tw', // 預設語言
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
