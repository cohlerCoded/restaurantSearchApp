import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm, location) => {
    console.log('api call made')
    try {
      const res = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location,
        },
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    searchApi('food', 'los angeles')
  }, [])
  return [searchApi, results, errorMessage]
}
