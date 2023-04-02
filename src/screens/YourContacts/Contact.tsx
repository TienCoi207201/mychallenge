import React, { useContext } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import styles from './styles'
import themeContext from '../../config/themeContext'
import languageContext from '../../config/languageContext'
import ImageViewer from '../../untils/ImagePicker'
import { StackParams } from '../../Navigator/HomeStack'
import { StatusBar } from 'expo-status-bar'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

export type userArray = {
  name: string
  image: string
  nickname: string
}
const arrUser: Array<userArray> = []
export default function Contact({
  navigation,
  route,
}: NativeStackScreenProps<StackParams, 'Contact'>) {
  const language = useContext(languageContext)
  const theme = useContext(themeContext)
  const params = route.params.params
  arrUser.push(params)
  const plh = require('../../assets/images/user.png')
  console.log('type param: ', params)
  return (
    <ScrollView
      style={[styles.wrapper, { backgroundColor: theme.backgroundWrapper }]}
    >
      <StatusBar style="dark" backgroundColor="white" />
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={[styles.iconHeader, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/arrow.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            style={[styles.iconHeader, { tintColor: theme.colorButton }]}
            source={require('../../assets/icon/search.png')}
          />
        </TouchableOpacity>
      </View>
      <Text style={[styles.title, { color: theme.color }]}>
        {language.Your_contacts}
      </Text>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEditContact')}
      >
        <Image
          source={require('../../assets/icon/plus.png')}
          style={[styles.iconPlus, { tintColor: theme.colorButton }]}
        />
        <Text style={[styles.title1, { color: theme.colorButton }]}>
          {language.Add_a_new_contact}
        </Text>
      </TouchableOpacity>
      <View style={styles.listUser}>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Jim Halpert</Text>
            <Text style={{ color: theme.color }}>@halpert</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Pamela Beesly</Text>
            <Text style={{ color: theme.color }}>@pam</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Dwight Shrute</Text>
            <Text style={{ color: theme.color }}>@itisdwight</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Jan Levinson</Text>
            <Text style={{ color: theme.color }}>@jan</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Kevin Malone</Text>
            <Text style={{ color: theme.color }}>@kevin69</Text>
          </View>
        </View>
        <View style={styles.user}>
          <Image
            style={styles.avatar}
            source={require('../../assets/images/user.png')}
          />
          <View style={styles.userInfo}>
            <Text style={{ color: theme.color }}>Angela Martin</Text>
            <Text style={{ color: theme.color }}>@Angela</Text>
          </View>
        </View>
        {arrUser.length > 1 &&
          arrUser
            .map((item, index) => {
              console.log('item:', item)
              return (
                <View key={index} style={styles.user}>
                  <ImageViewer
                    styleProps={styles.imageAvt}
                    selectedImage={item?.image}
                    placeholderImageSource={plh}
                  />
                  <View style={styles.userInfo}>
                    <Text>{item?.name}</Text>
                    <Text>@{item?.nickname}</Text>
                  </View>
                </View>
              )
            })
            .splice(1)}
      </View>
    </ScrollView>
  )
}
