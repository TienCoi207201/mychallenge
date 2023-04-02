import React from 'react'
import { Image } from 'react-native'

type propsImage = {
  placeholderImageSource: undefined
  selectedImage: string
  styleProps: object
}

export default function ImageViewer(propsImage: propsImage) {
  const imageSource =
    propsImage.selectedImage !== null
      ? { uri: propsImage.selectedImage }
      : propsImage.placeholderImageSource

  return <Image source={imageSource} style={propsImage.styleProps} />
}
