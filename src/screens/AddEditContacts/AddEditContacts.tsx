import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import * as ImagePicker from 'expo-image-picker'
import * as Location from 'expo-location'
import { getCurrentPositionAsync } from 'expo-location'
import { TextInput } from 'react-native-paper'
import ImageViewer from '../../untils/ImagePicker'
import styles from './styles'
import themeContext from '../../config/themeContext'
import languageContext from '../../config/languageContext'
import { StackParams } from '../../Navigator/HomeStack'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { userArray } from '../YourContacts/Contact'

export default function AddEditContacts() {
  const navigation = useNavigation<NavigationProp<StackParams>>()
  const [latitude, setLatitude] = useState<string>()
  const [longitude, setLongitude] = useState<string>()
  const [stringLocation, setStringLocation] = useState<string>()
  const [name, setName] = useState<string>('')
  const [phoneNumber, setPhoneNumber] = useState<string>('')
  const [nickname, setNickname] = useState<string>('')
  const [image, setImage] = useState<string>('')
  const PlaceholderImage = require('../../assets/images/user.png')
  const theme = useContext(themeContext)
  const language = useContext(languageContext)

  const pickImageAsync = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setImage(result.assets[0].uri)
      return
    } else {
      Alert.alert('Bạn chưa chọn ảnh')
    }

    return result
  }

  useEffect(() => {
    const _getLocationAsync = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        Alert.alert('The request was denied')
      } else {
        try {
          let location = await getCurrentPositionAsync({})
          setLatitude(JSON.stringify(location.coords.latitude))
          setLongitude(JSON.stringify(location.coords.longitude))
          setStringLocation(latitude + ',' + longitude)
        } catch (e) {
          Alert.alert(
            'We could not find your position. Please make sure your location service provider is on',
          )
          console.log('Error while trying to get location: ', e)
        }
      }
    }

    _getLocationAsync()
  }, [latitude, longitude])

  const params: userArray = {
    name,
    image,
    nickname,
  }

  const addUserContact = () => {
    navigation.navigate('Contact', {
      params,
    })
    setImage(null)
    setName('')
    setNickname('')
  }
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
      <Text style={[styles.titleMain, { color: theme.colorButton }]}>
        {language.Add_Edit_contact}
      </Text>
      <View style={styles.avatarImage}>
        <ImageViewer
          styleProps={styles.avatarImg}
          placeholderImageSource={PlaceholderImage}
          selectedImage={image}
        />
        <View
          style={[styles.iconImage, { backgroundColor: theme.buttonSignin }]}
        >
          <TouchableOpacity onPress={pickImageAsync}>
            <Image
              style={styles.icon}
              source={require('../../assets/images/pen.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.inputForm}>
        <View style={styles.inputItem}>
          <Text style={styles.title}>{language.Full_name}</Text>
          <TextInput
            style={styles.textInput}
            value={name}
            onChangeText={(ev) => setName(ev)}
          />
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.title}>{language.Phone_number}</Text>
          <TextInput
            style={styles.textInput}
            value={phoneNumber}
            onChangeText={(ev) => setPhoneNumber(ev)}
          />
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.title}>{language.Nick_name}</Text>
          <TextInput
            style={styles.textInput}
            value={nickname}
            onChangeText={(ev) => setNickname(ev)}
          />
        </View>
        <View style={styles.inputItem}>
          <Text style={styles.title}>{language.Location}</Text>
          <TextInput style={styles.textInput} value={stringLocation} />
        </View>
      </View>
      <View style={styles.button}>
        <TouchableOpacity
          style={[styles.buttonAdd, { backgroundColor: theme.buttonSignin }]}
          onPress={addUserContact}
        >
          <Text style={styles.textAdd}>{language.Add}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}
