import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
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
