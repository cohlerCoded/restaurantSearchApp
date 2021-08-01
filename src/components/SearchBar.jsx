import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    return (
        <View style={styles.background}>
            <Feather name="search" size={30} color="black" />
            <Text>Search Bar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        height:50,
        backgroundColor:'#e5e5e5',
        borderRadius: 5,
        margin:10,
    }
})

export default SearchBar