import React, { useState, useContext } from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../config/themeContext'

export default function ActionButton() {
  const theme = useContext(themeContext)
  const { showActionSheetWithOptions } = useActionSheet()
  const [lang, setLang] = useState('English')
  const openSheet = () => {
    const options = ['VN', 'English', 'Cancel']
    const destructiveButtonIndex = 2 //Element number 2 in the array will be the 'Cancel' button
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex: destructiveButtonIndex,
        showSeparators: true,
        containerStyle: styles.container,
        textStyle: styles.text,
      },
      (buttonIndex) => {
        if (buttonIndex === 0) {
          if (lang === 'English') {
            setLang('VN')
            EventRegister.emit('changeLanguage', lang)
          }
        } else if (buttonIndex === 1) {
          if (lang === 'VN') {
            setLang('English')
            EventRegister.emit('changeLanguage', lang)
          }
        }
      },
    )
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={() => openSheet()}>
        <Text style={[styles.text, { color: theme.color }]}>{lang}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  container: {
    borderRadius: 20,
  },
  text: {
    paddingLeft: '40%',
  },
})
