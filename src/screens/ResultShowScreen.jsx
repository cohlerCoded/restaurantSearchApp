import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'
import yelp from '../api/yelp'

export default function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null)

  const url = navigation.getParam('url')
  const id = navigation.getParam('id')

  console.log(result)

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
  }

  useEffect(() => {
    getResult(id)
  }, [])
  return <WebView source={{ uri: url }} />
}

const styles = StyleSheet.create({})
