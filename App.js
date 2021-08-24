import {  createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import ResultShowScreen from './src/screens/ResultShowScreen'

import SearchScreen from './src/screens/SearchScreen'

const navigator = createStackNavigator(
    {
      resto: SearchScreen,
      infoo: ResultShowScreen
    }, 
    {
      initialRouteName: 'resto',
      defaultNavigationOption: {
        title: 'Business Search'
    }
  }
)

export default createAppContainer(navigator)