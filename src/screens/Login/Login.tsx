import React, { useState, useContext } from 'react'
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import styles from './styles'
import { TextInput, Button } from 'react-native-paper'
import themeContext from '../../config/themeContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import languageContext from '../../config/languageContext'
import { StackParams } from '../../Navigator/HomeStack'

export default function Login() {
  const navigation = useNavigation<NavigationProp<StackParams>>()
  const language = useContext(languageContext)
  const theme = useContext(themeContext)
  const [user, setUser] = useState('')
  const [password, setPassWord] = useState('')
  const [viewPass, setViewPass] = useState(false)

  const handlePass = () => {
    setViewPass(!viewPass)
  }

  return (
    <ScrollView
      style={[styles.wrapper, { backgroundColor: theme.backgroundWrapper }]}
    >
      <View style={styles.header}>
        <TouchableOpacity>
          <Image
            style={[styles.iconHeader, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/arrow.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.tittle, { color: theme.color }]}>
        {language.Sign_in_to_your_account}
      </Text>
      <View style={styles.account}>
        <TextInput
          style={styles.userText}
          label={'Email'}
          value={user}
          underlineStyle={styles.underLine}
          textColor="black"
          onChangeText={(ev) => setUser(ev)}
        />
        <TextInput
          style={styles.passwordText}
          label={'Password'}
          value={password}
          underlineStyle={styles.underLine}
          secureTextEntry={viewPass ? false : true}
          right={
            <TextInput.Icon
              icon={viewPass ? 'eye-off' : 'eye'}
              onPress={handlePass}
            />
          }
          onChangeText={(ev) => setPassWord(ev)}
        />
        <Button
          style={styles.forgotPass}
          textColor="#808080"
          onPress={() => navigation.navigate('ForgotPass')}
        >
          <Text style={styles.titleForgot}>
            {language.Forgot_you_password}?
          </Text>
        </Button>
        <TouchableOpacity
          style={[styles.signIn, { backgroundColor: theme.buttonSignin }]}
          onPress={() => navigation.navigate('BottomTab')}
        >
          <Text style={styles.titleSignin}>{language.Sign_in}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
