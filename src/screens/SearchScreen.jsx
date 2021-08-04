import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ImageDetail from '../components/ImageDetail'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const SearchScreen = () => {
  const [term, setTerm] = useState('')
  const [searchApi, results, errorMessage] = useResults()

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
