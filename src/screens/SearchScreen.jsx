import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import yelp from '../api/yelp'
import ImageDetail from '../components/ImageDetail'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])

  const searchApi = async () => {
    const res = await yelp.get('/search', {
      params: {
        term,
        limit: 50,
        location: 'los angeles',
      },
    })
    setResults(res.data.businesses)
    console.log(res.data.businesses)
  }

  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
      <Text>We found {results.length} results</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(business) => business.id}
        data={results}
        renderItem={({ item }) => {
          return (
            <ImageDetail
              title={item.name}
              rating={item.rating}
              imageURL={item.image_url}
            />
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
