import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from './src/screens/ResultShowScreen'
import SearchScreen from './src/screens/SearchScreen'
import TinderScreen from './src/screens/TinderScreen'

const navigator = createStackNavigator(
  {
    Search: TinderScreen,
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
