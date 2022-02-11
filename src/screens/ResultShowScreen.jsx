import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native'
import WebView from 'react-native-webview'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Carousel from 'react-native-snap-carousel'
import yelp from '../api/yelp'

export default function ResultShowScreen({ route, navigation }) {
  const [result, setResult] = useState(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [carouselItems, setCarouselItems] = useState([])
  const ref = useRef()

  const colors = {
    red: '#EC2379',
    blue: '#0070FF',
    gray: '#777777',
    white: '#ffffff',
    black: '#000000',
  }

  const url = navigation.getParam('url')
  const id = navigation.getParam('id')
  const getResult = async (id) => {
    try {
      const res = await yelp.get(`/${id}`)
      setResult(res.data)
      setCarouselItems(res.data.photos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getResult(id)
  }, [])

  ////////////WEBVIEW///////////////////////

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

  //////////////////////////CAROUSEL PICS//////////////////////////////////

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
      <View style={styles.bottomContainerButtons}>
        <MaterialCommunityIcons.Button
          name='close'
          size={94}
          backgroundColor='transparent'
          underlayColor='transparent'
          activeOpacity={0.3}
          color={colors.red}
          onPress={() => swiperRef.current.swipeLeft()}
        />
        <MaterialCommunityIcons.Button
          name='circle-outline'
          size={94}
          backgroundColor='transparent'
          underlayColor='transparent'
          activeOpacity={0.3}
          color={colors.blue}
          onPress={() => swiperRef.current.swipeRight()}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '100%',
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  swiperContainer: {
    flex: 0.55,
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly',
  },
  bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
  bottomContainerButtons: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
})
