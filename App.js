import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from './src/screens/ResultShowScreen'
import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Show: ResultShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
)

export default createAppContainer(navigator)
