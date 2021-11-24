import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
} from 'react-native'
import WebView from 'react-native-webview'
import Carousel from 'react-native-snap-carousel'
import yelp from '../api/yelp'

export default function ResultShowScreen({ navigation }) {
  const [result, setResult] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselItems, setCarouselItems] = useState([])
  const ref = useRef()

  const url = navigation.getParam('url')
  const id = navigation.getParam('id')

  const getResult = async (id) => {
    const res = await yelp.get(`/${id}`)
    setResult(res.data)
    setCarouselItems(res.data.photos)
  }

  useEffect(() => {
    getResult(id)
  }, [])

  ////////////WEBVIEW///////////////////////
  // return <WebView source={{ uri: url }} />

  ////////////////////FLATLIST/////////////////
  //   return (
  //     <View>
  //       <Text>{result.name}</Text>
  //       <FlatList
  //         data={result.photos}
  //         keyExtractor={(photo) => photo}
  //         renderItem={({ item }) => {
  //           return <Image style={styles.image} source={{ uri: item }} />
  //         }}
  //       />
  //     </View>
  //   )
  // }

  const renderItem = useCallback(
    ({ item, index }) => (
      <View
        style={{
          backgroundColor: 'floralwhite',
          borderRadius: 5,
          height: 300,
          padding: 10,
          marginLeft: 15,
          marginRight: 15,
        }}
      >
        <Image style={styles.image} source={{ uri: item }} />
      </View>
    ),
    []
  )

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'rebeccapurple' }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {result && (
          <Text style={{ fontSize: 24, position: 'absolute', top: '10%' }}>
            {result.name}
          </Text>
        )}
        <View style={{ top: '50%' }}>
          <Carousel
            layout={'default'}
            layoutCardOffset={9}
            ref={ref}
            data={carouselItems}
            sliderWidth={300}
            itemWidth={300}
            renderItem={renderItem}
            onSnapToItem={(index) => setActiveIndex(index)}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
})
