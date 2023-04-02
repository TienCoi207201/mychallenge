import { StyleSheet, Dimensions } from 'react-native'
import color from '../../untils/color'

export default StyleSheet.create({
  avatarImage: {
    marginLeft: 10,
    marginTop: 10,
  },
  avatarImg: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
  button: {
    alignItems: 'flex-end',
  },
  buttonAdd: {
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 10,
    height: 50,
    justifyContent: 'center',
    margin: 10,
    width: 150,
  },
  header: {
    marginTop: 30,
  },
  icon: {
    height: 15,
    tintColor: color.white,
    width: 15,
  },
  iconHeader: {
    height: 25,
    marginLeft: 10,
    tintColor: color.primary,
    width: 25,
  },
  iconImage: {
    alignItems: 'center',
    backgroundColor: color.primary,
    borderRadius: 50,
    bottom: 105,
    height: 30,
    justifyContent: 'center',
    left: 70,
    width: 30,
  },
  inputForm: {
    marginHorizontal: 10,
    width: '100%',
  },
  inputItem: {
    width: '95%',
  },
  textAdd: {
    color: color.white,
  },
  textInput: {
    backgroundColor: color.white,
    borderRadius: 5,
    borderWidth: 1,
    height: 50,
    width: '100%',
  },
  title: {
    color: color.grey,
    fontSize: 12,
    marginVertical: 10,
  },
  titleMain: {
    fontSize: 18,
    margin: 8,
  },
  wrapper: {
    backgroundColor: color.white,
    height: Dimensions.get('screen').height,
    width: Dimensions.get('screen').width,
  },
})
