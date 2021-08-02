import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ImageDetail = ({ title, imageURL, imagePath, rating }) => {
  return (
    <View>
      <Image
        source={imagePath ? imagePath : { uri: imageURL }}
        style={styles.imageStyle}
      />
      <Text>{title}</Text>
      <Text>Rating - {rating}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: { width: 250, height: 200, resizeMode: 'stretch' },
})
export default ImageDetail
