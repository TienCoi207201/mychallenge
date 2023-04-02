import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Contact, { userArray } from '../screens/YourContacts/Contact'
import Login from '../screens/Login/Login'
import SettingsScreen from '../screens/Setting/Setting'
import AddEditContacts from '../screens/AddEditContacts/AddEditContacts'
import ForgotPass from '../screens/ForgotPass/ForgotPass'
import themeContext from '../config/themeContext'
import languageContext from '../config/languageContext'

export type StackParams = {
  Contact: {
    params: userArray
  }
  Login: undefined
  AddEditContact: undefined
  ForgotPass: undefined
  Setting: undefined
  BottomTab: undefined
}

const Tab = createBottomTabNavigator<StackParams>()

const Tabs = () => {
  const theme = useContext(themeContext)
  const language = useContext(languageContext)
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 14,
          width: '100%',
          height: '100%',
          paddingTop: 15,
          backgroundColor: theme.backgroundTabBar,
          color: theme.colorButton,
        },
        headerShown: false,
      }}
    >
      <Tab.Screen
        options={{ title: language.Contacts }}
        name="Contact"
        component={Contact}
      />
      <Tab.Screen
        options={{ title: language.Settings }}
        name="Setting"
        component={SettingsScreen}
      />
      {/* <Tab.Screen name="HomeSTack" component={HomeStackNavigator} /> */}
    </Tab.Navigator>
  )
}

const Stack = createNativeStackNavigator<StackParams>()

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={Tabs} />
      {/* <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Setting" component={SettingsScreen} /> */}
      <Stack.Screen name="ForgotPass" component={ForgotPass} />
      <Stack.Screen name="AddEditContact" component={AddEditContacts} />
    </Stack.Navigator>
  )
}

export default HomeStackNavigator
