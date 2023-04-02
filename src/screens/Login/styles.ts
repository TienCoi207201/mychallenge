/* eslint-disable react-native/no-color-literals */
import { StyleSheet } from 'react-native'
import color from '../../untils/color'

export default StyleSheet.create({
  account: {
    marginTop: '50%',
  },
  forgotPass: {
    alignItems: 'flex-end',
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
  passwordText: {
    backgroundColor: color.white,
    borderColor: color.border,
    borderWidth: 1,
    margin: 15,
  },
  signIn: {
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 5,
    height: 50,
    justifyContent: 'center',
    margin: 15,
  },
  titleForgot: {
    fontSize: 12,
  },
  titleSignin: {
    color: 'white',
    fontSize: 16,
  },
  tittle: {
    fontSize: 20,
    marginLeft: '3%',
    marginTop: '10%',
  },
  underLine: {
    display: 'none',
  },
  userText: {
    backgroundColor: 'white',
    borderColor: color.border,
    borderWidth: 1,
    margin: 15,
  },
  wrapper: {
    backgroundColor: color.white,
    flex: 1,
  },
})
