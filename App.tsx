import { NavigationContainer } from '@react-navigation/native'
import { ActionSheetProvider } from '@expo/react-native-action-sheet'
import React, { useEffect, useState } from 'react'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from './src/config/themeContext'
import languageContext from './src/config/languageContext'
import language from './src/config/language'
import theme from './src/config/theme'
import Tabs from './src/Navigator/HomeStack'

export default function App() {
  const [mode, setMode] = useState('Dark')
  const [lang, setLang] = useState('VN')
  useEffect(() => {
    let eventListener = EventRegister.addEventListener(
      'changeTheme',
      (data) => {
        setMode(data)
      },
    )
    return () => {
      EventRegister.removeAllListeners()
    }
  })

  useEffect(() => {
    let eventListener1 = EventRegister.addEventListener(
      'changeLanguage',
      (data) => {
        setLang(data)
      },
    )
    return () => {
      EventRegister.removeAllListeners()
    }
  })
  return (
    <>
      <themeContext.Provider
        value={mode === 'Light' ? theme.dark : theme.light}
      >
        <languageContext.Provider
          value={lang === 'English' ? language.vi : language.en}
        >
          <ActionSheetProvider>
            <NavigationContainer>
              <Tabs />
            </NavigationContainer>
          </ActionSheetProvider>
        </languageContext.Provider>
      </themeContext.Provider>
    </>
  )
}
