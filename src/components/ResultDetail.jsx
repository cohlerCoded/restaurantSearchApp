import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const ResultDetail = ({ result }) => {
  return (
    <View>
      <Text>{result.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  imageStyle: { width: 250, height: 200, resizeMode: 'stretch' },
})
export default ResultDetail
