import React, { useState, useContext } from 'react'
import { useActionSheet } from '@expo/react-native-action-sheet'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { EventRegister } from 'react-native-event-listeners'
import themeContext from '../config/themeContext'
export default function ActionButton1({}) {
  const theme = useContext(themeContext)
  const { showActionSheetWithOptions } = useActionSheet()
  const [mode, setMode] = useState('Light')
  const openSheet = () => {
    const options = ['Auto', 'Light', 'Dark', 'Cancel'] //Element number 2 in the array will be the 'Cancel' button
    const destructiveButtonIndex = 3
    showActionSheetWithOptions(
      {
        options,
        destructiveButtonIndex: destructiveButtonIndex,
        showSeparators: true,
        containerStyle: styles.container,
        textStyle: styles.text,
      },
      (buttonIndex) => {
        if (buttonIndex === 1) {
          if (mode === 'Dark') {
            setMode('Light')
            EventRegister.emit('changeTheme', mode)
          }
        } else if (buttonIndex === 2) {
          if (mode === 'Light') {
            setMode('Dark')
            EventRegister.emit('changeTheme', mode)
          }
        }
        // Do something here depending on the button index selected
      },
    )
  }
  return (
    <View>
      <TouchableOpacity style={styles.btn} onPress={() => openSheet()}>
        <Text style={[styles.textTheme, { color: theme.color }]}>{mode}</Text>
      </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  btn: {},
  container: {
    borderRadius: 20,
  },
  text: {
    paddingLeft: '40%',
  },
  textTheme: {},
})
