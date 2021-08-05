import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'

export default function ResultShowScreen({ navigation }) {
  const url = navigation.getParam('url')
  const id = navigation.getParam('id')
  console.log(id)
  return <WebView source={{ uri: url }} />
}

const styles = StyleSheet.create({})
