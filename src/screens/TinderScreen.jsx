import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const TinderScreen = () => {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [searchApi, results, errorMessage] = useResults()
  const [index, setIndex] = useState(0)

  return (
    <>
      <View style={{ marginVertical: 6 }}>
        <SearchBar
          icon={'search'}
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() =>
            searchApi(term || 'food', location || 'los angeles')
          }
        />
        <SearchBar
          icon={'location-pin'}
          term={location}
          onTermChange={setLocation}
          onTermSubmit={() =>
            searchApi(term || 'food', location || 'los angeles')
          }
        />
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : <View></View>}
    </>
  )
}

const styles = StyleSheet.create({})

export default TinderScreen
