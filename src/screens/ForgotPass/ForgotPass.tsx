/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-native/no-color-literals */
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native'
import React, { useState, useContext } from 'react'
import { TextInput } from 'react-native-paper'
import color from '../../untils/color'
import themeContext from '../../config/themeContext'
import languageContext from '../../config/languageContext'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { StackParams } from '../../Navigator/HomeStack'

const ForgotPass = () => {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>()
  const theme = useContext(themeContext)
  const language = useContext(languageContext)
  const [user, setUser] = useState('')
  return (
    <ScrollView
      style={[styles.wrapper, { backgroundColor: theme.backgroundWrapper }]}
    >
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.iconHeader, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, { color: theme.color }]}>
        {language.Forgot_you_password}?
      </Text>
      <View style={styles.account}>
        <TextInput
          style={styles.userText}
          label={'Email'}
          value={user}
          underlineStyle={{
            display: 'none',
          }}
          textColor="black"
          onChangeText={(ev) => setUser(ev)}
        />
        <TouchableOpacity
          style={[styles.signIn, { backgroundColor: theme.buttonSignin }]}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.titleSignin}>OK</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default ForgotPass

const styles = StyleSheet.create({
  account: {
    marginTop: '50%',
  },
  header: {
    marginTop: 50,
  },
  iconHeader: {
    height: 25,
    marginLeft: 10,
    tintColor: color.primary,
    width: 25,
  },
  signIn: {
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 5,
    height: 45,
    justifyContent: 'center',
    margin: 10,
  },
  title: {
    fontSize: 16,
    margin: 10,
    marginTop: 20,
  },
  titleSignin: {
    color: 'white',
  },
  userText: {
    backgroundColor: color.white,
    borderColor: color.grey,
    borderRadius: 5,
    borderWidth: 1,
    margin: 10,
  },
  wrapper: {
    backgroundColor: color.white,
  },
})
