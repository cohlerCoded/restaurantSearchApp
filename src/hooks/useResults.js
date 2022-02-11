import { useState, useEffect } from 'react'
import yelp from '../api/yelp'

export default () => {
  const [results, setResults] = useState([])
  const [errorMessage, setErrorMessage] = useState('')

  const searchApi = async (searchTerm, location) => {
    try {
      const res = await yelp.get('/search', {
        params: {
          term: searchTerm,
          limit: 50,
          location,
        },
      })
      const resultList = res.data.businesses.map((business) => {
        business.image_url.length !== 0
          ? (business.image_url = business.image_url)
          : (business.image_url =
              'https://i2.wp.com/paao.org/wp-content/uploads/2020/11/no-image-available.jpg?w=420&ssl=1')
        return business
      })
      setResults(resultList)
    } catch (err) {
      setErrorMessage(err.message)
    }
  }

  useEffect(() => {
    searchApi('food', 'los angeles')
  }, [])
  return [searchApi, results, errorMessage]
}
