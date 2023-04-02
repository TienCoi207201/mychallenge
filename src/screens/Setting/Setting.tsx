import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Switch,
  Alert,
  StatusBar,
} from 'react-native'
import ActionButton from '../../components/ActionButton'
import ActionButton1 from '../../components/ActionButton1'
import color from '../../untils/color'
import themeContext from '../../config/themeContext'
import languageContext from '../../config/languageContext'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { StackParams } from '../../Navigator/HomeStack'

const SettingsScreen = () => {
  const navigation = useNavigation<NavigationProp<StackParams>>()
  const theme = useContext(themeContext)
  const language = useContext(languageContext)
  const createAlert = () =>
    Alert.alert('Thông báo', 'Bạn có chắc chắn muốn đăng xuất?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => navigation.navigate('Login') },
    ])
  const [isEnabled, setIsEnabled] = useState(false)
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState)
  return (
    <View style={[styles.wrapper, { backgroundColor: theme.background }]}>
      <StatusBar barStyle={'dark-content'} backgroundColor="white" />
      <View
        style={[styles.header, { backgroundColor: theme.backgroundWrapper }]}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.iconHeader, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/arrow.png')}
          />
        </TouchableOpacity>
        <Text style={[styles.title, { color: theme.color }]}>
          {language.Settings}
        </Text>
      </View>
      <View
        style={[
          styles.settingForm,
          { backgroundColor: theme.backgroundWrapper },
        ]}
      >
        <View style={styles.settingItem}>
          <View style={styles.contentLeft}>
            <Image
              style={[styles.iconImage, { tintColor: theme.colorButton }]}
              source={require('../../assets/icon/cog.png')}
            />
            <Text style={[styles.titleSetting, { color: theme.color }]}>
              {language.Language}
            </Text>
          </View>
          <ActionButton />
        </View>
        <View style={styles.settingItem}>
          <View style={styles.contentLeft}>
            <Image
              style={[styles.iconImage, { tintColor: theme.colorButton }]}
              source={require('../../assets/icon/cog.png')}
            />
            <Text style={[styles.titleSetting, { color: theme.color }]}>
              {language.Themes}
            </Text>
          </View>
          <ActionButton1 />
        </View>
        <View style={styles.notification}>
          <Image
            style={[styles.iconImage, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/cog.png')}
          />
          <Text style={[styles.titleSetting, { color: theme.color }]}>
            {language.Notification}
          </Text>
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={styles.switch}
          />
        </View>
      </View>
      <View
        style={[styles.signOut, { backgroundColor: theme.backgroundWrapper }]}
      >
        <TouchableOpacity onPress={createAlert}>
          <Text style={{ color: theme.color }}>{language.Sign_out}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
  contentLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  header: {
    backgroundColor: color.white,
  },
  iconHeader: {
    height: 25,
    marginLeft: 16,
    marginTop: 16,
    tintColor: color.primary,
    width: 25,
  },
  iconImage: {
    tintColor: color.blue,
  },
  notification: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 16,
    paddingVertical: 5,
  },
  settingForm: {
    backgroundColor: color.white,
    marginTop: 50,
  },
  settingItem: {
    alignItems: 'center',
    borderBottomColor: color.grey,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  signOut: {
    backgroundColor: color.white,
    marginTop: 50,
    padding: 16,
  },
  switch: {
    marginLeft: 170,
  },
  title: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 16,
    marginVertical: 20,
  },
  titleSetting: {
    paddingLeft: 15,
  },
  wrapper: {
    backgroundColor: color.bgSetting,
    height: '100%',
  },
})
