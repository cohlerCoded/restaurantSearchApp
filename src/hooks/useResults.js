import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm) => {
    console.log('api call made')
    try {
      const res = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location: 'los angeles',
        },
      })
      setResults(res.data.businesses)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    searchApi('pasta')
  }, [])
  return [searchApi, results, errorMessage]
}
