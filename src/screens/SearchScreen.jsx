import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from '../api/yelp'
import SearchBar from '../components/SearchBar'


const SearchScreen = () => {
    const [term, setTerm] = useState('')
    const [results, setResults] = useState([])

    const searchApi= async () => {
        const res = await yelp.get('/search',{
            params:{
                term,
                limit:50,
                location: 'san jose'
            }
        })
        setResults(res.data.businesses);
        console.log(res.data.businesses);
    }

    return (
        <View>
            <SearchBar 
                term={term}
                onTermChange={setTerm}
                onTermSubmit={searchApi}
            />
            <Text>We found {results.length} results</Text>
        </View>
    )
}

const styles = StyleSheet.create({})

export default SearchScreen
