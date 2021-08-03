import React, { useState } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import yelp from '../api/yelp'
import ImageDetail from '../components/ImageDetail'
import SearchBar from '../components/SearchBar'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('api call made')
    try {
      const res = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'los angeles',
        },
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  //call api when component is rendered (BAD!!!)
  // searchApi('pasta')

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <View>
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
                  imageURL={
                    item.image_url
                      ? item.image_url
                      : 'https://st4.depositphotos.com/14953852/24787/v/600/depositphotos_247872612-stock-illustration-no-image-available-icon-vector.jpg'
                  }
                />
              )
            }}
          />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
