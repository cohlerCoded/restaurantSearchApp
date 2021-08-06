import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import WebView from 'react-native-webview'
import Carousel from 'react-native-snap-carousel'
import yelp from '../api/yelp'

export default function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null)

  const url = navigation.getParam('url')
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  if (!result) return null

  // return <WebView source={{ uri: url }} />
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
})
