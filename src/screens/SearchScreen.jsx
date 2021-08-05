import React, { useState } from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import ResultsList from '../components/ResultsList'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = ({ navigation }) => {
  const [term, setTerm] = useState('')
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
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <ScrollView>
          <ResultsList
            title='Cost Effective'
            results={costEffective}
            navigation={navigation}
          />
          <ResultsList
            title='Bit Pricier'
            results={bitPricier}
            navigation={navigation}
          />
          <ResultsList
            title='Big Spender'
            results={bigSpender}
            navigation={navigation}
          />
        </ScrollView>
      )}
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
