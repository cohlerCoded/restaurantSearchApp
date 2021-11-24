import { LogBox } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from './src/screens/ResultShowScreen'
import SearchScreen from './src/screens/SearchScreen'
import TinderScreen from './src/screens/TinderScreen'
import WebviewScreen from './src/screens/WebviewScreen'
LogBox.ignoreLogs(['Remote debugger'])

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Show: ResultShowScreen,
    Webview: WebviewScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Menu Madness',
    },
  }
)

export default createAppContainer(navigator)
