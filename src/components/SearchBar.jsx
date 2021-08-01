import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onTermChange}) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.searchIcon}/>
            <TextInput 
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search' 
                style={styles.searchInput} 
                value={term} 
                onChangeText={newTerm => onTermChange(newTerm)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    backgroundStyle:{
        height:50,
        backgroundColor:'#e5e5e5',
        borderRadius: 5,
        margin:15,
        flexDirection:'row',
    },
    searchInput:{
        flex:1,
        fontSize:18,
    },
    searchIcon:{
        color:'black',
        fontSize:36,
        alignSelf:'center',
        marginHorizontal:5,
    }
})

export default SearchBar