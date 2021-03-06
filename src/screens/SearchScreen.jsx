import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [showSetLocation, setShowSetLocation] = useState(false)
  const [searchApi, results, errorMessage] = useResults()

  const costEffective = []
  const bitPricier = []
  const bigSpender = []

  results.forEach((result) =>
    result.price === '$'
      ? costEffective.push(result)
      : result.price === '$$'
      ? bitPricier.push(result)
      : bigSpender.push(result)
  )

  return (
    <>
      <View style={{ marginVertical: 6 }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginVertical: 5,
            borderColor: 'red',
            borderWidth: 3,
            paddingVertical: 10,
            marginHorizontal: 10,
            borderRadius: 10,
            backgroundColor: 'pink',
          }}
          onPress={() => navigation.navigate('Tinder')}
        >
          <Text style={{ fontSize: 14 }}>&#128525;</Text>
          <Text style={{ fontSize: 14 }}>
            Press Here To Find Places By TinderSwipe
          </Text>
          <Text style={{ fontSize: 14 }}>&#128525;</Text>
        </TouchableOpacity>
        <View onFocus={() => setShowSetLocation(true)}>
          <SearchBar
            icon={'search'}
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() =>
              searchApi(term || 'food', location || 'los angeles')
            }
          />
        </View>
        <View style={{ display: !showSetLocation ? 'none' : 'flex' }}>
          <SearchBar
            icon={'location-pin'}
            term={location}
            onTermChange={setLocation}
            onTermSubmit={() => {
              searchApi(term || 'food', location || 'los angeles')
              setShowSetLocation(false)
            }}
          />
        </View>
      </View>
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <ResultsList title='Cost Effective' results={costEffective} />
          <ResultsList title='Bit Pricier' results={bitPricier} />
          <ResultsList title='Big Spender' results={bigSpender} />
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
