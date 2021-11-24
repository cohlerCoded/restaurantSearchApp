import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

const WebviewScreen = ({ navigation }) => {
  const url = navigation.getParam('url')
  return <WebView source={{ uri: url }} />
}

export default WebviewScreen

const styles = StyleSheet.create({})
