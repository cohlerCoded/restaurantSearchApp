import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: { width: 250, height: 200, borderRadius: 4 },
  nameStyle: { fontWeight: 'bold' },
})
export default ResultDetail
