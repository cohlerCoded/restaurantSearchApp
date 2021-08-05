import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import ResultDetail from './ResultDetail'

const ResultsList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginBottom: 10 },
  titleStyle: {
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
})

export default ResultsList
