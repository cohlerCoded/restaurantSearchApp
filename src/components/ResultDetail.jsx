import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Stars from 'react-native-stars'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const ResultDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.imageStyle} source={{ uri: result.image_url }} />
      <Text style={styles.nameStyle}>{result.name}</Text>
      <View style={{ alignItems: 'center', flexDirection: 'row' }}>
        <Stars
          default={2.5}
          display={result.rating}
          count={5}
          half={true}
          starSize={50}
          fullStar={<Icon name={'star'} style={[styles.myStarStyle]} />}
          emptyStar={
            <Icon
              name={'star-outline'}
              style={[styles.myStarStyle, styles.myEmptyStarStyle]}
            />
          }
          halfStar={<Icon name={'star-half'} style={[styles.myStarStyle]} />}
        />
        <Text style={{ marginLeft: 10 }}>{result.review_count} Reviews</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { marginLeft: 15 },
  imageStyle: { width: 250, height: 200, borderRadius: 4, marginBottom: 5 },
  nameStyle: { fontWeight: 'bold' },
  myStarStyle: {
    color: 'gold',
    backgroundColor: 'transparent',
    textShadowColor: 'black',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: 'white',
  },
})
export default ResultDetail
