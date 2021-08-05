import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WebView from 'react-native-webview'

export default function ResultShowScreen({ navigation }) {
  const url = navigation.getParam('url')
  return <WebView source={{ uri: url }} />
}

const styles = StyleSheet.create({})
