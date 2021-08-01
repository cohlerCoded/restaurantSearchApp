import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])
    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={(newTerm)=> setTerm(newTerm)}
                onTermSubmit={() => console.log('term submitted')}
            />
            <Text>We found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
