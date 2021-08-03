import axios from 'axios'
import { TOKEN } from '@env'
console.log(TOKEN)
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: TOKEN,
  },
})
