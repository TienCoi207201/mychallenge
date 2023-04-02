import { StyleSheet } from 'react-native'
import color from '../../untils/color'

export default StyleSheet.create({
  addButton: {
    alignItems: 'flex-start',
    flexDirection: 'row',
    margin: 10,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  header: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  iconHeader: {
    height: 25,
    marginHorizontal: 260,
    tintColor: color.primary,
    width: 25,
  },
  iconPlus: {
    marginRight: 15,
    tintColor: color.primary,
  },
  imageAvt: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  listUser: {
    flexDirection: 'column',
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 15,
    marginTop: 20,
  },
  title1: {
    color: color.primary,
    fontSize: 16,
  },
  user: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: 10,
    marginTop: 15,
  },
  userInfo: {
    marginLeft: 10,
  },
  wrapper: {
    backgroundColor: color.white,
    flex: 1,
    width: '100%',
  },
})
