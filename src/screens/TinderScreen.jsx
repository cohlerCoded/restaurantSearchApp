import React, { useState } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import Swiper from 'react-native-deck-swiper'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'

const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000',
}

const Card = ({ card }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: card.image_url }} style={styles.cardImage} />
    </View>
  )
}

const onSwiped = () => {
  transitionRef.current.animateNextTransition()
  setIndex((index + 1) % data.length)
}

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
      {errorMessage ? (
        <Text>{errorMessage}</Text>
      ) : (
        <View>
          {results.length > 0 && (
            <Swiper
              cards={results}
              cardIndex={index}
              renderCard={(card) => <Card card={card} />}
              onSwiped={onSwiped}
            />
          )}
        </View>
      )}
    </>
  )
}

const styles = StyleSheet.create({
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  cardImage: {
    width: 200,
    flex: 1,
    resizeMode: 'contain',
  },
})

export default TinderScreen
